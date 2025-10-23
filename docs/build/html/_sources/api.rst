API Reference
=============

This page provides detailed documentation for the lightgraph API.

Core Functions
--------------

.. automodule:: lightgraph.network
   :members:
   :undoc-members:
   :show-inheritance:

Function Details
----------------

net_vis
~~~~~~~

.. autofunction:: lightgraph.network.net_vis

Parameters
^^^^^^^^^^

* **adj_matrix** (numpy.ndarray): The adjacency matrix of the network (n x n).
* **node_names** (list of str): Array of node names corresponding to rows/columns of the matrix.
* **node_groups** (dict, optional): A dictionary mapping node names to group identifiers. Defaults to None.
* **remove_unconnected** (bool, optional): Whether to remove unconnected nodes. Defaults to True.
* **save_as** (str, optional): Path to save the visualization as HTML file. Defaults to None.

Returns
^^^^^^^

* **str**: HTML content string containing the visualization.

Raises
^^^^^^

* **ValueError**: If adj_matrix is not a numpy.ndarray or dimensions don't match.

Examples
^^^^^^^^

Basic usage:

.. code-block:: python

   import numpy as np
   import lightgraph

   adj_matrix = np.array([[0, 1], [1, 0]])
   node_names = ['A', 'B']
   lightgraph.net_vis(adj_matrix, node_names)

With groups:

.. code-block:: python

   import numpy as np
   import lightgraph

   adj_matrix = np.array([[0, 1], [1, 0]])
   node_names = ['A', 'B']
   node_groups = {'A': 'Group1', 'B': 'Group2'}
   lightgraph.net_vis(adj_matrix, node_names, node_groups=node_groups)
