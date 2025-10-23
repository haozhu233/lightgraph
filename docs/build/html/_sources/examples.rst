Examples
========

This page contains various examples demonstrating different use cases of lightgraph.

Social Network Analysis
-----------------------

Example: Small social network with friend groups

.. code-block:: python

   import numpy as np
   import lightgraph

   # Social network adjacency matrix
   # Rows/columns represent: Alice, Bob, Charlie, Diana, Eve, Frank
   adj_matrix = np.array([
       [0, 1, 1, 0, 1, 0],  # Alice
       [1, 0, 1, 1, 0, 0],  # Bob
       [1, 1, 0, 0, 0, 1],  # Charlie
       [0, 1, 0, 0, 1, 1],  # Diana
       [1, 0, 0, 1, 0, 0],  # Eve
       [0, 0, 1, 1, 0, 0]   # Frank
   ])
   
   names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank']
   
   # Define friend groups
   groups = {
       'Alice': 'Work',
       'Bob': 'Work',
       'Charlie': 'College',
       'Diana': 'College',
       'Eve': 'Work',
       'Frank': 'College'
   }
   
   lightgraph.net_vis(adj_matrix, names, node_groups=groups)

Protein Interaction Network
----------------------------

Example: Protein-protein interaction network with interaction strengths

.. code-block:: python

   import numpy as np
   import lightgraph

   # Protein interaction network with confidence scores
   adj_matrix = np.array([
       [0, 0.8, 0.3, 0, 0.2],
       [0.8, 0, 0, 0.9, 0],
       [0.3, 0, 0, 0.7, 0.4],
       [0, 0.9, 0.7, 0, 0.1],
       [0.2, 0, 0.4, 0.1, 0]
   ])
   
   proteins = ['P53', 'MDM2', 'ATM', 'CHEK2', 'BRCA1']
   
   # Protein families
   families = {
       'P53': 'Tumor Suppressor',
       'MDM2': 'E3 Ubiquitin Ligase',
       'ATM': 'DNA Repair',
       'CHEK2': 'DNA Repair',
       'BRCA1': 'DNA Repair'
   }
   
   lightgraph.net_vis(adj_matrix, proteins, node_groups=families)

Citation Network
----------------

Example: Academic citation network

.. code-block:: python

   import numpy as np
   import lightgraph

   # Citation network (papers citing each other)
   adj_matrix = np.array([
       [0, 1, 1, 0, 0, 0],
       [0, 0, 0, 1, 1, 0],
       [0, 0, 0, 0, 1, 1],
       [0, 0, 0, 0, 0, 1],
       [0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0]
   ])
   
   papers = [
       'Smith et al. 2020',
       'Johnson et al. 2021',
       'Brown et al. 2021',
       'Davis et al. 2022',
       'Wilson et al. 2022',
       'Miller et al. 2023'
   ]
   
   # Research areas
   areas = {
       'Smith et al. 2020': 'Machine Learning',
       'Johnson et al. 2021': 'Machine Learning',
       'Brown et al. 2021': 'Computer Vision',
       'Davis et al. 2022': 'Computer Vision',
       'Wilson et al. 2022': 'Machine Learning',
       'Miller et al. 2023': 'Computer Vision'
   }
   
   lightgraph.net_vis(adj_matrix, papers, node_groups=areas)

Transportation Network
----------------------

Example: City transportation network

.. code-block:: python

   import numpy as np
   import lightgraph

   # Transportation network with travel times
   adj_matrix = np.array([
       [0, 15, 0, 25, 0],
       [15, 0, 20, 0, 30],
       [0, 20, 0, 10, 0],
       [25, 0, 10, 0, 18],
       [0, 30, 0, 18, 0]
   ])
   
   cities = ['Downtown', 'Airport', 'Suburb A', 'Suburb B', 'University']
   
   # City types
   types = {
       'Downtown': 'Commercial',
       'Airport': 'Transportation',
       'Suburb A': 'Residential',
       'Suburb B': 'Residential',
       'University': 'Educational'
   }
   
   lightgraph.net_vis(adj_matrix, cities, node_groups=types)

Large Network Example
---------------------

Example: Handling larger networks with filtering

.. code-block:: python

   import numpy as np
   import lightgraph

   # Generate a larger random network
   np.random.seed(42)
   n_nodes = 50
   
   # Create random adjacency matrix
   adj_matrix = np.random.random((n_nodes, n_nodes))
   adj_matrix = (adj_matrix + adj_matrix.T) / 2  # Make symmetric
   adj_matrix[adj_matrix < 0.3] = 0  # Remove weak connections
   np.fill_diagonal(adj_matrix, 0)  # Remove self-loops
   
   # Generate node names
   node_names = [f'Node_{i:02d}' for i in range(n_nodes)]
   
   # Create random groups
   groups = {}
   group_names = ['Group A', 'Group B', 'Group C', 'Group D']
   for i, name in enumerate(node_names):
       groups[name] = group_names[i % len(group_names)]
   
   # Visualize large network
   lightgraph.net_vis(adj_matrix, node_names, node_groups=groups)
