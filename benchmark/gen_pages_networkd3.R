# Generate networkD3 benchmark pages into pages/, reading the SAME seeded
# graph JSON that gen_pages.py writes (pages/data/graph_<n>_<e>.json), so all
# libraries render identical node/edge sets. The shared FPS probe (probe.js)
# is appended before </body>.
#
# Usage (with networkD3 + htmlwidgets available):
#   R_LIBS=<lib> Rscript benchmark/gen_pages_networkd3.R

suppressMessages({
  library(networkD3)
  library(htmlwidgets)
  library(jsonlite)
})

bench_dir <- dirname(sub("--file=", "",
  grep("--file=", commandArgs(FALSE), value = TRUE)[1]))
if (length(bench_dir) == 0 || is.na(bench_dir)) bench_dir <- "benchmark"
pages <- file.path(bench_dir, "pages")
data_dir <- file.path(pages, "data")
probe <- paste(readLines(file.path(bench_dir, "probe.js")), collapse = "\n")

sizes <- list(
  c(100, 200), c(500, 1000), c(1000, 2000), c(2000, 4000),
  c(5000, 10000), c(10000, 20000), c(20000, 40000))

for (sz in sizes) {
  n <- sz[1]; e <- sz[2]
  gpath <- file.path(data_dir, sprintf("graph_%d_%d.json", n, e))
  if (!file.exists(gpath)) {
    message(sprintf("skip %dn/%de: %s missing (run gen_pages.py first)",
                    n, e, gpath))
    next
  }
  g <- fromJSON(gpath)
  nodes <- data.frame(name = g$nodes$id, group = 1L, stringsAsFactors = FALSE)
  idx <- setNames(seq_along(g$nodes$id) - 1L, g$nodes$id)  # 0-based
  links <- data.frame(source = as.integer(idx[g$edges$source]),
                      target = as.integer(idx[g$edges$target]),
                      value = 1)

  fn <- forceNetwork(Links = links, Nodes = nodes,
                     Source = "source", Target = "target",
                     NodeID = "name", Group = "group",
                     opacity = 0.9, zoom = TRUE, fontSize = 1)

  out <- file.path(pages, sprintf("networkd3_%d_%d.html", n, e))
  saveWidget(fn, file = normalizePath(out, mustWork = FALSE),
             selfcontained = TRUE)

  # Inject the shared probe + globals just before </body>.
  html <- paste(readLines(out, warn = FALSE), collapse = "\n")
  inject <- sprintf(
    "<script>window.__BENCH_LIB='networkd3';window.__BENCH_NODES=%d;window.__BENCH_EDGES=%d;</script>\n<script>\n%s\n</script>\n</body>",
    n, e, probe)
  html <- sub("</body>", inject, html, fixed = TRUE)
  writeLines(html, out)
  message(sprintf("generated networkD3 page for %dn/%de", n, e))
}
message("done")
