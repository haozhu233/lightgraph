"""
Comparison: Adjacency Matrix vs Edge List
==========================================

This script demonstrates the difference between using the adjacency matrix
interface (net_vis) and the edge list interface (net_vis_edgelist).
"""

import numpy as np
import lightgraph as lg

print("="*70)
print("COMPARISON: Adjacency Matrix vs Edge List Interface")
print("="*70)

# Example Network: Simple triangle
# Nodes: A, B, C
# Edges: A-B (weight 0.5), B-C (weight 0.8), C-A (weight 1.0)

print("\n" + "-"*70)
print("METHOD 1: Adjacency Matrix (Original Interface)")
print("-"*70)

# Step 1: Create adjacency matrix
adj_matrix = np.array([
    [0.0, 0.5, 1.0],  # A connects to B (0.5) and C (1.0)
    [0.5, 0.0, 0.8],  # B connects to A (0.5) and C (0.8)
    [1.0, 0.8, 0.0]   # C connects to A (1.0) and B (0.8)
])
node_names = np.array(['A', 'B', 'C'])

print("\nAdjacency Matrix:")
print(adj_matrix)
print(f"\nNode names: {node_names}")

# Step 2: Visualize
html1 = lg.net_vis(adj_matrix, node_names, remove_unconnected=False,
                   save_as='comparison_matrix.html')

print("\n✓ Created visualization: comparison_matrix.html")
print(f"  HTML length: {len(html1)} characters")

print("\n" + "-"*70)
print("METHOD 2: Edge List (New Interface)")
print("-"*70)

# Step 1: Define edge list (much more intuitive!)
edges = [
    ('A', 'B', 0.5),
    ('B', 'C', 0.8),
    ('C', 'A', 1.0),
    ('B', 'A', 0.5),  # Reverse direction (undirected edge)
    ('C', 'B', 0.8),  # Reverse direction
    ('A', 'C', 1.0)   # Reverse direction
]

print("\nEdge List:")
for edge in edges:
    print(f"  {edge[0]} → {edge[1]} (weight: {edge[2]})")

# Step 2: Visualize
html2 = lg.net_vis_edgelist(edges, save_as='comparison_edgelist.html')

print("\n✓ Created visualization: comparison_edgelist.html")
print(f"  HTML length: {len(html2)} characters")

print("\n" + "="*70)
print("COMPARISON SUMMARY")
print("="*70)

print("\nADJACENCY MATRIX:")
print("  Pros:")
print("    • Standard mathematical representation")
print("    • Good for dense networks")
print("    • Easy matrix operations (NumPy)")
print("  Cons:")
print("    • Memory inefficient for sparse networks")
print("    • Requires node index mapping")
print("    • Less intuitive for users")

print("\nEDGE LIST:")
print("  Pros:")
print("    • Memory efficient for sparse networks")
print("    • Direct, human-readable format")
print("    • Natural for most data sources (CSV, databases)")
print("    • No index mapping needed")
print("  Cons:")
print("    • Less suitable for some matrix operations")

print("\n" + "="*70)
print("REAL-WORLD EXAMPLE: Social Network")
print("="*70)

print("\nScenario: Twitter mentions between 5 users")
print("Only 6 connections out of possible 20 (30% density)")

# Edge list approach (clean and simple)
print("\nEdge List Approach:")
mentions = [
    ('@alice', '@bob', 5),
    ('@bob', '@charlie', 3),
    ('@charlie', '@alice', 2),
    ('@alice', '@david', 7),
    ('@david', '@eve', 4),
    ('@eve', '@alice', 1)
]

print("Code:")
print("  mentions = [")
for m in mentions:
    print(f"      {m},")
print("  ]")
print("  lg.net_vis_edgelist(mentions)")

html3 = lg.net_vis_edgelist(mentions, save_as='comparison_social.html')
print("\n✓ Created: comparison_social.html")

# Matrix approach (more complex)
print("\nAdjacency Matrix Approach (would require):")
print("  1. Extract unique users: ['@alice', '@bob', '@charlie', '@david', '@eve']")
print("  2. Create 5x5 matrix with zeros")
print("  3. Map user names to indices")
print("  4. Fill matrix cells")
print("  5. Call net_vis()")
print("\n  → More code, more complexity!")

print("\n" + "="*70)
print("CONCLUSION")
print("="*70)
print("\nUse ADJACENCY MATRIX when:")
print("  • You already have a matrix (correlation, similarity)")
print("  • Dense network (most nodes connected)")
print("  • Performing matrix operations")

print("\nUse EDGE LIST when:")
print("  • Sparse network (social networks, citations)")
print("  • Data from CSV, database, or API")
print("  • Simple, readable code preferred")
print("  • Large networks with few connections")

print("\n" + "="*70)
print("All comparison visualizations saved!")
print("Open the HTML files in your browser to compare:")
print("  • comparison_matrix.html")
print("  • comparison_edgelist.html")
print("  • comparison_social.html")
print("="*70)
