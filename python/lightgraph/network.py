"""
LightGraph Network Visualization

A high-performance, canvas-based network visualization library.
"""
import json
import base64
import uuid
import numpy as np
import os
from typing import Optional, Dict, List, Union, Literal


class NetworkVisualization:
    """Wrapper for lightGraph network visualization HTML content.

    Implements Jupyter's rich display protocol via _repr_html_().
    Uses iframe isolation so multiple visualizations can coexist
    in a single notebook without element ID collisions.
    """

    def __init__(self, html_content: str, height: str = '800px'):
        self._html = html_content
        self._height = height

    @property
    def html(self) -> str:
        """The raw HTML content as a string."""
        return self._html

    def _repr_html_(self) -> str:
        """Jupyter rich display: renders in an iframe for DOM isolation."""
        full_html = (
            "<!DOCTYPE html><html><head><meta charset='utf-8'></head>"
            f"<body style='margin:0;padding:0;overflow:hidden;'>{self._html}</body></html>"
        )
        b64 = base64.b64encode(full_html.encode('utf-8')).decode('ascii')
        uid = uuid.uuid4().hex[:8]
        return (
            f'<iframe id="lightgraph-{uid}" '
            f'style="width:100%;height:{self._height};border:none;" '
            f'sandbox="allow-scripts allow-downloads"></iframe>'
            f'<script>(function(){{'
            f'var f=document.getElementById("lightgraph-{uid}");'
            f'f.srcdoc=atob("{b64}");'
            f'}})();</script>'
        )

    def __str__(self) -> str:
        """Returns raw HTML for backward compatibility."""
        return self._html

    def __repr__(self) -> str:
        size_kb = len(self._html) / 1024
        return f"NetworkVisualization({size_kb:.1f}KB, height='{self._height}')"

    def __contains__(self, item: str) -> bool:
        """Support 'in' operator for backward compatibility."""
        return item in self._html

    def save(self, filepath: str) -> None:
        """Save the visualization as a standalone HTML file."""
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(self._html)


def net_vis(
    adj_matrix: np.ndarray,
    node_names: np.ndarray,
    node_groups: Optional[Dict[str, str]] = None,
    node_colors: Optional[Dict[str, str]] = None,
    node_sizes: Optional[Dict[str, float]] = None,
    remove_unconnected: bool = True,
    # Display options
    show_arrows: bool = False,
    show_labels: bool = True,
    show_ellipses: bool = True,
    show_legend: bool = True,
    show_statistics: bool = False,
    show_tooltips: bool = True,
    # Layout options
    layout: Literal['force', 'circular'] = 'force',
    simulation_strength: float = 4000,
    link_distance: float = 100,
    # Styling options
    node_size: float = 7,
    label_font_size: float = 5,
    edge_opacity: float = 0.1,
    background_color: str = '#ffffff',
    # Output options
    height: str = '800px',
    save_as: Optional[str] = None
) -> NetworkVisualization:
    """
    Visualizes a network using lightGraph in Jupyter.

    Parameters
    ----------
    adj_matrix : np.ndarray
        The adjacency matrix of the network (n x n).
    node_names : np.ndarray
        Array of node names corresponding to rows/columns of the matrix.
    node_groups : dict, optional
        Dictionary mapping node names to group identifiers for coloring.
    node_colors : dict, optional
        Dictionary mapping node names to hex color strings (e.g., '#FF5733').
    node_sizes : dict, optional
        Dictionary mapping node names to size values.
    remove_unconnected : bool, default True
        Whether to remove nodes with no connections.
    show_arrows : bool, default False
        Whether to show directional arrows on edges.
    show_labels : bool, default True
        Whether to show node labels.
    show_ellipses : bool, default True
        Whether to show group ellipses around clustered nodes.
    show_legend : bool, default True
        Whether to show the group legend.
    show_statistics : bool, default False
        Whether to show the statistics panel.
    show_tooltips : bool, default True
        Whether to show tooltips on hover.
    layout : {'force', 'circular'}, default 'force'
        Layout algorithm to use.
        - 'force': Force-directed layout using physics simulation.
        - 'circular': Nodes arranged in a circle, grouped by category.
    simulation_strength : float, default 4000
        Repulsion strength for force-directed layout (divided by node count).
    link_distance : float, default 100
        Target distance between connected nodes.
    node_size : float, default 7
        Default size for nodes.
    label_font_size : float, default 5
        Font size for node labels.
    edge_opacity : float, default 0.1
        Opacity for edges (0.0 to 1.0).
    background_color : str, default '#ffffff'
        Background color for the canvas (hex color).
    height : str, default '800px'
        Height of the visualization container.
    save_as : str, optional
        If provided, save the HTML to this file path.

    Returns
    -------
    NetworkVisualization
        Object that auto-displays in Jupyter notebooks.
        Access raw HTML via str() or .html property.

    Examples
    --------
    >>> import numpy as np
    >>> from lightgraph import net_vis
    >>> adj = np.array([[0, 1, 0], [1, 0, 1], [0, 1, 0]])
    >>> names = np.array(['A', 'B', 'C'])
    >>> groups = {'A': 'group1', 'B': 'group2', 'C': 'group1'}
    >>> html = net_vis(adj, names, node_groups=groups)
    """
    # Validate inputs
    if not isinstance(adj_matrix, np.ndarray):
        raise ValueError("adj_matrix must be a numpy.ndarray.")
    if len(node_names) != adj_matrix.shape[0]:
        raise ValueError("Length of node_names must match the dimensions of adj_matrix.")
    if node_groups is not None and not isinstance(node_groups, dict):
        raise ValueError("node_groups must be a dictionary.")
    if node_colors is not None and not isinstance(node_colors, dict):
        raise ValueError("node_colors must be a dictionary.")
    if node_sizes is not None and not isinstance(node_sizes, dict):
        raise ValueError("node_sizes must be a dictionary.")
    if layout not in ['force', 'circular']:
        raise ValueError("layout must be 'force' or 'circular'.")

    # Remove unconnected nodes if requested
    if remove_unconnected:
        connected_nodes = (adj_matrix.sum(0) > 0) + (adj_matrix.sum(1) > 0)
        adj_matrix = adj_matrix[connected_nodes, :][:, connected_nodes]
        node_names = node_names[connected_nodes]
        if node_groups is not None:
            node_names_set = set(node_names)
            node_groups = {k: v for k, v in node_groups.items() if k in node_names_set}
        if node_colors is not None:
            node_names_set = set(node_names)
            node_colors = {k: v for k, v in node_colors.items() if k in node_names_set}
        if node_sizes is not None:
            node_names_set = set(node_names)
            node_sizes = {k: v for k, v in node_sizes.items() if k in node_names_set}

    # Build nodes list
    nodes = []
    for node in node_names:
        node_data = {'id': str(node)}
        if node_groups and node in node_groups:
            node_data['group'] = str(node_groups[node])
        if node_colors and node in node_colors:
            node_data['color'] = str(node_colors[node])
        if node_sizes and node in node_sizes:
            node_data['size'] = float(node_sizes[node])
        nodes.append(node_data)

    # Build edges list
    edges = []
    for i in range(adj_matrix.shape[0]):
        for j in range(adj_matrix.shape[1]):
            if adj_matrix[i, j] > 0:
                edges.append({
                    'source': str(node_names[i]),
                    'target': str(node_names[j]),
                    'weight': float(adj_matrix[i, j])
                })

    # Build configuration
    config = {
        'nodes': {
            'defaultSize': node_size,
        },
        'edges': {
            'showArrows': show_arrows,
            'defaultOpacity': edge_opacity,
        },
        'labels': {
            'visible': show_labels,
            'fontSize': label_font_size,
        },
        'simulation': {
            'chargeStrength': simulation_strength,
            'linkDistance': link_distance,
        },
        'groups': {
            'showEllipses': show_ellipses,
        },
        'canvas': {
            'backgroundColor': background_color,
        },
        'ui': {
            'showLegend': show_legend,
            'showStatistics': show_statistics,
            'showTooltips': show_tooltips,
        },
        'layout': layout,
    }

    nodes_json = json.dumps(nodes)
    edges_json = json.dumps(edges)
    config_json = json.dumps(config)

    # Load the JavaScript library
    script_path = os.path.join(
        os.path.dirname(__file__), "assets", "lightgraph.js")
    with open(script_path, 'r') as f:
        script_js = f.read()

    html_content = f"""
    <div style="position: relative; width: 100%; height: {height}; overflow: hidden;">
    <div id="lightGraph" style="width: 100%; height: 100%;"></div>
    <script type="application/json" id="nodesData">{nodes_json}</script>
    <script type="application/json" id="edgesData">{edges_json}</script>
    <script type="application/json" id="lightGraphConfig">{config_json}</script>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <script>{script_js}</script>
    </div>
    """

    result = NetworkVisualization(html_content, height=height)

    if save_as:
        result.save(save_as)

    return result
