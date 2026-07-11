"""Generate the live figures for the Examples and Custom JavaScript pages.

Each figure runs the exact net_vis() call shown on the page, then rewrites
the self-contained HTML into a slim page that reuses the shared ../demo JS
assets. The bundled datasets are small, so edges are inlined per figure.

Usage: gen_example_embeds.py <out_dir>   (docs/source/_static/examples)
"""
import os
import re
import sys

from lightgraph import net_vis, datasets, degree, pagerank

OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)

TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<style>html,body{{margin:0;height:100%;overflow:hidden;background:#ffffff}}#graph{{width:100%;height:100vh}}</style>
</head>
<body>
<div id="graph"></div>
<script type="application/json" id="nodes">{nodes_json}</script>
<script type="application/json" id="edges">{edges_json}</script>
<script type="application/json" id="config">{config_json}</script>
<script src="../demo/d3.v7.min.js"></script>
<script src="../demo/lightgraph.js"></script>
<script>
(function () {{
  new window.lightGraph.LightGraph(document.getElementById('graph'), {{
    nodes: JSON.parse(document.getElementById('nodes').textContent),
    edges: JSON.parse(document.getElementById('edges').textContent),
    config: JSON.parse(document.getElementById('config').textContent)
  }});
}})();
</script>
</body>
</html>
"""

# Same skeleton, plus a toolbar of custom controls talking to the instance.
CONTROLS_TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<style>
html,body{{margin:0;height:100%;overflow:hidden;background:#ffffff;
  font-family:system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif}}
#toolbar{{display:flex;gap:8px;align-items:center;padding:8px;
  border-bottom:1px solid #e5e7eb;font-size:13px}}
#toolbar button{{padding:4px 10px;border:1px solid #d1d5db;border-radius:6px;
  background:#fff;cursor:pointer;font-size:13px}}
#toolbar button:hover{{background:#f3f4f6}}
#status{{color:#6b7280;margin-left:auto}}
#graph{{width:100%;height:calc(100vh - 42px)}}
</style>
</head>
<body>
<div id="toolbar">
  <button id="btn-starks">Select the Starks</button>
  <button id="btn-tyrion">Tyrion's world (2 hops)</button>
  <button id="btn-reset">Reset</button>
  <span id="status">Click a node, or use the buttons.</span>
</div>
<div id="graph"></div>
<script type="application/json" id="nodes">{nodes_json}</script>
<script type="application/json" id="edges">{edges_json}</script>
<script type="application/json" id="config">{config_json}</script>
<script src="../demo/d3.v7.min.js"></script>
<script src="../demo/lightgraph.js"></script>
<script>
(function () {{
  var graph = new window.lightGraph.LightGraph(document.getElementById('graph'), {{
    nodes: JSON.parse(document.getElementById('nodes').textContent),
    edges: JSON.parse(document.getElementById('edges').textContent),
    config: JSON.parse(document.getElementById('config').textContent)
  }});
  var status = document.getElementById('status');
  var STARKS = ['Eddard', 'Catelyn', 'Robb', 'Sansa', 'Arya', 'Bran',
                'Rickon', 'Jon'];

  document.getElementById('btn-starks').onclick = function () {{
    graph.clearEgoFilter();
    graph.selectNodes(STARKS);
  }};
  document.getElementById('btn-tyrion').onclick = function () {{
    graph.egoFilter('Tyrion', 2);
  }};
  document.getElementById('btn-reset').onclick = function () {{
    graph.clearEgoFilter();
    graph.selectNodes([]);
    graph.zoomToFit();
    status.textContent = 'Click a node, or use the buttons.';
  }};

  graph.on('nodeClick', function (e) {{
    status.textContent = 'Clicked ' + e.node.id;
  }});
  graph.on('selectionChange', function (selected) {{
    if (selected.length) status.textContent = selected.length + ' selected';
  }});
  graph.on('egoFilter', function () {{
    status.textContent = graph.getVisibleNodes().length + ' nodes visible';
  }});
}})();
</script>
</body>
</html>
"""


def extract(vis):
    html = vis.html
    blocks = {}
    for elem_id in ('nodesData', 'edgesData', 'lightGraphConfig'):
        m = re.search(
            r'<script type="application/json" id="%s">(.*?)</script>' % elem_id,
            html, re.S)
        blocks[elem_id] = m.group(1)
    return blocks


def embed(vis, name, title, template=TEMPLATE):
    blocks = extract(vis)
    page = template.format(
        title=title, nodes_json=blocks['nodesData'],
        edges_json=blocks['edgesData'], config_json=blocks['lightGraphConfig'])
    path = os.path.join(OUT, name)
    with open(path, 'w') as f:
        f.write(page)
    print(f'wrote {name} ({len(page) // 1024} KB)')


# --- Examples page: one figure per bundled dataset (code shown on the page)
les_mis = datasets.les_mis()
embed(net_vis(edges=les_mis, edge_weight_to_width=True,
              edge_weight_to_opacity=True,
              node_metric=degree(les_mis, weighted=True),
              metric_size_range=(4, 18)),
      'les_mis.html', 'Les Miserables co-occurrence network')

got = datasets.got()
embed(net_vis(edges=got, node_groups='auto', node_metric=pagerank(got),
              edge_weight_to_width=True),
      'got.html', 'A Storm of Swords character network')

nodes, edges = datasets.football()
embed(net_vis(edges=edges, nodes=nodes),
      'football.html', 'American college football, Fall 2000')

# --- Custom JavaScript page: the same GoT graph plus external controls
embed(net_vis(edges=got, node_metric=pagerank(got), edge_weight_to_width=True),
      'custom_controls.html', 'Driving lightgraph from custom controls',
      template=CONTROLS_TEMPLATE)

print('done')
