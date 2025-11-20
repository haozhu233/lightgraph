import pytest
import json
import os
from lightgraph.network import net_vis_edgelist


class TestEdgeListInterface:
    """Test suite for the net_vis_edgelist function."""

    def test_tuple_list_basic(self):
        """Test basic edge list as tuples without weights."""
        edges = [(0, 1), (1, 2), (2, 0)]
        html = net_vis_edgelist(edges)
        
        assert html is not None
        assert isinstance(html, str)
        assert 'lightGraph' in html
        assert 'nodesData' in html
        assert 'edgesData' in html
        assert '"id": "0"' in html
        assert '"id": "1"' in html
        assert '"id": "2"' in html

    def test_tuple_list_with_weights(self):
        """Test edge list with weights."""
        edges = [(0, 1, 0.5), (1, 2, 0.8), (2, 0, 1.0)]
        html = net_vis_edgelist(edges)
        
        assert '"weight": 0.5' in html
        assert '"weight": 0.8' in html
        assert '"weight": 1.0' in html

    def test_dict_list(self):
        """Test edge list as dictionaries."""
        edges = [
            {'source': 'A', 'target': 'B', 'weight': 0.5},
            {'source': 'B', 'target': 'C', 'weight': 0.8}
        ]
        html = net_vis_edgelist(edges)
        
        assert '"id": "A"' in html
        assert '"id": "B"' in html
        assert '"id": "C"' in html
        assert '"weight": 0.5' in html
        assert '"weight": 0.8' in html

    def test_dict_list_without_weights(self):
        """Test edge list as dictionaries without weight field."""
        edges = [
            {'source': 'A', 'target': 'B'},
            {'source': 'B', 'target': 'C'}
        ]
        html = net_vis_edgelist(edges)
        
        # Should default to weight 1.0
        assert '"weight": 1.0' in html or '"weight": 1' in html

    def test_custom_nodes(self):
        """Test providing custom node list including isolated nodes."""
        edges = [(0, 1), (1, 2)]
        nodes = [0, 1, 2, 3]  # Include isolated node 3
        html = net_vis_edgelist(edges, nodes=nodes)
        
        assert '"id": "0"' in html
        assert '"id": "1"' in html
        assert '"id": "2"' in html
        assert '"id": "3"' in html  # Isolated node should be included

    def test_remove_isolated(self):
        """Test removing isolated nodes."""
        edges = [(0, 1), (1, 2)]
        nodes = [0, 1, 2, 3]  # Node 3 is isolated
        html = net_vis_edgelist(edges, nodes=nodes, remove_isolated=True)
        
        assert '"id": "0"' in html
        assert '"id": "1"' in html
        assert '"id": "2"' in html
        assert '"id": "3"' not in html  # Isolated node should be removed

    def test_node_groups(self):
        """Test node groups/clustering."""
        edges = [(0, 1), (1, 2), (3, 4)]
        node_groups = {0: 'A', 1: 'A', 2: 'B', 3: 'B', 4: 'B'}
        html = net_vis_edgelist(edges, node_groups=node_groups)
        
        assert '"group": "A"' in html
        assert '"group": "B"' in html

    def test_node_groups_string_ids(self):
        """Test node groups with string node identifiers."""
        edges = [('Alice', 'Bob'), ('Bob', 'Charlie')]
        node_groups = {'Alice': 'group1', 'Bob': 'group1', 'Charlie': 'group2'}
        html = net_vis_edgelist(edges, node_groups=node_groups)
        
        assert '"group": "group1"' in html
        assert '"group": "group2"' in html

    def test_node_groups_with_remove_isolated(self):
        """Test that node_groups are properly filtered when removing isolated nodes."""
        edges = [(0, 1), (1, 2)]
        nodes = [0, 1, 2, 3]  # Node 3 is isolated
        node_groups = {0: 'A', 1: 'A', 2: 'B', 3: 'C'}
        
        html = net_vis_edgelist(edges, nodes=nodes, node_groups=node_groups, 
                                remove_isolated=True)
        
        assert '"group": "A"' in html
        assert '"group": "B"' in html
        assert '"group": "C"' not in html  # Group of isolated node

    def test_string_node_ids(self):
        """Test with string node identifiers."""
        edges = [('Alice', 'Bob'), ('Bob', 'Charlie'), ('Charlie', 'Alice')]
        html = net_vis_edgelist(edges)
        
        assert '"id": "Alice"' in html
        assert '"id": "Bob"' in html
        assert '"id": "Charlie"' in html

    def test_mixed_node_types(self):
        """Test with mixed integer and string node identifiers."""
        edges = [(1, 'A'), ('A', 2), (2, 'B')]
        html = net_vis_edgelist(edges)
        
        # All should be converted to strings
        assert '"id": "1"' in html
        assert '"id": "A"' in html
        assert '"id": "2"' in html
        assert '"id": "B"' in html

    def test_empty_edges(self):
        """Test empty edge list raises error."""
        with pytest.raises(ValueError, match="Edge list cannot be empty"):
            net_vis_edgelist([])

    def test_invalid_format_single_element(self):
        """Test invalid edge format with single element."""
        edges = [(1,)]  # Invalid - only one element
        with pytest.raises(ValueError, match="must have at least 2 elements"):
            net_vis_edgelist(edges)

    def test_invalid_format_not_iterable(self):
        """Test invalid edge format."""
        edges = [1, 2, 3]  # Invalid format - not tuples or dicts
        with pytest.raises(ValueError, match="invalid format"):
            net_vis_edgelist(edges)

    def test_invalid_dict_missing_source(self):
        """Test dictionary edge missing source."""
        edges = [{'target': 'B', 'weight': 1.0}]
        with pytest.raises(ValueError, match="must have 'source' and 'target'"):
            net_vis_edgelist(edges)

    def test_invalid_dict_missing_target(self):
        """Test dictionary edge missing target."""
        edges = [{'source': 'A', 'weight': 1.0}]
        with pytest.raises(ValueError, match="must have 'source' and 'target'"):
            net_vis_edgelist(edges)

    def test_invalid_node_groups_type(self):
        """Test error handling for invalid node_groups type."""
        edges = [(0, 1), (1, 2)]
        node_groups = ['group1', 'group2']  # List instead of dict
        
        with pytest.raises(ValueError, match="node_groups must be a dictionary"):
            net_vis_edgelist(edges, node_groups=node_groups)

    def test_save_to_file(self, tmp_path):
        """Test saving to HTML file."""
        edges = [(0, 1), (1, 2)]
        save_path = tmp_path / "test_output.html"
        
        result = net_vis_edgelist(edges, save_as=str(save_path))
        
        assert save_path.exists()
        content = save_path.read_text()
        assert 'lightGraph' in content
        assert content == result

    def test_directed_graph(self):
        """Test with a directed graph (different edges A->B and B->A)."""
        edges = [
            ('A', 'B', 0.5),
            ('B', 'A', 0.8),  # Reverse direction with different weight
            ('B', 'C', 1.0)
        ]
        html = net_vis_edgelist(edges)
        
        # Should have all edges
        assert '"source": "A"' in html
        assert '"target": "B"' in html
        assert '"source": "B"' in html
        assert '"target": "C"' in html

    def test_self_loops(self):
        """Test with self-loop edges (node connects to itself)."""
        edges = [('A', 'A', 1.0), ('A', 'B', 0.5)]
        html = net_vis_edgelist(edges)
        
        # Self-loop should be included
        assert '"source": "A"' in html
        assert '"target": "A"' in html

    def test_large_edge_list(self):
        """Test with a larger edge list."""
        # Create a larger network
        edges = []
        for i in range(50):
            for j in range(i+1, min(i+4, 50)):
                edges.append((f'Node_{i}', f'Node_{j}', 0.5))
        
        html = net_vis_edgelist(edges)
        
        assert html is not None
        assert isinstance(html, str)
        assert 'lightGraph' in html
        assert '"id": "Node_0"' in html
        assert '"id": "Node_49"' in html

    def test_html_structure(self):
        """Test that the HTML output has the required structure."""
        edges = [('A', 'B'), ('B', 'C')]
        html = net_vis_edgelist(edges)
        
        # Check for required HTML elements
        assert '<div' in html
        assert 'id="lightGraph"' in html
        assert '<script type="application/json" id="nodesData">' in html
        assert '<script type="application/json" id="edgesData">' in html
        assert 'd3js.org/d3.v7.min.js' in html

    def test_json_validity(self):
        """Test that the embedded JSON data is valid."""
        edges = [('A', 'B', 0.5), ('B', 'C', 0.8)]
        html = net_vis_edgelist(edges)
        
        # Extract and validate nodes JSON
        nodes_start = html.find('id="nodesData">') + len('id="nodesData">')
        nodes_end = html.find('</script>', nodes_start)
        nodes_json = html[nodes_start:nodes_end]
        nodes = json.loads(nodes_json)
        
        assert len(nodes) == 3
        node_ids = {node['id'] for node in nodes}
        assert node_ids == {'A', 'B', 'C'}
        
        # Extract and validate edges JSON
        edges_start = html.find('id="edgesData">') + len('id="edgesData">')
        edges_end = html.find('</script>', edges_start)
        edges_json = html[edges_start:edges_end]
        parsed_edges = json.loads(edges_json)
        
        assert len(parsed_edges) == 2
        assert all('source' in edge for edge in parsed_edges)
        assert all('target' in edge for edge in parsed_edges)
        assert all('weight' in edge for edge in parsed_edges)

    def test_with_benchmark_data(self):
        """Test using real benchmark data format."""
        # Load actual benchmark data
        benchmark_file = os.path.join(
            os.path.dirname(__file__), '..', '..', 'benchmarks', 'data_100_200.json'
        )
        
        if os.path.exists(benchmark_file):
            with open(benchmark_file, 'r') as f:
                data = json.load(f)
            
            # Extract edges from benchmark format
            edges = [
                (e['source'], e['target'], e.get('weight', 1.0)) 
                for e in data['edges'][:20]  # Use first 20 edges for faster test
            ]
            
            html = net_vis_edgelist(edges)
            
            assert html is not None
            assert 'lightGraph' in html
            # Check some specific nodes from benchmark data exist
            assert '"source":' in html
            assert '"target":' in html

    def test_numeric_node_names(self):
        """Test that numeric node names are properly stringified."""
        edges = [(0, 1), (1, 2), (2, 0)]
        html = net_vis_edgelist(edges)
        
        # Extract nodes JSON to verify stringification
        nodes_start = html.find('id="nodesData">') + len('id="nodesData">')
        nodes_end = html.find('</script>', nodes_start)
        nodes_json = html[nodes_start:nodes_end]
        nodes = json.loads(nodes_json)
        
        # All node IDs should be strings
        for node in nodes:
            assert isinstance(node['id'], str)

    def test_list_instead_of_tuple(self):
        """Test that lists work the same as tuples for edges."""
        edges = [[0, 1], [1, 2, 0.5], [2, 0]]
        html = net_vis_edgelist(edges)
        
        assert '"id": "0"' in html
        assert '"weight": 0.5' in html

    def test_auto_node_extraction(self):
        """Test that nodes are automatically extracted from edges when not provided."""
        edges = [('X', 'Y'), ('Y', 'Z'), ('Z', 'W')]
        html = net_vis_edgelist(edges)
        
        # Should have all 4 unique nodes
        nodes_start = html.find('id="nodesData">') + len('id="nodesData">')
        nodes_end = html.find('</script>', nodes_start)
        nodes_json = html[nodes_start:nodes_end]
        nodes = json.loads(nodes_json)
        
        assert len(nodes) == 4
        node_ids = {node['id'] for node in nodes}
        assert node_ids == {'W', 'X', 'Y', 'Z'}  # Should be sorted

    def test_consistency_with_net_vis(self):
        """Test that edge list produces same structure as adjacency matrix method."""
        import numpy as np
        from lightgraph.network import net_vis
        
        # Create simple network both ways
        adj_matrix = np.array([[0, 1, 0], [1, 0, 1], [0, 1, 0]])
        node_names = np.array(['A', 'B', 'C'])
        
        edges = [('A', 'B'), ('B', 'A'), ('B', 'C'), ('C', 'B')]
        
        html_matrix = net_vis(adj_matrix, node_names, remove_unconnected=False)
        html_edgelist = net_vis_edgelist(edges)
        
        # Both should have same HTML structure elements
        assert 'id="lightGraph"' in html_matrix
        assert 'id="lightGraph"' in html_edgelist
        assert 'id="nodesData"' in html_matrix
        assert 'id="nodesData"' in html_edgelist
        assert 'id="edgesData"' in html_matrix
        assert 'id="edgesData"' in html_edgelist
