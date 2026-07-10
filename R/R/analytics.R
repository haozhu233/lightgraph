# Dependency-free graph analytics.
#
# Every function takes the same edges data frame as lightgraph() (source,
# target, optional weight) and returns a named vector keyed by node id,
# designed to plug straight back into the visualization:
#
#   lightgraph(edges = edges,
#              node_metric = lg_pagerank(edges),
#              node_groups = lg_communities(edges))
#
# Graphs are treated as undirected and self-loops are ignored; parallel
# edges have their weights summed. Nodes are discovered from the edge list,
# so isolated nodes do not appear in the results.

# Symmetric weighted adjacency built on integer node indices:
# list(nodes = <character>, adj = <list of int vectors>, wadj = <list of
# numeric vectors>, from/to/w = flat directed-arc vectors).
.lg_adjacency <- function(edges) {
  if (!is.data.frame(edges) || !all(c("source", "target") %in% names(edges))) {
    stop("edges must be a data frame with 'source' and 'target' columns")
  }
  src <- as.character(edges$source)
  tgt <- as.character(edges$target)
  w <- if ("weight" %in% names(edges)) as.numeric(edges$weight)
       else rep(1, length(src))

  nodes <- unique(c(src, tgt))
  n <- length(nodes)
  keep <- src != tgt
  si <- match(src[keep], nodes)
  ti <- match(tgt[keep], nodes)
  wi <- w[keep]

  # Both directions of every edge; parallel edges (and pre-symmetrized
  # edge lists) aggregate their weights consistently.
  from <- c(si, ti)
  to <- c(ti, si)
  ww <- c(wi, wi)
  if (length(from) > 0) {
    key <- paste(from, to)
    agg <- rowsum(ww, key)
    parts <- strsplit(rownames(agg), " ", fixed = TRUE)
    from <- as.integer(vapply(parts, `[`, "", 1))
    to <- as.integer(vapply(parts, `[`, "", 2))
    ww <- as.numeric(agg[, 1])
  }

  levels <- factor(from, levels = seq_len(n))
  list(
    nodes = nodes,
    adj = split(to, levels),
    wadj = split(ww, levels),
    from = from, to = to, w = ww
  )
}

.lg_named <- function(values, nodes) {
  names(values) <- nodes
  values
}

#' Node degree or strength
#'
#' Counts each node's neighbors, or with \code{weighted = TRUE} sums the
#' weights of its incident edges (strength).
#'
#' @param edges A data frame with 'source' and 'target' columns and an
#'   optional 'weight' column, as accepted by \code{\link{lightgraph}}.
#' @param weighted Logical, sum edge weights instead of counting neighbors
#'   (default: FALSE).
#'
#' @return A named numeric vector keyed by node id, ready to pass to
#'   \code{lightgraph(node_metric = ...)}.
#'
#' @examples
#' edges <- data.frame(source = c("A", "B"), target = c("B", "C"))
#' lg_degree(edges)
#'
#' @export
lg_degree <- function(edges, weighted = FALSE) {
  g <- .lg_adjacency(edges)
  values <- if (weighted) vapply(g$wadj, sum, numeric(1))
            else lengths(g$adj)
  .lg_named(as.numeric(values), g$nodes)
}

#' Betweenness centrality
#'
#' Shortest-path betweenness centrality (Brandes' algorithm, edges treated
#' as unweighted). With \code{normalized = TRUE} values are divided by the
#' number of node pairs, so they are comparable across graph sizes.
#'
#' @inheritParams lg_degree
#' @param normalized Logical, scale values to [0, 1] (default: TRUE).
#'
#' @return A named numeric vector keyed by node id.
#'
#' @export
lg_betweenness <- function(edges, normalized = TRUE) {
  g <- .lg_adjacency(edges)
  n <- length(g$nodes)
  centrality <- numeric(n)

  for (s in seq_len(n)) {
    # Single-source shortest paths, counting path multiplicities.
    order_visited <- integer(0)
    predecessors <- vector("list", n)
    sigma <- numeric(n)
    sigma[s] <- 1
    dist <- rep(-1L, n)
    dist[s] <- 0L
    queue <- s
    head <- 1
    while (head <= length(queue)) {
      v <- queue[head]
      head <- head + 1
      order_visited <- c(order_visited, v)
      for (w_node in g$adj[[v]]) {
        if (dist[w_node] < 0) {
          dist[w_node] <- dist[v] + 1L
          queue <- c(queue, w_node)
        }
        if (dist[w_node] == dist[v] + 1L) {
          sigma[w_node] <- sigma[w_node] + sigma[v]
          predecessors[[w_node]] <- c(predecessors[[w_node]], v)
        }
      }
    }
    # Back-propagate pair dependencies.
    delta <- numeric(n)
    for (w_node in rev(order_visited)) {
      for (v in predecessors[[w_node]]) {
        delta[v] <- delta[v] + sigma[v] / sigma[w_node] * (1 + delta[w_node])
      }
      if (w_node != s) {
        centrality[w_node] <- centrality[w_node] + delta[w_node]
      }
    }
  }

  # Each unordered pair was counted from both endpoints.
  scale <- if (normalized && n > 2) 1 / ((n - 1) * (n - 2)) else 0.5
  .lg_named(centrality * scale, g$nodes)
}

#' Closeness centrality
#'
#' Closeness centrality (edges treated as unweighted), using the
#' Wasserman-Faust correction so scores stay comparable when the graph has
#' several connected components.
#'
#' @inheritParams lg_degree
#'
#' @return A named numeric vector keyed by node id.
#'
#' @export
lg_closeness <- function(edges) {
  g <- .lg_adjacency(edges)
  n <- length(g$nodes)
  result <- numeric(n)
  for (s in seq_len(n)) {
    dist <- rep(-1L, n)
    dist[s] <- 0L
    queue <- s
    head <- 1
    total <- 0
    while (head <= length(queue)) {
      v <- queue[head]
      head <- head + 1
      for (w_node in g$adj[[v]]) {
        if (dist[w_node] < 0) {
          dist[w_node] <- dist[v] + 1L
          total <- total + dist[w_node]
          queue <- c(queue, w_node)
        }
      }
    }
    reachable <- sum(dist > 0)
    if (total > 0 && n > 1) {
      result[s] <- (reachable / total) * (reachable / (n - 1))
    }
  }
  .lg_named(result, g$nodes)
}

#' Eigenvector centrality
#'
#' Eigenvector centrality via power iteration on the (weighted) adjacency
#' matrix.
#'
#' @inheritParams lg_degree
#' @param weighted Logical, use edge weights (default: TRUE).
#' @param max_iter Maximum power iterations (default: 200).
#' @param tol Convergence tolerance (default: 1e-8).
#'
#' @return A named numeric vector keyed by node id, normalized to unit
#'   length.
#'
#' @export
lg_eigenvector <- function(edges, weighted = TRUE, max_iter = 200,
                           tol = 1e-8) {
  g <- .lg_adjacency(edges)
  n <- length(g$nodes)
  if (n == 0) return(numeric(0))
  arc_w <- if (weighted) g$w else rep(1, length(g$w))
  x <- rep(1 / n, n)
  for (i in seq_len(max_iter)) {
    x_prev <- x
    x <- numeric(n)
    if (length(g$from) > 0) {
      contrib <- rowsum(x_prev[g$from] * arc_w, g$to)
      x[as.integer(rownames(contrib))] <- contrib[, 1]
    }
    norm <- sqrt(sum(x * x))
    if (norm == 0) return(.lg_named(numeric(n), g$nodes))
    x <- x / norm
    if (sum(abs(x - x_prev)) < n * tol) break
  }
  .lg_named(x, g$nodes)
}

#' PageRank
#'
#' PageRank on the undirected (weighted) graph. Values sum to 1.
#'
#' @inheritParams lg_degree
#' @param damping Damping factor (default: 0.85).
#' @param weighted Logical, use edge weights (default: TRUE).
#' @param max_iter Maximum iterations (default: 200).
#' @param tol Convergence tolerance (default: 1e-10).
#'
#' @return A named numeric vector keyed by node id.
#'
#' @export
lg_pagerank <- function(edges, damping = 0.85, weighted = TRUE,
                        max_iter = 200, tol = 1e-10) {
  g <- .lg_adjacency(edges)
  n <- length(g$nodes)
  if (n == 0) return(numeric(0))
  arc_w <- if (weighted) g$w else rep(1, length(g$w))
  out_weight <- numeric(n)
  if (length(g$from) > 0) {
    totals <- rowsum(arc_w, g$from)
    out_weight[as.integer(rownames(totals))] <- totals[, 1]
  }
  rank <- rep(1 / n, n)
  base <- (1 - damping) / n
  for (i in seq_len(max_iter)) {
    # Nodes without neighbors (self-loops only) spread their rank
    # uniformly so the total stays 1.
    dangling <- sum(rank[out_weight == 0])
    new_rank <- rep(base + damping * dangling / n, n)
    if (length(g$from) > 0) {
      share <- damping * rank[g$from] / out_weight[g$from]
      contrib <- rowsum(share * arc_w, g$to)
      idx <- as.integer(rownames(contrib))
      new_rank[idx] <- new_rank[idx] + contrib[, 1]
    }
    change <- sum(abs(new_rank - rank))
    rank <- new_rank
    if (change < n * tol) break
  }
  .lg_named(rank, g$nodes)
}

#' Community detection
#'
#' Uses igraph's Louvain implementation when igraph is installed, else a
#' built-in seeded label-propagation fallback. Communities are numbered
#' 'c1', 'c2', ... largest-first; singleton communities and isolated nodes
#' are left out, so the result can be passed directly to
#' \code{lightgraph(node_groups = ...)}.
#'
#' @inheritParams lg_degree
#' @param seed Integer seed for reproducible results (default: 42).
#'
#' @return A named character vector mapping node ids to community labels.
#'
#' @export
lg_communities <- function(edges, seed = 42) {
  g <- .lg_adjacency(edges)

  if (requireNamespace("igraph", quietly = TRUE)) {
    ig <- igraph::graph_from_data_frame(
      data.frame(from = g$nodes[g$from], to = g$nodes[g$to],
                 weight = g$w, stringsAsFactors = FALSE),
      directed = FALSE)
    ig <- igraph::simplify(ig, edge.attr.comb = "first")
    membership <- igraph::membership(igraph::cluster_louvain(ig))
    found <- split(names(membership), as.integer(membership))
  } else {
    found <- .lg_label_propagation(g, seed = seed)
  }

  found <- found[lengths(found) >= 2]
  sizes <- lengths(found)
  first <- vapply(found, function(members) min(members), "")
  found <- found[order(-sizes, first)]

  result <- character(0)
  for (i in seq_along(found)) {
    labels <- rep(paste0("c", i), length(found[[i]]))
    names(labels) <- found[[i]]
    result <- c(result, labels)
  }
  result
}

# Seeded label propagation on the index-based adjacency; returns a list of
# character vectors (connected nodes only). RNG state is restored on exit.
.lg_label_propagation <- function(g, seed = 42, max_iter = 20) {
  old_seed <- if (exists(".Random.seed", envir = globalenv()))
    get(".Random.seed", envir = globalenv()) else NULL
  on.exit({
    if (!is.null(old_seed)) assign(".Random.seed", old_seed,
                                   envir = globalenv())
  })
  set.seed(seed)

  connected <- which(lengths(g$adj) > 0)
  labels <- seq_along(g$nodes)
  for (iter in seq_len(max_iter)) {
    changed <- FALSE
    for (v in sample(connected)) {
      neighbor_labels <- labels[g$adj[[v]]]
      counts <- table(neighbor_labels)
      best <- as.integer(names(counts)[counts == max(counts)])
      new_label <- if (length(best) == 1) best else sample(best, 1)
      if (new_label != labels[v]) {
        labels[v] <- new_label
        changed <- TRUE
      }
    }
    if (!changed) break
  }
  split(g$nodes[connected], labels[connected])
}

#' Connected components
#'
#' Labels each node with its connected component, numbered from 1 in
#' decreasing component size.
#'
#' @inheritParams lg_degree
#'
#' @return A named integer vector keyed by node id.
#'
#' @export
lg_components <- function(edges) {
  g <- .lg_adjacency(edges)
  n <- length(g$nodes)
  label <- rep(0L, n)
  current <- 0L
  for (s in seq_len(n)) {
    if (label[s] > 0) next
    current <- current + 1L
    label[s] <- current
    queue <- s
    head <- 1
    while (head <= length(queue)) {
      v <- queue[head]
      head <- head + 1
      for (w_node in g$adj[[v]]) {
        if (label[w_node] == 0) {
          label[w_node] <- current
          queue <- c(queue, w_node)
        }
      }
    }
  }
  # Renumber so component 1 is the largest.
  sizes <- tabulate(label)
  remap <- integer(length(sizes))
  remap[order(-sizes)] <- seq_along(sizes)
  .lg_named(remap[label], g$nodes)
}

#' K-hop neighborhood of a node
#'
#' The k-hop neighborhood of a node — the same set the interactive
#' double-click ego filter shows.
#'
#' @inheritParams lg_degree
#' @param node Character, the center node id.
#' @param depth Integer, neighborhood depth in hops (default: 1).
#'
#' @return A sorted character vector of node ids including the node itself.
#'
#' @export
lg_neighbors <- function(edges, node, depth = 1) {
  g <- .lg_adjacency(edges)
  s <- match(as.character(node), g$nodes)
  if (is.na(s)) stop("node '", node, "' not found in edges")
  dist <- rep(-1L, length(g$nodes))
  dist[s] <- 0L
  queue <- s
  head <- 1
  while (head <= length(queue)) {
    v <- queue[head]
    head <- head + 1
    if (dist[v] >= depth) next
    for (w_node in g$adj[[v]]) {
      if (dist[w_node] < 0) {
        dist[w_node] <- dist[v] + 1L
        queue <- c(queue, w_node)
      }
    }
  }
  sort(g$nodes[dist >= 0])
}

#' Graph summary statistics
#'
#' Headline statistics of the graph: node/edge counts, density, degree
#' stats, component structure, and the global clustering coefficient
#' (transitivity).
#'
#' @inheritParams lg_degree
#'
#' @return A named list.
#'
#' @export
lg_summary <- function(edges) {
  g <- .lg_adjacency(edges)
  n <- length(g$nodes)
  degrees <- lengths(g$adj)
  edge_count <- sum(degrees) / 2
  comp <- lg_components(edges)
  comp_sizes <- table(comp)

  # Transitivity: 3 * triangles / connected triples. Each triangle is
  # counted 6 times below (once per ordered neighbor pair per vertex).
  triples <- sum(degrees * (degrees - 1) / 2)
  triangles <- 0
  for (v in seq_len(n)) {
    for (w_node in g$adj[[v]]) {
      triangles <- triangles +
        length(intersect(g$adj[[v]], g$adj[[w_node]]))
    }
  }
  triangles <- triangles / 6

  list(
    nodes = n,
    edges = edge_count,
    density = if (n > 1) 2 * edge_count / (n * (n - 1)) else 0,
    average_degree = if (n > 0) mean(degrees) else 0,
    max_degree = if (n > 0) max(degrees) else 0,
    components = length(comp_sizes),
    largest_component = if (length(comp_sizes) > 0) max(comp_sizes) else 0,
    transitivity = if (triples > 0) 3 * triangles / triples else 0
  )
}

#' Top-scoring nodes of a metric
#'
#' The n highest-scoring entries of a metric vector, sorted decreasing —
#' a convenience for inspecting results from the lg_* centrality
#' functions.
#'
#' @param metric A named numeric vector, e.g. from \code{\link{lg_pagerank}}.
#' @param n Integer, how many entries to keep (default: 10).
#'
#' @return A named numeric vector of length at most n.
#'
#' @export
lg_top_nodes <- function(metric, n = 10) {
  ranked <- metric[order(-unlist(metric), names(metric))]
  utils::head(ranked, n)
}
