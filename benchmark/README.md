# Lightgraph Benchmarking Suite

This directory contains comprehensive benchmarking tools for comparing lightgraph with other network visualization libraries.

## Overview

The benchmark suite compares:

### JavaScript Libraries
- **lightgraph** - High-performance HTML canvas-based visualization
- **Cytoscape.js** - Popular web-based network visualization library
  - COSE layout
  - fCOSE layout
  - Grid layout

### Python Libraries
- **NetworkX** - Pure Python, widely used for network analysis
- **python-igraph** - C-based library with Python bindings, fast performance
- **graph-tool** - C++ based, excellent performance with OpenMP support

## Files

- `benchmark_generator.py` - Generates test data and HTML files for JavaScript benchmarks
- `benchmark_template.html` - Template for JavaScript benchmark pages
- `benchmark_server.py` - Simple server to collect benchmark results
- `python_benchmark.py` - **NEW** Python library benchmarking script
- `analyze_benchmarks.py` - **NEW** Analysis and visualization script
- `analysis.ipynb` - Jupyter notebook for interactive analysis

## Running Benchmarks

### JavaScript Benchmarks

1. Generate benchmark files:
```bash
python benchmark_generator.py
```

2. Start the benchmark server:
```bash
python benchmark_server.py
```

3. Open the generated HTML files in your browser to run benchmarks

### Python Benchmarks

1. Install required libraries:
```bash
# Essential
pip install networkx matplotlib pandas seaborn

# Optional (for better performance comparison)
pip install python-igraph

# Optional (advanced, requires compilation)
# See: https://graph-tool.skewed.de/
```

2. Run the benchmark:
```bash
python python_benchmark.py
```

This will:
- Test each available library with graphs of varying sizes
- Measure creation time, layout computation, drawing time, and memory usage
- Save results to `python_benchmark_results.jsonl`

### Analysis

After running benchmarks, analyze and visualize results:

```bash
python analyze_benchmarks.py
```

This generates:
- `benchmark_comparison.png` - Comprehensive comparison plots
- `python_breakdown.png` - Detailed Python library breakdown
- `benchmark_summary.csv` - Processed data for further analysis

## Test Cases

Both JavaScript and Python benchmarks use the same test cases:

| Nodes | Edges |
|-------|-------|
| 100   | 200   |
| 500   | 1,000 |
| 1,000 | 2,000 |
| 5,000 | 10,000|
| 10,000| 20,000|

## Metrics

### JavaScript Libraries
- **Load Time**: Time to initialize and render the graph
- **FPS**: Average frames per second during animation
- **Memory**: JavaScript heap memory usage (MB)

### Python Libraries
- **Creation Time**: Time to create graph data structure
- **Layout Time**: Time to compute node positions
- **Draw Time**: Time to render the visualization
- **Total Time**: Sum of all operations
- **Memory**: Peak memory usage during benchmark (MB)

## Results

Results are stored in JSONL (JSON Lines) format:

- `lg_benchmark_results.jsonl` - lightgraph results
- `cs_cose_benchmark_results.jsonl` - Cytoscape COSE layout
- `cs_fcose_benchmark_results.jsonl` - Cytoscape fCOSE layout
- `grid_benchmark_results.jsonl` - Grid layout baseline
- `python_benchmark_results.jsonl` - All Python library results

## Interpreting Results

### Performance Expectations

**JavaScript Libraries:**
- lightgraph should excel at rendering and interactivity (high FPS)
- Cytoscape may have slower initial load but good layout algorithms

**Python Libraries:**
- NetworkX: Slower but easiest to use, best for small graphs
- igraph: Fast, good balance of performance and usability
- graph-tool: Fastest for large graphs, especially with OpenMP

### Key Considerations

1. **Graph Size**: Performance differences become more pronounced with larger graphs
2. **Layout Quality**: Faster isn't always better - layout quality matters
3. **Use Case**: Interactive web visualization vs. static analysis/publication
4. **Memory**: Important for very large graphs or resource-constrained environments

## Contributing

To add a new library to benchmark:

1. For JavaScript: Update `benchmark_template.html` and `benchmark_generator.py`
2. For Python: Add a new `benchmark_<library>()` function in `python_benchmark.py`
3. Update `analyze_benchmarks.py` to include the new library in visualizations

## Notes

- JavaScript benchmarks require a browser and may vary by browser/hardware
- Python benchmarks use `matplotlib` with 'Agg' backend (non-interactive)
- Memory measurements are approximate and may vary by system
- For reproducible results, run multiple times and average
