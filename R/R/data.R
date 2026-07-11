#' Character co-occurrence network of Les Miserables
#'
#' 77 characters and 254 weighted edges from Victor Hugo's novel; the
#' weight counts the chapters in which two characters appear together.
#' Pass it straight to \code{\link{lightgraph}} or the \code{lg_*}
#' analytics functions.
#'
#' @format A data frame with 254 rows and 3 columns:
#' \describe{
#'   \item{source, target}{Character names.}
#'   \item{weight}{Number of chapters of co-occurrence.}
#' }
#' @source D. E. Knuth, \emph{The Stanford GraphBase: A Platform for
#'   Combinatorial Computing} (1993).
#' @examples
#' lightgraph(edges = les_mis, edge_weight_to_width = TRUE)
"les_mis"

#' Character interaction network of A Storm of Swords
#'
#' 107 characters and 352 weighted edges from the third book of
#' \emph{A Song of Ice and Fire}; the weight counts interactions
#' (co-mentions within 15 words).
#'
#' @format A data frame with 352 rows and 3 columns:
#' \describe{
#'   \item{source, target}{Character names.}
#'   \item{weight}{Interaction count.}
#' }
#' @source A. Beveridge and J. Shan, "Network of Thrones",
#'   \emph{Math Horizons} 23(4), 18-22 (2016).
#' @examples
#' lightgraph(edges = got, node_groups = lg_communities(got))
"got"

#' American college football games of the Fall 2000 season
#'
#' Games between 115 Division IA teams. \code{football_nodes} carries
#' each team's conference as \code{group}, giving a ground-truth
#' community structure.
#'
#' @format A data frame with 613 rows and 2 columns (\code{source},
#'   \code{target}), each a team name.
#' @source M. Girvan and M. E. J. Newman, "Community structure in
#'   social and biological networks", \emph{PNAS} 99, 7821-7826 (2002).
#' @examples
#' lightgraph(nodes = football_nodes, edges = football_edges)
"football_edges"

#' @rdname football_edges
#' @format \code{football_nodes} is a data frame with 115 rows and 2
#'   columns (\code{id}, \code{group}).
"football_nodes"
