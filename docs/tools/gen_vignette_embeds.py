"""Generate the Python vignette embeds from the real binding.

Each embed runs the exact net_vis() call shown in the vignette, then
rewrites the self-contained HTML into a slim page that reuses the shared
../demo JS assets, and (for repeated networks) fetches a shared edge
list instead of inlining it per figure.

The hero "defaults" and continent-groups figures carry the full
19k-edge network; the styling sections run on the European subgraph and
the communities figure on the competitive-routes subgraph (weight >= 3),
keeping the page responsive at full devicePixelRatio.

Usage: gen_vignette_embeds.py <out_dir> <data_dir with airports.dat/routes.dat>
"""
import json
import os
import re
import sys
from collections import Counter

import numpy as np
import pandas as pd

from lightgraph import (net_vis, degree, betweenness, pagerank, communities,
                        summary, top_nodes)

OUT = sys.argv[1]
SCRATCH = sys.argv[2]  # dir holding airports.dat / routes.dat
DATA = os.path.join(OUT, 'data')
os.makedirs(DATA, exist_ok=True)

# ---------------------------------------------------------------------------
# Build the flight network (exactly as shown in the vignette)
# ---------------------------------------------------------------------------
airports = pd.read_csv(
    os.path.join(SCRATCH, 'airports.dat'), header=None,
    usecols=[1, 3, 4, 11], names=['name', 'country', 'id', 'tz'],
    na_values=['\\N']).dropna(subset=['id'])

routes = pd.read_csv(
    os.path.join(SCRATCH, 'routes.dat'), header=None, usecols=[2, 4],
    names=['source', 'target'], na_values=['\\N']).dropna()

# One row per airline serving a leg -> aggregate into weighted edges
pairs = pd.DataFrame(np.sort(routes[['source', 'target']].values, axis=1),
                     columns=['source', 'target'])
edges = pairs.value_counts().reset_index(name='weight')

airports['group'] = airports['tz'].str.split('/').str[0]
known = set(airports['id'])
edges = edges[edges['source'].isin(known) & edges['target'].isin(known)]
nodes = airports[['id', 'group']]

# Subgraphs used by the styling / world-map sections
competitive = edges[edges['weight'] >= 3]
europe = set(airports.loc[airports['group'] == 'Europe', 'id'])
eu = edges[edges['source'].isin(europe) & edges['target'].isin(europe)]

print('== summary (full) ==')
print(summary(edges))
strength = degree(edges, weighted=True)
print('top strength:', top_nodes(strength, 10))
pr = pagerank(edges)
print('top pagerank:', top_nodes(pr, 10))

print('== competitive routes (weight >= 3) ==')
print(summary(competitive))
comm = communities(competitive)
print('n communities:', len(set(comm.values())))
print('community sizes:', Counter(comm.values()).most_common(8))

print('== europe ==')
print(summary(eu))
strength_eu = degree(eu, weighted=True)
print('top strength (EU):', top_nodes(strength_eu, 8))

top500 = {n for n, _ in top_nodes(strength, 500)}
sub500 = edges[edges['source'].isin(top500) & edges['target'].isin(top500)]
bt = betweenness(sub500)
print('top betweenness (top-500):', top_nodes(bt, 10))

# ---------------------------------------------------------------------------
# Slim embed machinery
# ---------------------------------------------------------------------------
TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<style>html,body{{margin:0;height:100%;overflow:hidden;background:{bg}}}#graph{{width:100%;height:100vh}}</style>
</head>
<body>
<div id="graph"></div>
<script type="application/json" id="nodes">{nodes_json}</script>
<script type="application/json" id="config">{config_json}</script>
{edges_block}
<script src="../demo/d3.v7.min.js"></script>
<script src="../demo/lightgraph.js"></script>
<script>
(function () {{
  var nodes = JSON.parse(document.getElementById('nodes').textContent);
  var config = JSON.parse(document.getElementById('config').textContent);
  var inline = document.getElementById('edges');
  var load = inline
    ? Promise.resolve(JSON.parse(inline.textContent))
    : fetch('{edges_src}').then(function (r) {{ return r.json(); }});
  load.then(function (edges) {{
    new window.lightGraph.LightGraph(document.getElementById('graph'), {{
      nodes: nodes, edges: edges, config: config
    }});
  }});
}})();
</script>
</body>
</html>
"""

SHARED_EDGES = {}  # filename -> canonical json string


def extract(vis):
    html = vis.html
    blocks = {}
    for elem_id in ('nodesData', 'edgesData', 'lightGraphConfig'):
        m = re.search(
            r'<script type="application/json" id="%s">(.*?)</script>' % elem_id,
            html, re.S)
        blocks[elem_id] = m.group(1)
    return blocks


def slim_embed(vis, name, title, shared_edges=None, bg='#ffffff'):
    """shared_edges: filename under data/ to fetch instead of inlining."""
    blocks = extract(vis)
    if shared_edges:
        path = os.path.join(DATA, shared_edges)
        if shared_edges in SHARED_EDGES:
            assert SHARED_EDGES[shared_edges] == blocks['edgesData'], \
                f'{name}: edges differ from shared {shared_edges}'
        else:
            SHARED_EDGES[shared_edges] = blocks['edgesData']
            with open(path, 'w') as f:
                f.write(blocks['edgesData'])
            print(f'wrote data/{shared_edges} '
                  f'({os.path.getsize(path) // 1024} KB)')
        edges_block = ''
        edges_src = 'data/' + shared_edges
    else:
        edges_block = ('<script type="application/json" id="edges">'
                       + blocks['edgesData'] + '</script>')
        edges_src = ''
    page = TEMPLATE.format(
        title=title, bg=bg, nodes_json=blocks['nodesData'],
        config_json=blocks['lightGraphConfig'], edges_block=edges_block,
        edges_src=edges_src)
    path = os.path.join(OUT, name)
    with open(path, 'w') as f:
        f.write(page)
    print(f'wrote {name} ({len(page) // 1024} KB)')


F_FULL = 'flights_edges_py.json'
F_COMP = 'flights_edges_competitive_py.json'
F_EU = 'flights_edges_eu_py.json'

# ---------------------------------------------------------------------------
# 1. Getting started: a first graph (toy)
# ---------------------------------------------------------------------------
toy = [('Amy', 'Ben', 3), ('Amy', 'Cat', 1), ('Ben', 'Cat', 2),
       ('Cat', 'Dan', 1), ('Dan', 'Eve', 2), ('Dan', 'Fay', 1),
       ('Eve', 'Fay', 3)]
slim_embed(net_vis(edges=toy, height='360px'),
           'py_first_graph.html', 'A first graph')

# ---------------------------------------------------------------------------
# 2. Hero figure: the full flight network, default settings
# ---------------------------------------------------------------------------
slim_embed(net_vis(edges=edges),
           'py_flights_default.html', 'World flight network — defaults',
           shared_edges=F_FULL)

# ---------------------------------------------------------------------------
# 3. Groups: color by continent (full network)
# ---------------------------------------------------------------------------
slim_embed(net_vis(edges=edges, nodes=nodes, show_ellipses=False),
           'py_flights_groups.html', 'Flight network by continent',
           shared_edges=F_FULL)

# ---------------------------------------------------------------------------
# 4. Metric-driven size: route volume within Europe
# ---------------------------------------------------------------------------
slim_embed(
    net_vis(edges=eu, node_metric=strength_eu, metric_size_range=(2, 26),
            metric_label='Route volume'),
    'py_flights_metric.html', 'European hubs by route volume',
    shared_edges=F_EU)

# ---------------------------------------------------------------------------
# 5. Metric -> color: PageRank heat map (Europe)
# ---------------------------------------------------------------------------
slim_embed(
    net_vis(edges=eu, node_metric=pagerank(eu), metric_map='both',
            metric_colors=('#dbe9f6', '#08306b'), metric_label='PageRank'),
    'py_flights_pagerank.html', 'PageRank heat map (Europe)',
    shared_edges=F_EU)

# ---------------------------------------------------------------------------
# 6. Edge weights: European routes, weight -> width + opacity
# ---------------------------------------------------------------------------
slim_embed(
    net_vis(edges=eu, edge_weight_to_width=True, edge_weight_to_opacity=True,
            weight_width_range=(0.3, 5), node_metric=strength_eu,
            metric_label='Route volume'),
    'py_flights_weights.html', 'European routes, weighted',
    shared_edges=F_EU)

# ---------------------------------------------------------------------------
# 7. Arrows: directed routes between the world's 25 busiest airports
# ---------------------------------------------------------------------------
top25 = [n for n, _ in top_nodes(strength, 25)]
directed = routes[routes['source'].isin(top25) & routes['target'].isin(top25)]
directed = directed.value_counts().reset_index(name='weight')
slim_embed(
    net_vis(edges=directed, show_arrows=True, edge_weight_to_width=True,
            node_size=12, label_font_size=8, link_distance=140,
            edge_opacity=0.5),
    'py_flights_arrows.html', 'Directed routes between the top 25 hubs')

# ---------------------------------------------------------------------------
# 8. Circular layout: top 40 hubs
# ---------------------------------------------------------------------------
top40 = [n for n, _ in top_nodes(strength, 40)]
t40 = edges[edges['source'].isin(top40) & edges['target'].isin(top40)]
n40 = nodes[nodes['id'].isin(top40)]
slim_embed(
    net_vis(edges=t40, nodes=n40, layout='circular',
            edge_weight_to_opacity=True, node_size=10, label_font_size=8),
    'py_flights_circular.html', 'Top 40 hubs, circular layout')

# ---------------------------------------------------------------------------
# 9. Communities on competitive routes, restricted to the 8 largest
# ---------------------------------------------------------------------------
top8 = {c for c, _ in Counter(comm.values()).most_common(8)}
comm8 = {n: c for n, c in comm.items() if c in top8}
strength_comp = degree(competitive, weighted=True)
slim_embed(
    net_vis(edges=competitive, node_groups=comm8, show_ellipses=False,
            node_metric=strength_comp, metric_size_range=(2, 22),
            metric_label='Route volume'),
    'py_flights_communities.html', 'Detected route communities',
    shared_edges=F_COMP)

# ---------------------------------------------------------------------------
# 10. Brokers: betweenness on the top-500 subgraph
# ---------------------------------------------------------------------------
slim_embed(
    net_vis(edges=sub500, node_metric=bt, metric_map='both',
            metric_colors=('#d9d9d9', '#c22e00'), metric_label='Betweenness',
            edge_weight_to_opacity=True),
    'py_flights_brokers.html', 'Brokers of the flight network')

# ---------------------------------------------------------------------------
# 11. Dark theme + ego tuning (Europe)
# ---------------------------------------------------------------------------
slim_embed(
    net_vis(edges=eu, theme='dark', node_metric=strength_eu,
            metric_size_range=(2, 24), metric_label='Route volume',
            ego_depth=2, neighbor_fade=0.06),
    'py_flights_dark.html', 'Dark theme', shared_edges=F_EU, bg='#111827')

print('done')
