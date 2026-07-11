"""Plot the library comparison results as benchmark/comparison.png.

Usage:  uv run --with matplotlib --no-project python benchmark/plot_results.py
Reads every results/*.jsonl and takes the median across runs per
(library, size). Sizes where a library never rendered are drawn as an x
at 0 fps so the failure is visible rather than silently missing.
"""
import glob
import json
import os
import statistics

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

BENCH_DIR = os.path.dirname(os.path.abspath(__file__))

LIBS = {  # key -> (display name, color, zorder); lightgraph drawn on top
    'lightgraph': ('lightgraph', '#d62728', 3),
    'cytoscape': ('cytoscape.js (cose)', '#1f77b4', 2),
    'pyvis': ('pyvis (vis-network)', '#2ca02c', 2),
    'networkd3': ('networkD3', '#9467bd', 2),
}


def load():
    rows = []
    for path in glob.glob(os.path.join(BENCH_DIR, 'results', '*.jsonl')):
        with open(path) as f:
            rows.extend(json.loads(line) for line in f if line.strip())
    groups = {}
    for r in rows:
        groups.setdefault((r['lib'], r['numNodes']), []).append(r)
    out = {}
    for (lib, n), rs in groups.items():
        ok = [r for r in rs if r.get('rendered')]
        med = (lambda f: statistics.median(x[f] for x in ok)) if ok else None
        out[(lib, n)] = {
            'fps': med('avgFps') if ok else 0.0,
            'p95': med('frameP95Ms') if ok else None,
            'failed': not ok,
        }
    return out


def main():
    data = load()
    sizes = sorted({n for _, n in data})

    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(11, 4.4), dpi=200)

    for lib, (label, color, z) in LIBS.items():
        pts = [(n, data.get((lib, n))) for n in sizes if (lib, n) in data]
        if not pts:
            continue
        xs = [n for n, _ in pts]
        fps = [d['fps'] for _, d in pts]
        lw = 2.4 if lib == 'lightgraph' else 1.6
        ax1.plot(xs, fps, 'o-', color=color, label=label, zorder=z,
                 linewidth=lw, markersize=5)
        for n, d in pts:
            if d['failed']:
                ax1.plot([n], [0], 'x', color=color, markersize=9,
                         markeredgewidth=2, zorder=z)
        p95 = [(n, d['p95']) for n, d in pts if d['p95'] is not None]
        ax2.plot([n for n, _ in p95], [v for _, v in p95], 'o-', color=color,
                 label=label, zorder=z, linewidth=lw, markersize=5)

    ax1.axhline(60, color='#999', linestyle='--', linewidth=0.9, zorder=1)
    ax1.text(sizes[-1], 61.5, '60 fps (display refresh)', fontsize=8,
             color='#666', va='bottom', ha='right')
    ax1.set_xscale('log')
    ax1.set_xticks(sizes)
    ax1.set_xticklabels([f'{n:,}' for n in sizes], rotation=30, fontsize=8)
    ax1.minorticks_off()
    ax1.set_xlabel('nodes (edges = 2x nodes)')
    ax1.set_ylabel('frames per second (median of runs)')
    ax1.set_title('Frame rate during force layout', fontsize=11)
    ax1.set_ylim(bottom=-2)
    ax1.legend(fontsize=8, frameon=False)

    ax2.set_xscale('log')
    ax2.set_yscale('log')
    ax2.set_xticks(sizes)
    ax2.set_xticklabels([f'{n:,}' for n in sizes], rotation=30, fontsize=8)
    ax2.minorticks_off()
    ax2.axhline(16.7, color='#999', linestyle='--', linewidth=0.9, zorder=1)
    ax2.text(sizes[0], 18, '16.7 ms (60 fps budget)', fontsize=8,
             color='#666', va='bottom')
    ax2.set_xlabel('nodes (edges = 2x nodes)')
    ax2.set_ylabel('p95 frame time, ms (log scale)')
    ax2.set_title('Worst-case stalls (p95 frame time)', fontsize=11)
    ax2.legend(fontsize=8, frameon=False)

    fig.suptitle('Interactive graph rendering: lightgraph vs cytoscape.js, '
                 'pyvis, networkD3', fontsize=12, y=1.02)
    fig.text(0.5, -0.04,
             'Identical seeded random graphs; headless Chrome; rAF frame deltas over 5 s while '
             'each library’s force layout runs. x = never rendered (timed out).',
             ha='center', fontsize=8, color='#555')
    fig.tight_layout()
    out = os.path.join(BENCH_DIR, 'comparison.png')
    fig.savefig(out, bbox_inches='tight')
    print('wrote', out)


if __name__ == '__main__':
    main()
