> This project is still work in progress. The API are not stable and are subject to change. Currently there are also limited documentations available. 

# lightgraph

`lightgraph` is a high-performance HTML canvas-based network visualization tool
for the browser, Jupyter notebooks (Python), and R. Batched canvas rendering
and viewport culling keep graphs with thousands of nodes and edges smooth and
interactive.

**[Documentation](https://haozhu233.github.io/lightgraph/)** ·
**[Live interactive demo](https://haozhu233.github.io/lightgraph/demo.html)**

![](https://raw.githubusercontent.com/haozhu233/lightgraph/refs/heads/main/assets/lg_functions.png)

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

## Installation

### Python

For python binding, you can install from pypi.

```bash
pip install lightgraph
```

### R

For R binding, you can install from GitHub:

```r
# install.packages("devtools")
devtools::install_github("haozhu233/lightgraph", subdir = "R")
```

See the [R package README](R/README.md) for more details and usage examples.
