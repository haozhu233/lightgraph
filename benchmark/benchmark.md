# lightgraph performance benchmarks

Two harnesses live in this directory:

1. **Library comparison** (`run_bench.py`): lightgraph vs
   [cytoscape.js](https://js.cytoscape.org/) vs
   [pyvis](https://github.com/WestHealth/pyvis) (vis-network) vs
   [networkD3](https://christophergandrud.github.io/networkD3/) on identical
   seeded graphs. See [Library comparison](#library-comparison).
2. **lightgraph-only regression harness** (`run_baseline.py`): tracks
   lightgraph's own performance across code changes. See
   [History](#history-lightgraph-only-harness).

Both serve the repo over local HTTP and drive headless Chrome; pages POST
their metrics back to the runner. `run_smoke.py` is a separate functional
smoke-test suite (renders `*_smoke_test.html` and asserts on pixels/API
behavior), not a benchmark.

## Library comparison

### Methodology

- Every library renders the **same graph**: seeded Erdos-Renyi random graphs
  (seed 42, `graph_data.py`), written once to `pages/data/` and read by all
  three page generators. Sizes: 100 to 20,000 nodes with 2x edges.
- Each page embeds the same probe (`probe.js`): wait for the library's first
  non-empty canvas/svg, wait 500ms so the force layout is actively running,
  then measure `requestAnimationFrame` deltas for 5 seconds. rAF fires once
  per displayed frame regardless of library, so the deltas are the true
  on-screen frame rate during layout.
- Versions: lightgraph = repo `lightgraph.js` + d3 v7, cytoscape.js 3.30.4
  (cose layout, `animate: true`; vendored in `vendor/`), pyvis 0.3.2 on
  vis-network 9.1.2 (vendored), networkD3 0.4.1 (bundles its own d3 v4
  fork). Defaults for every library, except labels off for lightgraph (the
  others don't draw labels by default).
- Caveats: the libraries use different force-layout engines, so this measures
  user-perceived interactivity during layout, not an isolated render-loop
  microbenchmark. "Init" is time from navigation start to first render and
  includes script load/parse in a cold headless-Chrome profile — comparable
  across libraries but inflated (~1.5-2s) as an absolute number.

### Results

Captured **2026-07-10** on an Apple M1 (Darwin 25.2.0), headless Google
Chrome, medians of 3 runs. Raw data: `results/results.jsonl` and
`results/results_cytoscape.jsonl`.

![lightgraph vs cytoscape.js, pyvis, networkD3](comparison.png)

Median FPS during force layout ("—" = never produced a first render before
the harness timeout):

| Nodes  | Edges  | lightgraph | cytoscape.js | pyvis | networkD3 |
|-------:|-------:|-----------:|-------------:|------:|----------:|
| 100    | 200    | **60.2**   | 60.1         | 59.4  | 35.7      |
| 500    | 1000   | **60.1**   | 23.1         | 2.5   | 6.7       |
| 1000   | 2000   | **60.1**   | 1.9          | 0.9   | 2.7       |
| 2000   | 4000   | **60.1**   | 0.5          | 0.4   | 1.2       |
| 5000   | 10000  | **47.2**   | 0.1          | 0.1   | 0.5       |
| 10000  | 20000  | **19.3**   | —            | —     | 0.3       |
| 20000  | 40000  | **7.9**    | —            | —     | 0.1       |

- lightgraph is the only library still at the 60Hz display cap past 500
  nodes, and the only one that renders 10k+ node graphs at all interactively.
- cytoscape.js matches at 100 nodes, then cose's per-tick cost takes over
  (p95 frame time ~2s at 2k nodes); at 10k it never completes a first
  render within the 120s harness timeout.
- pyvis (vis-network) runs Barnes-Hut stabilization on the main thread
  before first paint: 46s time-to-first-render at 5k nodes, timeout at 10k.
- networkD3 always renders quickly (SVG appears immediately) but its
  unthrottled d3 v4 tick redraws every SVG element: 6.7 fps at 500 nodes,
  ~0.1-0.5 fps beyond 5k.

### Reproducing

```bash
# 1. Generate pages (shared graph data + one page per library per size)
uv run --with pyvis --no-project python benchmark/gen_pages.py   # lightgraph, pyvis, cytoscape
Rscript benchmark/gen_pages_networkd3.R     # needs networkD3 + htmlwidgets

# 2. Run (headless Google Chrome required at the standard macOS path)
python3 benchmark/run_bench.py --runs 3     # writes results/results.jsonl

# 3. Plot
uv run --with matplotlib --no-project python benchmark/plot_results.py
```

Run on an otherwise idle machine. Pages that never produce a first render
within 20s are recorded as failures (`rendered: false`) rather than skipped,
so each library's practical ceiling is visible in the data.

## History (lightgraph-only harness)

### Baseline

Captured **2026-07-07**, before any optimization work, at commit on branch `new_feature_260201`.

- Machine: Apple M1, macOS (Darwin 25.2.0)
- Browser: headless Google Chrome 149.0.7827.201 (`--headless=new`, 1200x900)
- Harness: `run_baseline.py` → `benchmark_template_v2.html`
  - Seeded random graphs (seed 42), identical across runs
  - FPS/frame times measured over a 5s window starting 500ms after the
    library creates its canvas (simulation actively running)
  - Values below are medians of 3 runs (raw data: `baseline_results.jsonl`)

| Nodes  | Edges  | Groups | Init (ms) | FPS  | Frame p50 (ms) | Frame p95 (ms) | Frame max (ms) | Heap (MB) |
|-------:|-------:|-------:|----------:|-----:|---------------:|---------------:|---------------:|----------:|
| 100    | 196    | 0      | 142       | 60.1 | 16.7           | 17.5           | 18.4           | 2.5       |
| 100    | 198    | 10     | 143       | 60.2 | 16.6           | 18.0           | 22.1           | 3.1       |
| 500    | 1000   | 0      | 151       | 60.1 | 16.7           | 17.2           | 25.3           | 2.1       |
| 500    | 996    | 10     | 157       | 60.1 | 16.7           | 17.8           | 22.6           | 2.1       |
| 1000   | 1999   | 0      | 148       | 60.1 | 16.7           | 17.6           | 23.0           | 19.6      |
| 1000   | 1997   | 10     | 166       | 59.9 | 16.7           | 18.2           | 32.9           | 20.1      |
| 5000   | 10000  | 0      | 280       | 19.6 | 45.1           | 80.9           | 91.4           | 34.9      |
| 5000   | 10000  | 10     | 230       | 24.9 | 38.3           | 60.6           | 86.4           | 32.2      |
| 10000  | 19997  | 0      | 245       | 11.8 | 82.8           | 111.2          | 123.2          | 63.3      |
| 10000  | 19996  | 10     | 277       | 10.9 | 84.4           | 129.3          | 145.3          | 46.7      |

Observations:

- Solid 60 fps through 1,000 nodes / 2,000 edges.
- Falls off a cliff after that: ~20-25 fps at 5k nodes, ~11-12 fps at 10k
  nodes. Frame p50 of ~83ms at 10k means every simulation tick blocks the
  main thread for most of a 100ms budget.
- Adding 10 groups (legend + ellipse code paths active) does not measurably
  change fps at this scale — per-edge/per-node canvas draw calls dominate,
  not the group bookkeeping. (Run-to-run variance at 5k is high, ±5 fps.)
- Init time is flat (~150-280ms) and not a concern at these sizes.

### After render-pipeline optimization (2026-07-07)

Same harness, machine, and seeded graphs. Changes measured: batched
edge/node drawing (one path per style group instead of one stroke/fill per
element), legend/statistics DOM updates moved out of the render loop,
rendering coalesced to one draw per animation frame, single-pass group
ellipse moments, memoized color conversion, cached label widths, viewport
culling. Raw data: `optimized_results.jsonl`.

| Nodes  | Groups | FPS before | FPS after | Frame p50 (ms) | Frame p95 (ms) |
|-------:|-------:|-----------:|----------:|---------------:|---------------:|
| 100    | 0      | 60.1       | 60.1      | 16.7 → 16.7    | 17.5 → 18.6    |
| 100    | 10     | 60.2       | 60.0      | 16.6 → 16.7    | 18.0 → 18.6    |
| 500    | 0      | 60.1       | 60.1      | 16.7 → 16.7    | 17.2 → 18.4    |
| 500    | 10     | 60.1       | 60.1      | 16.7 → 16.7    | 17.8 → 18.3    |
| 1000   | 0      | 60.1       | 60.1      | 16.7 → 16.7    | 17.6 → 18.3    |
| 1000   | 10     | 59.9       | 60.1      | 16.7 → 16.7    | 18.2 → 18.7    |
| 5000   | 0      | **19.6**   | **36.4**  | 45.1 → 27.0    | 80.9 → 31.1    |
| 5000   | 10     | **24.9**   | **35.9**  | 38.3 → 27.4    | 60.6 → 31.3    |
| 10000  | 0      | **11.8**   | **15.6**  | 82.8 → 63.1    | 111.2 → 75.0   |
| 10000  | 10     | **10.9**   | **15.5**  | 84.4 → 63.4    | 129.3 → 75.5   |

- 5k nodes: **~1.8x faster** (20 → 36 fps), frame p95 down 2.6x, and
  run-to-run variance largely gone (was ±5 fps, now ±0.5).
- 10k nodes: **~1.4x faster** (11-12 → 15.5 fps), frame p95 down from
  111-129ms to 75ms.
- ≤1k nodes: unchanged, pinned at the 60Hz display refresh.
- Remaining cost at 10k is split between the d3-force tick itself
  (O(N log N) per frame on the main thread) and drawing 10k text labels.
  Next candidates: label level-of-detail (skip labels below a zoom
  threshold), running the simulation in a web worker, or precomputing a
  static layout for very large graphs.

### Reproducing the regression harness

```bash
python3 benchmark/run_baseline.py --runs 3   # writes baseline_results.jsonl
python3 benchmark/run_smoke.py               # functional smoke test (headless Chrome)
```

Note: run on an otherwise idle machine; the 5k-node case in particular is
sensitive to background load. The grouped and ungrouped variants of the same
size use slightly different edge sets (group assignment advances the RNG),
but each variant is stable across runs.
