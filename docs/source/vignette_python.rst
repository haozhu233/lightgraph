Use lightgraph in Python
========================

This vignette is a feature-by-feature tour of the Python binding, in the
spirit of a package manual you can read top to bottom: every option group
gets a code example, and every figure is a **live lightgraph instance** —
pan, zoom, hover, click, box-select, and double-click them.

Throughout the page we work with a real, non-trivial network: the
**OpenFlights world flight network** — 3,257 airports and 18,930 routes.
The hero figure below renders all of it; later sections zoom into its
European and competitive-route slices, so a dozen live figures share
one page and stay smooth.

Overview
--------

The binding has one visualization entry point and a set of analytics
helpers that feed it:

.. code-block:: python

   from lightgraph import net_vis                      # the visualization
   from lightgraph import (summary, degree, betweenness, closeness,
                           eigenvector, pagerank, communities,
                           components, neighbors, top_nodes)   # analytics

``net_vis`` accepts an edge list (tuples, dicts, or a pandas DataFrame),
an adjacency matrix (dense numpy or scipy.sparse), and an optional nodes
table. Every analytics function accepts the same edge input and returns a
plain dict keyed by node name, which plugs straight back into ``net_vis``.

Installation
------------

.. code-block:: bash

   pip install lightgraph

The output is fully self-contained HTML — it displays in Jupyter, saves
to a file, and needs no server and no internet connection to view.

Getting Started
---------------

Edges are enough; nodes are derived automatically:

.. code-block:: python

   from lightgraph import net_vis

   friends = [('Amy', 'Ben', 3), ('Amy', 'Cat', 1), ('Ben', 'Cat', 2),
              ('Cat', 'Dan', 1), ('Dan', 'Eve', 2), ('Dan', 'Fay', 1),
              ('Eve', 'Fay', 3)]
   net_vis(edges=friends, height='360px')

.. raw:: html

   <iframe src="./_static/vignettes/py_first_graph.html"
     title="A first graph" loading="lazy"
     style="width:100%; height:360px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

The same call accepts richer inputs:

.. code-block:: python

   # dicts, with optional weights
   net_vis(edges=[{'source': 'A', 'target': 'B', 'weight': 2}])

   # a pandas DataFrame with source / target / weight columns
   net_vis(edges=df)

   # an adjacency matrix (dense numpy or scipy.sparse) + node names
   net_vis(adj_matrix=A, node_names=names)

   # an optional nodes table carrying per-node attributes
   nodes = pd.DataFrame({'id': [...], 'group': [...], 'size': [...]})
   net_vis(edges=df, nodes=nodes)

The Flight Network
------------------

The working dataset for the rest of this page: every scheduled airline
route in the `OpenFlights <https://openflights.org/data.php>`_ database.
Each row of ``routes.dat`` is one airline serving one leg, so aggregating
duplicate rows gives natural edge weights (how many airlines fly a
route):

.. code-block:: python

   import numpy as np
   import pandas as pd

   base = "https://raw.githubusercontent.com/jpatokal/openflights/master/data/"

   airports = pd.read_csv(base + "airports.dat", header=None,
                          usecols=[1, 3, 4, 11],
                          names=['name', 'country', 'id', 'tz'],
                          na_values=['\\N']).dropna(subset=['id'])
   routes = pd.read_csv(base + "routes.dat", header=None, usecols=[2, 4],
                        names=['source', 'target'],
                        na_values=['\\N']).dropna()

   # one row per airline serving a leg -> weighted undirected edges
   pairs = pd.DataFrame(np.sort(routes[['source', 'target']].values, axis=1),
                        columns=['source', 'target'])
   edges = pairs.value_counts().reset_index(name='weight')

   # continents from the tz database name ("Europe/Paris" -> "Europe")
   airports['group'] = airports['tz'].str.split('/').str[0]
   known = set(airports['id'])
   edges = edges[edges['source'].isin(known) & edges['target'].isin(known)]
   nodes = airports[['id', 'group']]

First question for any new graph — what are we looking at?

.. code-block:: python

   from lightgraph import summary
   summary(edges)

.. code-block:: text

   {'nodes': 3257, 'edges': 18930, 'density': 0.0036,
    'average_degree': 11.62, 'max_degree': 248,
    'components': 7, 'largest_component': 3231,
    'transitivity': 0.249}

Mild density, high clustering, seven components (the giant one holds
3,231 airports) — and the busiest hubs are exactly who you'd guess:

.. code-block:: python

   from lightgraph import degree, top_nodes

   strength = degree(edges, weighted=True)   # route listings per airport
   top_nodes(strength, 8)

.. code-block:: text

   [('ATL', 1826.0), ('ORD', 1108.0), ('LHR', 1051.0), ('PEK', 1050.0),
    ('CDG', 1041.0), ('FRA', 990.0), ('LAX', 986.0), ('DFW', 936.0)]

And the zero-configuration picture. 3,257 nodes and 18,930 edges is
normal load for lightgraph — node size and edge opacity adapt to graph
density automatically, and the layout is warmed up before the first
paint so it appears already untangled:

.. code-block:: python

   net_vis(edges=edges)

.. raw:: html

   <iframe src="./_static/vignettes/py_flights_default.html"
     title="World flight network, default settings" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Try it: drag to pan, scroll to zoom, hover an airport to light up its
neighborhood, type into the search box, shift-drag to box-select, and
**double-click** a hub to isolate its ego network (Escape restores).

Node Styling
------------

Coloring by group
~~~~~~~~~~~~~~~~~

Give the nodes table a ``group`` column (or pass a ``node_groups`` dict)
and lightgraph assigns colors and builds the interactive legend — click
a legend entry to select that group:

.. code-block:: python

   net_vis(edges=edges, nodes=nodes, show_ellipses=False)

.. raw:: html

   <iframe src="./_static/vignettes/py_flights_groups.html"
     title="Flight network by continent" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Even with no geographic coordinates anywhere in the data, the force
layout reconstructs a recognizable world map from route topology alone.
With ``show_ellipses=True`` (the default) each group also gets a
covariance ellipse — useful for cluster-like groups; for groups as
interwoven as continents, switching it off reads better.

Metric-driven size
~~~~~~~~~~~~~~~~~~

Any dict of node values drives node size via ``node_metric``. Values
are min-max normalized into ``metric_size_range``. For the styling
sections we zoom into one slice with plenty of structure: the European
subnetwork (561 airports, 5,088 routes). Size encodes route volume
*within Europe*:

.. code-block:: python

   europe = set(airports.loc[airports['group'] == 'Europe', 'id'])
   eu = edges[edges['source'].isin(europe) & edges['target'].isin(europe)]

   strength_eu = degree(eu, weighted=True)
   net_vis(edges=eu, node_metric=strength_eu, metric_size_range=(2, 26))

.. raw:: html

   <iframe src="./_static/vignettes/py_flights_metric.html"
     title="Hub airports by route volume" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

The intra-European ranking holds a surprise worth plotting — Barcelona
and holiday-island Palma de Mallorca outrank Frankfurt and Paris once
intercontinental routes are excluded:

.. code-block:: python

   top_nodes(strength_eu, 8)

.. code-block:: text

   [('BCN', 615.0), ('AMS', 549.0), ('PMI', 544.0), ('FRA', 518.0),
    ('MUC', 512.0), ('VIE', 493.0), ('CDG', 478.0), ('LGW', 454.0)]

Metric-driven color
~~~~~~~~~~~~~~~~~~~

``metric_map`` chooses the channel: ``'size'`` (default), ``'color'``,
or ``'both'``. Colors interpolate between the two ``metric_colors``
endpoints. When the legend is on, a metric section shows the size dots
and color gradient with the metric's min/max values — title it with
``metric_label`` (e.g. ``metric_label='PageRank'``). Here a PageRank
heat map of the European network:

.. code-block:: python

   from lightgraph import pagerank

   net_vis(edges=eu, node_metric=pagerank(eu), metric_map='both',
           metric_colors=('#dbe9f6', '#08306b'), show_legend=False)

.. raw:: html

   <iframe src="./_static/vignettes/py_flights_pagerank.html"
     title="PageRank heat map" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Per-node overrides
~~~~~~~~~~~~~~~~~~

Precedence is always: explicit per-node values win over metric-derived
ones, and group colors win over node colors.

.. code-block:: python

   net_vis(
       edges=edges,
       node_metric=strength,               # sizes for everyone...
       node_sizes={'ATL': 40},             # ...except Atlanta
       node_colors={'JFK': '#e63946'},     # spot color
       node_size=7,                        # default for unmetriced nodes
       node_color='#548ff0',               # default fill
   )

Edge Styling
------------

Weights to width and opacity
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``edge_weight_to_width`` / ``edge_weight_to_opacity`` map weights into
``weight_width_range`` / ``weight_opacity_range``. On the European
subnetwork, busy corridors turn into thick, solid strokes while
single-airline routes fade back:

.. code-block:: python

   net_vis(edges=eu,
           edge_weight_to_width=True,
           edge_weight_to_opacity=True,
           weight_width_range=(0.3, 5),
           node_metric=strength_eu)

.. raw:: html

   <iframe src="./_static/vignettes/py_flights_weights.html"
     title="European routes, weighted" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Adaptive opacity
~~~~~~~~~~~~~~~~

By default, edge opacity continuously adapts to the on-screen ink
density and zoom level, so dense graphs read as texture instead of a
solid block — zoom into any figure on this page and watch edges
solidify. Setting ``edge_opacity=0.4`` pins a fixed value instead
(viewers can re-enable auto mode from the settings sidebar);
``edge_width`` and ``edge_color`` set the base stroke.

Direction arrows
~~~~~~~~~~~~~~~~

For directed data, skip the undirected aggregation and keep ordered
pairs. Routes between the world's 25 busiest airports:

.. code-block:: python

   top25 = [n for n, _ in top_nodes(strength, 25)]
   directed = routes[routes['source'].isin(top25) &
                     routes['target'].isin(top25)]
   directed = directed.value_counts().reset_index(name='weight')

   net_vis(edges=directed, show_arrows=True, edge_weight_to_width=True,
           node_size=12, label_font_size=8, link_distance=140,
           edge_opacity=0.5)

.. raw:: html

   <iframe src="./_static/vignettes/py_flights_arrows.html"
     title="Directed routes between the top 25 hubs" loading="lazy"
     style="width:100%; height:560px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Layouts
-------

Force layout tuning
~~~~~~~~~~~~~~~~~~~

The default force layout has three main dials, plus warmup:

.. code-block:: python

   net_vis(edges=edges,
           simulation_strength=4000,   # node repulsion (scaled by count)
           link_distance=100,          # preferred edge length
           group_attraction=0.3,       # pull toward group centroids
           warmup_ticks='auto')        # settle before first paint

``group_attraction`` is what separates groups spatially — raise it to
tighten clusters, set it to 0 to let topology alone decide.

Circular layout
~~~~~~~~~~~~~~~

``layout='circular'`` starts nodes on a ring ordered by group, then
lets a gentle simulation relax it — a chord-diagram view of the top 40
hubs that settles into its natural clusters:

.. code-block:: python

   top40 = [n for n, _ in top_nodes(strength, 40)]
   t40 = edges[edges['source'].isin(top40) & edges['target'].isin(top40)]

   net_vis(edges=t40, nodes=nodes[nodes['id'].isin(top40)],
           layout='circular', edge_weight_to_opacity=True,
           node_size=10, label_font_size=8)

.. raw:: html

   <iframe src="./_static/vignettes/py_flights_circular.html"
     title="Top 40 hubs, circular layout" loading="lazy"
     style="width:100%; height:560px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Interaction & Exploration
-------------------------

Everything is modeless — no tool switching:

* **Hover** a node to highlight its 1-hop neighborhood; everything else
  fades to ``neighbor_fade`` opacity (``highlight_neighbors=False``
  disables it).
* **Double-click** a node to show only its ``ego_depth``-hop
  neighborhood; double-click empty space or press Escape to restore.
* **Click** selects; shift-click toggles; **shift-drag** box-selects.
* **Search** matches ids as you type; **legend clicks** select whole
  groups.
* **Tooltips** (``show_tooltips``) show id, group, and degree; the
  **statistics panel** (``show_statistics=True``) shows live counts for
  the current selection.
* Drag a node to pin it down; the layout re-flows around it.

.. code-block:: python

   net_vis(edges=edges,
           ego_depth=2,           # double-click reveals 2 hops
           neighbor_fade=0.06,    # fade non-neighbors harder
           show_statistics=True)

Themes
------

``theme='dark'`` swaps the canvas, panels, labels, and default node and
edge colors; ``background_color`` overrides just the canvas. This figure
also carries the interaction tuning above — double-click any airport and
you get its two-hop reach:

.. code-block:: python

   net_vis(edges=eu, theme='dark',
           node_metric=strength_eu, metric_size_range=(2, 24),
           ego_depth=2, neighbor_fade=0.06)

.. raw:: html

   <iframe src="./_static/vignettes/py_flights_dark.html"
     title="Dark theme" loading="lazy"
     style="width:100%; height:620px; border:1px solid #1f2937; border-radius:10px; overflow:hidden;"></iframe>

Graph Analytics
---------------

The ``lightgraph.analytics`` module is dependency-free (networkx is used
for Louvain communities when installed, never required) and treats
graphs as undirected. Everything returns ``{node: value}``.

.. list-table::
   :header-rows: 1

   * - Function
     - What it tells you
   * - ``summary(edges)``
     - node/edge counts, density, degree stats, components, transitivity
   * - ``degree(edges, weighted=False)``
     - connections per node (weighted: strength)
   * - ``betweenness(edges)``
     - who sits on the shortest paths (Brandes)
   * - ``closeness(edges)``
     - who can reach everyone fastest
   * - ``eigenvector(edges)``
     - who is connected to the well-connected
   * - ``pagerank(edges, damping=0.85)``
     - random-surfer importance
   * - ``communities(edges)``
     - Louvain / label-propagation groups, as ``{node: 'c1'}``
   * - ``components(edges)``
     - connected component ids, largest first
   * - ``neighbors(edges, node, depth=1)``
     - the k-hop ego set around a node
   * - ``top_nodes(metric, n=10)``
     - the n best entries of any metric dict

Communities
~~~~~~~~~~~

``node_groups='auto'`` runs ``communities()`` under the hood. Since it
returns a plain dict, you can also post-process it. Here we detect
communities on the network's *competitive core* — routes flown by more
than one carrier (weight ≥ 3, since each carrier lists both directions),
which sharpens the community structure — then keep the 8 largest and
leave the rest uncolored. What emerges is the geography of air travel:
each community is a regional route system, sized by its route volume:

.. code-block:: python

   from collections import Counter
   from lightgraph import communities

   competitive = edges[edges['weight'] >= 3]

   comm = communities(competitive)   # Louvain when networkx is installed
   top8 = {c for c, _ in Counter(comm.values()).most_common(8)}
   comm = {n: c for n, c in comm.items() if c in top8}

   net_vis(edges=competitive, node_groups=comm, show_ellipses=False,
           node_metric=degree(competitive, weighted=True),
           metric_size_range=(2, 22))

.. raw:: html

   <iframe src="./_static/vignettes/py_flights_communities.html"
     title="Detected route communities" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Betweenness: finding the brokers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Betweenness is :math:`O(nm)` — noticeable in pure Python on the full
network, instant on a focused subgraph. Restricting to the 500 busiest
airports:

.. code-block:: python

   from lightgraph import betweenness

   top500 = {n for n, _ in top_nodes(strength, 500)}
   sub = edges[edges['source'].isin(top500) & edges['target'].isin(top500)]

   bt = betweenness(sub)          # ~1 second for 500 nodes / 10k edges
   top_nodes(bt, 8)

.. code-block:: text

   [('AMS', 0.0754), ('FRA', 0.0708), ('CDG', 0.0642), ('PEK', 0.0544),
    ('DXB', 0.0385), ('LHR', 0.0366), ('IST', 0.0349), ('HKG', 0.0319)]

Note the reshuffle versus raw volume: Atlanta (the #1 hub by routes) is
not a top broker, while Amsterdam, Frankfurt, and Paris — the gateways
between route systems — take over:

.. code-block:: python

   net_vis(edges=sub, node_metric=bt, metric_map='both',
           metric_colors=('#d9d9d9', '#c22e00'), show_legend=False,
           edge_weight_to_opacity=True)

.. raw:: html

   <iframe src="./_static/vignettes/py_flights_brokers.html"
     title="Brokers of the flight network" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Slicing with components and neighbors
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   from lightgraph import components, neighbors

   comp = components(edges)                 # {'ATL': 1, ...}, 1 = largest
   mainland = {n for n, c in comp.items() if c == 1}

   reach = neighbors(edges, 'ANC', depth=2) # 2 hops out of Anchorage
   sub = edges[edges['source'].isin(reach) & edges['target'].isin(reach)]
   net_vis(edges=sub, node_groups='auto')

And a metric table is one DataFrame away:

.. code-block:: python

   pd.DataFrame({
       'degree': degree(edges),
       'strength': strength,
       'pagerank': pagerank(edges),
   }).sort_values('pagerank', ascending=False).head()

Performance at Scale
--------------------

The defaults already adapt (warmup, auto node size, density-aware edge
opacity). Zoom and pan cost is dominated by *edges drawn per frame* —
that is why most styling figures on this page run on European and
competitive-route slices of the network instead of all 19k edges:
halving the edge count roughly doubles the zoom frame rate, with no
loss of resolution. When you need to go further, the dials are:

.. code-block:: python

   net_vis(
       edges=big[big['weight'] >= 3],  # or filter edges by weight...
       warmup_ticks=100,     # cap pre-paint layout work ('auto' budgets)
       pixel_ratio=1,        # trade retina sharpness for fill-rate
       show_labels=False,    # labels are the first thing to drop
       export_scale=4,       # ...but export PNGs at 4x for print
   )

Note that filtering *nodes* barely helps: edges concentrate on hubs, so
keeping only the 1,000 busiest airports still keeps 14k of the 19k
edges. Filter edges (by weight) when frame rate is the concern.

Prefer edge lists or scipy.sparse matrices over dense matrices: a dense
10,000-node adjacency matrix holds 100M cells to describe what is
usually a few thousand edges.

The Config Escape Hatch
-----------------------

Keyword arguments cover the common surface. For everything else,
``config`` deep-merges a raw lightGraph config (the JS shape) over the
generated one — any option in the JS ``DEFAULT_CONFIG`` is reachable:

.. code-block:: python

   net_vis(
       edges=edges,
       auto_fit=True,                  # dedicated kwargs still apply
       zoom_range=(0.05, 10),
       config={
           'nodes': {'borderWidth': 2, 'selectedBorderColor': '#ffd700'},
           'labels': {'fontFamily': 'Georgia, serif'},
           'simulation': {'centerStrength': 0.8},
       },
   )

Saving & Sharing
----------------

.. code-block:: python

   vis = net_vis(edges=edges, nodes=nodes)  # displays itself in Jupyter

   vis.save('flights.html')                 # or: save_as='flights.html'
   html_string = vis.html                   # raw HTML if you need it

The saved file is fully standalone (JS inlined, no CDN), so it can be
mailed, dropped into a static site, or embedded in an ``<iframe>`` — the
figures on this page are exactly that. Viewers can also export PNG, SVG,
and JSON from the toolbar.

The Same Thing in R
-------------------

Every argument on this page has the same name and meaning in the R
package, and every analytics function exists with an ``lg_`` prefix —
see the :doc:`R vignette <vignette_r>` and the
:doc:`API reference <api>` parity table.
