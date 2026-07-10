import json
import math
import pytest

from lightgraph import net_vis
from lightgraph.analytics import (
    degree, betweenness, closeness, eigenvector, pagerank,
    communities, components, neighbors, summary, top_nodes,
)


# Two triangles joined by a bridge (C-D), plus a separate pair (X-Y).
EDGES = [
    ('A', 'B', 2), ('B', 'C', 1), ('C', 'A', 1),
    ('C', 'D', 1),
    ('D', 'E', 1), ('E', 'F', 1), ('F', 'D', 1),
    ('X', 'Y', 1),
]

# A path graph: middle node has all the betweenness.
PATH = [('a', 'b'), ('b', 'c'), ('c', 'd'), ('d', 'e')]


class FakeSeries(list):
    @property
    def iloc(self):
        return self


class FakeDataFrame:
    """Duck-typed stand-in for a pandas DataFrame (columns + iloc)."""

    def __init__(self, data):
        self._data = {k: FakeSeries(v) for k, v in data.items()}
        self.columns = list(data)

    def __getitem__(self, key):
        return self._data[key]

    def __contains__(self, key):
        return key in self._data


class TestDegree:
    def test_counts_neighbors(self):
        d = degree(EDGES)
        assert d['C'] == 3.0
        assert d['A'] == 2.0
        assert d['X'] == 1.0

    def test_weighted_sums_weights(self):
        s = degree(EDGES, weighted=True)
        assert s['A'] == 3.0  # weight-2 edge to B plus weight-1 edge to C
        assert s['C'] == 3.0

    def test_ignores_self_loops(self):
        d = degree([('A', 'A'), ('A', 'B')])
        assert d['A'] == 1.0

    def test_accepts_dataframe(self):
        df = FakeDataFrame({'source': ['A', 'B'], 'target': ['B', 'C'],
                            'weight': [2.0, 1.0]})
        assert degree(df, weighted=True) == {'A': 2.0, 'B': 3.0, 'C': 1.0}


class TestBetweenness:
    def test_path_graph(self):
        b = betweenness(PATH, normalized=False)
        # Middle node c lies on paths a-d, a-e, b-d, b-e = 4 pairs.
        assert b['c'] == pytest.approx(4.0)
        assert b['a'] == 0.0

    def test_normalized_range(self):
        b = betweenness(EDGES)
        assert all(0.0 <= v <= 1.0 for v in b.values())
        # The bridge endpoints carry all betweenness.
        assert b['C'] == max(b.values())

    def test_endpoints_zero(self):
        b = betweenness(PATH)
        assert b['a'] == 0.0 and b['e'] == 0.0


class TestCloseness:
    def test_center_highest(self):
        c = closeness(PATH)
        assert c['c'] == max(c.values())

    def test_component_correction(self):
        # Nodes in the small component score lower than the big one.
        c = closeness(EDGES)
        assert c['X'] < min(c[v] for v in 'ABCDEF')

    def test_isolated_pair(self):
        c = closeness([('A', 'B')])
        assert c['A'] == pytest.approx(1.0)


class TestEigenvector:
    def test_unit_norm(self):
        e = eigenvector(EDGES)
        assert math.sqrt(sum(v * v for v in e.values())) == pytest.approx(1.0)

    def test_star_center_highest(self):
        e = eigenvector([('hub', x) for x in 'abcd'])
        assert e['hub'] == max(e.values())


class TestPagerank:
    def test_sums_to_one(self):
        p = pagerank(EDGES)
        assert sum(p.values()) == pytest.approx(1.0)

    def test_hub_highest(self):
        p = pagerank([('hub', x) for x in 'abcd'])
        assert p['hub'] == max(p.values())

    def test_uniform_on_cycle(self):
        p = pagerank([('a', 'b'), ('b', 'c'), ('c', 'a')])
        for v in p.values():
            assert v == pytest.approx(1 / 3)


class TestCommunities:
    def test_detects_triangles(self):
        c = communities(EDGES)
        assert c['A'] == c['B'] == c['C']
        assert c['D'] == c['E'] == c['F']
        assert c['A'] != c['D']

    def test_labels_are_group_strings(self):
        c = communities(EDGES)
        assert all(v.startswith('c') for v in c.values())


class TestComponents:
    def test_two_components(self):
        comp = components(EDGES)
        assert comp['A'] == comp['F'] == 1  # largest component first
        assert comp['X'] == comp['Y'] == 2


class TestNeighbors:
    def test_depth_one(self):
        assert neighbors(EDGES, 'C') == ['A', 'B', 'C', 'D']

    def test_depth_two_spans_bridge(self):
        assert neighbors(EDGES, 'C', depth=2) == ['A', 'B', 'C', 'D', 'E', 'F']

    def test_unknown_node_raises(self):
        with pytest.raises(KeyError):
            neighbors(EDGES, 'missing')


class TestSummary:
    def test_counts(self):
        s = summary(EDGES)
        assert s['nodes'] == 8
        assert s['edges'] == 8
        assert s['components'] == 2
        assert s['largest_component'] == 6

    def test_transitivity(self):
        # 2 triangles; triples = 1+1+3+3+1+1 = 10 -> 3*2/10.
        assert summary(EDGES)['transitivity'] == pytest.approx(0.6)


class TestTopNodes:
    def test_orders_and_limits(self):
        top = top_nodes({'a': 1.0, 'b': 3.0, 'c': 2.0}, n=2)
        assert top == [('b', 3.0), ('c', 2.0)]


class TestNetVisNewParams:
    def _config(self, result):
        html = result.html
        start = html.index('id="lightGraphConfig">') + len('id="lightGraphConfig">')
        end = html.index('</script>', start)
        return json.loads(html[start:end])

    def test_js_api_config_keys(self):
        result = net_vis(
            edges=EDGES, edge_width=0.5, edge_color='#123456',
            node_color='#654321', neighbor_fade=0.3, ego_filter=False,
            ego_depth=2, warmup_ticks=50, auto_fit=False,
            zoom_range=(0.05, 10), pixel_ratio=1, export_scale=3,
            weight_width_range=(1, 5), weight_opacity_range=(0.1, 0.9))
        config = self._config(result)
        assert config['edges']['defaultWidth'] == 0.5
        assert config['edges']['defaultColor'] == '#123456'
        assert config['nodes']['defaultColor'] == '#654321'
        assert config['highlight']['neighborFade'] == 0.3
        assert config['egoFilter'] == {'enabled': False, 'depth': 2}
        assert config['simulation']['warmupTicks'] == 50
        assert config['canvas']['autoFit'] is False
        assert config['canvas']['zoomMin'] == 0.05
        assert config['canvas']['zoomMax'] == 10
        assert config['canvas']['pixelRatio'] == 1
        assert config['canvas']['exportScale'] == 3
        assert config['edges']['weightWidthRange'] == [1, 5]
        assert config['edges']['weightOpacityRange'] == [0.1, 0.9]

    def test_adaptive_defaults_omitted(self):
        config = self._config(net_vis(edges=EDGES))
        assert 'defaultOpacity' not in config['edges']
        assert 'defaultWidth' not in config['edges']
        assert 'defaultColor' not in config['nodes']
        assert 'pixelRatio' not in config['canvas']
        assert 'backgroundColor' not in config['canvas']

    def test_config_escape_hatch_deep_merges(self):
        result = net_vis(edges=EDGES, config={
            'nodes': {'borderWidth': 2},
            'simulation': {'centerStrength': 0.5},
        })
        config = self._config(result)
        assert config['nodes']['borderWidth'] == 2
        assert config['nodes']['defaultSize'] == 7  # untouched sibling
        assert config['simulation']['centerStrength'] == 0.5
        assert config['simulation']['chargeStrength'] == 4000

    def test_nodes_table(self):
        nodes = [
            {'id': 'A', 'group': 'g1', 'size': 12},
            {'id': 'B', 'group': 'g2', 'color': '#ff0000'},
            {'id': 'C', 'group': None},
        ]
        result = net_vis(edges=[('A', 'B'), ('B', 'C')], nodes=nodes)
        payload = json.loads(result.html.split('id="nodesData">')[1]
                             .split('</script>')[0])
        by_id = {n['id']: n for n in payload}
        assert by_id['A']['group'] == 'g1' and by_id['A']['size'] == 12.0
        assert by_id['B']['color'] == '#ff0000'
        assert 'group' not in by_id['C']

    def test_nodes_dataframe_and_explicit_dicts_win(self):
        nodes = FakeDataFrame({'id': ['A', 'B'], 'group': ['g1', 'g2']})
        result = net_vis(edges=[('A', 'B')], nodes=nodes,
                         node_groups={'A': 'override'})
        payload = json.loads(result.html.split('id="nodesData">')[1]
                             .split('</script>')[0])
        by_id = {n['id']: n for n in payload}
        assert by_id['A']['group'] == 'override'
        assert by_id['B']['group'] == 'g2'

    def test_nodes_table_keeps_edge_only_nodes(self):
        result = net_vis(edges=[('A', 'B'), ('B', 'Z')],
                         nodes=[{'id': 'A'}, {'id': 'B'}])
        payload = json.loads(result.html.split('id="nodesData">')[1]
                             .split('</script>')[0])
        assert {n['id'] for n in payload} == {'A', 'B', 'Z'}

    def test_analytics_pipe_into_net_vis(self):
        result = net_vis(edges=EDGES, node_metric=pagerank(EDGES),
                         node_groups=communities(EDGES), metric_map='both')
        payload = json.loads(result.html.split('id="nodesData">')[1]
                             .split('</script>')[0])
        assert all('size' in n and 'color' in n and 'group' in n
                   for n in payload)
