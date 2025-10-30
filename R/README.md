# lightgraph R Package

`lightgraph` is a high-performance HTML canvas-based network visualization tool for R. This package provides an R binding to the lightGraph JavaScript library using htmlwidgets.

![](https://raw.githubusercontent.com/haozhu233/lightgraph/refs/heads/main/assets/lg_functions.png)

## Installation

You can install the development version of lightgraph from GitHub:

```r
# install.packages("devtools")
devtools::install_github("haozhu233/lightgraph", subdir = "R")
```

## Usage

### Basic Network Visualization

```r
library(lightgraph)

# Create sample network data
nodes <- data.frame(
  id = c("A", "B", "C", "D", "E"),
  group = c("1", "1", "2", "2", "1")
)

edges <- data.frame(
  source = c("A", "B", "C", "D", "A"),
  target = c("B", "C", "D", "E", "C"),
  weight = c(1, 2, 1, 1, 3)
)

# Create visualization
lightgraph(nodes, edges)
```

### From Adjacency Matrix

```r
library(lightgraph)

# Create adjacency matrix
adj_matrix <- matrix(c(
  0, 1, 0, 0,
  1, 0, 1, 0,
  0, 1, 0, 1,
  0, 0, 1, 0
), nrow = 4, byrow = TRUE)

node_names <- c("A", "B", "C", "D")

# Convert to nodes and edges format
nodes <- data.frame(id = node_names)
edges <- data.frame()
for (i in 1:nrow(adj_matrix)) {
  for (j in 1:ncol(adj_matrix)) {
    if (adj_matrix[i, j] > 0) {
      edges <- rbind(edges, data.frame(
        source = node_names[i],
        target = node_names[j],
        weight = adj_matrix[i, j]
      ))
    }
  }
}

lightgraph(nodes, edges)
```

### Use in Shiny

```r
library(shiny)
library(lightgraph)

ui <- fluidPage(
  titlePanel("lightgraph in Shiny"),
  lightgraphOutput("network", height = "600px")
)

server <- function(input, output) {
  output$network <- renderLightgraph({
    nodes <- data.frame(
      id = c("A", "B", "C", "D"),
      group = c("1", "1", "2", "2")
    )
    edges <- data.frame(
      source = c("A", "B", "C"),
      target = c("B", "C", "D"),
      weight = c(1, 1, 1)
    )
    lightgraph(nodes, edges)
  })
}

shinyApp(ui = ui, server = server)
```

### Use in R Markdown

````markdown
```{r}
library(lightgraph)

nodes <- data.frame(
  id = c("A", "B", "C"),
  group = c("1", "1", "2")
)

edges <- data.frame(
  source = c("A", "B"),
  target = c("B", "C"),
  weight = c(1, 1)
)

lightgraph(nodes, edges)
```
````

## Features

- **High Performance**: Canvas-based rendering for smooth visualization of large networks
- **Interactive**: Zoom, pan, select nodes, and create groups interactively
- **Flexible Data Input**: Support for data frames with nodes and edges
- **Integration**: Works seamlessly with RStudio Viewer, R Markdown, and Shiny
- **Customizable**: Support for node grouping and edge weights

## Data Format

### Nodes

The `nodes` data frame must contain:
- `id`: Character or numeric node identifier (required)
- `group`: Character or numeric group identifier (optional)

### Edges

The `edges` data frame must contain:
- `source`: Character or numeric identifier matching a node id (required)
- `target`: Character or numeric identifier matching a node id (required)
- `weight`: Numeric edge weight (optional, defaults to 1)

## License

MIT

## Authors

- Hao Zhu (haozhu233@gmail.com)
- Donna Slonim (donna.slonim@tufts.edu)

## Links

- GitHub: https://github.com/haozhu233/lightgraph
- Issues: https://github.com/haozhu233/lightgraph/issues
