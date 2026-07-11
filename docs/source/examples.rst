Examples
========

lightgraph bundles three classic networks so you can try every feature
without hunting for data. In Python they live in ``lightgraph.datasets``;
in R they are lazy-loaded datasets. Each figure below is live — pan,
zoom, hover, and double-click it.

Les Misérables
--------------

Character co-occurrences in Victor Hugo's novel: 77 characters, 254
weighted edges (the weight counts shared chapters). A perfect size for
edge-weight styling — every line is legible. Data from D. E. Knuth,
*The Stanford GraphBase* (1993).

.. code-block:: python

   from lightgraph import net_vis, datasets, degree

   edges = datasets.les_mis()
   net_vis(edges=edges, edge_weight_to_width=True,
           edge_weight_to_opacity=True,
           node_metric=degree(edges, weighted=True),
           metric_size_range=(4, 18))

.. code-block:: r

   library(lightgraph)

   data(les_mis)
   lightgraph(edges = les_mis, edge_weight_to_width = TRUE,
              edge_weight_to_opacity = TRUE,
              node_metric = lg_degree(les_mis, weighted = TRUE),
              metric_size_range = c(4, 18))

.. raw:: html

   <iframe src="./_static/examples/les_mis.html"
     title="Les Miserables co-occurrence network" loading="lazy"
     style="width:100%; height:560px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

A Storm of Swords
-----------------

Character interactions in the third book of *A Song of Ice and Fire*:
107 characters, 352 weighted edges (co-mentions within 15 words).
Communities are detected automatically and PageRank drives node size.
Data from A. Beveridge and J. Shan, "Network of Thrones", *Math
Horizons* 23(4) (2016).

.. code-block:: python

   from lightgraph import net_vis, datasets, pagerank

   edges = datasets.got()
   net_vis(edges=edges, node_groups='auto',
           node_metric=pagerank(edges),
           edge_weight_to_width=True)

.. code-block:: r

   library(lightgraph)

   data(got)
   lightgraph(edges = got, node_groups = "auto",
              node_metric = lg_pagerank(got),
              edge_weight_to_width = TRUE)

.. raw:: html

   <iframe src="./_static/examples/got.html"
     title="A Storm of Swords character network" loading="lazy"
     style="width:100%; height:560px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

College football
----------------

Games between 115 Division IA teams in the Fall 2000 season, with each
team's conference as its group — a ground-truth community structure you
can compare detection algorithms against. Data from M. Girvan and
M. E. J. Newman, *PNAS* 99 (2002).

.. code-block:: python

   from lightgraph import net_vis, datasets

   nodes, edges = datasets.football()
   net_vis(edges=edges, nodes=nodes)

.. code-block:: r

   library(lightgraph)

   data(football_edges); data(football_nodes)
   lightgraph(nodes = football_nodes, edges = football_edges)

.. raw:: html

   <iframe src="./_static/examples/football.html"
     title="American college football, Fall 2000" loading="lazy"
     style="width:100%; height:560px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

How well does community detection recover the conferences? Compare
``communities(edges)`` (Python) or ``lg_communities(football_edges)``
(R) against the ``group`` column — on this network modularity-based
methods recover the conference structure almost perfectly.

For a full feature-by-feature tour on a 19k-edge network, continue to
:doc:`vignette_python` or :doc:`vignette_r`.
