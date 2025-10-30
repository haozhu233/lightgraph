# Example 1: Basic network visualization
library(lightgraph)

# Create simple network
nodes <- data.frame(
  id = c("A", "B", "C", "D", "E"),
  group = c("1", "1", "2", "2", "1")
)

edges <- data.frame(
  source = c("A", "B", "C", "D", "A"),
  target = c("B", "C", "D", "E", "C"),
  weight = c(1, 2, 1, 1, 3)
)

# Visualize
lightgraph(nodes, edges)

# Example 2: From adjacency matrix
adj_matrix <- matrix(c(
  0, 1, 0, 0, 1,
  1, 0, 1, 0, 0,
  0, 1, 0, 1, 0,
  0, 0, 1, 0, 1,
  1, 0, 0, 1, 0
), nrow = 5, byrow = TRUE)

node_names <- c("A", "B", "C", "D", "E")
node_groups <- c("1", "1", "2", "2", "1")
names(node_groups) <- node_names

# Convert and visualize
result <- adjacency_to_lightgraph(adj_matrix, node_names, node_groups)
lightgraph(result$nodes, result$edges)

# Example 3: Larger random network
set.seed(42)
n_nodes <- 20
node_ids <- paste0("Node", 1:n_nodes)

nodes <- data.frame(
  id = node_ids,
  group = as.character(sample(1:4, n_nodes, replace = TRUE))
)

# Create random edges
n_edges <- 30
edges <- data.frame(
  source = sample(node_ids, n_edges, replace = TRUE),
  target = sample(node_ids, n_edges, replace = TRUE),
  weight = runif(n_edges, 0.5, 2)
)

# Remove self-loops
edges <- edges[edges$source != edges$target, ]

lightgraph(nodes, edges)
