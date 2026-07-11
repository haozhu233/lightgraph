"""Small bundled example networks.

Each loader returns plain lists of dicts that can be passed directly to
:func:`lightgraph.net_vis` and the :mod:`lightgraph.analytics` functions
(no pandas required; ``pd.DataFrame(edges)`` converts them if you want
a table).

All three are classic, freely redistributed research datasets; please
cite the source papers noted in each docstring if you use them in
published work.
"""
import csv
import os

_DATA = os.path.join(os.path.dirname(__file__), 'data')


def _read_csv(name):
    with open(os.path.join(_DATA, name), newline='', encoding='utf-8') as f:
        return list(csv.DictReader(f))


def _edges(name):
    rows = _read_csv(name)
    for row in rows:
        if 'weight' in row:
            row['weight'] = int(row['weight'])
    return rows


def les_mis():
    """Character co-occurrence network of *Les Misérables*.

    77 characters, 254 weighted edges; the weight counts the chapters
    in which two characters appear together.

    Source: D. E. Knuth, *The Stanford GraphBase: A Platform for
    Combinatorial Computing* (1993).

    Returns:
        list of dicts with keys ``source``, ``target``, ``weight``.

    Example:
        >>> from lightgraph import net_vis, datasets
        >>> net_vis(edges=datasets.les_mis(), edge_weight_to_width=True)
    """
    return _edges('les_mis.csv')


def got():
    """Character interaction network of *A Storm of Swords*.

    107 characters, 352 weighted edges; the weight counts interactions
    (co-mentions within 15 words) in the third book of *A Song of Ice
    and Fire*.

    Source: A. Beveridge and J. Shan, "Network of Thrones",
    *Math Horizons* 23(4), 18-22 (2016).

    Returns:
        list of dicts with keys ``source``, ``target``, ``weight``.

    Example:
        >>> from lightgraph import net_vis, datasets, communities
        >>> edges = datasets.got()
        >>> net_vis(edges=edges, node_groups=communities(edges))
    """
    return _edges('got.csv')


def football():
    """American college football games of the Fall 2000 season.

    115 Division IA teams, 613 games. Each node carries its conference
    as ``group``, giving a ground-truth community structure.

    Source: M. Girvan and M. E. J. Newman, "Community structure in
    social and biological networks", *PNAS* 99, 7821-7826 (2002).

    Returns:
        ``(nodes, edges)`` tuple: ``nodes`` is a list of dicts with
        keys ``id`` and ``group``; ``edges`` a list of dicts with keys
        ``source`` and ``target``.

    Example:
        >>> from lightgraph import net_vis, datasets
        >>> nodes, edges = datasets.football()
        >>> net_vis(edges=edges, nodes=nodes)
    """
    return _read_csv('football_nodes.csv'), _read_csv('football_edges.csv')
