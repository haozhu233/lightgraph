"""
LightGraph Network Visualization

A high-performance, HTML canvas-based network visualization library.
"""
import json
import base64
import uuid
import numpy as np
import os
from typing import Optional, Dict, List, Union, Literal

from .analytics import _normalize_edges, communities as _communities


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


def _hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i + 2], 16) for i in (0, 2, 4))


def _lerp_hex(rgb0, rgb1, t):
    return '#%02x%02x%02x' % tuple(
        round(a + (b - a) * t) for a, b in zip(rgb0, rgb1))


def _is_missing(value):
    """None or NaN (a float that is not equal to itself)."""
    return value is None or (isinstance(value, float) and value != value)


def _records_from_nodes(nodes):
    """Normalize a nodes table (pandas DataFrame with an 'id' column, or a
    list of dicts) into records, dropping missing attribute values."""
    if hasattr(nodes, 'columns'):  # pandas DataFrame, duck-typed
        if 'id' not in nodes.columns:
            raise ValueError("nodes DataFrame must contain an 'id' column.")
        columns = {c: list(nodes[c]) for c in nodes.columns}
        count = len(columns['id'])
        return [
            {c: columns[c][i] for c in columns if not _is_missing(columns[c][i])}
            for i in range(count)
        ]
    records = []
    for record in nodes:
        if 'id' not in record:
            raise ValueError("every node dict must contain an 'id' key.")
        records.append({k: v for k, v in record.items() if not _is_missing(v)})
    return records


def _merge_config(base, overrides):
    """Deep dict merge; mirrors the JS mergeConfig (overrides win)."""
    result = dict(base)
    for key, value in overrides.items():
        if isinstance(value, dict) and isinstance(result.get(key), dict):
            result[key] = _merge_config(result[key], value)
        else:
            result[key] = value
    return result


def net_vis(
    adj_matrix=None,
    node_names=None,
    node_groups: Optional[Union[Dict[str, str], str]] = None,
    group_colors: Optional[Dict[str, str]] = None,
    group_order: Optional[List[str]] = None,
    node_colors: Optional[Dict[str, str]] = None,
    node_sizes: Optional[Dict[str, float]] = None,
    remove_unconnected: bool = True,
    # Alternative data input
    edges=None,
    nodes=None,
    # Analytics mapping
    node_metric: Optional[Dict[str, float]] = None,
    metric_map: Literal['size', 'color', 'both'] = 'size',
    metric_size_range: tuple = (4, 20),
    metric_colors: tuple = ('#c6dbef', '#08306b'),
    metric_label: Optional[str] = None,
    # Display options
    show_arrows: bool = False,
    show_labels: bool = True,
    show_ellipses: bool = True,
    show_legend: bool = True,
    show_statistics: bool = False,
    show_tooltips: bool = True,
    # Interaction options
    highlight_neighbors: bool = True,
    neighbor_fade: float = 0.15,
    ego_filter: bool = True,
    ego_depth: int = 1,
    # Layout options
    layout: Literal['force', 'circular'] = 'force',
    simulation_strength: float = 4000,
    link_distance: float = 100,
    group_attraction: float = 0.3,
    warmup_ticks: Union[str, int] = 'auto',
    # Styling options
    node_size: float = 7,
    node_color: Optional[str] = None,
    label_font_size: float = 5,
    edge_width: Optional[float] = None,
    edge_color: Optional[str] = None,
    edge_opacity: Optional[float] = None,
    edge_weight_to_width: bool = False,
    edge_weight_to_opacity: bool = False,
    weight_width_range: tuple = (0.5, 4),
    weight_opacity_range: tuple = (0.05, 0.6),
    theme: Literal['light', 'dark'] = 'light',
    background_color: Optional[str] = None,
    # Canvas / viewport options
    auto_fit: bool = True,
    zoom_range: tuple = (0.1, 5),
    pixel_ratio: Optional[float] = None,
    export_scale: float = 2,
    # Escape hatch: raw JS config merged over everything above
    config: Optional[dict] = None,
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
    nodes : list or pandas.DataFrame, optional
        Optional node table: dicts (or DataFrame rows) with an 'id' key and
        optional 'group', 'color', 'size' attributes. Provides node order
        and per-node styling in one place; the explicit node_groups /
        node_colors / node_sizes dicts win over table columns.
    node_metric : dict, optional
        Mapping of node name to a numeric value (degree, PageRank, any
        score — see lightgraph.analytics). Values are min-max normalized
        and mapped to node size and/or color per metric_map. Explicit
        node_sizes/node_colors entries win over metric-derived ones; group
        colors always win over node colors.
    metric_map : {'size', 'color', 'both'}, default 'size'
        Which visual channel(s) node_metric drives.
    metric_size_range : tuple, default (4, 20)
        Node size range (min, max) for metric-driven sizing.
    metric_colors : tuple, default ('#c6dbef', '#08306b')
        Low/high hex colors for metric-driven coloring.
    metric_label : str, optional
        Title for the metric section of the legend (e.g. 'PageRank').
        Defaults to 'Metric'. The legend section appears whenever
        node_metric drives size and/or color and show_legend is on.
    node_groups : dict or 'auto', optional
        Dictionary mapping node names to group identifiers for coloring.
        Pass 'auto' to detect communities automatically (networkx Louvain
        when installed, else a built-in label-propagation fallback).
    group_colors : dict, optional
        Mapping of group name to hex color (e.g. {'alpha': '#ff7f0e'}),
        pinning those groups' colors. Unpinned groups stay on the default
        palette. Names matching no group are ignored, so one mapping can be
        reused across filtered subsets of the same data.
    group_order : list, optional
        Explicit group ordering for palette assignment. Groups keep their
        palette slot even when absent from the data, so passing the same
        list (e.g. computed once from the full dataset) to every figure in
        a series keeps each group's color stable across subsets. Groups not
        listed are appended in sorted order. Without group_order, groups
        are assigned palette colors in sorted-name order.
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
    highlight_neighbors : bool, default True
        Fade everything outside the 1-hop neighborhood of hovered or
        selected nodes.
    neighbor_fade : float, default 0.15
        Opacity multiplier applied to faded elements while highlighting.
    ego_filter : bool, default True
        Double-clicking a node shows only its k-hop neighborhood
        (double-click empty space or press Escape to restore).
    ego_depth : int, default 1
        Neighborhood depth (hops) for the ego filter.
    layout : {'force', 'circular'}, default 'force'
        Layout algorithm to use.
        - 'force': Force-directed layout using physics simulation.
        - 'circular': Nodes arranged in a circle, grouped by category.
    simulation_strength : float, default 4000
        Repulsion strength for force-directed layout (divided by node count).
    link_distance : float, default 100
        Target distance between connected nodes.
    group_attraction : float, default 0.3
        Strength of the pull toward each group's centroid in the force
        layout, which separates groups spatially. 0 disables.
    warmup_ticks : 'auto' or int, default 'auto'
        Synchronous layout ticks run before the first paint so the graph
        appears already untangled. 'auto' spends a roughly fixed time
        budget; a number forces that tick count; 0 disables.
    node_size : float, default 7
        Default size for nodes.
    node_color : str, optional
        Default node fill color (hex). Defaults to the theme color.
    label_font_size : float, default 5
        Font size for node labels.
    edge_width : float, optional
        Base width for edges (JS default 0.45).
    edge_color : str, optional
        Default edge color (hex). Defaults to the theme color.
    edge_opacity : float, optional
        Opacity for edges (0.0 to 1.0). By default opacity adapts
        automatically to the on-screen edge density and zoom level, so
        dense graphs stay readable; setting a value pins it (users can
        still re-enable auto mode from the settings sidebar).
    edge_weight_to_width : bool, default False
        Scale edge width by edge weight.
    edge_weight_to_opacity : bool, default False
        Scale edge opacity by edge weight.
    weight_width_range : tuple, default (0.5, 4)
        Edge width range (min, max) used by edge_weight_to_width.
    weight_opacity_range : tuple, default (0.05, 0.6)
        Edge opacity range (min, max) used by edge_weight_to_opacity.
    theme : {'light', 'dark'}, default 'light'
        UI and canvas color theme.
    background_color : str, optional
        Background color for the canvas (hex color). Defaults to white in
        the light theme and near-black in the dark theme.
    auto_fit : bool, default True
        Zoom to fit the graph once the layout settles (skipped if the user
        already panned/zoomed manually).
    zoom_range : tuple, default (0.1, 5)
        Minimum and maximum zoom factors.
    pixel_ratio : float, optional
        Backing-store resolution multiplier. Defaults to the display's
        devicePixelRatio (sharp on retina); set 1 to trade sharpness for
        speed on very large graphs.
    export_scale : float, default 2
        Resolution multiplier for PNG export, relative to on-screen size.
    config : dict, optional
        Raw lightGraph config (JS shape, e.g. {'nodes': {'borderWidth': 2}})
        deep-merged over everything above — full access to any JS option
        without a dedicated keyword.
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

    Using an edge list plus the analytics helpers:

    >>> from lightgraph import net_vis, pagerank, communities
    >>> edges = [('A', 'B'), ('B', 'C'), ('C', 'A'), ('C', 'D')]
    >>> html = net_vis(edges=edges, node_metric=pagerank(edges),
    ...                node_groups=communities(edges))
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
    if group_colors is not None and not isinstance(group_colors, dict):
        raise ValueError("group_colors must be a dictionary of {group: hex_color}.")
    if group_order is not None and isinstance(group_order, (str, dict)):
        raise ValueError("group_order must be a list of group names.")
    if node_sizes is not None and not isinstance(node_sizes, dict):
        raise ValueError("node_sizes must be a dictionary.")
    if node_metric is not None and not isinstance(node_metric, dict):
        raise ValueError("node_metric must be a dictionary.")
    if metric_map not in ['size', 'color', 'both']:
        raise ValueError("metric_map must be 'size', 'color', or 'both'.")
    if layout not in ['force', 'circular']:
        raise ValueError("layout must be 'force' or 'circular'.")

    # Fold an optional nodes table into names + attribute dicts. Explicit
    # node_groups/node_colors/node_sizes entries win over table columns.
    if nodes is not None:
        records = _records_from_nodes(nodes)
        table_names = [str(r['id']) for r in records]
        table_groups = {str(r['id']): r['group'] for r in records if 'group' in r}
        table_colors = {str(r['id']): r['color'] for r in records if 'color' in r}
        table_sizes = {str(r['id']): r['size'] for r in records if 'size' in r}
        if adj_matrix is None and node_names is None:
            node_names = table_names
        if table_groups and node_groups != 'auto':
            node_groups = {**table_groups, **(node_groups or {})}
        if table_colors:
            node_colors = {**table_colors, **(node_colors or {})}
        if table_sizes:
            node_sizes = {**table_sizes, **(node_sizes or {})}

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
        edge_dicts = _normalize_edges(edges)
        if node_names is None:
            # Derive node names from the edges, preserving first appearance.
            node_names = list(dict.fromkeys(
                name for e in edge_dicts for name in (e['source'], e['target'])))
        else:
            # A nodes table may omit nodes that appear in edges; keep them.
            known = {str(n) for n in node_names}
            extras = [name for e in edge_dicts for name in (e['source'], e['target'])
                      if name not in known]
            node_names = list(node_names) + list(dict.fromkeys(extras))

    # Resolve automatic community detection into a concrete group mapping
    if isinstance(node_groups, str):
        node_groups = _communities(edge_dicts)

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
    # Channels the metric actually drove are described in the legend
    # (ui.metricLegend) so the JS can render a size/color key.
    metric_legend = None
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
            applied = []
            if metric_map in ('size', 'both'):
                node_sizes = dict(node_sizes or {})
                size_lo, size_hi = metric_size_range
                for n, v in present:
                    if v is not None and n not in node_sizes:
                        t = (v - lo) / span
                        node_sizes[n] = size_lo + t * (size_hi - size_lo)
                        if 'size' not in applied:
                            applied.append('size')
            if metric_map in ('color', 'both'):
                node_colors = dict(node_colors or {})
                rgb0 = _hex_to_rgb(metric_colors[0])
                rgb1 = _hex_to_rgb(metric_colors[1])
                for n, v in present:
                    if v is not None and n not in node_colors:
                        t = (v - lo) / span
                        node_colors[n] = _lerp_hex(rgb0, rgb1, t)
                        if 'color' not in applied:
                            applied.append('color')
            if applied:
                metric_legend = {
                    'map': 'both' if len(applied) == 2 else applied[0],
                    'min': float(lo),
                    'max': float(hi),
                }
                if metric_label is not None:
                    metric_legend['label'] = str(metric_label)
                if 'size' in applied:
                    metric_legend['sizeRange'] = [float(metric_size_range[0]),
                                                  float(metric_size_range[1])]
                if 'color' in applied:
                    metric_legend['colors'] = [str(metric_colors[0]),
                                               str(metric_colors[1])]

    # Build nodes list. Attribute dicts may be keyed by the original node
    # objects or their string form (auto-detected communities use strings).
    def _lookup(mapping, key):
        if not mapping:
            return None
        if key in mapping:
            return mapping[key]
        return mapping.get(str(key))

    node_list = []
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
        node_list.append(node_data)

    # Build configuration. Omitted keys (rather than nulls) let the JS side
    # apply its adaptive/theme-aware defaults.
    graph_config = {
        'nodes': {
            'defaultSize': node_size,
        },
        'edges': {
            'showArrows': show_arrows,
            'weightToWidth': edge_weight_to_width,
            'weightToOpacity': edge_weight_to_opacity,
            'weightWidthRange': list(weight_width_range),
            'weightOpacityRange': list(weight_opacity_range),
        },
        'highlight': {
            'enabled': highlight_neighbors,
            'neighborFade': neighbor_fade,
        },
        'egoFilter': {
            'enabled': ego_filter,
            'depth': ego_depth,
        },
        'labels': {
            'visible': show_labels,
            'fontSize': label_font_size,
        },
        'simulation': {
            'chargeStrength': simulation_strength,
            'linkDistance': link_distance,
            'groupAttraction': group_attraction,
            'warmupTicks': warmup_ticks,
        },
        'groups': {
            'showEllipses': show_ellipses,
        },
        'canvas': {
            'autoFit': auto_fit,
            'zoomMin': zoom_range[0],
            'zoomMax': zoom_range[1],
            'exportScale': export_scale,
        },
        'ui': {
            'theme': theme,
            'showLegend': show_legend,
            'showStatistics': show_statistics,
            'showTooltips': show_tooltips,
        },
        'layout': layout,
    }
    if metric_legend is not None:
        graph_config['ui']['metricLegend'] = metric_legend

    # Only set optional values if explicitly provided
    if group_colors is not None:
        graph_config['groups']['colors'] = {
            str(k): str(v) for k, v in group_colors.items()}
    if group_order is not None:
        graph_config['groups']['colorOrder'] = [str(g) for g in group_order]
    if node_color is not None:
        graph_config['nodes']['defaultColor'] = node_color
    if edge_width is not None:
        graph_config['edges']['defaultWidth'] = edge_width
    if edge_color is not None:
        graph_config['edges']['defaultColor'] = edge_color
    if edge_opacity is not None:
        graph_config['edges']['defaultOpacity'] = edge_opacity
    if background_color is not None:
        graph_config['canvas']['backgroundColor'] = background_color
    if pixel_ratio is not None:
        graph_config['canvas']['pixelRatio'] = pixel_ratio
    if config:
        graph_config = _merge_config(graph_config, config)

    nodes_json = json.dumps(node_list)
    edges_json = json.dumps(edge_dicts)
    config_json = json.dumps(graph_config)

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
