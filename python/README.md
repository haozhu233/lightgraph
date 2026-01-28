# lightgraph

`lightgraph` is a high-performance HTML canvas-based network visualization tool. 

![](https://raw.githubusercontent.com/haozhu233/lightgraph/refs/heads/main/assets/lg_functions.png)

## Installation

For python binding, you can install from pypi.

```
pip install lightgraph
```

## Usage

### Visualizing Networks from Adjacency Matrix

```python
import lightgraph as lg
import numpy as np

# Create adjacency matrix
adj_matrix = np.array([[0, 1, 1], [1, 0, 1], [1, 1, 0]])
node_names = np.array(['A', 'B', 'C'])

# Visualize
html = lg.net_vis(adj_matrix, node_names)

# Save to file
lg.net_vis(adj_matrix, node_names, save_as='network.html')
```

### Visualizing Networks from Edge List

The edge list interface provides a more potentially more intuitive way to create network visualizations, especially for sparse networks.

#### Basic Edge List (Tuples)

```python
import lightgraph as lg

# Simple edge list
edges = [('A', 'B'), ('B', 'C'), ('C', 'A')]
html = lg.net_vis_edgelist(edges)

# Save to file
lg.net_vis_edgelist(edges, save_as='network.html')
```

#### Edge List with Weights

```python
# Tuples with weights
edges = [
    ('A', 'B', 0.5),
    ('B', 'C', 0.8),
    ('C', 'A', 1.0)
]
lg.net_vis_edgelist(edges)
```

#### Dictionary Format

```python
edges = [
    {'source': 'A', 'target': 'B', 'weight': 0.5},
    {'source': 'B', 'target': 'C', 'weight': 0.8},
    {'source': 'C', 'target': 'A', 'weight': 1.0}
]
lg.net_vis_edgelist(edges)
```

#### With Node Groups/Communities

```python
edges = [('A', 'B'), ('B', 'C'), ('D', 'E'), ('E', 'F'), ('C', 'D')]
groups = {
    'A': 'group1', 'B': 'group1', 'C': 'group1',
    'D': 'group2', 'E': 'group2', 'F': 'group2'
}
lg.net_vis_edgelist(edges, node_groups=groups)
```

#### Including Isolated Nodes

```python
edges = [('A', 'B'), ('B', 'C')]
nodes = ['A', 'B', 'C', 'D', 'E']  # D and E are isolated
lg.net_vis_edgelist(edges, nodes=nodes)
```

#### Removing Isolated Nodes

```python
edges = [('A', 'B'), ('B', 'C')]
nodes = ['A', 'B', 'C', 'D', 'E']  # D and E will be removed
lg.net_vis_edgelist(edges, nodes=nodes, remove_isolated=True)
```

### Integration with pandas

```python
import pandas as pd
import lightgraph as lg

# Load edge list from CSV
df = pd.read_csv('network_data.csv')  # Columns: source, target, weight
lg.net_vis_edgelist(df)
```

### Integration with NetworkX

```python
import networkx as nx
import lightgraph as lg

# Create NetworkX graph
G = nx.karate_club_graph()

# Get edge list
edges = list(G.edges())
lg.net_vis_edgelist(edges)

# With weights
edges_with_weights = [(u, v, G[u][v].get('weight', 1.0)) for u, v in G.edges()]
lg.net_vis_edgelist(edges_with_weights)
```

## API Reference

### `net_vis(adj_matrix, node_names, node_groups=None, remove_unconnected=True, save_as=None)`

Visualize network from adjacency matrix.

**Parameters:**
- `adj_matrix` (numpy.ndarray): Adjacency matrix (n × n)
- `node_names` (list): Node names corresponding to matrix rows/columns
- `node_groups` (dict, optional): Mapping of node names to group identifiers
- `remove_unconnected` (bool): Remove unconnected nodes (default: True)
- `save_as` (str, optional): Path to save HTML file

**Returns:** HTML string

### `net_vis_edgelist(edges, nodes=None, node_groups=None, remove_isolated=False, save_as=None)`

Visualize network from edge list.

**Parameters:**
- `edges` (list): Edge list in one of the following formats:
  - List of tuples: `[(source, target), ...]` or `[(source, target, weight), ...]`
  - List of dicts: `[{'source': ..., 'target': ..., 'weight': ...}, ...]`
  - pandas DataFrame with columns: `source`, `target`, optional `weight`
- `nodes` (list, optional): Node identifiers (if None, extracted from edges)
- `node_groups` (dict, optional): Mapping of node names to group identifiers
- `remove_isolated` (bool): Remove nodes with no edges (default: False)
- `save_as` (str, optional): Path to save HTML file

**Returns:** HTML string

## Examples

See `examples/edgelist_demo.py` for comprehensive examples of all features.

