"""Run smoke_test.html in headless Chrome and print what it reports."""
import json
import os
import shutil
import subprocess
import tempfile
import threading
import time
from http.server import HTTPServer, SimpleHTTPRequestHandler

BENCH_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(BENCH_DIR)
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

results = []


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=REPO_ROOT, **kwargs)

    def do_POST(self):
        length = int(self.headers['Content-Length'])
        results.append(json.loads(self.rfile.read(length)))
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(b'ok')

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def log_message(self, *args):
        pass


def run_page(page, extra_args=()):
    before = len(results)
    profile = tempfile.mkdtemp(prefix='lg-smoke-')
    proc = subprocess.Popen(
        [CHROME, '--headless=new', '--no-first-run', '--disable-extensions',
         f'--user-data-dir={profile}', '--window-size=1200,900',
         *extra_args,
         f'http://127.0.0.1:8000/benchmark/{page}'],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    deadline = time.time() + 30
    while time.time() < deadline and len(results) == before:
        time.sleep(0.5)
    proc.terminate()
    proc.wait()
    shutil.rmtree(profile, ignore_errors=True)
    return results[before] if len(results) > before else None


def main():
    server = HTTPServer(('127.0.0.1', 8000), Handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()

    all_ok = True

    r = run_page('smoke_test.html')
    if r is None:
        print('LEGACY SMOKE: FAIL (no result received)')
        all_ok = False
    else:
        print(json.dumps(r, indent=2))
        ok = (not r['errors'] and r['canvasExists'] and r['pixelsDrawn'] > 1000
              and r['statsVisible'] and r['legendVisible'] and r['arrowsToggleOn']
              and r['containerHeightPx'] == 500)
        print('LEGACY SMOKE:', 'PASS' if ok else 'FAIL')
        all_ok = all_ok and ok

    r = run_page('api_smoke_test.html')
    if r is None:
        print('API SMOKE: FAIL (no result received)')
        all_ok = False
    else:
        print(json.dumps(r, indent=2))
        print('API SMOKE:', 'PASS' if r.get('pass') else 'FAIL')
        all_ok = all_ok and bool(r.get('pass'))

    r = run_page('r_widget_smoke_test.html')
    if r is None:
        print('R WIDGET SMOKE: FAIL (no result received)')
        all_ok = False
    else:
        print(json.dumps(r, indent=2))
        print('R WIDGET SMOKE:', 'PASS' if r.get('pass') else 'FAIL')
        all_ok = all_ok and bool(r.get('pass'))

    # Simulate a retina display to exercise the devicePixelRatio path
    r = run_page('dpi_smoke_test.html', ('--force-device-scale-factor=2',))
    if r is None:
        print('DPI SMOKE: FAIL (no result received)')
        all_ok = False
    else:
        print(json.dumps(r, indent=2))
        print('DPI SMOKE:', 'PASS' if r.get('pass') else 'FAIL')
        all_ok = all_ok and bool(r.get('pass'))

    server.shutdown()
    raise SystemExit(0 if all_ok else 1)


if __name__ == '__main__':
    main()
