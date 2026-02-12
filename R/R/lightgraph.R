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
#' @param edge_opacity Numeric, opacity for edges 0-1 (default: 0.1).
#' @param background_color Character, background color hex code (default: "#ffffff").
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
                       edge_opacity = 0.1,
                       background_color = "#ffffff",
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
      defaultOpacity = edge_opacity
    ),
    labels = list(
      visible = show_labels,
      fontSize = label_font_size
    ),
    simulation = list(
      chargeStrength = simulation_strength,
      linkDistance = link_distance
    ),
    groups = list(
      showEllipses = show_ellipses
    ),
    canvas = list(
      backgroundColor = background_color
    ),
    ui = list(
      showLegend = show_legend,
      showStatistics = show_statistics,
      showTooltips = show_tooltips
    ),
    layout = layout
  )

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
