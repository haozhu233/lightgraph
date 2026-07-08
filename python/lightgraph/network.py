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


def _edges_from_dense(adj_matrix, node_names, dedup_symmetric):
    """Edge dicts from a dense matrix, vectorized via np.nonzero."""
    if dedup_symmetric:
        # Upper triangle (incl. diagonal for self-loops): each undirected
        # edge is emitted once instead of twice.
        rows, cols = np.nonzero(np.triu(adj_matrix) > 0)
    else:
        rows, cols = np.nonzero(adj_matrix > 0)
    weights = np.asarray(adj_matrix)[rows, cols]
    return [
        {'source': str(node_names[i]), 'target': str(node_names[j]), 'weight': float(w)}
        for i, j, w in zip(rows, cols, weights)
    ]


def _edges_from_sparse(adj_matrix, node_names, dedup_symmetric):
    """Edge dicts from a scipy.sparse matrix without densifying."""
    coo = adj_matrix.tocoo()
    return [
        {'source': str(node_names[i]), 'target': str(node_names[j]), 'weight': float(w)}
        for i, j, w in zip(coo.row, coo.col, coo.data)
        if w > 0 and not (dedup_symmetric and i > j)
    ]


def _is_symmetric(adj_matrix) -> bool:
    if hasattr(adj_matrix, 'tocoo'):  # scipy.sparse
        try:
            return (adj_matrix != adj_matrix.T).nnz == 0
        except (TypeError, ValueError):
            return False
    return adj_matrix.shape[0] == adj_matrix.shape[1] and np.array_equal(
        adj_matrix, adj_matrix.T)


def _label_propagation_communities(edge_dicts, seed=42, max_iter=20):
    """Dependency-free community detection via seeded label propagation.
    Returns a list of sets of node names (connected nodes only)."""
    import random
    rng = random.Random(seed)
    adjacency = {}
    for e in edge_dicts:
        if e['source'] == e['target']:
            continue
        adjacency.setdefault(e['source'], []).append(e['target'])
        adjacency.setdefault(e['target'], []).append(e['source'])

    labels = {n: n for n in adjacency}
    order = list(adjacency)
    for _ in range(max_iter):
        changed = False
        rng.shuffle(order)
        for n in order:
            counts = {}
            for m in adjacency[n]:
                counts[labels[m]] = counts.get(labels[m], 0) + 1
            best = max(counts.values())
            candidates = sorted(l for l, c in counts.items() if c == best)
            new_label = candidates[rng.randrange(len(candidates))]
            if new_label != labels[n]:
                labels[n] = new_label
                changed = True
        if not changed:
            break

    communities = {}
    for n, label in labels.items():
        communities.setdefault(label, set()).add(n)
    return list(communities.values())


def _detect_communities(edge_dicts):
    """Community assignment for node_groups='auto': networkx Louvain when
    installed, else the label-propagation fallback. Returns {name: 'c1'...};
    singleton communities and isolated nodes stay ungrouped."""
    try:
        import networkx as nx
        graph = nx.Graph()
        for e in edge_dicts:
            graph.add_edge(e['source'], e['target'], weight=e.get('weight', 1.0))
        communities = nx.community.louvain_communities(graph, seed=42)
    except ImportError:
        communities = _label_propagation_communities(edge_dicts)

    groups = {}
    ordered = sorted(
        (c for c in communities if len(c) >= 2),
        key=lambda c: (-len(c), min(c)))
    for idx, community in enumerate(ordered):
        for name in community:
            groups[name] = f'c{idx + 1}'
    return groups


def _hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i + 2], 16) for i in (0, 2, 4))


def _lerp_hex(rgb0, rgb1, t):
    return '#%02x%02x%02x' % tuple(
        round(a + (b - a) * t) for a, b in zip(rgb0, rgb1))


def _edges_from_edge_list(edges):
    """Normalize an edge list (tuples, numpy rows, dicts, or a pandas
    DataFrame with source/target[/weight] columns) into edge dicts."""
    if hasattr(edges, 'columns'):  # pandas DataFrame, duck-typed
        weights = edges['weight'] if 'weight' in edges.columns else None
        return [
            {'source': str(s), 'target': str(t),
             'weight': float(weights.iloc[k]) if weights is not None else 1.0}
            for k, (s, t) in enumerate(zip(edges['source'], edges['target']))
        ]
    normalized = []
    for edge in edges:
        if isinstance(edge, dict):
            normalized.append({
                'source': str(edge['source']),
                'target': str(edge['target']),
                'weight': float(edge.get('weight', 1.0)),
            })
        else:
            source, target = edge[0], edge[1]
            weight = float(edge[2]) if len(edge) > 2 else 1.0
            normalized.append(
                {'source': str(source), 'target': str(target), 'weight': weight})
    return normalized


def net_vis(
    adj_matrix=None,
    node_names=None,
    node_groups: Optional[Dict[str, str]] = None,
    node_colors: Optional[Dict[str, str]] = None,
    node_sizes: Optional[Dict[str, float]] = None,
    remove_unconnected: bool = True,
    # Alternative data input
    edges=None,
    # Analytics mapping
    node_metric: Optional[Dict[str, float]] = None,
    metric_map: Literal['size', 'color', 'both'] = 'size',
    metric_size_range: tuple = (4, 20),
    metric_colors: tuple = ('#c6dbef', '#08306b'),
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
    edge_opacity: Optional[float] = None,
    edge_weight_to_width: bool = False,
    edge_weight_to_opacity: bool = False,
    highlight_neighbors: bool = True,
    group_attraction: float = 0.3,
    theme: Literal['light', 'dark'] = 'light',
    background_color: Optional[str] = None,
    # Output options
    height: str = '800px',
    save_as: Optional[str] = None
) -> NetworkVisualization:
    """
    Visualizes a network using lightGraph in Jupyter.

    Accepts either an adjacency matrix (dense numpy or scipy.sparse) with
    node_names, or an edge list via the `edges` keyword. For large graphs an
    edge list or sparse matrix is strongly preferred: a dense 10,000-node
    matrix holds 100M entries to describe what is usually a few thousand
    edges.

    Parameters
    ----------
    adj_matrix : np.ndarray or scipy.sparse matrix, optional
        The adjacency matrix of the network (n x n). Symmetric matrices are
        treated as undirected and each edge is emitted once (unless
        show_arrows=True, where both directions are kept).
    node_names : array-like, optional
        Node names corresponding to rows/columns of the matrix. Required
        with adj_matrix; optional with edges (derived from the edge list).
    edges : list or pandas.DataFrame, optional
        Edge list alternative to adj_matrix. Accepts (source, target) or
        (source, target, weight) tuples, dicts with source/target/weight
        keys, or a DataFrame with source/target[/weight] columns.
    node_metric : dict, optional
        Mapping of node name to a numeric value (degree, PageRank, any
        score). Values are min-max normalized and mapped to node size and/or
        color per metric_map. Explicit node_sizes/node_colors entries win
        over metric-derived ones; group colors always win over node colors.
    metric_map : {'size', 'color', 'both'}, default 'size'
        Which visual channel(s) node_metric drives.
    metric_size_range : tuple, default (4, 20)
        Node size range (min, max) for metric-driven sizing.
    metric_colors : tuple, default ('#c6dbef', '#08306b')
        Low/high hex colors for metric-driven coloring.
    edge_weight_to_width : bool, default False
        Scale edge width by edge weight.
    edge_weight_to_opacity : bool, default False
        Scale edge opacity by edge weight.
    highlight_neighbors : bool, default True
        Fade everything outside the 1-hop neighborhood of hovered or
        selected nodes.
    node_groups : dict or 'auto', optional
        Dictionary mapping node names to group identifiers for coloring.
        Pass 'auto' to detect communities automatically (networkx Louvain
        when installed, else a built-in label-propagation fallback).
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
    edge_opacity : float, optional
        Opacity for edges (0.0 to 1.0). Defaults to an adaptive value based
        on edge count (faint for dense graphs, solid for small ones).
    group_attraction : float, default 0.3
        Strength of the pull toward each group's centroid in the force
        layout, which separates groups spatially. 0 disables.
    theme : {'light', 'dark'}, default 'light'
        UI and canvas color theme.
    background_color : str, optional
        Background color for the canvas (hex color). Defaults to white in
        the light theme and near-black in the dark theme.
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
    if (adj_matrix is None) == (edges is None):
        raise ValueError("Provide exactly one of adj_matrix or edges.")
    if adj_matrix is not None:
        is_sparse = hasattr(adj_matrix, 'tocoo')
        if not is_sparse and not isinstance(adj_matrix, np.ndarray):
            raise ValueError("adj_matrix must be a numpy.ndarray or scipy.sparse matrix.")
        if node_names is None:
            raise ValueError("node_names is required when using adj_matrix.")
        node_names = np.asarray(node_names)
        if len(node_names) != adj_matrix.shape[0]:
            raise ValueError("Length of node_names must match the dimensions of adj_matrix.")
    if node_groups is not None and node_groups != 'auto' and not isinstance(node_groups, dict):
        raise ValueError("node_groups must be a dictionary or 'auto'.")
    if node_colors is not None and not isinstance(node_colors, dict):
        raise ValueError("node_colors must be a dictionary.")
    if node_sizes is not None and not isinstance(node_sizes, dict):
        raise ValueError("node_sizes must be a dictionary.")
    if node_metric is not None and not isinstance(node_metric, dict):
        raise ValueError("node_metric must be a dictionary.")
    if metric_map not in ['size', 'color', 'both']:
        raise ValueError("metric_map must be 'size', 'color', or 'both'.")
    if layout not in ['force', 'circular']:
        raise ValueError("layout must be 'force' or 'circular'.")

    # Build the edge list
    if adj_matrix is not None:
        # A symmetric matrix describes an undirected graph: emit each edge
        # once instead of twice (halves simulation and render work). With
        # arrows shown, both directions carry meaning, so keep them.
        dedup_symmetric = not show_arrows and _is_symmetric(adj_matrix)
        if is_sparse:
            edge_dicts = _edges_from_sparse(adj_matrix, node_names, dedup_symmetric)
        else:
            edge_dicts = _edges_from_dense(adj_matrix, node_names, dedup_symmetric)
    else:
        edge_dicts = _edges_from_edge_list(edges)
        if node_names is None:
            # Derive node names from the edges, preserving first appearance.
            node_names = list(dict.fromkeys(
                name for e in edge_dicts for name in (e['source'], e['target'])))

    # Resolve automatic community detection into a concrete group mapping
    if isinstance(node_groups, str):
        node_groups = _detect_communities(edge_dicts)

    # Remove unconnected nodes if requested
    if remove_unconnected:
        connected = {e['source'] for e in edge_dicts} | {e['target'] for e in edge_dicts}
        node_names = [n for n in node_names if str(n) in connected]
        # Attribute dicts may be keyed by original node objects or strings
        node_names_set = set(node_names) | {str(n) for n in node_names}
        if node_groups is not None:
            node_groups = {k: v for k, v in node_groups.items() if k in node_names_set}
        if node_colors is not None:
            node_colors = {k: v for k, v in node_colors.items() if k in node_names_set}
        if node_sizes is not None:
            node_sizes = {k: v for k, v in node_sizes.items() if k in node_names_set}

    # Map node_metric onto size and/or color. Metric-derived values fill in
    # around explicit node_sizes/node_colors entries, never replace them.
    if node_metric is not None:
        def _metric_for(n):
            if n in node_metric:
                return node_metric[n]
            return node_metric.get(str(n))

        present = [(n, _metric_for(n)) for n in node_names]
        values = [v for _, v in present if v is not None]
        if values:
            lo, hi = min(values), max(values)
            span = (hi - lo) or 1.0
            if metric_map in ('size', 'both'):
                node_sizes = dict(node_sizes or {})
                size_lo, size_hi = metric_size_range
                for n, v in present:
                    if v is not None and n not in node_sizes:
                        t = (v - lo) / span
                        node_sizes[n] = size_lo + t * (size_hi - size_lo)
            if metric_map in ('color', 'both'):
                node_colors = dict(node_colors or {})
                rgb0 = _hex_to_rgb(metric_colors[0])
                rgb1 = _hex_to_rgb(metric_colors[1])
                for n, v in present:
                    if v is not None and n not in node_colors:
                        t = (v - lo) / span
                        node_colors[n] = _lerp_hex(rgb0, rgb1, t)

    # Build nodes list. Attribute dicts may be keyed by the original node
    # objects or their string form (auto-detected communities use strings).
    def _lookup(mapping, key):
        if not mapping:
            return None
        if key in mapping:
            return mapping[key]
        return mapping.get(str(key))

    nodes = []
    for node in node_names:
        node_data = {'id': str(node)}
        group = _lookup(node_groups, node)
        if group is not None:
            node_data['group'] = str(group)
        color = _lookup(node_colors, node)
        if color is not None:
            node_data['color'] = str(color)
        size = _lookup(node_sizes, node)
        if size is not None:
            node_data['size'] = float(size)
        nodes.append(node_data)

    # Build configuration. Omitted keys (rather than nulls) let the JS side
    # apply its adaptive/theme-aware defaults.
    config = {
        'nodes': {
            'defaultSize': node_size,
        },
        'edges': {
            'showArrows': show_arrows,
            'weightToWidth': edge_weight_to_width,
            'weightToOpacity': edge_weight_to_opacity,
        },
        'highlight': {
            'enabled': highlight_neighbors,
        },
        'labels': {
            'visible': show_labels,
            'fontSize': label_font_size,
        },
        'simulation': {
            'chargeStrength': simulation_strength,
            'linkDistance': link_distance,
            'groupAttraction': group_attraction,
        },
        'groups': {
            'showEllipses': show_ellipses,
        },
        'canvas': {},
        'ui': {
            'showLegend': show_legend,
            'showStatistics': show_statistics,
            'showTooltips': show_tooltips,
            'theme': theme,
        },
        'layout': layout,
    }
    if edge_opacity is not None:
        config['edges']['defaultOpacity'] = edge_opacity
    if background_color is not None:
        config['canvas']['backgroundColor'] = background_color

    nodes_json = json.dumps(nodes)
    edges_json = json.dumps(edge_dicts)
    config_json = json.dumps(config)

    # Inline the vendored JS libraries so the output is fully standalone
    # (works in offline notebooks and saved HTML files).
    assets_dir = os.path.join(os.path.dirname(__file__), "assets")
    with open(os.path.join(assets_dir, "lightgraph.js"), 'r') as f:
        script_js = f.read()
    with open(os.path.join(assets_dir, "d3.v7.min.js"), 'r') as f:
        d3_js = f.read()

    html_content = f"""
    <div style="position: relative; width: 100%; height: {height}; overflow: hidden;">
    <div id="lightGraph" style="width: 100%; height: 100%;"></div>
    <script type="application/json" id="nodesData">{nodes_json}</script>
    <script type="application/json" id="edgesData">{edges_json}</script>
    <script type="application/json" id="lightGraphConfig">{config_json}</script>
    <script>{d3_js}</script>
    <script>{script_js}</script>
    </div>
    """

    result = NetworkVisualization(html_content, height=height)

    if save_as:
        result.save(save_as)

    return result
