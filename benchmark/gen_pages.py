"""Generate lightgraph, pyvis, and cytoscape.js benchmark pages into pages/.

Each page renders the shared seeded graph with the real library and has
the shared FPS probe (probe.js) inlined before </body>. The runner serves
the repo root, so pages reference assets by absolute path:
  /lightgraph.js, /benchmark/d3.v7.min.js, /benchmark/vendor/vis-network.min.js

networkD3 pages are generated separately by gen_pages_networkd3.R (needs R).

Usage:  uv run --with pyvis --no-project python benchmark/gen_pages.py
"""
import json
import os
import re

from pyvis.network import Network

import graph_data as gd

BENCH_DIR = gd.BENCH_DIR
PAGES = os.path.join(BENCH_DIR, 'pages')

with open(os.path.join(BENCH_DIR, 'probe.js')) as f:
    PROBE = f.read()


def globals_script(lib, n, e):
    return (f'<script>window.__BENCH_LIB={json.dumps(lib)};'
            f'window.__BENCH_NODES={n};window.__BENCH_EDGES={e};</script>')


def probe_block(lib, n, e):
    return globals_script(lib, n, e) + '\n<script>\n' + PROBE + '\n</script>'


LIGHTGRAPH_TEMPLATE = """<!doctype html>
<html><head><meta charset="utf-8"><title>lightgraph {n}n/{e}e</title>
<style>#lightGraph{{width:100%;height:800px;display:block}}</style></head>
<body>
<div id="lightGraph"></div>
<script type="application/json" id="nodesData">{nodes_json}</script>
<script type="application/json" id="edgesData">{edges_json}</script>
<script type="application/json" id="lightGraphConfig">{{"labels":{{"visible":false}}}}</script>
<div id="networkData" style="display:none"></div>
<script src="/benchmark/d3.v7.min.js"></script>
<script src="/lightgraph.js"></script>
{probe}
</body></html>
"""


def gen_lightgraph(n, e, graph):
    page = LIGHTGRAPH_TEMPLATE.format(
        n=n, e=e,
        nodes_json=json.dumps(graph['nodes']),
        edges_json=json.dumps(graph['edges']),
        probe=probe_block('lightgraph', n, e))
    path = os.path.join(PAGES, f'lightgraph_{n}_{e}.html')
    with open(path, 'w') as f:
        f.write(page)
    return path


VIS_CSS = '/benchmark/vendor/vis-network.min.css'
VIS_JS = '/benchmark/vendor/vis-network.min.js'


def gen_pyvis(n, e, graph):
    net = Network(height='800px', width='100%', notebook=False)
    # pyvis coerces numeric-string ids to int in add_nodes, so pass ints
    # explicitly to keep edges resolvable (ids in the shared JSON are
    # stringified integers).
    net.add_nodes([int(nd['id']) for nd in graph['nodes']])
    net.add_edges([(int(ed['source']), int(ed['target'])) for ed in graph['edges']])
    html = net.generate_html(notebook=False)

    # Point the vis-network CDN reference at the vendored copy (offline,
    # reproducible) and drop the SRI/crossorigin attrs that block a local
    # file. The vis-network.min.css is optional styling; vendor path is fine
    # even if absent (network still renders).
    html = re.sub(r'<link[^>]*vis-network[^>]*>',
                  f'<link rel="stylesheet" href="{VIS_CSS}">', html)
    html = re.sub(r'<script[^>]*vis-network[^>]*></script>',
                  f'<script src="{VIS_JS}"></script>', html)
    # Neutralize external bootstrap + the unresolved lib/bindings/utils.js
    # (cosmetic UI only; keeps the page fully offline).
    html = re.sub(r'<link[^>]*bootstrap[^>]*>', '', html)
    html = re.sub(r'<script[^>]*bootstrap[^>]*></script>', '', html)
    html = re.sub(r'<script src="lib/bindings/utils.js"></script>', '', html)

    html = html.replace('</body>', probe_block('pyvis', n, e) + '\n</body>')
    path = os.path.join(PAGES, f'pyvis_{n}_{e}.html')
    with open(path, 'w') as f:
        f.write(html)
    return path


CYTOSCAPE_TEMPLATE = """<!doctype html>
<html><head><meta charset="utf-8"><title>cytoscape {n}n/{e}e</title>
<style>#cy{{width:100%;height:800px;display:block}}</style></head>
<body>
<div id="cy"></div>
<script src="/benchmark/vendor/cytoscape.min.js"></script>
<script>
cytoscape({{
  container: document.getElementById('cy'),
  elements: {elements_json},
  style: [
    {{selector: 'node', style: {{'width': 8, 'height': 8}}}},
    {{selector: 'edge', style: {{'width': 1}}}}
  ],
  layout: {{name: 'cose', animate: true}}
}});
</script>
{probe}
</body></html>
"""


def gen_cytoscape(n, e, graph):
    elements = (
        [{'data': {'id': nd['id']}} for nd in graph['nodes']] +
        [{'data': {'id': f'e{i}', 'source': ed['source'], 'target': ed['target']}}
         for i, ed in enumerate(graph['edges'])])
    page = CYTOSCAPE_TEMPLATE.format(
        n=n, e=e, elements_json=json.dumps(elements),
        probe=probe_block('cytoscape', n, e))
    path = os.path.join(PAGES, f'cytoscape_{n}_{e}.html')
    with open(path, 'w') as f:
        f.write(page)
    return path


def main():
    os.makedirs(PAGES, exist_ok=True)
    gd.write_all()
    for n, e in gd.SIZES:
        with open(gd.data_path(n, e)) as f:
            graph = json.load(f)
        gen_lightgraph(n, e, graph)
        gen_pyvis(n, e, graph)
        gen_cytoscape(n, e, graph)
        print(f'generated lightgraph + pyvis + cytoscape pages for {n}n/{e}e')
    print('done')


if __name__ == '__main__':
    main()
