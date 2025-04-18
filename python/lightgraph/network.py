import json
import numpy as np
from IPython.display import display, HTML
import os

def net_vis(adj_matrix, node_names, node_groups=None, remove_unconnected=True,
           save_as=None):
    """
    Visualizes a network using lightGraph in Jupyter.

    Parameters:
    - adj_matrix (numpy.ndarray): The adjacency matrix of the network (n x n).
    - node_names (list of str): Array of node names corresponding to rows/columns of the matrix.
    - node_groups (dict, optional): A dictionary mapping node names to group identifiers. Defaults to None.

    Returns:
    - None. Displays the visualization below the cell.
    """
    if not isinstance(adj_matrix, np.ndarray):
        raise ValueError("adj_matrix must be a numpy.ndarray.")
    if len(node_names) != adj_matrix.shape[0]:
        raise ValueError("Length of node_names must match the dimensions of adj_matrix.")
    if node_groups is not None and not isinstance(node_groups, dict):
        raise ValueError("node_groups must be a dictionary.")

    if remove_unconnected:
        connected_nodes = (adj_matrix.sum(0) > 0) + (adj_matrix.sum(1) > 0)
        adj_matrix = adj_matrix[connected_nodes, :][:, connected_nodes]
        node_names = node_names[connected_nodes]
        if node_groups is not None:
            node_names_set = set(node_names)
            node_groups_ = {}
            for x in node_groups.keys():
                if x in node_names_set:
                    node_groups_[x] = node_groups[x]
            node_groups = node_groups_

    nodes = []
    for node in node_names:
        node_data = {'id': str(node)}
        if node_groups and node in node_groups:
            node_data['group'] = str(node_groups[node])
        nodes.append(node_data)

    edges = []
    for i in range(adj_matrix.shape[0]):
        for j in range(adj_matrix.shape[1]):
            if adj_matrix[i, j] > 0:  # Include only non-zero edges
                edges.append({
                    'source': str(node_names[i]),
                    'target': str(node_names[j]),
                    'weight': float(adj_matrix[i, j])
                })

    nodes_json = json.dumps(nodes)
    edges_json = json.dumps(edges)

    script_path = os.path.join(
        os.path.dirname(__file__), "assets", "lightgraph.js")
    with open(script_path, 'r') as f:
        script_js = f.read()
    
    html_content = f"""
    <div style="position: relative; width: 100%; height: 800px; overflow: hidden;">
    <div id="lightGraph" style="width: 100%; height: 100%;"></div>
    <script type="application/json" id="nodesData">{nodes_json}</script>
    <script type="application/json" id="edgesData">{edges_json}</script>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <script>{script_js}</script>
    <div>
    """

    if save_as:
        with open(save_as, 'w', encoding='utf-8') as f:
            f.write(html_content)
    
    return html_content