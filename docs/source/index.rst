Welcome to lightgraph's documentation!
======================================

lightgraph is a high-performance HTML canvas-based network visualization tool
for the browser, Jupyter notebooks (Python), and R. It keeps thousands of
nodes and edges interactive through batched canvas rendering, viewport
culling, and high-DPI-aware drawing.

Try it live — the OpenFlights route network, 3,257 airports and 18,930
routes, colored by continent. Drag to pan, scroll to zoom, hover an
airport to light up its neighborhood, and double-click a hub to isolate
its ego network (Escape restores):

.. raw:: html

   <div class="full-width">
     <iframe
       src="_static/vignettes/py_flights_groups.html"
       title="World flight network, colored by continent"
       style="width:100%; height:660px; border:0; overflow:hidden;"
       loading="eager"
     ></iframe>
     <p style="text-align:right; margin-top:0.25rem;">
       <a href="vignette_python.html">See how this figure is built, and much more, in the vignettes &rarr;</a>
     </p>
   </div>

.. note::
   This project is still work in progress. The API is not stable and is
   subject to change.

Features
--------

* **High Performance**: batched HTML5 Canvas rendering with viewport culling
  keeps graphs with thousands of nodes and edges smooth
* **Modeless Interaction**: pan, zoom, select, box-select, and drag nodes
  without switching tools
* **Graph Exploration**: neighbor highlighting on hover and double-click
  ego-network filtering
* **Weighted Edges**: map edge weights to width and opacity
* **Groups & Communities**: colored groups with optional ellipses; both
  bindings can auto-detect communities (``node_groups='auto'``)
* **Metric-Driven Styling**: map node metrics to size or color
* **Built-in Analytics**: degree, betweenness, closeness, eigenvector,
  PageRank, communities, components, and k-hop neighborhoods in both
  Python (``lightgraph.analytics``) and R (``lg_*`` functions)
* **Sharp Everywhere**: follows the display's devicePixelRatio and exports
  high-resolution PNGs
* **Jupyter & R Integration**: one-call APIs in Python and R built on the
  same JavaScript runtime

Quick Start
-----------

Installation
~~~~~~~~~~~~

For Python binding, you can install from PyPI:

.. code-block:: bash

   pip install lightgraph

Basic Usage
~~~~~~~~~~~

.. code-block:: python

   from lightgraph import net_vis, datasets, pagerank

   edges = datasets.got()  # bundled: A Storm of Swords character network
   net_vis(edges=edges, node_groups='auto',      # auto-detect communities
           node_metric=pagerank(edges),          # size nodes by PageRank
           edge_weight_to_width=True)

Or the same in R:

.. code-block:: r

   library(lightgraph)

   data(got)
   lightgraph(edges = got, node_groups = "auto",
              node_metric = lg_pagerank(got),
              edge_weight_to_width = TRUE)

Contents
--------

.. toctree::
   :maxdepth: 2
   :caption: Documentation:

   installation
   examples
   vignette_python
   vignette_r
   custom_js
   api
   contributing

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
