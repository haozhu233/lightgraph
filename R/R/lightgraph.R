#' Create a lightgraph network visualization
#'
#' This function creates an interactive network visualization using the lightGraph
#' JavaScript library via htmlwidgets.
#'
#' @param nodes A data frame with node information. Must contain an 'id' column.
#'   Optional 'group' column for node grouping.
#' @param edges A data frame with edge information. Must contain 'source' and 'target'
#'   columns. Optional 'weight' column for edge weights.
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
#' # Create visualization
#' lightgraph(nodes, edges)
#' }
#'
#' @import htmlwidgets
#' @export
lightgraph <- function(nodes, edges, width = NULL, height = "800px", elementId = NULL) {
  
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
  
  # Convert data frames to lists for JSON serialization
  nodes_list <- lapply(1:nrow(nodes), function(i) {
    node <- list(id = as.character(nodes$id[i]))
    if ("group" %in% names(nodes)) {
      node$group <- as.character(nodes$group[i])
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
  
  # Create widget data
  x <- list(
    nodes = nodes_list,
    edges = edges_list
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
