Tutorial
========

This tutorial will guide you through the basic usage of lightgraph for network visualization.

Basic Network Visualization
----------------------------

The core function of lightgraph is `net_vis()`, which creates interactive network visualizations from adjacency matrices.

Simple Example
~~~~~~~~~~~~~~~

Let's start with a simple example:

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
   node_names = ['Node A', 'Node B', 'Node C', 'Node D']
   
   # Visualize the network
   lightgraph.net_vis(adj_matrix, node_names)

This will create an interactive visualization showing four nodes connected in a square pattern.

Working with Node Groups
------------------------

You can assign nodes to different groups for better visualization:

.. code-block:: python

   import numpy as np
   import lightgraph

   # Create adjacency matrix
   adj_matrix = np.array([
       [0, 1, 0, 0, 1],
       [1, 0, 1, 0, 0],
       [0, 1, 0, 1, 0],
       [0, 0, 1, 0, 1],
       [1, 0, 0, 1, 0]
   ])
   
   # Define node names
   node_names = ['A', 'B', 'C', 'D', 'E']
   
   # Define node groups
   node_groups = {
       'A': 'Group 1',
       'B': 'Group 1',
       'C': 'Group 2',
       'D': 'Group 2',
       'E': 'Group 1'
   }
   
   # Visualize with groups
   lightgraph.net_vis(adj_matrix, node_names, node_groups=node_groups)

Weighted Networks
-----------------

lightgraph supports weighted edges. The edge weights are automatically visualized:

.. code-block:: python

   import numpy as np
   import lightgraph

   # Create weighted adjacency matrix
   adj_matrix = np.array([
       [0, 0.8, 0.3, 0],
       [0.8, 0, 0, 0.5],
       [0.3, 0, 0, 0.9],
       [0, 0.5, 0.9, 0]
   ])
   
   node_names = ['A', 'B', 'C', 'D']
   
   # Visualize weighted network
   lightgraph.net_vis(adj_matrix, node_names)

Saving Visualizations
---------------------

You can save the visualization as an HTML file:

.. code-block:: python

   import numpy as np
   import lightgraph

   adj_matrix = np.array([[0, 1], [1, 0]])
   node_names = ['A', 'B']
   
   # Save visualization
   lightgraph.net_vis(adj_matrix, node_names, save_as='my_network.html')

Interactive Features
--------------------

The generated visualizations include several interactive features:

* **Zoom**: Use mouse wheel to zoom in/out
* **Pan**: Click and drag to move around the network
* **Node Selection**: Click on nodes to highlight them
* **Edge Information**: Hover over edges to see weight information

Tips for Better Visualizations
------------------------------

1. **Node Names**: Use descriptive names for better readability
2. **Group Colors**: Assign meaningful groups to highlight network structure
3. **Edge Weights**: Use meaningful weights to represent connection strength
4. **Network Size**: For very large networks, consider filtering or sampling
