"""Run the library comparison benchmark (lightgraph vs pyvis vs networkD3).

Prerequisites (generate the pages first — see benchmark.md):
  uv run --with pyvis --no-project python benchmark/gen_pages.py
  Rscript benchmark/gen_pages_networkd3.R

Then:
  python3 benchmark/run_bench.py [--runs 3] [--libs lightgraph,pyvis,networkd3]
                                 [--max-nodes N] [--out results/results.jsonl]

Serves the repo root over HTTP, loads each page in a fresh headless Chrome
profile, and collects the metrics the shared probe (probe.js) POSTs back.
Pages that never render (layout hangs, OOM) are recorded as rendered=false
rather than skipped, so each library's practical ceiling is visible.
"""
import argparse
import glob
import json
import os
import re
import shutil
import statistics
import subprocess
import tempfile
import threading
import time
from http.server import HTTPServer, SimpleHTTPRequestHandler

BENCH_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(BENCH_DIR)
PAGES_DIR = os.path.join(BENCH_DIR, 'pages')
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
PORT = 8000
# Probe: 20s init timeout + 0.5s settle + 5s measure; the rest is margin for
# pages whose layout engine hogs the main thread between first render and
# the measurement window.
PAGE_TIMEOUT_S = 120

results = []
results_lock = threading.Lock()


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=REPO_ROOT, **kwargs)

    def do_POST(self):
        if self.path == '/log':
            length = int(self.headers['Content-Length'])
            data = json.loads(self.rfile.read(length))
            with results_lock:
                results.append(data)
            self.send_response(200)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(b'ok')
        else:
            self.send_response(404)
            self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def log_message(self, *args):
        pass


def discover_pages(libs, max_nodes):
    pages = []
    for path in sorted(glob.glob(os.path.join(PAGES_DIR, '*.html'))):
        m = re.match(r'([a-z0-9]+)_(\d+)_(\d+)\.html$', os.path.basename(path))
        if not m:
            continue
        lib, n, e = m.group(1), int(m.group(2)), int(m.group(3))
        if lib in libs and n <= max_nodes:
            pages.append((n, e, lib, os.path.basename(path)))
    pages.sort()
    return pages


def run_page(page, run):
    url = f'http://127.0.0.1:{PORT}/benchmark/pages/{page}'
    with results_lock:
        before = len(results)
    profile = tempfile.mkdtemp(prefix='lg-bench-')
    proc = subprocess.Popen(
        [CHROME, '--headless=new', '--enable-precise-memory-info',
         '--no-first-run', '--disable-extensions',
         f'--user-data-dir={profile}', '--window-size=1200,900', url],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    deadline = time.time() + PAGE_TIMEOUT_S
    got = None
    while time.time() < deadline:
        with results_lock:
            if len(results) > before:
                got = results[-1]
                break
        time.sleep(0.5)
    proc.terminate()
    proc.wait()
    shutil.rmtree(profile, ignore_errors=True)
    if got is None:
        # Page never POSTed (Chrome-level hang/OOM). Synthesize a failure row
        # so the ceiling shows up in the summary.
        m = re.match(r'([a-z0-9]+)_(\d+)_(\d+)\.html$', page)
        got = {'lib': m.group(1), 'numNodes': int(m.group(2)),
               'numEdges': int(m.group(3)), 'rendered': False,
               'initTimeMs': 0, 'avgFps': 0, 'frameP50Ms': 0,
               'frameP95Ms': 0, 'frameMaxMs': 0, 'memoryMB': 0,
               'errors': [f'no result within {PAGE_TIMEOUT_S}s']}
        with results_lock:
            results.append(got)
    got['run'] = run
    if got.get('rendered'):
        err = f" ERRORS: {got['errors']}" if got.get('errors') else ''
        print(f"  run {run} {got['lib']:>10s} {got['numNodes']}n/{got['numEdges']}e: "
              f"init {got['initTimeMs']:.0f}ms, {got['avgFps']:.1f} fps, "
              f"p50 {got['frameP50Ms']:.1f}ms, p95 {got['frameP95Ms']:.1f}ms, "
              f"{got['memoryMB']:.1f}MB{err}", flush=True)
    else:
        print(f"  run {run} {got['lib']:>10s} {got['numNodes']}n/{got['numEdges']}e: "
              f"FAILED ({'; '.join(got.get('errors', []))})", flush=True)


def summarize(rows):
    key = lambda r: (r['numNodes'], r['numEdges'], r['lib'])
    groups = {}
    for r in rows:
        groups.setdefault(key(r), []).append(r)
    print(f"\n{'size':>14s} {'lib':>10s} {'init ms':>8s} {'fps':>6s} "
          f"{'p50 ms':>7s} {'p95 ms':>7s} {'mem MB':>7s}")
    for (n, e, lib), rs in sorted(groups.items()):
        ok = [r for r in rs if r.get('rendered')]
        if not ok:
            print(f"{f'{n}n/{e}e':>14s} {lib:>10s} {'— did not render —':>38s}")
            continue
        med = lambda f: statistics.median(x[f] for x in ok)
        fail = f'  ({len(rs) - len(ok)}/{len(rs)} runs failed)' if len(ok) < len(rs) else ''
        print(f"{f'{n}n/{e}e':>14s} {lib:>10s} {med('initTimeMs'):>8.0f} {med('avgFps'):>6.1f} "
              f"{med('frameP50Ms'):>7.1f} {med('frameP95Ms'):>7.1f} {med('memoryMB'):>7.1f}{fail}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--runs', type=int, default=3)
    parser.add_argument('--libs', default='lightgraph,pyvis,networkd3,cytoscape')
    parser.add_argument('--max-nodes', type=int, default=10**9)
    parser.add_argument('--out', default=os.path.join(BENCH_DIR, 'results', 'results.jsonl'))
    args = parser.parse_args()

    libs = set(args.libs.split(','))
    pages = discover_pages(libs, args.max_nodes)
    if not pages:
        raise SystemExit('no pages found in benchmark/pages/ - generate them first (see docstring)')
    missing = libs - {lib for _, _, lib, _ in pages}
    if missing:
        print(f'warning: no pages for {sorted(missing)}')

    server = HTTPServer(('127.0.0.1', PORT), Handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()

    for run in range(1, args.runs + 1):
        for n, e, lib, page in pages:
            run_page(page, run)

    server.shutdown()

    os.makedirs(os.path.dirname(args.out), exist_ok=True)
    with open(args.out, 'w') as f:
        for r in results:
            f.write(json.dumps(r) + '\n')
    print(f'\nWrote {len(results)} results to {args.out}')
    summarize(results)


if __name__ == '__main__':
    main()
