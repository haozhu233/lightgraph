API Reference
=============

This page provides detailed documentation for the lightgraph API.

Visualization
-------------

.. autofunction:: lightgraph.net_vis

.. autoclass:: lightgraph.NetworkVisualization
   :members:

Analytics
---------

Dependency-free graph analytics. Every function accepts the same flexible
edge input as ``net_vis`` (tuples, dicts, or a pandas DataFrame) and
returns plain dicts keyed by node name, ready to pass back to
``net_vis(node_metric=..., node_groups=...)``.

.. automodule:: lightgraph.analytics
   :members: degree, betweenness, closeness, eigenvector, pagerank,
             communities, components, neighbors, summary, top_nodes

Datasets
--------

.. automodule:: lightgraph.datasets
   :members: les_mis, got, football

R Interface
-----------

The R package mirrors the Python interface one-to-one. ``lightgraph(nodes,
edges, ...)`` accepts the same arguments as ``net_vis`` (in snake_case, as
in Python), and the analytics functions carry an ``lg_`` prefix:

.. list-table::
   :header-rows: 1

   * - R function
     - Python equivalent
   * - ``lightgraph()``
     - ``net_vis()``
   * - ``lg_degree()``
     - ``lightgraph.degree()``
   * - ``lg_betweenness()``
     - ``lightgraph.betweenness()``
   * - ``lg_closeness()``
     - ``lightgraph.closeness()``
   * - ``lg_eigenvector()``
     - ``lightgraph.eigenvector()``
   * - ``lg_pagerank()``
     - ``lightgraph.pagerank()``
   * - ``lg_communities()``
     - ``lightgraph.communities()``
   * - ``lg_components()``
     - ``lightgraph.components()``
   * - ``lg_neighbors()``
     - ``lightgraph.neighbors()``
   * - ``lg_summary()``
     - ``lightgraph.summary()``
   * - ``lg_top_nodes()``
     - ``lightgraph.top_nodes()``
   * - ``data(les_mis)``
     - ``lightgraph.datasets.les_mis()``
   * - ``data(got)``
     - ``lightgraph.datasets.got()``
   * - ``data(football_edges)``, ``data(football_nodes)``
     - ``lightgraph.datasets.football()``
   * - ``lightgraphOutput()``
     - (Shiny output binding)
   * - ``renderLightgraph()``
     - (Shiny render function)
   * - ``adjacency_to_lightgraph()``
     - (adjacency matrices go straight to ``net_vis`` in Python)

R functions return named vectors instead of dicts; see ``?lg_pagerank``
etc. in R for the full manual pages, and the :doc:`R vignette
<vignette_r>` for a worked example.

JavaScript API
--------------

Both bindings drive the same ``lightgraph.js`` runtime. The ``config``
argument (Python dict / R named list) is deep-merged over the generated
configuration, giving access to every option in the JS ``DEFAULT_CONFIG``
(``nodes``, ``edges``, ``highlight``, ``egoFilter``, ``labels``,
``simulation``, ``groups``, ``canvas``, ``ui``, ``layout``) without a
dedicated keyword argument.
