# Generate the R vignette embeds from the real R binding.
args <- commandArgs(trailingOnly = TRUE)
scratch <- args[1]
out <- args[2]
.libPaths(c(file.path(scratch, "rlib"), .libPaths()))
library(lightgraph)

# ---------------------------------------------------------------------------
# Build the flight network (exactly as shown in the vignette)
# ---------------------------------------------------------------------------
airports <- read.csv(file.path(scratch, "airports.dat"), header = FALSE,
                     na.strings = "\\N")[, c(2, 4, 5, 12)]
names(airports) <- c("name", "country", "id", "tz")
airports <- airports[!is.na(airports$id), ]
airports$group <- sub("/.*", "", airports$tz)

routes <- read.csv(file.path(scratch, "routes.dat"), header = FALSE,
                   na.strings = "\\N")[, c(3, 5)]
names(routes) <- c("source", "target")
routes <- routes[stats::complete.cases(routes), ]

# One row per airline serving a leg -> aggregate into weighted edges
und <- data.frame(source = pmin(routes$source, routes$target),
                  target = pmax(routes$source, routes$target))
edges <- aggregate(list(weight = rep(1, nrow(und))),
                   by = und, FUN = sum)
known <- airports$id
edges <- edges[edges$source %in% known & edges$target %in% known, ]
nodes <- airports[, c("id", "group")]
cat("edges:", nrow(edges), "\n")

# Subgraphs used by the styling / world-map sections
competitive <- edges[edges$weight >= 3, ]
europe <- airports$id[airports$group == "Europe"]
eu <- edges[edges$source %in% europe & edges$target %in% europe, ]
strength_eu <- lg_degree(eu, weighted = TRUE)
cat("competitive edges:", nrow(competitive), " eu edges:", nrow(eu), "\n")
print(lg_top_nodes(strength_eu, 8))

str(lg_summary(edges))
strength <- lg_degree(edges, weighted = TRUE)
print(lg_top_nodes(strength, 10))
pr <- lg_pagerank(edges)
print(lg_top_nodes(pr, 10))
comm <- lg_communities(competitive)
cat("n communities:", length(unique(comm)), "\n")
print(utils::head(sort(table(comm), decreasing = TRUE), 6))

top500 <- names(lg_top_nodes(strength, 500))
sub500 <- edges[edges$source %in% top500 & edges$target %in% top500, ]
cat("betweenness on", nrow(sub500), "edges...\n")
t0 <- Sys.time()
bt <- lg_betweenness(sub500)
cat("betweenness time:", round(as.numeric(Sys.time() - t0, units = "secs")), "s\n")
print(lg_top_nodes(bt, 10))

# ---------------------------------------------------------------------------
# Slim embed machinery
# ---------------------------------------------------------------------------
template <- '<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>%s</title>
<style>html,body{margin:0;height:100%%;overflow:hidden;background:%s}#graph{width:100%%;height:100vh}</style>
</head>
<body>
<div id="graph"></div>
<script type="application/json" id="nodes">%s</script>
<script type="application/json" id="config">%s</script>
%s
<script src="../demo/d3.v7.min.js"></script>
<script src="../demo/lightgraph.js"></script>
<script>
(function () {
  var nodes = JSON.parse(document.getElementById("nodes").textContent);
  var config = JSON.parse(document.getElementById("config").textContent);
  var inline = document.getElementById("edges");
  var load = inline
    ? Promise.resolve(JSON.parse(inline.textContent))
    : fetch("%s").then(function (r) { return r.json(); });
  load.then(function (edges) {
    new window.lightGraph.LightGraph(document.getElementById("graph"), {
      nodes: nodes, edges: edges, config: config
    });
  });
})();
</script>
</body>
</html>
'

shared_written <- new.env()
to_json <- function(x) as.character(
  jsonlite::toJSON(x, auto_unbox = TRUE, null = "null", digits = NA))

slim_embed <- function(widget, name, title, shared_edges = NULL,
                       bg = "#ffffff") {
  nodes_json <- to_json(widget$x$nodes)
  config_json <- to_json(widget$x$config)
  edges_json <- to_json(widget$x$edges)
  if (!is.null(shared_edges)) {
    path <- file.path(out, "data", shared_edges)
    if (is.null(shared_written[[shared_edges]])) {
      writeLines(edges_json, path)
      shared_written[[shared_edges]] <- edges_json
      cat(sprintf("wrote data/%s (%d KB)\n", shared_edges,
                  file.size(path) %/% 1024))
    } else {
      stopifnot(identical(shared_written[[shared_edges]], edges_json))
    }
    edges_block <- ""
    edges_src <- paste0("data/", shared_edges)
  } else {
    edges_block <- paste0('<script type="application/json" id="edges">',
                          edges_json, "</script>")
    edges_src <- ""
  }
  page <- sprintf(template, title, bg, nodes_json, config_json,
                  edges_block, edges_src)
  writeLines(page, file.path(out, name))
  cat(sprintf("wrote %s (%d KB)\n", name, nchar(page) %/% 1024))
}

F_FULL <- "flights_edges_r.json"
F_COMP <- "flights_edges_competitive_r.json"
F_EU <- "flights_edges_eu_r.json"

# 1. First graph (toy)
toy <- data.frame(
  source = c("Amy", "Amy", "Ben", "Cat", "Dan", "Dan", "Eve"),
  target = c("Ben", "Cat", "Cat", "Dan", "Eve", "Fay", "Fay"),
  weight = c(3, 1, 2, 1, 2, 1, 3))
slim_embed(lightgraph(edges = toy), "r_first_graph.html", "A first graph")

# 2. Flight network, defaults
slim_embed(lightgraph(edges = edges),
           "r_flights_default.html", "World flight network — defaults",
           shared_edges = F_FULL)

# 3. Groups: color by continent
slim_embed(lightgraph(nodes, edges, remove_unconnected = TRUE,
                      show_ellipses = FALSE),
           "r_flights_groups.html", "Flight network by continent",
           shared_edges = F_FULL)

# 4. Metric: strength -> size
slim_embed(lightgraph(edges = eu, node_metric = strength_eu,
                      metric_size_range = c(2, 26)),
           "r_flights_metric.html", "European hubs by route volume",
           shared_edges = F_EU)

# 5. Metric -> color: PageRank heat map
slim_embed(lightgraph(edges = eu, node_metric = lg_pagerank(eu),
                      metric_map = "both",
                      metric_colors = c("#dbe9f6", "#08306b"),
                      show_legend = FALSE),
           "r_flights_pagerank.html", "PageRank heat map (Europe)",
           shared_edges = F_EU)

# 6. Edge weights: European routes
slim_embed(lightgraph(edges = eu, edge_weight_to_width = TRUE,
                      edge_weight_to_opacity = TRUE,
                      weight_width_range = c(0.3, 5),
                      node_metric = strength_eu),
           "r_flights_weights.html", "European routes, weighted",
           shared_edges = F_EU)

# 7. Arrows: directed routes between the top 25 hubs
top25 <- names(lg_top_nodes(strength, 25))
dir25 <- routes[routes$source %in% top25 & routes$target %in% top25, ]
directed <- aggregate(list(weight = rep(1, nrow(dir25))),
                      by = dir25, FUN = sum)
slim_embed(lightgraph(edges = directed, show_arrows = TRUE,
                      edge_weight_to_width = TRUE, node_size = 12,
                      label_font_size = 8, link_distance = 140,
                      edge_opacity = 0.5),
           "r_flights_arrows.html", "Directed routes between the top 25 hubs")

# 8. Circular layout: top 40 hubs
top40 <- names(lg_top_nodes(strength, 40))
t40 <- edges[edges$source %in% top40 & edges$target %in% top40, ]
n40 <- nodes[nodes$id %in% top40, ]
slim_embed(lightgraph(n40, t40, layout = "circular",
                      edge_weight_to_opacity = TRUE, node_size = 10,
                      label_font_size = 8),
           "r_flights_circular.html", "Top 40 hubs, circular layout")

# 9. Communities, restricted to the 8 largest
top8 <- names(sort(table(comm), decreasing = TRUE))[1:8]
comm8 <- comm[comm %in% top8]
strength_comp <- lg_degree(competitive, weighted = TRUE)
slim_embed(lightgraph(edges = competitive, node_groups = comm8,
                      show_ellipses = FALSE, node_metric = strength_comp,
                      metric_size_range = c(2, 22)),
           "r_flights_communities.html", "Detected route communities",
           shared_edges = F_COMP)

# 10. Brokers: betweenness (top-500 subgraph)
slim_embed(lightgraph(edges = sub500, node_metric = bt, metric_map = "both",
                      metric_colors = c("#d9d9d9", "#c22e00"),
                      show_legend = FALSE, edge_weight_to_opacity = TRUE),
           "r_flights_brokers.html", "Brokers of the flight network")

# 11. Dark theme
slim_embed(lightgraph(edges = eu, theme = "dark",
                      node_metric = strength_eu,
                      metric_size_range = c(2, 24),
                      ego_depth = 2, neighbor_fade = 0.06),
           "r_flights_dark.html", "Dark theme", shared_edges = F_EU,
           bg = "#111827")

cat("done\n")
