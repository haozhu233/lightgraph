"""
Python Network Visualization Library Benchmarking

Benchmarks NetworkX, igraph, and graph-tool for network visualization performance.
Compares against lightgraph's performance metrics.
"""

import time
import json
import sys
import tracemalloc
from pathlib import Path
import numpy as np

# Try importing libraries, gracefully handle missing ones
AVAILABLE_LIBS = []

try:
    import networkx as nx
    AVAILABLE_LIBS.append('networkx')
except ImportError:
    print("NetworkX not available. Install with: pip install networkx")

try:
    import igraph as ig
    AVAILABLE_LIBS.append('igraph')
except ImportError:
    print("igraph not available. Install with: pip install python-igraph")

try:
    import graph_tool.all as gt
    AVAILABLE_LIBS.append('graph_tool')
except ImportError:
    print("graph-tool not available. Install instructions: https://graph-tool.skewed.de/")

try:
    import matplotlib
    matplotlib.use('Agg')  # Non-interactive backend
    import matplotlib.pyplot as plt
    MATPLOTLIB_AVAILABLE = True
except ImportError:
    print("Matplotlib not available. Install with: pip install matplotlib")
    MATPLOTLIB_AVAILABLE = False


def generate_random_graph(num_nodes, num_edges):
    """Generate random graph data compatible with multiple libraries."""
    edges = []
    edge_set = set()
    
    while len(edges) < num_edges:
        source = np.random.randint(0, num_nodes)
        target = np.random.randint(0, num_nodes)
        if source != target and (source, target) not in edge_set:
            edges.append((source, target))
            edge_set.add((source, target))
    
    return edges


def benchmark_networkx(num_nodes, num_edges, edges):
    """Benchmark NetworkX graph creation and layout."""
    results = {
        'library': 'networkx',
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'creation_time': 0,
        'layout_time': 0,
        'draw_time': 0,
        'total_time': 0,
        'memory_mb': 0
    }
    
    # Start memory tracking
    tracemalloc.start()
    start_time = time.time()
    
    # Create graph
    creation_start = time.time()
    G = nx.Graph()
    G.add_nodes_from(range(num_nodes))
    G.add_edges_from(edges)
    results['creation_time'] = time.time() - creation_start
    
    # Compute layout
    layout_start = time.time()
    try:
        # Use spring layout (force-directed)
        pos = nx.spring_layout(G, iterations=50)
        results['layout_time'] = time.time() - layout_start
    except Exception as e:
        print(f"Layout failed: {e}")
        results['layout_time'] = -1
    
    # Draw (if matplotlib available)
    if MATPLOTLIB_AVAILABLE:
        draw_start = time.time()
        try:
            fig, ax = plt.subplots(figsize=(10, 10))
            nx.draw(G, pos, node_size=10, width=0.5, ax=ax, with_labels=False)
            plt.close(fig)
            results['draw_time'] = time.time() - draw_start
        except Exception as e:
            print(f"Drawing failed: {e}")
            results['draw_time'] = -1
    
    results['total_time'] = time.time() - start_time
    
    # Memory usage
    current, peak = tracemalloc.get_traced_memory()
    results['memory_mb'] = peak / (1024 * 1024)
    tracemalloc.stop()
    
    return results


def benchmark_igraph(num_nodes, num_edges, edges):
    """Benchmark igraph graph creation and layout."""
    results = {
        'library': 'igraph',
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'creation_time': 0,
        'layout_time': 0,
        'draw_time': 0,
        'total_time': 0,
        'memory_mb': 0
    }
    
    tracemalloc.start()
    start_time = time.time()
    
    # Create graph
    creation_start = time.time()
    g = ig.Graph(n=num_nodes, edges=edges, directed=False)
    results['creation_time'] = time.time() - creation_start
    
    # Compute layout
    layout_start = time.time()
    try:
        layout = g.layout_fruchterman_reingold()
        results['layout_time'] = time.time() - layout_start
    except Exception as e:
        print(f"Layout failed: {e}")
        results['layout_time'] = -1
    
    # Draw (if matplotlib available)
    if MATPLOTLIB_AVAILABLE:
        draw_start = time.time()
        try:
            fig, ax = plt.subplots(figsize=(10, 10))
            ig.plot(g, layout=layout, target=ax, vertex_size=10, edge_width=0.5)
            plt.close(fig)
            results['draw_time'] = time.time() - draw_start
        except Exception as e:
            print(f"Drawing failed: {e}")
            results['draw_time'] = -1
    
    results['total_time'] = time.time() - start_time
    
    current, peak = tracemalloc.get_traced_memory()
    results['memory_mb'] = peak / (1024 * 1024)
    tracemalloc.stop()
    
    return results


def benchmark_graph_tool(num_nodes, num_edges, edges):
    """Benchmark graph-tool graph creation and layout."""
    results = {
        'library': 'graph_tool',
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'creation_time': 0,
        'layout_time': 0,
        'draw_time': 0,
        'total_time': 0,
        'memory_mb': 0
    }
    
    tracemalloc.start()
    start_time = time.time()
    
    # Create graph
    creation_start = time.time()
    g = gt.Graph(directed=False)
    g.add_vertex(num_nodes)
    g.add_edge_list(edges)
    results['creation_time'] = time.time() - creation_start
    
    # Compute layout
    layout_start = time.time()
    try:
        pos = gt.sfdp_layout(g)
        results['layout_time'] = time.time() - layout_start
    except Exception as e:
        print(f"Layout failed: {e}")
        results['layout_time'] = -1
    
    # Draw
    draw_start = time.time()
    try:
        # graph-tool has its own drawing
        gt.graph_draw(g, pos, output_size=(1000, 1000), 
                     vertex_size=10, edge_pen_width=0.5,
                     output=None)  # Don't save to file
        results['draw_time'] = time.time() - draw_start
    except Exception as e:
        print(f"Drawing failed: {e}")
        results['draw_time'] = -1
    
    results['total_time'] = time.time() - start_time
    
    current, peak = tracemalloc.get_traced_memory()
    results['memory_mb'] = peak / (1024 * 1024)
    tracemalloc.stop()
    
    return results


def run_benchmarks():
    """Run benchmarks for all available libraries."""
    # Test cases matching the JavaScript benchmarks
    test_cases = [
        (100, 200),
        (500, 1000),
        (1000, 2000),
        (5000, 10000),
        (10000, 20000),
    ]
    
    all_results = []
    
    print(f"Available libraries: {', '.join(AVAILABLE_LIBS)}")
    print(f"Matplotlib available: {MATPLOTLIB_AVAILABLE}")
    print("\nRunning benchmarks...\n")
    
    for num_nodes, num_edges in test_cases:
        print(f"Testing with {num_nodes} nodes and {num_edges} edges...")
        
        # Generate graph data once
        edges = generate_random_graph(num_nodes, num_edges)
        
        # Benchmark each available library
        if 'networkx' in AVAILABLE_LIBS:
            print("  - NetworkX...", end=" ", flush=True)
            try:
                result = benchmark_networkx(num_nodes, num_edges, edges)
                all_results.append(result)
                print(f"[OK] ({result['total_time']:.2f}s)")
            except Exception as e:
                print(f"[ERROR] Error: {e}")
        
        if 'igraph' in AVAILABLE_LIBS:
            print("  - igraph...", end=" ", flush=True)
            try:
                result = benchmark_igraph(num_nodes, num_edges, edges)
                all_results.append(result)
                print(f"[OK] ({result['total_time']:.2f}s)")
            except Exception as e:
                print(f"[ERROR] Error: {e}")
        
        if 'graph_tool' in AVAILABLE_LIBS:
            print("  - graph-tool...", end=" ", flush=True)
            try:
                result = benchmark_graph_tool(num_nodes, num_edges, edges)
                all_results.append(result)
                print(f"[OK] ({result['total_time']:.2f}s)")
            except Exception as e:
                print(f"[ERROR] Error: {e}")
        
        print()
    
    return all_results


def save_results(results, output_file='python_benchmark_results.jsonl'):
    """Save results to JSONL file."""
    output_path = Path(__file__).parent / output_file
    
    with open(output_path, 'w') as f:
        for result in results:
            f.write(json.dumps(result) + '\n')
    
    print(f"\nResults saved to: {output_path}")


def print_summary(results):
    """Print a summary of benchmark results."""
    print("\n" + "="*80)
    print("BENCHMARK SUMMARY")
    print("="*80)
    
    # Group by library
    by_library = {}
    for result in results:
        lib = result['library']
        if lib not in by_library:
            by_library[lib] = []
        by_library[lib].append(result)
    
    for lib, lib_results in by_library.items():
        print(f"\n{lib.upper()}")
        print("-" * 80)
        print(f"{'Nodes':<10} {'Edges':<10} {'Create(s)':<12} {'Layout(s)':<12} {'Draw(s)':<12} {'Total(s)':<12} {'Mem(MB)':<10}")
        print("-" * 80)
        
        for r in lib_results:
            print(f"{r['num_nodes']:<10} {r['num_edges']:<10} "
                  f"{r['creation_time']:<12.4f} {r['layout_time']:<12.4f} "
                  f"{r['draw_time']:<12.4f} {r['total_time']:<12.4f} "
                  f"{r['memory_mb']:<10.2f}")


if __name__ == '__main__':
    print("Python Network Visualization Benchmarking")
    print("=" * 80)
    
    if not AVAILABLE_LIBS:
        print("\nNo libraries available for benchmarking!")
        print("Please install at least one of: networkx, python-igraph, graph-tool")
        sys.exit(1)
    
    results = run_benchmarks()
    save_results(results)
    print_summary(results)
    
    print("\n" + "="*80)
    print("Benchmark complete!")
    print("="*80)
