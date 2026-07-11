"""Shared seeded graph generator for the library comparison.

Every library benchmarks the *same* graph at each size: a seeded
Erdos-Renyi random graph (seed 42), written once to pages/data/ so the
Python-generated (lightgraph, pyvis) and R-generated (networkD3) pages
all read identical node/edge sets.
"""
import json
import os
import random

BENCH_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BENCH_DIR, 'pages', 'data')

# (nodes, edges) ladder. Competitors that cannot render a size are recorded
# as failures rather than skipped, so the practical ceiling is visible.
SIZES = [
    (100, 200),
    (500, 1000),
    (1000, 2000),
    (2000, 4000),
    (5000, 10000),
    (10000, 20000),
    (20000, 40000),
]

SEED = 42


def generate_graph(num_nodes, num_edges, seed=SEED):
    rng = random.Random(seed)
    nodes = [{'id': str(i)} for i in range(num_nodes)]
    edges = []
    while len(edges) < num_edges:
        s = rng.randrange(num_nodes)
        t = rng.randrange(num_nodes)
        if s != t:
            edges.append({'source': str(s), 'target': str(t), 'weight': 1.0})
    return {'nodes': nodes, 'edges': edges}


def data_path(num_nodes, num_edges):
    return os.path.join(DATA_DIR, f'graph_{num_nodes}_{num_edges}.json')


def write_all():
    os.makedirs(DATA_DIR, exist_ok=True)
    for n, e in SIZES:
        with open(data_path(n, e), 'w') as f:
            json.dump(generate_graph(n, e), f)
    return [data_path(n, e) for n, e in SIZES]


if __name__ == '__main__':
    for p in write_all():
        print('wrote', os.path.relpath(p, BENCH_DIR))
