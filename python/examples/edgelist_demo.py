"""
Edge List Interface Demo for LightGraph
=========================================

This script demonstrates various ways to use the net_vis_edgelist() function
to visualize networks from edge lists.
"""

import lightgraph as lg

# Example 1: Simple edge list with tuples
print("Example 1: Simple edge list (tuples)")
print("-" * 50)
edges = [
    ('Alice', 'Bob'),
    ('Bob', 'Charlie'),
    ('Charlie', 'David'),
    ('David', 'Alice')
]
html1 = lg.net_vis_edgelist(edges, save_as='example1_simple.html')
print(f"[OK] Created visualization with {len(edges)} edges")
print(f"[OK] Saved to: example1_simple.html\n")


# Example 2: Edge list with weights
print("Example 2: Weighted edges")
print("-" * 50)
edges = [
    ('Gene1', 'Gene2', 0.95),
    ('Gene2', 'Gene3', 0.87),
    ('Gene3', 'Gene4', 0.76),
    ('Gene4', 'Gene1', 0.82),
    ('Gene1', 'Gene3', 0.65)
]
html2 = lg.net_vis_edgelist(edges, save_as='example2_weighted.html')
print(f"[OK] Created weighted network visualization")
print(f"[OK] Saved to: example2_weighted.html\n")


# Example 3: Dictionary format (most explicit)
print("Example 3: Dictionary format")
print("-" * 50)
edges = [
    {'source': 'Server1', 'target': 'Server2', 'weight': 0.5},
    {'source': 'Server2', 'target': 'Server3', 'weight': 0.8},
    {'source': 'Server3', 'target': 'Server1', 'weight': 0.3},
    {'source': 'Server1', 'target': 'Server4', 'weight': 0.9}
]
html3 = lg.net_vis_edgelist(edges, save_as='example3_dict.html')
print(f"[OK] Created visualization from dictionary format")
print(f"[OK] Saved to: example3_dict.html\n")


# Example 4: With node groups/communities
print("Example 4: Node groups (communities)")
print("-" * 50)
edges = [
    ('A', 'B'), ('B', 'C'),  # Group 1
    ('D', 'E'), ('E', 'F'),  # Group 2
    ('C', 'D')  # Bridge between groups
]
node_groups = {
    'A': 'Community1', 'B': 'Community1', 'C': 'Community1',
    'D': 'Community2', 'E': 'Community2', 'F': 'Community2'
}
html4 = lg.net_vis_edgelist(edges, node_groups=node_groups, save_as='example4_groups.html')
print(f"[OK] Created visualization with 2 communities")
print(f"[OK] Saved to: example4_groups.html\n")


# Example 5: Including isolated nodes
print("Example 5: Including isolated nodes")
print("-" * 50)
edges = [
    (1, 2), (2, 3), (3, 4)
]
nodes = [1, 2, 3, 4, 5, 6]  # 5 and 6 are isolated
html5 = lg.net_vis_edgelist(edges, nodes=nodes, save_as='example5_isolated.html')
print(f"[OK] Created visualization with isolated nodes")
print(f"[OK] Total nodes: {len(nodes)}, Connected nodes: 4, Isolated nodes: 2")
print(f"[OK] Saved to: example5_isolated.html\n")


# Example 6: Removing isolated nodes
print("Example 6: Removing isolated nodes")
print("-" * 50)
edges = [
    (1, 2), (2, 3), (3, 4)
]
nodes = [1, 2, 3, 4, 5, 6]  # 5 and 6 will be removed
html6 = lg.net_vis_edgelist(edges, nodes=nodes, remove_isolated=True, 
                             save_as='example6_no_isolated.html')
print(f"[OK] Created visualization with isolated nodes removed")
print(f"[OK] Original nodes: {len(nodes)}, After removal: 4")
print(f"[OK] Saved to: example6_no_isolated.html\n")


# Example 7: Social network (realistic use case)
print("Example 7: Social network")
print("-" * 50)
friendships = [
    ('Alice', 'Bob', 5),      # 5 interactions
    ('Alice', 'Charlie', 3),
    ('Bob', 'Charlie', 8),
    ('Bob', 'David', 2),
    ('Charlie', 'Eve', 4),
    ('David', 'Eve', 6),
    ('Eve', 'Frank', 7)
]
html7 = lg.net_vis_edgelist(friendships, save_as='example7_social.html')
print(f"[OK] Created social network with {len(friendships)} friendships")
print(f"[OK] Saved to: example7_social.html\n")


# Example 8: Directed graph
print("Example 8: Directed graph (citations)")
print("-" * 50)
citations = [
    ('Paper1', 'Paper2', 1),
    ('Paper1', 'Paper3', 1),
    ('Paper2', 'Paper3', 1),
    ('Paper2', 'Paper4', 1),
    ('Paper3', 'Paper4', 1),
    ('Paper3', 'Paper5', 1)
]
html8 = lg.net_vis_edgelist(citations, save_as='example8_directed.html')
print(f"[OK] Created directed citation network")
print(f"[OK] Saved to: example8_directed.html\n")


# Example 9: Large network (demonstrating efficiency)
print("Example 9: Large network (100 nodes, ~200 edges)")
print("-" * 50)
import random
random.seed(42)

# Generate random network
large_edges = []
for i in range(100):
    # Each node connects to 2-4 random other nodes
    num_connections = random.randint(2, 4)
    for _ in range(num_connections):
        target = random.randint(0, 99)
        if target != i:  # Avoid self-loops
            weight = random.uniform(0.1, 1.0)
            large_edges.append((f'Node_{i}', f'Node_{target}', weight))

html9 = lg.net_vis_edgelist(large_edges, save_as='example9_large.html')
print(f"[OK] Created large network with {len(large_edges)} edges")
print(f"[OK] Saved to: example9_large.html\n")



# Example 10: Simple way to pass a container height through the Python wrapper
print("Example 10: Specify container height via the Python wrapper")
print("-" * 50)
sample_edges = [('X', 'Y'), ('Y', 'Z'), ('Z', 'X')]
# Pass `container_height` directly. You can use any valid CSS height value like '60vh', '500px', '100%'.
html10 = lg.net_vis_edgelist(sample_edges, save_as='example10_wrapper_height.html',
                             container_height='500px')
print('[OK] Created example10_wrapper_height.html with container_height=500px')

print("=" * 50)
print("All examples completed successfully!")
print("Open the HTML files in your browser to view the visualizations.")
print("=" * 50)
