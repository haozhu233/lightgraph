import json
import numpy as np
from IPython.display import display, HTML
import os


def _generate_html(nodes, edges, save_as=None, container_height=None):
    """
    Internal function to generate HTML visualization from nodes and edges.
    
    Parameters:
    - nodes (list of dict): List of node objects with 'id' and optional 'group'.
    - edges (list of dict): List of edge objects with 'source', 'target', 'weight'.
    - save_as (str, optional): Path to save HTML file.
    
    Returns:
    - str: HTML content for visualization.
    """
    nodes_json = json.dumps(nodes)
    edges_json = json.dumps(edges)

    script_path = os.path.join(
        os.path.dirname(__file__), "assets", "lightgraph.js")
    with open(script_path, 'r') as f:
        script_js = f.read()
    
    # If a container_height is provided, use it; otherwise default to 800px
    outer_height = container_height if container_height is not None else '800px'

    html_content = f"""
    <div style="position: relative; width: 100%; height: {outer_height}; overflow: hidden;">
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


def net_vis(adj_matrix, node_names, node_groups=None, remove_unconnected=True,
           save_as=None, container_height=None):
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

    return _generate_html(nodes, edges, save_as, container_height=container_height)


def _parse_edge_list(edges):
    """
    Parse edge list from various formats into standardized format.
    
    Parameters:
    - edges: Can be list of tuples, list of dicts, or pandas DataFrame
    
    Returns:
    - list of dict: Standardized edge list with 'source', 'target', 'weight' keys
    """
    if not edges:
        raise ValueError("Edge list cannot be empty")
    
    # Try pandas DataFrame first
    try:
        import pandas as pd
        if isinstance(edges, pd.DataFrame):
            if 'source' not in edges.columns or 'target' not in edges.columns:
                raise ValueError("DataFrame must have 'source' and 'target' columns")
            
            parsed_edges = []
            for _, row in edges.iterrows():
                parsed_edges.append({
                    'source': str(row['source']),
                    'target': str(row['target']),
                    'weight': float(row.get('weight', 1.0))
                })
            return parsed_edges
    except ImportError:
        pass
    
    # Handle list of tuples or list of dicts
    parsed_edges = []
    
    for i, edge in enumerate(edges):
        if isinstance(edge, dict):
            # Dictionary format
            if 'source' not in edge or 'target' not in edge:
                raise ValueError(f"Edge {i} must have 'source' and 'target' keys")
            parsed_edges.append({
                'source': str(edge['source']),
                'target': str(edge['target']),
                'weight': float(edge.get('weight', 1.0))
            })
        elif isinstance(edge, (tuple, list)):
            # Tuple/list format
            if len(edge) < 2:
                raise ValueError(f"Edge {i} must have at least 2 elements (source, target)")
            elif len(edge) == 2:
                parsed_edges.append({
                    'source': str(edge[0]),
                    'target': str(edge[1]),
                    'weight': 1.0
                })
            elif len(edge) >= 3:
                parsed_edges.append({
                    'source': str(edge[0]),
                    'target': str(edge[1]),
                    'weight': float(edge[2])
                })
        else:
            raise ValueError(f"Edge {i} has invalid format. Must be dict, tuple, or list.")
    
    return parsed_edges


def _extract_nodes_from_edges(edges):
    """
    Extract unique node identifiers from edge list.
    
    Parameters:
    - edges (list of dict): Parsed edge list
    
    Returns:
    - list: Unique node identifiers
    """
    nodes = set()
    for edge in edges:
        nodes.add(edge['source'])
        nodes.add(edge['target'])
    return sorted(list(nodes))


def net_vis_edgelist(edges, nodes=None, node_groups=None, remove_isolated=False, 
                     save_as=None, container_height=None):
    """
    Visualizes a network using lightGraph from an edge list.
    
    Parameters:
    - edges (list): Edge list in one of the following formats:
        * List of tuples: [(source, target), ...] or [(source, target, weight), ...]
        * List of dicts: [{'source': ..., 'target': ..., 'weight': ...}, ...]
        * pandas DataFrame with columns: 'source', 'target', optional 'weight'
    - nodes (list, optional): List of node identifiers. If None, extracted from edges.
        Use this to include isolated nodes not present in the edge list.
    - node_groups (dict, optional): Mapping of node names to group identifiers.
    - remove_isolated (bool): Whether to remove nodes with no edges. Default False.
        Only applies when nodes parameter is provided.
    - save_as (str, optional): Path to save HTML file.
    
    Returns:
    - str: HTML content for visualization
    
    Examples:
    >>> # Simple edge list (tuples)
    >>> edges = [('A', 'B'), ('B', 'C'), ('C', 'A')]
    >>> net_vis_edgelist(edges)
    
    >>> # With weights
    >>> edges = [('A', 'B', 0.5), ('B', 'C', 0.8), ('C', 'A', 1.0)]
    >>> net_vis_edgelist(edges)
    
    >>> # With dictionaries
    >>> edges = [
    ...     {'source': 'A', 'target': 'B', 'weight': 0.5},
    ...     {'source': 'B', 'target': 'C', 'weight': 0.8}
    ... ]
    >>> net_vis_edgelist(edges)
    
    >>> # With node groups
    >>> edges = [('A', 'B'), ('C', 'D')]
    >>> groups = {'A': 'group1', 'B': 'group1', 'C': 'group2', 'D': 'group2'}
    >>> net_vis_edgelist(edges, node_groups=groups)
    """
    # Validate inputs
    if node_groups is not None and not isinstance(node_groups, dict):
        raise ValueError("node_groups must be a dictionary")
    
    # Parse edge list to standard format
    parsed_edges = _parse_edge_list(edges)
    
    # Extract or use provided nodes
    if nodes is None:
        node_list = _extract_nodes_from_edges(parsed_edges)
    else:
        node_list = [str(n) for n in nodes]
    
    # Remove isolated nodes if requested
    if remove_isolated and nodes is not None:
        # Find nodes that appear in edges
        nodes_in_edges = set()
        for edge in parsed_edges:
            nodes_in_edges.add(edge['source'])
            nodes_in_edges.add(edge['target'])
        
        # Filter node list
        node_list = [n for n in node_list if n in nodes_in_edges]
        
        # Filter node_groups if provided
        if node_groups is not None:
            node_groups = {k: v for k, v in node_groups.items() if str(k) in nodes_in_edges}
    
    # Build nodes array
    nodes_data = []
    for node in node_list:
        node_data = {'id': str(node)}
        if node_groups and node in node_groups:
            node_data['group'] = str(node_groups[node])
        elif node_groups and str(node) in node_groups:
            node_data['group'] = str(node_groups[str(node)])
        nodes_data.append(node_data)
    
    return _generate_html(nodes_data, parsed_edges, save_as, container_height=container_height)