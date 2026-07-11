"""Tests for the bundled example datasets."""
from lightgraph import datasets, net_vis, summary


def _node_set(edges):
    out = set()
    for e in edges:
        out.add(e['source'])
        out.add(e['target'])
    return out


class TestLesMis:
    def test_shape(self):
        edges = datasets.les_mis()
        assert len(edges) == 254
        assert len(_node_set(edges)) == 77
        assert set(edges[0]) == {'source', 'target', 'weight'}

    def test_weights_are_ints(self):
        assert all(isinstance(e['weight'], int) for e in datasets.les_mis())

    def test_known_characters(self):
        names = _node_set(datasets.les_mis())
        assert 'Valjean' in names
        assert 'Javert' in names


class TestGot:
    def test_shape(self):
        edges = datasets.got()
        assert len(edges) == 352
        assert len(_node_set(edges)) == 107
        assert set(edges[0]) == {'source', 'target', 'weight'}

    def test_known_characters(self):
        names = _node_set(datasets.got())
        assert 'Tyrion' in names
        assert 'Jon' in names


class TestFootball:
    def test_shape(self):
        nodes, edges = datasets.football()
        assert len(nodes) == 115
        assert len(edges) == 613
        assert set(nodes[0]) == {'id', 'group'}
        assert set(edges[0]) == {'source', 'target'}

    def test_twelve_conferences(self):
        nodes, _ = datasets.football()
        assert len({n['group'] for n in nodes}) == 12

    def test_edges_reference_known_nodes(self):
        nodes, edges = datasets.football()
        ids = {n['id'] for n in nodes}
        assert _node_set(edges) == ids


class TestIntegration:
    def test_analytics_accepts_datasets(self):
        s = summary(datasets.got())
        assert s['nodes'] == 107
        assert s['edges'] == 352
        assert s['components'] == 1

    def test_net_vis_accepts_datasets(self):
        nodes, edges = datasets.football()
        vis = net_vis(edges=edges, nodes=nodes)
        assert 'Atlantic Coast' in vis.html
