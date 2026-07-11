# Regenerate the bundled example datasets from the canonical CSVs kept
# in python/lightgraph/data/ (shared with the Python package).
# Run from the repo root: Rscript R/data-raw/make_data.R

src <- "python/lightgraph/data"

les_mis <- read.csv(file.path(src, "les_mis.csv"))
got <- read.csv(file.path(src, "got.csv"))
football_edges <- read.csv(file.path(src, "football_edges.csv"))
football_nodes <- read.csv(file.path(src, "football_nodes.csv"))

dir.create("R/data", showWarnings = FALSE)
save(les_mis, file = "R/data/les_mis.rda", compress = "xz")
save(got, file = "R/data/got.rda", compress = "xz")
save(football_edges, file = "R/data/football_edges.rda", compress = "xz")
save(football_nodes, file = "R/data/football_nodes.rda", compress = "xz")

cat("les_mis:", nrow(les_mis), "edges\n")
cat("got:", nrow(got), "edges\n")
cat("football:", nrow(football_edges), "edges,",
    nrow(football_nodes), "nodes\n")
