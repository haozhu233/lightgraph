import pytest
import numpy as np
import json
from lightgraph.network import net_vis


class TestNetVis:
    """Test suite for the net_vis function."""

    def test_basic_visualization(self):
        """Test basic network visualization with valid inputs."""
        adj_matrix = np.array([[0, 1, 0], [1, 0, 1], [0, 1, 0]])
        node_names = np.array(['A', 'B', 'C'])
        
        result = net_vis(adj_matrix, node_names, remove_unconnected=False)
        
        assert result is not None
        assert isinstance(result, str)
        assert 'lightGraph' in result
        assert 'nodesData' in result
        assert 'edgesData' in result

    def test_with_node_groups(self):
        """Test visualization with node groups."""
        adj_matrix = np.array([[0, 1], [1, 0]])
        node_names = np.array(['A', 'B'])
        node_groups = {'A': 'group1', 'B': 'group2'}
        
        result = net_vis(adj_matrix, node_names, node_groups=node_groups, 
                        remove_unconnected=False)
        
        assert 'group1' in result
        assert 'group2' in result

    def test_remove_unconnected_nodes(self):
        """Test removal of unconnected nodes."""
        # Create a matrix with one unconnected node
        adj_matrix = np.array([
            [0, 1, 0],
            [1, 0, 0],
            [0, 0, 0]  # Node C is unconnected
        ])
        node_names = np.array(['A', 'B', 'C'])
        
        result = net_vis(adj_matrix, node_names, remove_unconnected=True)
        
        # Node C should not be in the result
        assert '"id": "A"' in result
        assert '"id": "B"' in result
        # The unconnected node C should be removed
        assert result.count('"id":') == 2

    def test_weighted_edges(self):
        """Test that edge weights are preserved."""
        adj_matrix = np.array([[0, 2.5], [1.5, 0]])
        node_names = np.array(['A', 'B'])
        
        result = net_vis(adj_matrix, node_names, remove_unconnected=False)
        
        assert '"weight": 2.5' in result
        assert '"weight": 1.5' in result

    def test_save_as_file(self, tmp_path):
        """Test saving visualization to a file."""
        adj_matrix = np.array([[0, 1], [1, 0]])
        node_names = np.array(['A', 'B'])
        save_path = tmp_path / "test_output.html"
        
        result = net_vis(adj_matrix, node_names, save_as=str(save_path))
        
        assert save_path.exists()
        content = save_path.read_text()
        assert 'lightGraph' in content
        assert content == result

    def test_invalid_adj_matrix_type(self):
        """Test error handling for invalid adjacency matrix type."""
        adj_matrix = [[0, 1], [1, 0]]  # List instead of numpy array
        node_names = np.array(['A', 'B'])
        
        with pytest.raises(ValueError, match="adj_matrix must be a numpy.ndarray"):
            net_vis(adj_matrix, node_names)

    def test_mismatched_dimensions(self):
        """Test error handling for mismatched node names and matrix dimensions."""
        adj_matrix = np.array([[0, 1], [1, 0]])
        node_names = np.array(['A', 'B', 'C'])  # Too many names
        
        with pytest.raises(ValueError, match="Length of node_names must match"):
            net_vis(adj_matrix, node_names)

    def test_invalid_node_groups_type(self):
        """Test error handling for invalid node_groups type."""
        adj_matrix = np.array([[0, 1], [1, 0]])
        node_names = np.array(['A', 'B'])
        node_groups = ['group1', 'group2']  # List instead of dict
        
        with pytest.raises(ValueError, match="node_groups must be a dictionary"):
            net_vis(adj_matrix, node_names, node_groups=node_groups)

    def test_single_node(self):
        """Test with a single node network."""
        adj_matrix = np.array([[0]])
        node_names = np.array(['A'])
        
        result = net_vis(adj_matrix, node_names, remove_unconnected=False)
        
        assert '"id": "A"' in result

    def test_empty_edges(self):
        """Test with a network that has no edges."""
        adj_matrix = np.array([[0, 0], [0, 0]])
        node_names = np.array(['A', 'B'])
        
        result = net_vis(adj_matrix, node_names, remove_unconnected=False)
        
        # Nodes should exist but no edges
        assert '"id": "A"' in result
        assert '"id": "B"' in result

    def test_directed_graph(self):
        """Test with a directed graph (asymmetric matrix)."""
        adj_matrix = np.array([[0, 1, 0], [0, 0, 1], [0, 0, 0]])
        node_names = np.array(['A', 'B', 'C'])
        
        result = net_vis(adj_matrix, node_names, remove_unconnected=False)
        
        # Check that edges are created in the right direction
        assert '"source": "A"' in result
        assert '"target": "B"' in result
        assert '"source": "B"' in result
        assert '"target": "C"' in result

    def test_large_network(self):
        """Test with a larger network."""
        size = 10
        adj_matrix = np.random.rand(size, size)
        adj_matrix[adj_matrix < 0.7] = 0  # Sparse matrix
        node_names = np.array([f'Node_{i}' for i in range(size)])
        
        result = net_vis(adj_matrix, node_names, remove_unconnected=False)
        
        assert result is not None
        assert isinstance(result, str)
        assert 'lightGraph' in result

    def test_node_groups_with_remove_unconnected(self):
        """Test that node_groups are properly filtered when removing unconnected nodes."""
        adj_matrix = np.array([
            [0, 1, 0],
            [1, 0, 0],
            [0, 0, 0]  # Node C is unconnected
        ])
        node_names = np.array(['A', 'B', 'C'])
        node_groups = {'A': 'group1', 'B': 'group2', 'C': 'group3'}
        
        result = net_vis(adj_matrix, node_names, node_groups=node_groups, 
                        remove_unconnected=True)
        
        # Groups for connected nodes should be present
        assert 'group1' in result
        assert 'group2' in result
        # Group for unconnected node should not be present
        assert 'group3' not in result

    def test_html_structure(self):
        """Test that the HTML output has the required structure."""
        adj_matrix = np.array([[0, 1], [1, 0]])
        node_names = np.array(['A', 'B'])
        
        result = net_vis(adj_matrix, node_names)
        
        # Check for required HTML elements
        assert '<div' in result
        assert 'id="lightGraph"' in result
        assert '<script type="application/json" id="nodesData">' in result
        assert '<script type="application/json" id="edgesData">' in result
        assert 'd3js.org/d3.v7.min.js' in result

    def test_json_validity(self):
        """Test that the embedded JSON data is valid."""
        adj_matrix = np.array([[0, 1], [1, 0]])
        node_names = np.array(['A', 'B'])
        
        result = net_vis(adj_matrix, node_names, remove_unconnected=False)
        
        # Extract and validate nodes JSON
        nodes_start = result.find('id="nodesData">') + len('id="nodesData">')
        nodes_end = result.find('</script>', nodes_start)
        nodes_json = result[nodes_start:nodes_end]
        nodes = json.loads(nodes_json)
        
        assert len(nodes) == 2
        assert nodes[0]['id'] in ['A', 'B']
        assert nodes[1]['id'] in ['A', 'B']
        
        # Extract and validate edges JSON
        edges_start = result.find('id="edgesData">') + len('id="edgesData">')
        edges_end = result.find('</script>', edges_start)
        edges_json = result[edges_start:edges_end]
        edges = json.loads(edges_json)
        
        assert len(edges) == 2
        assert all('source' in edge for edge in edges)
        assert all('target' in edge for edge in edges)
        assert all('weight' in edge for edge in edges)
