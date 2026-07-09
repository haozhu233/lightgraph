Interactive Demo
================

The demo below runs the browser JavaScript package directly. It is designed to
show the current interaction model and the feature direction for lightgraph:
modeless navigation, neighbor highlighting, ego filtering, weighted edges,
metric-driven node styling, dark mode, group ellipses, and graph-generation
controls for random and scale-free networks.

.. raw:: html

   <iframe
     src="./_static/demo/index.html"
     title="lightgraph interactive demo"
     style="width:100%; height:860px; border:0; border-radius:10px; overflow:hidden;"
     loading="eager"
   ></iframe>

Quick Interaction Guide
-----------------------

* Drag empty space to pan and scroll to zoom.
* Click a node to select it; shift-click toggles membership.
* Shift-drag to box-select.
* Double-click a node to isolate its 1-hop neighborhood; press Escape to reset.
* Use the controls below the graph to adjust the number of nodes and edges or
  switch between Erdos-Renyi and scale-free graph generation.
* Use the fit button to re-frame the graph after exploration.

The demo is self-contained under ``docs/source/_static/demo`` and loads the
same ``lightgraph.js`` runtime used by the Python and R bindings.
