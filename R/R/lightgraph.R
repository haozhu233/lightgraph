#' Create a lightgraph network visualization
#'
#' This function creates an interactive network visualization using the lightGraph
#' JavaScript library via htmlwidgets. Its parameters mirror the Python
#' binding's \code{net_vis()} one-to-one, and expose the full lightGraph JS
#' configuration.
#'
#' @param nodes A data frame with node information. Must contain an 'id' column.
#'   Optional columns: 'group' for node grouping, 'color' for custom colors,
#'   'size' for node sizes. May be omitted (NULL) when \code{edges} is given;
#'   nodes are then derived from the edge list.
#' @param edges A data frame with edge information. Must contain 'source' and 'target'
#'   columns. Optional 'weight' column for edge weights.
#' @param node_groups An optional named vector mapping node ids to group
#'   labels, or the string "auto" to detect communities automatically via
#'   \code{\link{lg_communities}}. Values given here win over an existing
#'   'group' column in \code{nodes}.
#' @param group_colors An optional named vector mapping group names to hex
#'   colors (e.g. \code{c(alpha = "#ff7f0e")}), pinning those groups'
#'   colors. Unpinned groups stay on the default palette. Names matching no
#'   group are ignored, so one vector can be reused across filtered subsets
#'   of the same data.
#' @param group_order An optional character vector giving the group ordering
#'   for palette assignment. Groups keep their palette slot even when absent
#'   from the data, so passing the same vector (e.g. computed once from the
#'   full dataset) to every figure in a series keeps each group's color
#'   stable across subsets. Groups not listed are appended in sorted order.
#'   Without group_order, groups are assigned palette colors in sorted-name
#'   order.
#' @param remove_unconnected Logical, whether to remove nodes with no
#'   connections (default: FALSE; the Python binding defaults to TRUE
#'   because adjacency-matrix workflows often carry empty rows).
#' @param node_metric Optional named numeric vector (names = node ids) mapped
#'   to node size and/or color per metric_map — see the lg_* analytics
#'   functions, e.g. \code{\link{lg_pagerank}}. Explicit size/color columns
#'   in nodes take precedence.
#' @param metric_map Character, which channel node_metric drives: "size",
#'   "color", or "both" (default: "size").
#' @param metric_size_range Numeric length-2, node size range for
#'   metric-driven sizing (default: c(4, 20)).
#' @param metric_colors Character length-2, low/high hex colors for
#'   metric-driven coloring (default: c("#c6dbef", "#08306b")).
#' @param metric_label Character, title for the metric section of the legend
#'   (e.g. "PageRank"; default: "Metric"). Shown whenever node_metric drives
#'   size and/or color and show_legend is TRUE.
#' @param show_arrows Logical, whether to show directional arrows on edges (default: FALSE).
#' @param show_labels Logical, whether to show node labels (default: TRUE).
#' @param show_ellipses Logical, whether to show group ellipses (default: TRUE).
#' @param show_legend Logical, whether to show the group legend (default: TRUE).
#' @param show_statistics Logical, whether to show the statistics panel (default: FALSE).
#' @param show_tooltips Logical, whether to show tooltips on hover (default: TRUE).
#' @param highlight_neighbors Logical, fade everything outside the 1-hop
#'   neighborhood of hovered/selected nodes (default: TRUE).
#' @param neighbor_fade Numeric, opacity multiplier applied to faded elements
#'   while highlighting (default: 0.15).
#' @param ego_filter Logical, double-clicking a node shows only its k-hop
#'   neighborhood; double-click empty space or press Escape to restore
#'   (default: TRUE).
#' @param ego_depth Integer, neighborhood depth in hops for the ego filter
#'   (default: 1).
#' @param layout Character, layout algorithm: "force" or "circular" (default: "force").
#' @param simulation_strength Numeric, repulsion strength for force layout (default: 4000).
#' @param link_distance Numeric, target distance between connected nodes (default: 100).
#' @param group_attraction Numeric, strength of the pull toward each group's
#'   centroid in the force layout (default: 0.3; 0 disables).
#' @param warmup_ticks "auto" or integer. Synchronous layout ticks run before
#'   the first paint so the graph appears already untangled. "auto" spends a
#'   roughly fixed time budget; a number forces that tick count; 0 disables.
#' @param node_size Numeric, default size for nodes (default: 7).
#' @param node_color Character, default node fill color (hex). Defaults to
#'   the theme color.
#' @param label_font_size Numeric, font size for labels (default: 5).
#' @param edge_width Numeric, base width for edges (JS default 0.45).
#' @param edge_color Character, default edge color (hex). Defaults to the
#'   theme color.
#' @param edge_opacity Numeric, opacity for edges 0-1. By default opacity
#'   adapts automatically to the on-screen edge density and zoom level;
#'   setting a value pins it.
#' @param edge_weight_to_width Logical, scale edge width by weight (default: FALSE).
#' @param edge_weight_to_opacity Logical, scale edge opacity by weight (default: FALSE).
#' @param weight_width_range Numeric length-2, edge width range used by
#'   edge_weight_to_width (default: c(0.5, 4)).
#' @param weight_opacity_range Numeric length-2, edge opacity range used by
#'   edge_weight_to_opacity (default: c(0.05, 0.6)).
#' @param theme Character, UI/canvas color theme: "light" or "dark"
#'   (default: "light").
#' @param background_color Character, background color hex code. Defaults to
#'   white in the light theme and near-black in the dark theme.
#' @param auto_fit Logical, zoom to fit the graph once the layout settles;
#'   skipped if the user already panned/zoomed manually (default: TRUE).
#' @param zoom_range Numeric length-2, minimum and maximum zoom factors
#'   (default: c(0.1, 5)).
#' @param pixel_ratio Numeric, backing-store resolution multiplier. Defaults
#'   to the display's devicePixelRatio (sharp on retina); set 1 to trade
#'   sharpness for speed on very large graphs.
#' @param export_scale Numeric, resolution multiplier for PNG export,
#'   relative to on-screen size (default: 2).
#' @param config Optional named list of raw lightGraph config (JS shape,
#'   e.g. \code{list(nodes = list(borderWidth = 2))}) deep-merged over
#'   everything above — full access to any JS option without a dedicated
#'   argument.
#' @param width Width of the visualization (optional, defaults to automatic sizing).
#' @param height Height of the visualization (optional, defaults to 800px).
#' @param elementId An optional element ID for the widget.
#'
#' @return An htmlwidget object that can be displayed in RStudio Viewer, R Markdown,
#'   or Shiny applications.
#'
#' @examples
#' \dontrun{
#' # Create sample network data
#' nodes <- data.frame(
#'   id = c("A", "B", "C", "D"),
#'   group = c("1", "1", "2", "2")
#' )
#' edges <- data.frame(
#'   source = c("A", "B", "C"),
#'   target = c("B", "C", "D"),
#'   weight = c(1, 1, 1)
#' )
#'
#' # Create visualization with default settings
#' lightgraph(nodes, edges)
#'
#' # Nodes can be derived from the edge list, with communities detected
#' # and PageRank mapped to node size:
#' lightgraph(
#'   edges = edges,
#'   node_groups = "auto",
#'   node_metric = lg_pagerank(edges)
#' )
#'
#' # Create visualization with custom settings
#' lightgraph(nodes, edges,
#'   layout = "circular",
#'   show_statistics = TRUE,
#'   background_color = "#f5f5f5"
#' )
#' }
#'
#' @import htmlwidgets
#' @export
lightgraph <- function(nodes = NULL, edges,
                       node_groups = NULL,
                       group_colors = NULL,
                       group_order = NULL,
                       remove_unconnected = FALSE,
                       node_metric = NULL,
                       metric_map = "size",
                       metric_size_range = c(4, 20),
                       metric_colors = c("#c6dbef", "#08306b"),
                       metric_label = NULL,
                       show_arrows = FALSE,
                       show_labels = TRUE,
                       show_ellipses = TRUE,
                       show_legend = TRUE,
                       show_statistics = FALSE,
                       show_tooltips = TRUE,
                       highlight_neighbors = TRUE,
                       neighbor_fade = 0.15,
                       ego_filter = TRUE,
                       ego_depth = 1,
                       layout = "force",
                       simulation_strength = 4000,
                       link_distance = 100,
                       group_attraction = 0.3,
                       warmup_ticks = "auto",
                       node_size = 7,
                       node_color = NULL,
                       label_font_size = 5,
                       edge_width = NULL,
                       edge_color = NULL,
                       edge_opacity = NULL,
                       edge_weight_to_width = FALSE,
                       edge_weight_to_opacity = FALSE,
                       weight_width_range = c(0.5, 4),
                       weight_opacity_range = c(0.05, 0.6),
                       theme = "light",
                       background_color = NULL,
                       auto_fit = TRUE,
                       zoom_range = c(0.1, 5),
                       pixel_ratio = NULL,
                       export_scale = 2,
                       config = NULL,
                       width = NULL,
                       height = "800px",
                       elementId = NULL) {

  # Validate inputs
  if (!is.data.frame(edges)) {
    stop("edges must be a data frame")
  }
  if (!all(c("source", "target") %in% names(edges))) {
    stop("edges data frame must contain 'source' and 'target' columns")
  }
  if (is.null(nodes)) {
    # Derive nodes from the edge list, preserving first appearance.
    nodes <- data.frame(
      id = unique(c(as.character(edges$source), as.character(edges$target))),
      stringsAsFactors = FALSE
    )
  }
  if (!is.data.frame(nodes)) {
    stop("nodes must be a data frame")
  }
  if (!"id" %in% names(nodes)) {
    stop("nodes data frame must contain an 'id' column")
  }
  if (!layout %in% c("force", "circular")) {
    stop("layout must be 'force' or 'circular'")
  }
  if (!metric_map %in% c("size", "color", "both")) {
    stop("metric_map must be 'size', 'color', or 'both'")
  }
  if (!is.null(group_colors) && is.null(names(group_colors))) {
    stop("group_colors must be a named vector of group = hex color")
  }

  # Resolve node_groups ("auto" or a named vector) into the group column.
  # Values given via node_groups win over an existing column.
  if (!is.null(node_groups)) {
    if (identical(node_groups, "auto")) {
      node_groups <- lg_communities(edges)
    }
    resolved <- unlist(node_groups)[as.character(nodes$id)]
    if (!"group" %in% names(nodes)) {
      nodes$group <- NA_character_
    }
    nodes$group <- ifelse(is.na(resolved), as.character(nodes$group), resolved)
  }

  # Remove unconnected nodes if requested
  if (remove_unconnected) {
    connected <- c(as.character(edges$source), as.character(edges$target))
    nodes <- nodes[as.character(nodes$id) %in% connected, , drop = FALSE]
  }

  # Map node_metric onto size and/or color columns (explicit columns win).
  # Channels the metric actually drove are described in the legend
  # (ui.metricLegend) so the JS can render a size/color key.
  metric_legend <- NULL
  if (!is.null(node_metric)) {
    values <- node_metric[as.character(nodes$id)]
    finite <- is.finite(values)
    if (any(finite)) {
      rng <- range(values[finite])
      span <- diff(rng)
      if (span == 0) span <- 1
      t <- pmin(pmax((values - rng[1]) / span, 0), 1)
      applied <- character(0)
      if (metric_map %in% c("size", "both") && !"size" %in% names(nodes)) {
        nodes$size <- metric_size_range[1] + t * diff(metric_size_range)
        applied <- c(applied, "size")
      }
      if (metric_map %in% c("color", "both") && !"color" %in% names(nodes)) {
        ramp <- grDevices::colorRamp(metric_colors)
        node_col <- rep(NA_character_, nrow(nodes))
        rgb_vals <- ramp(t[finite])
        node_col[finite] <- grDevices::rgb(
          rgb_vals[, 1], rgb_vals[, 2], rgb_vals[, 3], maxColorValue = 255)
        nodes$color <- node_col
        applied <- c(applied, "color")
      }
      if (length(applied) > 0) {
        metric_legend <- list(
          map = if (length(applied) == 2) "both" else applied,
          min = rng[1],
          max = rng[2]
        )
        if (!is.null(metric_label)) {
          metric_legend$label <- as.character(metric_label)
        }
        if ("size" %in% applied) {
          metric_legend$sizeRange <- as.numeric(metric_size_range)
        }
        if ("color" %in% applied) {
          metric_legend$colors <- as.character(metric_colors)
        }
      }
    }
  }

  # Convert data frames to lists for JSON serialization
  nodes_list <- lapply(seq_len(nrow(nodes)), function(i) {
    node <- list(id = as.character(nodes$id[i]))
    if ("group" %in% names(nodes) && !is.na(nodes$group[i])) {
      node$group <- as.character(nodes$group[i])
    }
    if ("color" %in% names(nodes) && !is.na(nodes$color[i])) {
      node$color <- as.character(nodes$color[i])
    }
    if ("size" %in% names(nodes) && !is.na(nodes$size[i])) {
      node$size <- as.numeric(nodes$size[i])
    }
    node
  })

  edges_list <- lapply(seq_len(nrow(edges)), function(i) {
    edge <- list(
      source = as.character(edges$source[i]),
      target = as.character(edges$target[i])
    )
    if ("weight" %in% names(edges)) {
      edge$weight <- as.numeric(edges$weight[i])
    } else {
      edge$weight <- 1
    }
    edge
  })

  # Build configuration. Omitted keys (rather than nulls) let the JS side
  # apply its adaptive/theme-aware defaults.
  graph_config <- list(
    nodes = list(
      defaultSize = node_size
    ),
    edges = list(
      showArrows = show_arrows,
      weightToWidth = edge_weight_to_width,
      weightToOpacity = edge_weight_to_opacity,
      weightWidthRange = weight_width_range,
      weightOpacityRange = weight_opacity_range
    ),
    highlight = list(
      enabled = highlight_neighbors,
      neighborFade = neighbor_fade
    ),
    egoFilter = list(
      enabled = ego_filter,
      depth = ego_depth
    ),
    labels = list(
      visible = show_labels,
      fontSize = label_font_size
    ),
    simulation = list(
      chargeStrength = simulation_strength,
      linkDistance = link_distance,
      groupAttraction = group_attraction,
      warmupTicks = warmup_ticks
    ),
    groups = list(
      showEllipses = show_ellipses
    ),
    canvas = list(
      autoFit = auto_fit,
      zoomMin = zoom_range[1],
      zoomMax = zoom_range[2],
      exportScale = export_scale
    ),
    ui = list(
      theme = theme,
      showLegend = show_legend,
      showStatistics = show_statistics,
      showTooltips = show_tooltips
    ),
    layout = layout
  )
  if (!is.null(metric_legend)) {
    graph_config$ui$metricLegend <- metric_legend
  }
  # Only set optional values if explicitly provided
  if (!is.null(group_colors)) {
    graph_config$groups$colors <- as.list(group_colors)
  }
  if (!is.null(group_order)) {
    # I() keeps a length-1 vector serializing as a JSON array, not a scalar
    graph_config$groups$colorOrder <- I(as.character(group_order))
  }
  if (!is.null(node_color)) {
    graph_config$nodes$defaultColor <- node_color
  }
  if (!is.null(edge_width)) {
    graph_config$edges$defaultWidth <- edge_width
  }
  if (!is.null(edge_color)) {
    graph_config$edges$defaultColor <- edge_color
  }
  if (!is.null(edge_opacity)) {
    graph_config$edges$defaultOpacity <- edge_opacity
  }
  if (!is.null(background_color)) {
    graph_config$canvas$backgroundColor <- background_color
  }
  if (!is.null(pixel_ratio)) {
    graph_config$canvas$pixelRatio <- pixel_ratio
  }
  if (!is.null(config)) {
    graph_config <- utils::modifyList(graph_config, config)
  }

  # Create widget data
  x <- list(
    nodes = nodes_list,
    edges = edges_list,
    config = graph_config
  )

  # Create widget
  htmlwidgets::createWidget(
    name = 'lightgraph',
    x,
    width = width,
    height = height,
    package = 'lightgraph',
    elementId = elementId,
    sizingPolicy = htmlwidgets::sizingPolicy(
      defaultWidth = "100%",
      defaultHeight = "800px",
      viewer.defaultWidth = "100%",
      viewer.defaultHeight = "800px",
      browser.defaultWidth = "100%",
      browser.defaultHeight = "800px"
    )
  )
}

#' Shiny output binding for lightgraph
#'
#' Output function for rendering lightgraph visualizations in Shiny applications.
#'
#' @param outputId Output variable to read from
#' @param width Width of the visualization (must be a valid CSS unit)
#' @param height Height of the visualization (must be a valid CSS unit)
#'
#' @return An output element for use in Shiny UI
#'
#' @export
lightgraphOutput <- function(outputId, width = '100%', height = '800px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'lightgraph', width, height, package = 'lightgraph')
}

#' Shiny render function for lightgraph
#'
#' Render function for creating lightgraph visualizations in Shiny applications.
#'
#' @param expr An expression that generates a lightgraph visualization
#' @param env The environment in which to evaluate expr
#' @param quoted Is expr a quoted expression (with quote())?
#'
#' @return A render function for use in Shiny server
#'
#' @export
renderLightgraph <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) }
  htmlwidgets::shinyRenderWidget(expr, lightgraphOutput, env, quoted = TRUE)
}
