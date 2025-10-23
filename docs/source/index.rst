Welcome to lightgraph's documentation!
======================================

.. image:: https://raw.githubusercontent.com/haozhu233/lightgraph/refs/heads/main/assets/lg_functions.png
   :alt: lightgraph visualization example
   :align: center

lightgraph is a high-performance HTML canvas-based network visualization tool designed for interactive network analysis and visualization in Jupyter notebooks.

.. note::
   This project is still work in progress. The API are not stable and are subject to change. Currently there are also limited documentations available.

Features
--------

* **High Performance**: Built on HTML5 Canvas for smooth rendering of large networks
* **Interactive**: Zoom, pan, and explore network structures interactively
* **Jupyter Integration**: Seamlessly integrates with Jupyter notebooks
* **Group Support**: Visualize node groups with different colors
* **Weighted Edges**: Support for weighted network edges
* **Python Binding**: Easy-to-use Python API

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

   installation
   tutorial
   api
   examples
   contributing

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
