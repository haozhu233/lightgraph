#' Create a lightgraph network visualization
#'
#' This function creates an interactive network visualization using the lightGraph
#' JavaScript library via htmlwidgets.
#'
#' @param nodes A data frame with node information. Must contain an 'id' column.
#'   Optional columns: 'group' for node grouping, 'color' for custom colors,
#'   'size' for node sizes.
#' @param edges A data frame with edge information. Must contain 'source' and 'target'
#'   columns. Optional 'weight' column for edge weights.
#' @param show_arrows Logical, whether to show directional arrows on edges (default: FALSE).
#' @param show_labels Logical, whether to show node labels (default: TRUE).
#' @param show_ellipses Logical, whether to show group ellipses (default: TRUE).
#' @param show_legend Logical, whether to show the group legend (default: TRUE).
#' @param show_statistics Logical, whether to show the statistics panel (default: FALSE).
#' @param show_tooltips Logical, whether to show tooltips on hover (default: TRUE).
#' @param layout Character, layout algorithm: "force" or "circular" (default: "force").
#' @param simulation_strength Numeric, repulsion strength for force layout (default: 4000).
#' @param link_distance Numeric, target distance between connected nodes (default: 100).
#' @param node_size Numeric, default size for nodes (default: 7).
#' @param label_font_size Numeric, font size for labels (default: 5).
#' @param edge_opacity Numeric, opacity for edges 0-1. Defaults to an
#'   adaptive value based on edge count.
#' @param group_attraction Numeric, strength of the pull toward each group's
#'   centroid in the force layout (default: 0.3; 0 disables).
#' @param theme Character, UI/canvas color theme: "light" or "dark"
#'   (default: "light").
#' @param edge_weight_to_width Logical, scale edge width by weight (default: FALSE).
#' @param edge_weight_to_opacity Logical, scale edge opacity by weight (default: FALSE).
#' @param highlight_neighbors Logical, fade everything outside the 1-hop
#'   neighborhood of hovered/selected nodes (default: TRUE).
#' @param node_metric Optional named numeric vector (names = node ids) mapped
#'   to node size and/or color per metric_map. Explicit size/color columns in
#'   nodes take precedence.
#' @param metric_map Character, which channel node_metric drives: "size",
#'   "color", or "both" (default: "size").
#' @param metric_size_range Numeric length-2, node size range for
#'   metric-driven sizing (default: c(4, 20)).
#' @param metric_colors Character length-2, low/high hex colors for
#'   metric-driven coloring (default: c("#c6dbef", "#08306b")).
#' @param background_color Character, background color hex code. Defaults to
#'   white in the light theme and near-black in the dark theme.
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
lightgraph <- function(nodes, edges,
                       show_arrows = FALSE,
                       show_labels = TRUE,
                       show_ellipses = TRUE,
                       show_legend = TRUE,
                       show_statistics = FALSE,
                       show_tooltips = TRUE,
                       layout = "force",
                       simulation_strength = 4000,
                       link_distance = 100,
                       node_size = 7,
                       label_font_size = 5,
                       edge_opacity = NULL,
                       edge_weight_to_width = FALSE,
                       edge_weight_to_opacity = FALSE,
                       highlight_neighbors = TRUE,
                       group_attraction = 0.3,
                       theme = "light",
                       node_metric = NULL,
                       metric_map = "size",
                       metric_size_range = c(4, 20),
                       metric_colors = c("#c6dbef", "#08306b"),
                       background_color = NULL,
                       width = NULL,
                       height = "800px",
                       elementId = NULL) {

  # Validate inputs
  if (!is.data.frame(nodes)) {
    stop("nodes must be a data frame")
  }
  if (!is.data.frame(edges)) {
    stop("edges must be a data frame")
  }
  if (!"id" %in% names(nodes)) {
    stop("nodes data frame must contain an 'id' column")
  }
  if (!all(c("source", "target") %in% names(edges))) {
    stop("edges data frame must contain 'source' and 'target' columns")
  }
  if (!layout %in% c("force", "circular")) {
    stop("layout must be 'force' or 'circular'")
  }
  if (!metric_map %in% c("size", "color", "both")) {
    stop("metric_map must be 'size', 'color', or 'both'")
  }

  # Map node_metric onto size and/or color columns (explicit columns win)
  if (!is.null(node_metric)) {
    values <- node_metric[as.character(nodes$id)]
    finite <- is.finite(values)
    if (any(finite)) {
      rng <- range(values[finite])
      span <- diff(rng)
      if (span == 0) span <- 1
      t <- pmin(pmax((values - rng[1]) / span, 0), 1)
      if (metric_map %in% c("size", "both") && !"size" %in% names(nodes)) {
        nodes$size <- metric_size_range[1] + t * diff(metric_size_range)
      }
      if (metric_map %in% c("color", "both") && !"color" %in% names(nodes)) {
        ramp <- grDevices::colorRamp(metric_colors)
        node_color <- rep(NA_character_, nrow(nodes))
        rgb_vals <- ramp(t[finite])
        node_color[finite] <- grDevices::rgb(
          rgb_vals[, 1], rgb_vals[, 2], rgb_vals[, 3], maxColorValue = 255)
        nodes$color <- node_color
      }
    }
  }

  # Convert data frames to lists for JSON serialization
  nodes_list <- lapply(1:nrow(nodes), function(i) {
    node <- list(id = as.character(nodes$id[i]))
    if ("group" %in% names(nodes)) {
      node$group <- as.character(nodes$group[i])
    }
    if ("color" %in% names(nodes)) {
      node$color <- as.character(nodes$color[i])
    }
    if ("size" %in% names(nodes)) {
      node$size <- as.numeric(nodes$size[i])
    }
    node
  })

  edges_list <- lapply(1:nrow(edges), function(i) {
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

  # Build configuration
  config <- list(
    nodes = list(
      defaultSize = node_size
    ),
    edges = list(
      showArrows = show_arrows,
      weightToWidth = edge_weight_to_width,
      weightToOpacity = edge_weight_to_opacity
    ),
    highlight = list(
      enabled = highlight_neighbors
    ),
    labels = list(
      visible = show_labels,
      fontSize = label_font_size
    ),
    simulation = list(
      chargeStrength = simulation_strength,
      linkDistance = link_distance,
      groupAttraction = group_attraction
    ),
    groups = list(
      showEllipses = show_ellipses
    ),
    canvas = list(),
    ui = list(
      showLegend = show_legend,
      showStatistics = show_statistics,
      showTooltips = show_tooltips,
      theme = theme
    ),
    layout = layout
  )
  # Omitted keys let the JS side apply adaptive/theme-aware defaults
  if (!is.null(edge_opacity)) {
    config$edges$defaultOpacity <- edge_opacity
  }
  if (!is.null(background_color)) {
    config$canvas$backgroundColor <- background_color
  } else {
    # jsonlite serializes empty lists as [], which the JS config merge
    # rejects; drop the section entirely instead.
    config$canvas <- NULL
  }

  # Create widget data
  x <- list(
    nodes = nodes_list,
    edges = edges_list,
    config = config
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
