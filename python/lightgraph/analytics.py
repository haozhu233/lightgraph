"""
Dependency-free graph analytics for lightgraph.

Every function accepts the same flexible edge input as :func:`net_vis`:
a list of ``(source, target)`` / ``(source, target, weight)`` tuples,
a list of dicts with ``source``/``target``/``weight`` keys, or a pandas
DataFrame with ``source``/``target`` (and optional ``weight``) columns.

Results are plain dicts keyed by node name, designed to plug straight
back into the visualization::

    from lightgraph import net_vis, pagerank, communities

    net_vis(edges=edges,
            node_metric=pagerank(edges),
            node_groups=communities(edges))

Graphs are treated as undirected and self-loops are ignored; parallel
edges have their weights summed. Nodes are discovered from the edge
list, so isolated nodes do not appear in the results.

When networkx is installed, :func:`communities` uses its Louvain
implementation; everything else is pure Python (Brandes betweenness,
BFS closeness, power-iteration PageRank/eigenvector), which is fast
enough for the tens of thousands of edges lightgraph is built to draw.
"""
from collections import deque
import math


# =========================================================================
# Edge normalization (shared with network.py)
# =========================================================================

def _normalize_edges(edges):
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


def _adjacency(edges):
    """Symmetric weighted adjacency {node: {neighbor: weight}}.

    Self-loops contribute the node but no neighbor; parallel edges (and
    both directions of an already-symmetric edge list) sum their weights,
    which keeps relative magnitudes consistent across the whole graph.
    """
    adj = {}
    for e in _normalize_edges(edges):
        s, t, w = e['source'], e['target'], e['weight']
        adj.setdefault(s, {})
        adj.setdefault(t, {})
        if s == t:
            continue
        adj[s][t] = adj[s].get(t, 0.0) + w
        adj[t][s] = adj[t].get(s, 0.0) + w
    return adj


# =========================================================================
# Centrality measures
# =========================================================================

def degree(edges, weighted=False):
    """Degree (neighbor count) or, with weighted=True, strength (sum of
    incident edge weights) of every node. Returns {node: value}."""
    adj = _adjacency(edges)
    if weighted:
        return {v: float(sum(nbrs.values())) for v, nbrs in adj.items()}
    return {v: float(len(nbrs)) for v, nbrs in adj.items()}


def betweenness(edges, normalized=True):
    """Shortest-path betweenness centrality (Brandes' algorithm, edges
    treated as unweighted). With normalized=True values are divided by
    the number of node pairs, so they are comparable across graph sizes.
    Returns {node: value}."""
    adj = _adjacency(edges)
    nodes = list(adj)
    centrality = dict.fromkeys(nodes, 0.0)
    for source in nodes:
        # Single-source shortest paths, counting path multiplicities.
        stack = []
        predecessors = {}
        sigma = dict.fromkeys(nodes, 0.0)
        sigma[source] = 1.0
        dist = {source: 0}
        queue = deque([source])
        while queue:
            v = queue.popleft()
            stack.append(v)
            for w in adj[v]:
                if w not in dist:
                    dist[w] = dist[v] + 1
                    queue.append(w)
                if dist[w] == dist[v] + 1:
                    sigma[w] += sigma[v]
                    predecessors.setdefault(w, []).append(v)
        # Back-propagate pair dependencies.
        delta = dict.fromkeys(nodes, 0.0)
        while stack:
            w = stack.pop()
            for v in predecessors.get(w, ()):
                delta[v] += sigma[v] / sigma[w] * (1.0 + delta[w])
            if w != source:
                centrality[w] += delta[w]
    n = len(nodes)
    if normalized:
        # Each unordered pair was counted from both endpoints; the pair
        # count for undirected graphs is (n-1)(n-2)/2.
        scale = 1.0 / ((n - 1) * (n - 2)) if n > 2 else 1.0
    else:
        scale = 0.5
    return {v: c * scale for v, c in centrality.items()}


def closeness(edges):
    """Closeness centrality (edges treated as unweighted), using the
    Wasserman-Faust correction so scores stay comparable when the graph
    has several connected components. Returns {node: value}."""
    adj = _adjacency(edges)
    n = len(adj)
    result = {}
    for source in adj:
        dist = {source: 0}
        queue = deque([source])
        total = 0
        while queue:
            v = queue.popleft()
            for w in adj[v]:
                if w not in dist:
                    dist[w] = dist[v] + 1
                    total += dist[w]
                    queue.append(w)
        reachable = len(dist) - 1  # excluding the source itself
        if total > 0 and n > 1:
            result[source] = (reachable / total) * (reachable / (n - 1))
        else:
            result[source] = 0.0
    return result


def eigenvector(edges, weighted=True, max_iter=200, tol=1e-8):
    """Eigenvector centrality via power iteration on the (weighted)
    adjacency matrix. Returns {node: value} normalized to unit length."""
    adj = _adjacency(edges)
    if not adj:
        return {}
    n = len(adj)
    x = dict.fromkeys(adj, 1.0 / n)
    for _ in range(max_iter):
        x_prev = x
        x = dict.fromkeys(adj, 0.0)
        for v, nbrs in adj.items():
            for w, weight in nbrs.items():
                x[w] += x_prev[v] * (weight if weighted else 1.0)
        norm = math.sqrt(sum(value * value for value in x.values()))
        if norm == 0:
            # No edges among reachable mass (e.g. only self-loops).
            return dict.fromkeys(adj, 0.0)
        x = {v: value / norm for v, value in x.items()}
        if sum(abs(x[v] - x_prev[v]) for v in adj) < n * tol:
            break
    return x


def pagerank(edges, damping=0.85, weighted=True, max_iter=200, tol=1e-10):
    """PageRank on the undirected (weighted) graph. Returns {node: value}
    summing to 1."""
    adj = _adjacency(edges)
    if not adj:
        return {}
    n = len(adj)
    if weighted:
        out_weight = {v: sum(nbrs.values()) for v, nbrs in adj.items()}
    else:
        out_weight = {v: float(len(nbrs)) for v, nbrs in adj.items()}
    rank = dict.fromkeys(adj, 1.0 / n)
    base = (1.0 - damping) / n
    for _ in range(max_iter):
        # Nodes without neighbors (self-loops only) spread their rank
        # uniformly so the total stays 1.
        dangling = sum(rank[v] for v in adj if out_weight[v] == 0)
        new_rank = dict.fromkeys(adj, base + damping * dangling / n)
        for v, nbrs in adj.items():
            if out_weight[v] == 0:
                continue
            share = damping * rank[v] / out_weight[v]
            for w, weight in nbrs.items():
                new_rank[w] += share * (weight if weighted else 1.0)
        change = sum(abs(new_rank[v] - rank[v]) for v in adj)
        rank = new_rank
        if change < n * tol:
            break
    return rank


# =========================================================================
# Structure: communities, components, neighborhoods
# =========================================================================

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

    result = {}
    for n, label in labels.items():
        result.setdefault(label, set()).add(n)
    return list(result.values())


def communities(edges, seed=42):
    """Community detection: networkx Louvain when installed, else a
    built-in label-propagation fallback. Returns {node: 'c1', ...} with
    communities numbered largest-first; singleton communities and
    isolated nodes are left out, so the result can be passed directly
    to net_vis(node_groups=...)."""
    edge_dicts = _normalize_edges(edges)
    try:
        import networkx as nx
        graph = nx.Graph()
        for e in edge_dicts:
            graph.add_edge(e['source'], e['target'], weight=e['weight'])
        found = nx.community.louvain_communities(graph, seed=seed)
    except ImportError:
        found = _label_propagation_communities(edge_dicts, seed=seed)

    groups = {}
    ordered = sorted(
        (c for c in found if len(c) >= 2),
        key=lambda c: (-len(c), min(c)))
    for idx, community in enumerate(ordered):
        for name in community:
            groups[name] = f'c{idx + 1}'
    return groups


def components(edges):
    """Connected components. Returns {node: component_id} with integer
    ids numbered from 1 in decreasing component size."""
    adj = _adjacency(edges)
    seen = set()
    groups = []
    for source in adj:
        if source in seen:
            continue
        member = {source}
        queue = deque([source])
        while queue:
            v = queue.popleft()
            for w in adj[v]:
                if w not in member:
                    member.add(w)
                    queue.append(w)
        seen |= member
        groups.append(member)
    groups.sort(key=lambda c: (-len(c), min(c)))
    return {v: idx + 1 for idx, group in enumerate(groups) for v in group}


def neighbors(edges, node, depth=1):
    """The k-hop neighborhood of a node (the same set the interactive
    double-click ego filter shows). Returns a sorted list of node names
    including the node itself."""
    adj = _adjacency(edges)
    node = str(node)
    if node not in adj:
        raise KeyError(f'node {node!r} not found in edges')
    dist = {node: 0}
    queue = deque([node])
    while queue:
        v = queue.popleft()
        if dist[v] >= depth:
            continue
        for w in adj[v]:
            if w not in dist:
                dist[w] = dist[v] + 1
                queue.append(w)
    return sorted(dist)


# =========================================================================
# Whole-graph summary and small conveniences
# =========================================================================

def summary(edges):
    """Headline statistics of the graph. Returns a dict with node/edge
    counts, density, degree stats, component structure, and the global
    clustering coefficient (transitivity)."""
    adj = _adjacency(edges)
    n = len(adj)
    degrees = [len(nbrs) for nbrs in adj.values()]
    edge_count = sum(degrees) // 2
    comp = components(edges)
    comp_sizes = {}
    for cid in comp.values():
        comp_sizes[cid] = comp_sizes.get(cid, 0) + 1

    # Transitivity: 3 * triangles / connected triples.
    triangles = 0
    triples = 0
    for v, nbrs in adj.items():
        d = len(nbrs)
        triples += d * (d - 1) // 2
        neighbor_set = set(nbrs)
        for w in nbrs:
            triangles += len(neighbor_set & set(adj[w]))
    # Each triangle is counted twice per vertex (once per neighbor pair
    # ordering) across its three vertices: 6 times in total.
    triangles //= 6

    return {
        'nodes': n,
        'edges': edge_count,
        'density': (2.0 * edge_count / (n * (n - 1))) if n > 1 else 0.0,
        'average_degree': (sum(degrees) / n) if n else 0.0,
        'max_degree': max(degrees) if degrees else 0,
        'components': len(comp_sizes),
        'largest_component': max(comp_sizes.values()) if comp_sizes else 0,
        'transitivity': (3.0 * triangles / triples) if triples else 0.0,
    }


def top_nodes(metric, n=10):
    """The n highest-scoring entries of a metric dict, as a list of
    (node, value) tuples sorted by decreasing value."""
    ranked = sorted(metric.items(), key=lambda item: (-item[1], item[0]))
    return ranked[:n]
