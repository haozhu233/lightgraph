# Load package sources directly
library(lightgraph)

approx_equal <- function(a, b, tol = 1e-3) all(abs(a - b) < tol)
check <- function(label, cond) {
  cat(sprintf("%-40s %s\n", label, if (isTRUE(cond)) "OK" else "FAIL"))
  if (!isTRUE(cond)) quit(status = 1)
}

# Same graph as the Python tests: two triangles bridged at C-D, plus X-Y.
edges <- data.frame(
  source = c("A", "B", "C", "C", "D", "E", "F", "X"),
  target = c("B", "C", "A", "D", "E", "F", "D", "Y"),
  weight = c(2, 1, 1, 1, 1, 1, 1, 1)
)

d <- lg_degree(edges)
check("degree", d[["C"]] == 3 && d[["A"]] == 2 && d[["X"]] == 1)

s <- lg_degree(edges, weighted = TRUE)
check("strength", s[["A"]] == 3 && s[["C"]] == 3)

b <- lg_betweenness(edges)
# Python reference: C = D = 0.286 (normalized), rest 0
check("betweenness", approx_equal(b[["C"]], 0.28571) && b[["A"]] == 0)

cl <- lg_closeness(edges)
# Python reference: A 0.357, C 0.510, X 0.143
check("closeness", approx_equal(cl[["A"]], 0.35714) &&
                   approx_equal(cl[["C"]], 0.5102) &&
                   approx_equal(cl[["X"]], 0.14286))

ev <- lg_eigenvector(edges)
# Python reference: A/B 0.566, C 0.491, D 0.273, E/F 0.147, X/Y 0
check("eigenvector", approx_equal(ev[["A"]], 0.566) &&
                     approx_equal(ev[["C"]], 0.491) &&
                     approx_equal(ev[["X"]], 0))

pr <- lg_pagerank(edges)
check("pagerank sums to 1", approx_equal(sum(pr), 1, 1e-6))
# Python reference top-2: D 0.14537, C 0.13417
check("pagerank values", approx_equal(pr[["D"]], 0.14537) &&
                         approx_equal(pr[["C"]], 0.13417))

cm <- lg_communities(edges)
check("communities triangles", cm[["A"]] == cm[["B"]] && cm[["B"]] == cm[["C"]] &&
      cm[["D"]] == cm[["E"]] && cm[["A"]] != cm[["D"]])

cp <- lg_components(edges)
check("components", cp[["A"]] == 1 && cp[["F"]] == 1 && cp[["X"]] == 2)

nb <- lg_neighbors(edges, "C", depth = 2)
check("neighbors depth 2", identical(nb, sort(c("A","B","C","D","E","F"))))

sm <- lg_summary(edges)
check("summary counts", sm$nodes == 8 && sm$edges == 8 &&
      sm$components == 2 && sm$largest_component == 6)
check("summary transitivity", approx_equal(sm$transitivity, 0.6))

tp <- lg_top_nodes(pr, 2)
check("top_nodes", identical(names(tp), c("D", "C")))

# Widget creation with the new parameters
w <- lightgraph(
  edges = edges,
  node_groups = "auto",
  node_metric = lg_pagerank(edges),
  metric_map = "both",
  edge_width = 0.5, edge_color = "#123456", node_color = "#654321",
  neighbor_fade = 0.3, ego_filter = FALSE, ego_depth = 2,
  warmup_ticks = 50, auto_fit = FALSE, zoom_range = c(0.05, 10),
  pixel_ratio = 1, export_scale = 3,
  weight_width_range = c(1, 5), weight_opacity_range = c(0.1, 0.9),
  config = list(nodes = list(borderWidth = 2))
)
check("widget class", inherits(w, "htmlwidget"))

cfg <- w$x$config
check("cfg edge width/color", cfg$edges$defaultWidth == 0.5 &&
      cfg$edges$defaultColor == "#123456")
check("cfg egoFilter", identical(cfg$egoFilter, list(enabled = FALSE, depth = 2)))
check("cfg canvas", cfg$canvas$autoFit == FALSE && cfg$canvas$zoomMin == 0.05 &&
      cfg$canvas$pixelRatio == 1 && cfg$canvas$exportScale == 3)
check("cfg escape hatch merged", cfg$nodes$borderWidth == 2 &&
      cfg$nodes$defaultSize == 7)
check("cfg weight ranges", identical(cfg$edges$weightWidthRange, c(1, 5)))

# Derived nodes get groups + metric styling
ids <- vapply(w$x$nodes, `[[`, "", "id")
grps <- vapply(w$x$nodes, function(n) if (is.null(n$group)) NA_character_ else n$group, "")
check("auto groups on derived nodes", !any(is.na(grps)))
check("metric sizes present", all(vapply(w$x$nodes, function(n) !is.null(n$size), TRUE)))
check("metric colors present", all(vapply(w$x$nodes, function(n) !is.null(n$color), TRUE)))

# Metric legend metadata
ml <- cfg$ui$metricLegend
pr_rng <- range(lg_pagerank(edges))
check("metric legend map/range", !is.null(ml) && ml$map == "both" &&
      approx_equal(ml$min, pr_rng[1]) && approx_equal(ml$max, pr_rng[2]))
check("metric legend channels", identical(ml$sizeRange, c(4, 20)) &&
      identical(ml$colors, c("#c6dbef", "#08306b")))
check("metric legend label default absent", is.null(ml$label))
w_lab <- lightgraph(edges = edges, node_metric = lg_pagerank(edges),
                    metric_label = "PageRank")
ml_lab <- w_lab$x$config$ui$metricLegend
check("metric legend label + size-only map", ml_lab$label == "PageRank" &&
      ml_lab$map == "size" && is.null(ml_lab$colors))
w_noml <- lightgraph(edges = edges)
check("no metric legend without metric", is.null(w_noml$x$config$ui$metricLegend))

# Nodes with explicit group column + node_groups override
nodes <- data.frame(id = c("A", "B", "X", "Y"), group = c("g1", "g1", "g2", "g2"))
edges2 <- data.frame(source = c("A", "X"), target = c("B", "Y"))
w2 <- lightgraph(nodes, edges2, node_groups = c(A = "override"))
g2 <- vapply(w2$x$nodes, `[[`, "", "group")
check("node_groups override wins", g2[1] == "override" && g2[2] == "g1")

# Stable group colors: pinned colors and explicit palette order
wg <- lightgraph(nodes, edges2,
                 group_colors = c(g1 = "#ff7f0e"),
                 group_order = c("g2", "g1"))
check("group_colors in config",
      identical(wg$x$config$groups$colors, list(g1 = "#ff7f0e")))
check("group_order in config",
      identical(as.character(wg$x$config$groups$colorOrder), c("g2", "g1")))
check("group colors omitted by default",
      is.null(lightgraph(nodes, edges2)$x$config$groups$colors))
gc_err <- tryCatch({ lightgraph(nodes, edges2, group_colors = "#ff0000"); NULL },
                   error = function(e) e)
check("unnamed group_colors rejected", !is.null(gc_err))

# JSON payload shape (as htmlwidgets would serialize it)
json <- jsonlite::toJSON(w$x$config, auto_unbox = TRUE)
check("json scalars unboxed", grepl('"defaultWidth":0.5', json))
check("json ranges are arrays", grepl('"weightWidthRange":\\[1,5\\]', json))
json_g <- jsonlite::toJSON(wg$x$config, auto_unbox = TRUE)
check("json group colors object", grepl('"colors":\\{"g1":"#ff7f0e"\\}', json_g))
check("json group order array", grepl('"colorOrder":\\["g2","g1"\\]', json_g))
json_g1 <- jsonlite::toJSON(
  lightgraph(nodes, edges2, group_order = "g1")$x$config, auto_unbox = TRUE)
check("json length-1 group order stays array", grepl('"colorOrder":\\["g1"\\]', json_g1))

# Legacy positional call still works
w3 <- lightgraph(nodes, edges2)
check("legacy positional call", inherits(w3, "htmlwidget"))

# Bundled datasets (values cross-validated against the Python package)
data(les_mis); data(got); data(football_edges); data(football_nodes)
check("les_mis shape", nrow(les_mis) == 254 &&
      identical(names(les_mis), c("source", "target", "weight")) &&
      length(unique(c(les_mis$source, les_mis$target))) == 77)
check("got shape", nrow(got) == 352 &&
      length(unique(c(got$source, got$target))) == 107)
check("football shape", nrow(football_edges) == 613 &&
      nrow(football_nodes) == 115 &&
      length(unique(football_nodes$group)) == 12)
check("football edges match nodes",
      setequal(c(football_edges$source, football_edges$target),
               football_nodes$id))
sm <- lg_summary(got)
check("got summary", sm$nodes == 107 && sm$edges == 352 && sm$components == 1)
w4 <- lightgraph(nodes = football_nodes, edges = football_edges)
check("lightgraph accepts datasets", inherits(w4, "htmlwidget") &&
      length(w4$x$nodes) == 115)

cat("\nAll R checks passed\n")
