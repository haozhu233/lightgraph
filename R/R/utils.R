#' Convert adjacency matrix to lightgraph format
#'
#' This helper function converts an adjacency matrix and node names into the
#' nodes and edges format required by lightgraph.
#'
#' @param adj_matrix A square numeric matrix representing the adjacency matrix
#' @param node_names A character vector of node names (must match matrix dimensions)
#' @param node_groups An optional named vector or list mapping node names to groups
#' @param remove_unconnected Logical, whether to remove nodes with no connections (default: TRUE)
#'
#' @return A list with two elements: 'nodes' and 'edges' data frames
#'
#' @examples
#' \dontrun{
#' adj_matrix <- matrix(c(0, 1, 0, 1, 0, 1, 0, 1, 0), nrow = 3)
#' node_names <- c("A", "B", "C")
#' result <- adjacency_to_lightgraph(adj_matrix, node_names)
#' lightgraph(result$nodes, result$edges)
#' }
#'
#' @export
adjacency_to_lightgraph <- function(adj_matrix, node_names, node_groups = NULL, 
                                    remove_unconnected = TRUE) {
  
  # Validate inputs
  if (!is.matrix(adj_matrix)) {
    stop("adj_matrix must be a matrix")
  }
  if (nrow(adj_matrix) != ncol(adj_matrix)) {
    stop("adj_matrix must be square")
  }
  if (length(node_names) != nrow(adj_matrix)) {
    stop("Length of node_names must match the dimensions of adj_matrix")
  }
  if (!is.null(node_groups) && (!is.vector(node_groups) && !is.list(node_groups))) {
    stop("node_groups must be a vector or list")
  }
  
  # Remove unconnected nodes if requested
  if (remove_unconnected) {
    connected <- (rowSums(adj_matrix) > 0) | (colSums(adj_matrix) > 0)
    adj_matrix <- adj_matrix[connected, connected, drop = FALSE]
    node_names <- node_names[connected]
  }
  
  # Create nodes data frame
  nodes <- data.frame(id = node_names, stringsAsFactors = FALSE)
  
  # Add groups if provided
  if (!is.null(node_groups)) {
    if (is.null(names(node_groups))) {
      # If no names, assume it's in order
      if (length(node_groups) == nrow(nodes)) {
        nodes$group <- as.character(node_groups)
      } else {
        warning("node_groups length doesn't match nodes, ignoring groups")
      }
    } else {
      # If named, match by name
      nodes$group <- as.character(node_groups[nodes$id])
      nodes$group[is.na(nodes$group)] <- ""
    }
  }
  
  # Create edges data frame using vectorized operations (O(n) instead of O(n^2))
  edge_indices <- which(adj_matrix > 0, arr.ind = TRUE)

  if (nrow(edge_indices) > 0) {
    edges <- data.frame(
      source = node_names[edge_indices[, 1]],
      target = node_names[edge_indices[, 2]],
      weight = adj_matrix[edge_indices],
      stringsAsFactors = FALSE
    )
  } else {
    edges <- data.frame(
      source = character(),
      target = character(),
      weight = numeric(),
      stringsAsFactors = FALSE
    )
  }

  list(nodes = nodes, edges = edges)
}
