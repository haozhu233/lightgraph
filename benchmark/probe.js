/*
 * Shared FPS probe, injected into every library's benchmark page.
 *
 * Measurement plan (identical for lightgraph, pyvis/vis-network, and
 * networkD3), so the only variable between pages is the rendering library:
 *   1. Poll until the library has produced a non-empty <canvas> or <svg>
 *      (its first render). Record that moment as the time-to-first-render,
 *      measured from navigation start.
 *   2. Wait SETTLE_MS so every library's layout simulation is actively
 *      running, then measure requestAnimationFrame frame deltas for
 *      MEASURE_MS. rAF fires once per displayed frame regardless of which
 *      library scheduled it, so the deltas are the true on-screen frame rate.
 *   3. POST the summary back to the runner.
 *
 * Caveat recorded in the paper: the libraries use different force-layout
 * engines, so this measures user-perceived interactivity during layout, not
 * an isolated render-loop microbenchmark. p95/max frame time captures the
 * worst stalls during heavy layout even for libraries that settle early.
 */
(function () {
  var MEASURE_MS = 5000;
  var SETTLE_MS = 500;
  var INIT_TIMEOUT_MS = 20000;

  var errors = [];
  window.addEventListener('error', function (e) {
    errors.push(String(e.message || e));
  });

  function firstRender() {
    var c = document.querySelector('canvas');
    if (c && c.width > 0 && c.height > 0) return true;
    var s = document.querySelector('svg');
    if (s && s.querySelector('circle, line, path, g > *')) return true;
    return false;
  }

  function percentile(sorted, p) {
    var idx = Math.min(sorted.length - 1, Math.floor(sorted.length * p));
    return sorted[idx];
  }

  function post(extra) {
    var body = Object.assign({
      lib: window.__BENCH_LIB || 'unknown',
      numNodes: window.__BENCH_NODES || 0,
      numEdges: window.__BENCH_EDGES || 0,
      errors: errors
    }, extra);
    fetch('http://127.0.0.1:8000/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(function () { document.title = 'BENCH_DONE'; })
      .catch(function () { document.title = 'BENCH_FAILED'; });
  }

  function measure(initMs) {
    var deltas = [];
    var last = performance.now();
    var start = last;
    function frame() {
      var now = performance.now();
      deltas.push(now - last);
      last = now;
      if (now - start < MEASURE_MS) {
        requestAnimationFrame(frame);
      } else {
        var elapsed = now - start;
        var sorted = deltas.slice().sort(function (a, b) { return a - b; });
        post({
          rendered: true,
          initTimeMs: initMs,
          avgFps: (deltas.length / elapsed) * 1000,
          frameP50Ms: percentile(sorted, 0.50),
          frameP95Ms: percentile(sorted, 0.95),
          frameMaxMs: sorted[sorted.length - 1],
          memoryMB: (performance.memory
            ? performance.memory.usedJSHeapSize / (1024 * 1024) : 0)
        });
      }
    }
    requestAnimationFrame(frame);
  }

  var deadline = performance.now() + INIT_TIMEOUT_MS;
  var wait = setInterval(function () {
    if (firstRender()) {
      clearInterval(wait);
      var initMs = performance.now();
      setTimeout(function () { measure(initMs); }, SETTLE_MS);
    } else if (performance.now() > deadline) {
      clearInterval(wait);
      post({ rendered: false, initTimeMs: 0, avgFps: 0,
             frameP50Ms: 0, frameP95Ms: 0, frameMaxMs: 0, memoryMB: 0,
             errors: errors.concat(['init timeout: no render in ' +
                                    INIT_TIMEOUT_MS + 'ms']) });
    }
  }, 10);
})();
