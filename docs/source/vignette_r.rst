Use lightgraph in R
===================

This vignette is the R twin of the :doc:`Python vignette
<vignette_python>`: a feature-by-feature tour where every option group
gets a code example and every figure is a **live lightgraph htmlwidget**
— pan, zoom, hover, click, box-select, and double-click them.

The ``lightgraph()`` function takes the same arguments as Python's
``net_vis()`` (same names, same defaults), and every analytics helper
exists with an ``lg_`` prefix, returning named vectors instead of dicts.

We work with the same real network throughout: the **OpenFlights world
flight network** — 3,257 airports and 18,930 routes. The hero figure
below renders all of it; later sections zoom into its European and
competitive-route slices, so a dozen live figures share one page and
stay smooth.

Overview
--------

.. code-block:: r

   library(lightgraph)

   # the visualization
   lightgraph(nodes, edges, ...)

   # the analytics
   lg_summary(); lg_degree(); lg_betweenness(); lg_closeness()
   lg_eigenvector(); lg_pagerank(); lg_communities(); lg_components()
   lg_neighbors(); lg_top_nodes()

   # Shiny bindings
   lightgraphOutput(); renderLightgraph()

Installation
------------

.. code-block:: r

   # install.packages("remotes")
   remotes::install_github("haozhu233/lightgraph", subdir = "R")

Widgets display in the RStudio Viewer, knit into R Markdown and Quarto
documents, drop into Shiny, and save to fully standalone HTML.

Getting Started
---------------

Edges are enough; nodes are derived automatically:

.. code-block:: r

   friends <- data.frame(
     source = c("Amy", "Amy", "Ben", "Cat", "Dan", "Dan", "Eve"),
     target = c("Ben", "Cat", "Cat", "Dan", "Eve", "Fay", "Fay"),
     weight = c(3, 1, 2, 1, 2, 1, 3)
   )
   lightgraph(edges = friends)

.. raw:: html

   <iframe src="./_static/vignettes/r_first_graph.html"
     title="A first graph" loading="lazy"
     style="width:100%; height:360px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

A nodes data frame adds per-node attributes (``id`` required; ``group``,
``color``, ``size`` optional), and ``adjacency_to_lightgraph()`` converts
adjacency matrices:

.. code-block:: r

   nodes <- data.frame(id = c("Amy", "Ben"), group = c("g1", "g2"))
   lightgraph(nodes, edges)

   parts <- adjacency_to_lightgraph(adj_matrix, node_names)
   lightgraph(parts$nodes, parts$edges)

The Flight Network
------------------

Every scheduled airline route in the
`OpenFlights <https://openflights.org/data.php>`_ database. Each row of
``routes.dat`` is one airline serving one leg, so aggregating duplicates
gives natural edge weights:

.. code-block:: r

   base <- "https://raw.githubusercontent.com/jpatokal/openflights/master/data/"

   airports <- read.csv(paste0(base, "airports.dat"), header = FALSE,
                        na.strings = "\\N")[, c(2, 4, 5, 12)]
   names(airports) <- c("name", "country", "id", "tz")
   airports <- airports[!is.na(airports$id), ]
   # continents from the tz name ("Europe/Paris" -> "Europe")
   airports$group <- sub("/.*", "", airports$tz)

   routes <- read.csv(paste0(base, "routes.dat"), header = FALSE,
                      na.strings = "\\N")[, c(3, 5)]
   names(routes) <- c("source", "target")
   routes <- routes[complete.cases(routes), ]

   # one row per airline serving a leg -> weighted undirected edges
   und <- data.frame(source = pmin(routes$source, routes$target),
                     target = pmax(routes$source, routes$target))
   edges <- aggregate(list(weight = rep(1, nrow(und))), by = und, FUN = sum)
   edges <- edges[edges$source %in% airports$id &
                  edges$target %in% airports$id, ]
   nodes <- airports[, c("id", "group")]

What are we looking at?

.. code-block:: r

   str(lg_summary(edges))

.. code-block:: text

   List of 8
    $ nodes            : int 3257
    $ edges            : num 18930
    $ density          : num 0.00357
    $ average_degree   : num 11.6
    $ max_degree       : int 248
    $ components       : int 7
    $ largest_component: int 3231
    $ transitivity     : num 0.249

Mild density, high clustering, seven components (the giant one holds
3,231 airports) — and the busiest hubs are exactly who you'd guess:

.. code-block:: r

   strength <- lg_degree(edges, weighted = TRUE)  # route listings per airport
   lg_top_nodes(strength, 8)

.. code-block:: text

    ATL  ORD  LHR  PEK  CDG  FRA  LAX  DFW
   1826 1108 1051 1050 1041  990  986  936

And the zero-configuration picture — node size and edge opacity adapt to
density automatically, and the layout is warmed up before the first
paint:

.. code-block:: r

   lightgraph(edges = edges)

.. raw:: html

   <iframe src="./_static/vignettes/r_flights_default.html"
     title="World flight network, default settings" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Drag to pan, scroll to zoom, hover an airport to light up its
neighborhood, shift-drag to box-select, and **double-click** a hub to
isolate its ego network (Escape restores).

Node Styling
------------

Coloring by group
~~~~~~~~~~~~~~~~~

A ``group`` column on the nodes data frame colors nodes and builds the
interactive legend. The airports table lists thousands of fields with no
routes, so we drop them with ``remove_unconnected = TRUE``:

.. code-block:: r

   lightgraph(nodes, edges, remove_unconnected = TRUE,
              show_ellipses = FALSE)

.. raw:: html

   <iframe src="./_static/vignettes/r_flights_groups.html"
     title="Flight network by continent" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

No coordinates anywhere in the data — the force layout reconstructs a
recognizable world map from route topology alone. ``show_ellipses``
(default ``TRUE``) adds a covariance ellipse per group; for groups as
interwoven as continents it reads better off.

Metric-driven size
~~~~~~~~~~~~~~~~~~

Any named numeric vector drives node size via ``node_metric``; values
are min-max normalized into ``metric_size_range``. For the styling
sections we zoom into one slice with plenty of structure: the European
subnetwork (561 airports, 5,088 routes). Size encodes route volume
*within Europe* — and the intra-European ranking holds a surprise worth
plotting, with Barcelona and holiday-island Palma de Mallorca outranking
Frankfurt and Paris once intercontinental routes are excluded:

.. code-block:: r

   europe <- airports$id[airports$group == "Europe"]
   eu <- edges[edges$source %in% europe & edges$target %in% europe, ]

   strength_eu <- lg_degree(eu, weighted = TRUE)
   lg_top_nodes(strength_eu, 8)
   #  BCN  AMS  PMI  FRA  MUC  VIE  CDG  LGW
   #  615  549  544  518  512  493  478  454

   lightgraph(edges = eu, node_metric = strength_eu,
              metric_size_range = c(2, 26))

.. raw:: html

   <iframe src="./_static/vignettes/r_flights_metric.html"
     title="Hub airports by route volume" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Metric-driven color
~~~~~~~~~~~~~~~~~~~

``metric_map`` chooses the channel: ``"size"`` (default), ``"color"``,
or ``"both"``, interpolating between the ``metric_colors`` endpoints.
When the legend is on, a metric section shows the size dots and color
gradient with the metric's min/max values — title it with
``metric_label`` (e.g. ``metric_label = "PageRank"``). Here a PageRank
heat map of the European network:

.. code-block:: r

   lightgraph(edges = eu, node_metric = lg_pagerank(eu),
              metric_map = "both",
              metric_colors = c("#dbe9f6", "#08306b"),
              show_legend = FALSE)

.. raw:: html

   <iframe src="./_static/vignettes/r_flights_pagerank.html"
     title="PageRank heat map" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Per-node overrides
~~~~~~~~~~~~~~~~~~

Explicit ``size`` / ``color`` columns on the nodes data frame always win
over metric-derived values, and group colors win over node colors.
``node_size`` and ``node_color`` set the defaults for everyone else.

Edge Styling
------------

Weights to width and opacity
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``edge_weight_to_width`` / ``edge_weight_to_opacity`` map weights into
``weight_width_range`` / ``weight_opacity_range``. On the European
subnetwork, busy corridors turn into thick, solid strokes while
single-airline routes fade back:

.. code-block:: r

   lightgraph(edges = eu,
              edge_weight_to_width = TRUE,
              edge_weight_to_opacity = TRUE,
              weight_width_range = c(0.3, 5),
              node_metric = strength_eu)

.. raw:: html

   <iframe src="./_static/vignettes/r_flights_weights.html"
     title="European routes, weighted" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

By default edge opacity adapts continuously to on-screen density and
zoom — zoom in and watch edges solidify. ``edge_opacity = 0.4`` pins a
fixed value; ``edge_width`` and ``edge_color`` set the base stroke.

Direction arrows
~~~~~~~~~~~~~~~~

For directed data, aggregate ordered pairs instead. Routes between the
25 busiest airports:

.. code-block:: r

   top25 <- names(lg_top_nodes(strength, 25))
   dir25 <- routes[routes$source %in% top25 & routes$target %in% top25, ]
   directed <- aggregate(list(weight = rep(1, nrow(dir25))),
                         by = dir25, FUN = sum)

   lightgraph(edges = directed, show_arrows = TRUE,
              edge_weight_to_width = TRUE, node_size = 12,
              label_font_size = 8, link_distance = 140,
              edge_opacity = 0.5)

.. raw:: html

   <iframe src="./_static/vignettes/r_flights_arrows.html"
     title="Directed routes between the top 25 hubs" loading="lazy"
     style="width:100%; height:560px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Layouts
-------

Force layout tuning
~~~~~~~~~~~~~~~~~~~

.. code-block:: r

   lightgraph(edges = edges,
              simulation_strength = 4000,  # node repulsion
              link_distance = 100,         # preferred edge length
              group_attraction = 0.3,      # pull toward group centroids
              warmup_ticks = "auto")       # settle before first paint

Circular layout
~~~~~~~~~~~~~~~

``layout = "circular"`` starts nodes on a ring ordered by group, then
lets a gentle simulation relax it — a chord-diagram view of the top 40
hubs that settles into its natural clusters:

.. code-block:: r

   top40 <- names(lg_top_nodes(strength, 40))
   t40 <- edges[edges$source %in% top40 & edges$target %in% top40, ]

   lightgraph(nodes[nodes$id %in% top40, ], t40, layout = "circular",
              edge_weight_to_opacity = TRUE, node_size = 10,
              label_font_size = 8)

.. raw:: html

   <iframe src="./_static/vignettes/r_flights_circular.html"
     title="Top 40 hubs, circular layout" loading="lazy"
     style="width:100%; height:560px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Interaction & Exploration
-------------------------

Everything is modeless — no tool switching:

* **Hover** highlights the 1-hop neighborhood; the rest fades to
  ``neighbor_fade`` opacity (``highlight_neighbors = FALSE`` disables).
* **Double-click** isolates the ``ego_depth``-hop ego network; Escape
  or double-clicking empty space restores.
* **Click** selects; shift-click toggles; **shift-drag** box-selects;
  **search** matches ids as you type; **legend clicks** select groups.
* ``show_tooltips`` controls hover tooltips; ``show_statistics = TRUE``
  adds a live stats panel; dragging a node pins it.

.. code-block:: r

   lightgraph(edges = edges,
              ego_depth = 2,          # double-click reveals 2 hops
              neighbor_fade = 0.06,   # fade non-neighbors harder
              show_statistics = TRUE)

Themes
------

``theme = "dark"`` swaps canvas, panels, labels, and default colors;
``background_color`` overrides just the canvas. This figure also carries
the interaction tuning above — double-click any airport for its two-hop
reach:

.. code-block:: r

   lightgraph(edges = eu, theme = "dark",
              node_metric = strength_eu, metric_size_range = c(2, 24),
              ego_depth = 2, neighbor_fade = 0.06)

.. raw:: html

   <iframe src="./_static/vignettes/r_flights_dark.html"
     title="Dark theme" loading="lazy"
     style="width:100%; height:620px; border:1px solid #1f2937; border-radius:10px; overflow:hidden;"></iframe>

Graph Analytics
---------------

The ``lg_*`` functions are dependency-free (igraph is used for Louvain
communities when installed, never required), treat graphs as undirected,
and return named vectors keyed by node id.

.. list-table::
   :header-rows: 1

   * - Function
     - What it tells you
   * - ``lg_summary(edges)``
     - node/edge counts, density, degree stats, components, transitivity
   * - ``lg_degree(edges, weighted = FALSE)``
     - connections per node (weighted: strength)
   * - ``lg_betweenness(edges)``
     - who sits on the shortest paths (Brandes)
   * - ``lg_closeness(edges)``
     - who can reach everyone fastest
   * - ``lg_eigenvector(edges)``
     - who is connected to the well-connected
   * - ``lg_pagerank(edges, damping = 0.85)``
     - random-surfer importance
   * - ``lg_communities(edges)``
     - Louvain / label-propagation groups ('c1', 'c2', ...)
   * - ``lg_components(edges)``
     - connected component ids, largest first
   * - ``lg_neighbors(edges, node, depth = 1)``
     - the k-hop ego set around a node
   * - ``lg_top_nodes(metric, n = 10)``
     - the n best entries of any metric vector

Communities
~~~~~~~~~~~

``node_groups = "auto"`` runs ``lg_communities()`` under the hood.
Since it returns a named vector, you can also post-process it. Here we
detect communities on the network's *competitive core* — routes flown by
more than one carrier (weight ≥ 3, since each carrier lists both
directions), which sharpens the community structure — then keep the 8
largest and leave the rest uncolored. What emerges is the geography of
air travel: each community is a regional route system, sized by its
route volume:

.. code-block:: r

   competitive <- edges[edges$weight >= 3, ]

   comm <- lg_communities(competitive)   # Louvain when igraph is installed
   top8 <- names(sort(table(comm), decreasing = TRUE))[1:8]
   comm <- comm[comm %in% top8]

   lightgraph(edges = competitive, node_groups = comm,
              show_ellipses = FALSE,
              node_metric = lg_degree(competitive, weighted = TRUE),
              metric_size_range = c(2, 22))

.. raw:: html

   <iframe src="./_static/vignettes/r_flights_communities.html"
     title="Detected route communities" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Betweenness: finding the brokers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

On the 500 busiest airports (a couple of seconds in pure R):

.. code-block:: r

   top500 <- names(lg_top_nodes(strength, 500))
   sub <- edges[edges$source %in% top500 & edges$target %in% top500, ]

   bt <- lg_betweenness(sub)
   lg_top_nodes(bt, 8)
   #    AMS    FRA    CDG    PEK    DXB    LHR    IST    HKG
   # 0.0754 0.0708 0.0642 0.0544 0.0385 0.0366 0.0349 0.0319

Raw volume and brokerage disagree: Atlanta (the #1 hub by routes) is not
a top broker, while Amsterdam, Frankfurt, and Paris — the gateways
between route systems — take over:

.. code-block:: r

   lightgraph(edges = sub, node_metric = bt, metric_map = "both",
              metric_colors = c("#d9d9d9", "#c22e00"),
              show_legend = FALSE, edge_weight_to_opacity = TRUE)

.. raw:: html

   <iframe src="./_static/vignettes/r_flights_brokers.html"
     title="Brokers of the flight network" loading="lazy"
     style="width:100%; height:620px; border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;"></iframe>

Slicing with components and neighbors
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: r

   comp <- lg_components(edges)          # named integer, 1 = largest
   mainland <- names(comp)[comp == 1]

   reach <- lg_neighbors(edges, "ANC", depth = 2)
   sub <- edges[edges$source %in% reach & edges$target %in% reach, ]
   lightgraph(edges = sub, node_groups = "auto")

   # a metric table in one data frame
   metrics <- data.frame(
     degree   = lg_degree(edges),
     strength = strength,
     pagerank = lg_pagerank(edges)
   )
   head(metrics[order(-metrics$pagerank), ])

Performance at Scale
--------------------

Zoom and pan cost is dominated by *edges drawn per frame* — that is why
most styling figures on this page run on European and competitive-route
slices of the network instead of all 19k edges: halving the edge count
roughly doubles the zoom frame rate, with no loss of resolution.
Filtering *nodes* barely helps (edges concentrate
on hubs — the 1,000 busiest airports still carry 14k of the 19k edges);
filter edges by weight when frame rate is the concern. Beyond that, the
dials are:

.. code-block:: r

   lightgraph(edges = big[big$weight >= 3, ],
              warmup_ticks = 100,     # cap pre-paint layout work
              pixel_ratio = 1,        # trade sharpness for fill-rate
              show_labels = FALSE,    # labels are the first to drop
              export_scale = 4)       # ...but export PNGs at 4x

The Config Escape Hatch
-----------------------

Arguments cover the common surface; ``config`` deep-merges a raw
lightGraph configuration (the JS shape) over the generated one, so any
option in the JS ``DEFAULT_CONFIG`` is reachable:

.. code-block:: r

   lightgraph(edges = edges,
              auto_fit = TRUE,
              zoom_range = c(0.05, 10),
              config = list(
                nodes = list(borderWidth = 2,
                             selectedBorderColor = "#ffd700"),
                labels = list(fontFamily = "Georgia, serif"),
                simulation = list(centerStrength = 0.8)
              ))

Saving, R Markdown, and Shiny
-----------------------------

.. code-block:: r

   w <- lightgraph(nodes, edges, remove_unconnected = TRUE)

   htmlwidgets::saveWidget(w, "flights.html")  # standalone file

   # R Markdown / Quarto: just print the widget in a chunk

   # Shiny
   ui <- fluidPage(lightgraphOutput("net"))
   server <- function(input, output) {
     output$net <- renderLightgraph(lightgraph(nodes, edges))
   }

Viewers can also export PNG, SVG, and JSON from the widget toolbar.

The Same Thing in Python
------------------------

Every argument on this page has the same name and meaning in the Python
package — see the :doc:`Python vignette <vignette_python>` and the
:doc:`API reference <api>` parity table.
