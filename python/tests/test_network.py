import pytest
import numpy as np
import json
from lightgraph.network import net_vis, NetworkVisualization


class TestNetVis:
    """Test suite for the net_vis function."""

    def test_basic_visualization(self):
        """Test basic network visualization with valid inputs."""
        adj_matrix = np.array([[0, 1, 0], [1, 0, 1], [0, 1, 0]])
        node_names = np.array(['A', 'B', 'C'])

        result = net_vis(adj_matrix, node_names, remove_unconnected=False)

        assert result is not None
        assert isinstance(result, NetworkVisualization)
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
        assert result.html.count('"id":') == 2

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
        assert content == result.html

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
        np.random.seed(42)  # Set seed for reproducible tests
        size = 10
        adj_matrix = np.random.rand(size, size)
        adj_matrix[adj_matrix < 0.7] = 0  # Sparse matrix
        node_names = np.array([f'Node_{i}' for i in range(size)])
        
        result = net_vis(adj_matrix, node_names, remove_unconnected=False)
        
        assert result is not None
        assert isinstance(result, NetworkVisualization)
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
        # d3 and lightgraph.js are inlined so the HTML is standalone/offline
        assert 'src="https://d3js.org' not in result
        assert 'zoomIdentity' in result
        assert 'LightGraph' in result

    def test_json_validity(self):
        """Test that the embedded JSON data is valid."""
        adj_matrix = np.array([[0, 1], [1, 0]])
        node_names = np.array(['A', 'B'])
        
        result = net_vis(adj_matrix, node_names, remove_unconnected=False)
        
        # Extract and validate nodes JSON
        html = result.html
        nodes_start = html.find('id="nodesData">') + len('id="nodesData">')
        nodes_end = html.find('</script>', nodes_start)
        nodes_json = html[nodes_start:nodes_end]
        nodes = json.loads(nodes_json)

        assert len(nodes) == 2
        assert nodes[0]['id'] in ['A', 'B']
        assert nodes[1]['id'] in ['A', 'B']

        # Extract and validate edges JSON
        edges_start = html.find('id="edgesData">') + len('id="edgesData">')
        edges_end = html.find('</script>', edges_start)
        edges_json = html[edges_start:edges_end]
        edges = json.loads(edges_json)

        # The symmetric matrix describes one undirected edge; it is emitted
        # once, not once per direction.
        assert len(edges) == 1
        assert all('source' in edge for edge in edges)
        assert all('target' in edge for edge in edges)
        assert all('weight' in edge for edge in edges)


class TestDataInputs:
    """Edge-list, sparse-matrix, and symmetric-dedup input paths."""

    def _extract_edges(self, result):
        html = result.html
        start = html.find('id="edgesData">') + len('id="edgesData">')
        return json.loads(html[start:html.find('</script>', start)])

    def _extract_nodes(self, result):
        html = result.html
        start = html.find('id="nodesData">') + len('id="nodesData">')
        return json.loads(html[start:html.find('</script>', start)])

    def _extract_config(self, result):
        html = result.html
        start = html.find('id="lightGraphConfig">') + len('id="lightGraphConfig">')
        return json.loads(html[start:html.find('</script>', start)])

    def test_edge_list_tuples(self):
        result = net_vis(edges=[('A', 'B'), ('B', 'C', 2.5)])
        edges = self._extract_edges(result)
        nodes = self._extract_nodes(result)
        assert [n['id'] for n in nodes] == ['A', 'B', 'C']
        assert len(edges) == 2
        assert edges[1]['weight'] == 2.5

    def test_edge_list_dicts(self):
        result = net_vis(edges=[
            {'source': 'X', 'target': 'Y', 'weight': 3},
            {'source': 'Y', 'target': 'Z'},
        ])
        edges = self._extract_edges(result)
        assert edges[0]['weight'] == 3.0
        assert edges[1]['weight'] == 1.0

    def test_edge_list_with_explicit_nodes(self):
        # Unconnected node kept when remove_unconnected=False
        result = net_vis(edges=[('A', 'B')], node_names=['A', 'B', 'lonely'],
                         remove_unconnected=False)
        assert [n['id'] for n in self._extract_nodes(result)] == ['A', 'B', 'lonely']

        result = net_vis(edges=[('A', 'B')], node_names=['A', 'B', 'lonely'])
        assert [n['id'] for n in self._extract_nodes(result)] == ['A', 'B']

    def test_requires_exactly_one_input(self):
        with pytest.raises(ValueError, match="exactly one"):
            net_vis()
        with pytest.raises(ValueError, match="exactly one"):
            net_vis(adj_matrix=np.array([[0, 1], [1, 0]]),
                    node_names=np.array(['A', 'B']),
                    edges=[('A', 'B')])

    def test_symmetric_dedup_keeps_directed(self):
        # Asymmetric matrix: every nonzero entry is its own directed edge.
        adj = np.array([[0, 1], [0, 0]])
        result = net_vis(adj, np.array(['A', 'B']), remove_unconnected=False)
        assert len(self._extract_edges(result)) == 1

        # Symmetric with arrows on: both directions are kept.
        adj = np.array([[0, 1], [1, 0]])
        result = net_vis(adj, np.array(['A', 'B']), show_arrows=True,
                         remove_unconnected=False)
        assert len(self._extract_edges(result)) == 2

    def test_node_metric_size_mapping(self):
        result = net_vis(edges=[('A', 'B'), ('B', 'C')],
                         node_metric={'A': 0.0, 'B': 5.0, 'C': 10.0},
                         metric_size_range=(4, 20))
        nodes = {n['id']: n for n in self._extract_nodes(result)}
        assert nodes['A']['size'] == 4.0
        assert nodes['B']['size'] == 12.0
        assert nodes['C']['size'] == 20.0

    def test_node_metric_color_mapping(self):
        result = net_vis(edges=[('A', 'B')],
                         node_metric={'A': 0, 'B': 1},
                         metric_map='color',
                         metric_colors=('#000000', '#ffffff'))
        nodes = {n['id']: n for n in self._extract_nodes(result)}
        assert nodes['A']['color'] == '#000000'
        assert nodes['B']['color'] == '#ffffff'

    def test_node_metric_respects_explicit_values(self):
        result = net_vis(edges=[('A', 'B')],
                         node_metric={'A': 0, 'B': 1},
                         node_sizes={'A': 99})
        nodes = {n['id']: n for n in self._extract_nodes(result)}
        assert nodes['A']['size'] == 99.0   # explicit wins
        assert nodes['B']['size'] == 20.0   # metric-derived

    def test_node_metric_legend_metadata(self):
        result = net_vis(edges=[('A', 'B'), ('B', 'C')],
                         node_metric={'A': 0.0, 'B': 5.0, 'C': 10.0},
                         metric_map='both',
                         metric_label='PageRank')
        legend = self._extract_config(result)['ui']['metricLegend']
        assert legend['label'] == 'PageRank'
        assert legend['map'] == 'both'
        assert legend['min'] == 0.0
        assert legend['max'] == 10.0
        assert legend['sizeRange'] == [4, 20]
        assert legend['colors'] == ['#c6dbef', '#08306b']

    def test_no_metric_legend_without_metric(self):
        result = net_vis(edges=[('A', 'B')])
        assert 'metricLegend' not in self._extract_config(result)['ui']

    def test_metric_legend_reflects_driven_channels_only(self):
        # Every node has an explicit size, so the metric only drives color.
        result = net_vis(edges=[('A', 'B')],
                         node_metric={'A': 0, 'B': 1},
                         metric_map='both',
                         node_sizes={'A': 5, 'B': 6})
        legend = self._extract_config(result)['ui']['metricLegend']
        assert legend['map'] == 'color'
        assert 'sizeRange' not in legend
        assert legend['colors'] == ['#c6dbef', '#08306b']

    def test_weight_mapping_config(self):
        result = net_vis(edges=[('A', 'B')],
                         edge_weight_to_width=True,
                         edge_weight_to_opacity=True,
                         highlight_neighbors=False)
        html = result.html
        start = html.find('id="lightGraphConfig">') + len('id="lightGraphConfig">')
        config = json.loads(html[start:html.find('</script>', start)])
        assert config['edges']['weightToWidth'] is True
        assert config['edges']['weightToOpacity'] is True
        assert config['highlight']['enabled'] is False

    def test_auto_community_detection(self):
        # Two triangles joined by nothing: must split into two groups.
        triangles = [('A', 'B'), ('B', 'C'), ('A', 'C'),
                     ('X', 'Y'), ('Y', 'Z'), ('X', 'Z')]
        result = net_vis(edges=triangles, node_groups='auto')
        nodes = {n['id']: n.get('group') for n in self._extract_nodes(result)}
        assert all(g is not None for g in nodes.values())
        assert nodes['A'] == nodes['B'] == nodes['C']
        assert nodes['X'] == nodes['Y'] == nodes['Z']
        assert nodes['A'] != nodes['X']

    def test_auto_community_isolated_nodes_ungrouped(self):
        result = net_vis(edges=[('A', 'B'), ('B', 'C'), ('A', 'C')],
                         node_names=['A', 'B', 'C', 'loner'],
                         node_groups='auto',
                         remove_unconnected=False)
        nodes = {n['id']: n.get('group') for n in self._extract_nodes(result)}
        assert nodes['A'] is not None
        assert nodes['loner'] is None

    def test_node_groups_rejects_other_strings(self):
        with pytest.raises(ValueError, match="dictionary or 'auto'"):
            net_vis(edges=[('A', 'B')], node_groups='louvain')

    def test_group_colors_and_order_config(self):
        result = net_vis(edges=[('A', 'B'), ('B', 'C')],
                         node_groups={'A': 'g1', 'B': 'g2', 'C': 'g1'},
                         group_colors={'g1': '#ff7f0e'},
                         group_order=['g2', 'g1'])
        groups = self._extract_config(result)['groups']
        assert groups['colors'] == {'g1': '#ff7f0e'}
        assert groups['colorOrder'] == ['g2', 'g1']

    def test_group_colors_omitted_by_default(self):
        result = net_vis(edges=[('A', 'B')],
                         node_groups={'A': 'g1', 'B': 'g2'})
        groups = self._extract_config(result)['groups']
        assert 'colors' not in groups
        assert 'colorOrder' not in groups

    def test_group_colors_validation(self):
        with pytest.raises(ValueError, match="group_colors"):
            net_vis(edges=[('A', 'B')], group_colors=['#ff0000'])
        with pytest.raises(ValueError, match="group_order"):
            net_vis(edges=[('A', 'B')], group_order='g1')

    def test_sparse_matrix(self):
        scipy_sparse = pytest.importorskip('scipy.sparse')
        adj = scipy_sparse.csr_matrix(np.array([[0, 1, 0], [1, 0, 1], [0, 1, 0]]))
        result = net_vis(adj, np.array(['A', 'B', 'C']))
        edges = self._extract_edges(result)
        assert len(edges) == 2  # symmetric -> deduped
        pairs = {(e['source'], e['target']) for e in edges}
        assert pairs == {('A', 'B'), ('B', 'C')}


class TestNetworkVisualization:
    """Test suite for the NetworkVisualization wrapper class."""

    def _make_result(self):
        adj_matrix = np.array([[0, 1], [1, 0]])
        node_names = np.array(['A', 'B'])
        return net_vis(adj_matrix, node_names, remove_unconnected=False)

    def test_repr_html_returns_iframe(self):
        """Test that _repr_html_ returns an iframe for Jupyter display."""
        result = self._make_result()
        html = result._repr_html_()
        assert isinstance(html, str)
        assert '<iframe' in html
        assert 'srcdoc' in html

    def test_str_returns_raw_html(self):
        """Test that str() returns the raw HTML content."""
        result = self._make_result()
        assert 'lightGraph' in str(result)
        assert '<iframe' not in str(result)

    def test_html_property(self):
        """Test that .html property matches str()."""
        result = self._make_result()
        assert result.html == str(result)

    def test_save_method(self, tmp_path):
        """Test that .save() writes correct content."""
        result = self._make_result()
        save_path = tmp_path / "save_test.html"
        result.save(str(save_path))
        assert save_path.exists()
        assert save_path.read_text() == result.html

    def test_repr(self):
        """Test developer-friendly repr."""
        result = self._make_result()
        r = repr(result)
        assert 'NetworkVisualization(' in r
        assert 'KB' in r

    def test_contains_operator(self):
        """Test 'in' operator for backward compatibility."""
        result = self._make_result()
        assert 'lightGraph' in result
        assert 'nonexistent_string_xyz' not in result
