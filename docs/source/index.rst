Welcome to lightgraph's documentation!
======================================

lightgraph is a high-performance HTML canvas-based network visualization tool
for the browser, Jupyter notebooks (Python), and R. It keeps thousands of
nodes and edges interactive through batched canvas rendering, viewport
culling, and high-DPI-aware drawing.

Try it live — drag the sliders to change the graph size, switch the
generation model, and explore (drag to pan, scroll to zoom, click to select,
double-click a node for its ego network):

.. raw:: html

   <div class="full-width">
     <iframe
       src="_static/demo/index.html?embed=compact"
       title="lightgraph interactive demo"
       style="width:100%; height:660px; border:0; overflow:hidden;"
       loading="eager"
     ></iframe>
     <p style="text-align:right; margin-top:0.25rem;">
       <a href="demo.html">Open the full demo with all controls &rarr;</a>
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

   import numpy as np
   import lightgraph

   # Create a simple adjacency matrix
   adj_matrix = np.array([
       [0, 1, 1, 0],
       [1, 0, 0, 1],
       [1, 0, 0, 1],
       [0, 1, 1, 0]
   ])

   # Define node names
   node_names = ['A', 'B', 'C', 'D']

   # Visualize the network
   lightgraph.net_vis(adj_matrix, node_names)

Contents
--------

.. toctree::
   :maxdepth: 2
   :caption: Documentation:

   demo
   installation
   tutorial
   vignette_python
   vignette_r
   api
   examples
   contributing

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
