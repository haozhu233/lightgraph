"""
Quick Test Script for Edge List Interface
==========================================
Run this to verify the edge list interface is working correctly.
"""

import sys
import os

# Add parent directory to path to import lightgraph
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))

try:
    import lightgraph as lg
    print("✓ Successfully imported lightgraph")
except ImportError as e:
    print(f"✗ Failed to import lightgraph: {e}")
    sys.exit(1)

# Test 1: Basic edge list
print("\n" + "="*60)
print("Test 1: Basic edge list (tuples)")
print("="*60)
try:
    edges = [('A', 'B'), ('B', 'C'), ('C', 'A')]
    html = lg.net_vis_edgelist(edges)
    assert 'lightGraph' in html
    assert '"id": "A"' in html
    print("✓ PASSED: Basic edge list works")
except Exception as e:
    print(f"✗ FAILED: {e}")

# Test 2: Weighted edges
print("\n" + "="*60)
print("Test 2: Weighted edges")
print("="*60)
try:
    edges = [('A', 'B', 0.5), ('B', 'C', 0.8)]
    html = lg.net_vis_edgelist(edges)
    assert '"weight": 0.5' in html
    assert '"weight": 0.8' in html
    print("✓ PASSED: Weighted edges work")
except Exception as e:
    print(f"✗ FAILED: {e}")

# Test 3: Dictionary format
print("\n" + "="*60)
print("Test 3: Dictionary format")
print("="*60)
try:
    edges = [
        {'source': 'X', 'target': 'Y', 'weight': 1.0},
        {'source': 'Y', 'target': 'Z', 'weight': 0.5}
    ]
    html = lg.net_vis_edgelist(edges)
    assert '"id": "X"' in html
    print("✓ PASSED: Dictionary format works")
except Exception as e:
    print(f"✗ FAILED: {e}")

# Test 4: Node groups
print("\n" + "="*60)
print("Test 4: Node groups")
print("="*60)
try:
    edges = [('A', 'B'), ('C', 'D')]
    groups = {'A': 'group1', 'B': 'group1', 'C': 'group2', 'D': 'group2'}
    html = lg.net_vis_edgelist(edges, node_groups=groups)
    assert '"group": "group1"' in html
    assert '"group": "group2"' in html
    print("✓ PASSED: Node groups work")
except Exception as e:
    print(f"✗ FAILED: {e}")

# Test 5: Save to file
print("\n" + "="*60)
print("Test 5: Save to file")
print("="*60)
try:
    edges = [('A', 'B'), ('B', 'C')]
    filepath = 'test_output.html'
    html = lg.net_vis_edgelist(edges, save_as=filepath)
    
    if os.path.exists(filepath):
        with open(filepath, 'r') as f:
            content = f.read()
        assert content == html
        os.remove(filepath)  # Clean up
        print("✓ PASSED: Save to file works")
    else:
        print("✗ FAILED: File was not created")
except Exception as e:
    print(f"✗ FAILED: {e}")

# Test 6: Error handling
print("\n" + "="*60)
print("Test 6: Error handling")
print("="*60)
try:
    # Should raise ValueError for empty edge list
    try:
        lg.net_vis_edgelist([])
        print("✗ FAILED: Should have raised ValueError for empty list")
    except ValueError as e:
        print(f"✓ PASSED: Correctly raises ValueError: {e}")
except Exception as e:
    print(f"✗ FAILED: Unexpected error: {e}")

# Test 7: Isolated nodes
print("\n" + "="*60)
print("Test 7: Isolated nodes")
print("="*60)
try:
    edges = [(1, 2), (2, 3)]
    nodes = [1, 2, 3, 4, 5]  # 4 and 5 are isolated
    
    # Include isolated
    html1 = lg.net_vis_edgelist(edges, nodes=nodes, remove_isolated=False)
    assert '"id": "4"' in html1
    assert '"id": "5"' in html1
    
    # Remove isolated
    html2 = lg.net_vis_edgelist(edges, nodes=nodes, remove_isolated=True)
    assert '"id": "4"' not in html2
    assert '"id": "5"' not in html2
    
    print("✓ PASSED: Isolated node handling works")
except Exception as e:
    print(f"✗ FAILED: {e}")

# Test 8: Load benchmark data
print("\n" + "="*60)
print("Test 8: Load benchmark data")
print("="*60)
try:
    import json
    benchmark_file = os.path.join(
        os.path.dirname(__file__), '..', '..', 'benchmarks', 'data_100_200.json'
    )
    
    if os.path.exists(benchmark_file):
        with open(benchmark_file, 'r') as f:
            data = json.load(f)
        
        # Use first 10 edges for quick test
        edges = [
            (e['source'], e['target'], e.get('weight', 1.0)) 
            for e in data['edges'][:10]
        ]
        
        html = lg.net_vis_edgelist(edges)
        assert 'lightGraph' in html
        print("✓ PASSED: Works with benchmark data")
    else:
        print("⚠ SKIPPED: Benchmark file not found")
except Exception as e:
    print(f"✗ FAILED: {e}")

# Test 9: Consistency with net_vis
print("\n" + "="*60)
print("Test 9: Consistency with net_vis (adjacency matrix)")
print("="*60)
try:
    import numpy as np
    
    # Create same network both ways
    adj_matrix = np.array([[0, 1], [1, 0]])
    node_names = np.array(['A', 'B'])
    edges = [('A', 'B'), ('B', 'A')]
    
    html_matrix = lg.net_vis(adj_matrix, node_names, remove_unconnected=False)
    html_edgelist = lg.net_vis_edgelist(edges)
    
    # Both should have same structure
    assert 'id="lightGraph"' in html_matrix
    assert 'id="lightGraph"' in html_edgelist
    assert 'id="nodesData"' in html_matrix
    assert 'id="nodesData"' in html_edgelist
    
    print("✓ PASSED: Consistent with net_vis output")
except ImportError:
    print("⚠ SKIPPED: NumPy not available")
except Exception as e:
    print(f"✗ FAILED: {e}")

# Summary
print("\n" + "="*60)
print("TESTING COMPLETE")
print("="*60)
print("\nAll core functionality has been tested.")
print("If you see mostly ✓ symbols above, the implementation is working!")
print("\nTo run the full test suite with pytest:")
print("  cd python")
print("  pytest tests/test_edgelist.py -v")
print("\nTo see visual examples:")
print("  cd python/examples")
print("  python edgelist_demo.py")
print("  # Then open the generated HTML files in your browser")
