# lightgraph

`lightgraph` is a high-performance HTML canvas-based network visualization tool
for the browser, Jupyter notebooks (Python), and R. Batched canvas rendering
and viewport culling keep graphs with thousands of nodes and edges smooth and
interactive, and both bindings ship with a dependency-free graph analytics
toolkit (centrality, communities, components) that feeds straight back into
the visuals.

**[Documentation](https://haozhu233.github.io/lightgraph/)** ·
**[Python vignette](https://haozhu233.github.io/lightgraph/vignette_python.html)** ·
**[R vignette](https://haozhu233.github.io/lightgraph/vignette_r.html)**

> The API is still evolving and may change between releases.

## Installation

**Python** (from PyPI):

```bash
pip install lightgraph
```

**R** (from GitHub):

```r
# install.packages("devtools")
devtools::install_github("haozhu233/lightgraph", subdir = "R")
```

**JavaScript** (from npm; d3 v7 is a peer dependency):

```bash
npm install lightgraph d3
```

## Quick start

Both bindings share the same interface: pass an edge table (and optionally a
node table), tweak behavior with mirrored snake_case arguments, and get an
interactive widget. Three classic networks are bundled so you can try things
immediately.

**Python**

```python
from lightgraph import net_vis, datasets, pagerank

edges = datasets.got()  # A Storm of Swords character network
net_vis(edges=edges, node_groups='auto',      # auto-detect communities
        node_metric=pagerank(edges),          # size nodes by PageRank
        edge_weight_to_width=True)
```

**R**

```r
library(lightgraph)

data(got)
lightgraph(edges = got, node_groups = "auto",
           node_metric = lg_pagerank(got),
           edge_weight_to_width = TRUE)
```

Bundled datasets: `datasets.les_mis()` / `data(les_mis)` (Les Misérables
co-occurrences), `datasets.got()` / `data(got)` (A Storm of Swords),
`datasets.football()` / `data(football_edges)` + `data(football_nodes)`
(American college football, with ground-truth conference groups).

Analytics — identical results in both languages: degree/strength,
betweenness, closeness, eigenvector, PageRank, community detection,
connected components, k-hop neighborhoods, graph summaries, and top-node
helpers (`lightgraph.analytics` in Python, `lg_*` functions in R). See the
[API reference](https://haozhu233.github.io/lightgraph/api.html) and the
vignettes linked above for feature-by-feature walkthroughs on a real
19k-edge flight network.

## JavaScript usage

`lightgraph.js` depends on [d3 v7](https://d3js.org). Include both scripts and
create an instance per container — multiple graphs can share a page:

```html
<div id="myGraph" style="width: 100%; height: 600px;"></div>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="lightgraph.js"></script>
<script>
  const graph = new lightGraph.LightGraph(document.getElementById('myGraph'), {
    nodes: [{ id: 'A', group: 'g1' }, { id: 'B', group: 'g1' }, { id: 'C' }],
    edges: [{ source: 'A', target: 'B' }, { source: 'B', target: 'C' }],
    config: { labels: { visible: true }, ui: { showStatistics: true } }
  });

  graph.on('nodeClick', ({ node }) => console.log('clicked', node.id));
  graph.on('selectionChange', selected => console.log(selected.length, 'selected'));
</script>
```

With a bundler, install from npm (`npm install lightgraph d3`) and pass d3
in explicitly (it defaults to `window.d3`):

```js
import * as d3 from 'd3';
import { LightGraph } from 'lightgraph';

const graph = new LightGraph(container, { nodes, edges, d3 });
```

Instance methods: `setData({nodes, edges})`, `updateConfig(partial)`,
`zoomToFit(padding?)`, `getSelection()`, `selectNodes(ids)`,
`egoFilter(nodeId, depth?)` / `clearEgoFilter()` / `getVisibleNodes()`,
`settle(ticks?)` (run the layout synchronously, for static/headless
rendering), `resize()`, `destroy()`, and `on/off(event, cb)` for `nodeClick`,
`selectionChange`, `dataLoad`, `egoFilter`, and `destroy` events. See
`DEFAULT_CONFIG` in `lightgraph.js` for all config options.

Interactions are modeless: drag empty space to pan and scroll to zoom; drag
a node to move it (dragging a selected node moves the whole selection);
click a node to select it, shift-click to add/remove, shift-drag for box
selection, click empty space to deselect. Hovering fades everything outside
the node's 1-hop neighborhood; double-click a node to isolate its k-hop
neighborhood (double-click empty space or press Escape to restore); the
toolbar fit button — or the automatic fit when the layout settles — frames
the graph. New data loads run part of the layout synchronously before the
first paint (`simulation.warmupTicks`, default `'auto'`) and the camera
keeps the settling graph framed until you take over, so graphs appear laid
out immediately instead of unfolding from random positions. Set
`edges.weightToWidth` / `edges.weightToOpacity` to render edge weights
visually.

Edge opacity adapts automatically to on-screen ink density and zoom level,
so dense graphs render as a readable texture instead of a solid block
(setting `edges.defaultOpacity` pins a value instead); edge widths are
clamped in screen space so lines neither vanish when zoomed out nor turn
into ropes when zoomed in. The settings sidebar has a Style section with
sliders for edge opacity (plus an auto toggle), edge width, and node size
(`edges.widthScale` / `nodes.sizeScale`).

Rendering follows the display's `devicePixelRatio`, so the canvas stays
sharp on retina/high-DPI screens (set `canvas.pixelRatio: 1` to trade
sharpness for speed on very large graphs). PNG export re-renders the scene
at `canvas.exportScale` (default 2) times the on-screen resolution rather
than copying the screen bitmap.

The module also loads with `require('lightgraph')` / bundlers; pass
`options.d3` if d3 is not on `window`. Pages that provide the legacy
`#lightGraph` + `#nodesData`/`#edgesData` elements (as the Python and R
bindings do) initialize automatically.

## Repository layout

The root `lightgraph.js` is the source of truth for the JavaScript runtime;
`npm run sync-assets` copies it into the Python package
(`python/lightgraph/assets/`), the R package (`R/inst/assets/`), and the
documentation site. The Python binding lives in `python/`, the R binding in
`R/` (see the [R package README](R/README.md)), and the Sphinx documentation
in `docs/`.
