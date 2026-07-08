"""Run the lightgraph baseline benchmark headlessly.

Generates seeded random graphs, renders benchmark_template_v2.html for each
size, serves the repo over HTTP, drives headless Chrome, and collects the
metrics each page POSTs to the logging endpoint.

Usage: python run_baseline.py [--runs N] [--out results.jsonl]
"""
import argparse
import json
import os
import random
import shutil
import subprocess
import tempfile
import threading
import time
from http.server import HTTPServer, SimpleHTTPRequestHandler

BENCH_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(BENCH_DIR)
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

TEST_CASES = [
    (100, 200),
    (500, 1000),
    (1000, 2000),
    (5000, 10000),
    (10000, 20000),
]

results = []
results_lock = threading.Lock()


class Handler(SimpleHTTPRequestHandler):
    """Serves the repo (for the HTML/JS files) and accepts POSTed results."""

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


def generate_graph_data(num_nodes, num_edges, seed, num_groups=0):
    rng = random.Random(seed)
    nodes = [{'id': str(i)} for i in range(num_nodes)]
    if num_groups:
        for node in nodes:
            node['group'] = f'g{rng.randrange(num_groups)}'
    edges = []
    for _ in range(num_edges):
        source = rng.randrange(num_nodes)
        target = rng.randrange(num_nodes)
        if source != target:
            edges.append({'source': str(source), 'target': str(target), 'weight': 1.0})
    return {'nodes': nodes, 'edges': edges}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--runs', type=int, default=3)
    parser.add_argument('--out', default=os.path.join(BENCH_DIR, 'baseline_results.jsonl'))
    args = parser.parse_args()

    with open(os.path.join(BENCH_DIR, 'benchmark_template_v2.html')) as f:
        template = f.read()

    out_dir = os.path.join(BENCH_DIR, 'benchmarks_v2')
    os.makedirs(out_dir, exist_ok=True)
    pages = []
    for num_nodes, num_edges in TEST_CASES:
        for num_groups in (0, 10):
            data = generate_graph_data(num_nodes, num_edges, seed=42, num_groups=num_groups)
            suffix = f'_{num_groups}groups' if num_groups else ''
            page = f'lightgraph_{num_nodes}_{num_edges}{suffix}.html'
            with open(os.path.join(out_dir, page), 'w') as f:
                f.write(template.replace('{{GRAPH_DATA}}', json.dumps(data))
                                .replace("libName: 'lightgraph'",
                                         f"libName: 'lightgraph', numGroups: {num_groups}"))
            pages.append(page)

    server = HTTPServer(('127.0.0.1', 8000), Handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()

    for run in range(args.runs):
        for page in pages:
            url = f'http://127.0.0.1:8000/benchmark/benchmarks_v2/{page}'
            with results_lock:
                before = len(results)
            profile = tempfile.mkdtemp(prefix='lg-bench-')
            proc = subprocess.Popen(
                [CHROME, '--headless=new', '--enable-precise-memory-info',
                 '--no-first-run', '--disable-extensions',
                 f'--user-data-dir={profile}', '--window-size=1200,900', url],
                stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            deadline = time.time() + 60
            while time.time() < deadline:
                with results_lock:
                    if len(results) > before:
                        break
                time.sleep(0.5)
            else:
                print(f'  TIMEOUT: {page} (run {run + 1})')
            proc.terminate()
            proc.wait()
            shutil.rmtree(profile, ignore_errors=True)
            with results_lock:
                if len(results) > before:
                    r = results[-1]
                    print(f"  run {run + 1} {r['numNodes']}n/{r['numEdges']}e: "
                          f"init {r['initTimeMs']:.0f}ms, {r['avgFps']:.1f} fps, "
                          f"p95 {r['frameP95Ms']:.1f}ms, max {r['frameMaxMs']:.1f}ms, "
                          f"{r['memoryMB']:.1f}MB")

    server.shutdown()

    with open(args.out, 'w') as f:
        for r in results:
            f.write(json.dumps(r) + '\n')
    print(f'\nWrote {len(results)} results to {args.out}')


if __name__ == '__main__':
    main()
