"""
Benchmark Analysis and Visualization

Analyzes and visualizes benchmark results from both JavaScript (lightgraph, Cytoscape)
and Python (NetworkX, igraph, graph-tool) libraries.
"""

import json
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from pathlib import Path
import numpy as np

# Set style
sns.set_style("whitegrid")
plt.rcParams['figure.figsize'] = (14, 10)


def load_jsonl(filepath):
    """Load JSONL file into a list of dictionaries."""
    data = []
    if not Path(filepath).exists():
        print(f"Warning: {filepath} not found")
        return data
    
    with open(filepath, 'r') as f:
        for line in f:
            if line.strip():
                data.append(json.loads(line))
    return data


def load_all_results():
    """Load all benchmark results."""
    benchmark_dir = Path(__file__).parent
    
    # JavaScript results
    lg_results = load_jsonl(benchmark_dir / 'lg_benchmark_results.jsonl')
    cs_cose_results = load_jsonl(benchmark_dir / 'cs_cose_benchmark_results.jsonl')
    cs_fcose_results = load_jsonl(benchmark_dir / 'cs_fcose_benchmark_results.jsonl')
    grid_results = load_jsonl(benchmark_dir / 'grid_benchmark_results.jsonl')
    
    # Python results
    python_results = load_jsonl(benchmark_dir / 'python_benchmark_results.jsonl')
    
    # Combine all results
    all_results = []
    
    # Process JavaScript results
    for result in lg_results:
        all_results.append({
            'library': 'lightgraph',
            'language': 'JavaScript',
            'num_nodes': result.get('numNodes', 0),
            'num_edges': result.get('numEdges', 0),
            'load_time': result.get('loadTime', 0),
            'fps': result.get('avgFps', 0),
            'memory_mb': result.get('memory', 0),
            'total_time': result.get('loadTime', 0)
        })
    
    for result in cs_cose_results:
        all_results.append({
            'library': 'cytoscape-cose',
            'language': 'JavaScript',
            'num_nodes': result.get('numNodes', 0),
            'num_edges': result.get('numEdges', 0),
            'load_time': result.get('loadTime', 0),
            'fps': result.get('avgFps', 0),
            'memory_mb': result.get('memory', 0),
            'total_time': result.get('loadTime', 0)
        })
    
    for result in cs_fcose_results:
        all_results.append({
            'library': 'cytoscape-fcose',
            'language': 'JavaScript',
            'num_nodes': result.get('numNodes', 0),
            'num_edges': result.get('numEdges', 0),
            'load_time': result.get('loadTime', 0),
            'fps': result.get('avgFps', 0),
            'memory_mb': result.get('memory', 0),
            'total_time': result.get('loadTime', 0)
        })
    
    # Process Python results
    for result in python_results:
        all_results.append({
            'library': result['library'],
            'language': 'Python',
            'num_nodes': result['num_nodes'],
            'num_edges': result['num_edges'],
            'creation_time': result.get('creation_time', 0),
            'layout_time': result.get('layout_time', 0),
            'draw_time': result.get('draw_time', 0),
            'total_time': result['total_time'],
            'memory_mb': result['memory_mb']
        })
    
    return pd.DataFrame(all_results)


def create_comparison_plots(df):
    """Create comprehensive comparison plots."""
    
    # Filter out invalid data
    df = df[df['total_time'] > 0]
    
    # Create figure with subplots
    fig, axes = plt.subplots(2, 2, figsize=(16, 12))
    fig.suptitle('Network Visualization Library Benchmarks', fontsize=16, fontweight='bold')
    
    # 1. Total Time vs Graph Size
    ax1 = axes[0, 0]
    for lib in df['library'].unique():
        lib_data = df[df['library'] == lib].groupby('num_nodes').agg({
            'total_time': 'mean'
        }).reset_index()
        ax1.plot(lib_data['num_nodes'], lib_data['total_time'], 
                marker='o', label=lib, linewidth=2)
    
    ax1.set_xlabel('Number of Nodes', fontsize=12)
    ax1.set_ylabel('Total Time (seconds)', fontsize=12)
    ax1.set_title('Performance vs Graph Size', fontsize=13, fontweight='bold')
    ax1.legend()
    ax1.set_xscale('log')
    ax1.set_yscale('log')
    ax1.grid(True, alpha=0.3)
    
    # 2. Memory Usage vs Graph Size
    ax2 = axes[0, 1]
    for lib in df['library'].unique():
        lib_data = df[df['library'] == lib].groupby('num_nodes').agg({
            'memory_mb': 'mean'
        }).reset_index()
        ax2.plot(lib_data['num_nodes'], lib_data['memory_mb'], 
                marker='s', label=lib, linewidth=2)
    
    ax2.set_xlabel('Number of Nodes', fontsize=12)
    ax2.set_ylabel('Memory Usage (MB)', fontsize=12)
    ax2.set_title('Memory Usage vs Graph Size', fontsize=13, fontweight='bold')
    ax2.legend()
    ax2.set_xscale('log')
    ax2.grid(True, alpha=0.3)
    
    # 3. Performance Comparison Bar Chart (for largest graph)
    ax3 = axes[1, 0]
    max_nodes = df['num_nodes'].max()
    large_graph_data = df[df['num_nodes'] == max_nodes].groupby('library').agg({
        'total_time': 'mean'
    }).reset_index().sort_values('total_time')
    
    bars = ax3.barh(large_graph_data['library'], large_graph_data['total_time'])
    ax3.set_xlabel('Total Time (seconds)', fontsize=12)
    ax3.set_title(f'Performance Comparison ({max_nodes} nodes)', 
                  fontsize=13, fontweight='bold')
    ax3.grid(True, alpha=0.3, axis='x')
    
    # Color bars
    colors = plt.cm.viridis(np.linspace(0, 1, len(bars)))
    for bar, color in zip(bars, colors):
        bar.set_color(color)
    
    # 4. FPS Comparison (JavaScript only)
    ax4 = axes[1, 1]
    js_data = df[df['language'] == 'JavaScript']
    if not js_data.empty and 'fps' in js_data.columns:
        for lib in js_data['library'].unique():
            lib_data = js_data[js_data['library'] == lib].groupby('num_nodes').agg({
                'fps': 'mean'
            }).reset_index()
            ax4.plot(lib_data['num_nodes'], lib_data['fps'], 
                    marker='d', label=lib, linewidth=2)
        
        ax4.set_xlabel('Number of Nodes', fontsize=12)
        ax4.set_ylabel('Average FPS', fontsize=12)
        ax4.set_title('Frame Rate (JavaScript Libraries)', fontsize=13, fontweight='bold')
        ax4.legend()
        ax4.set_xscale('log')
        ax4.grid(True, alpha=0.3)
    else:
        ax4.text(0.5, 0.5, 'No FPS data available', 
                ha='center', va='center', fontsize=12)
        ax4.set_title('Frame Rate (JavaScript Libraries)', fontsize=13, fontweight='bold')
    
    plt.tight_layout()
    return fig


def create_detailed_breakdown(df):
    """Create detailed breakdown for Python libraries."""
    python_data = df[df['language'] == 'Python']
    
    if python_data.empty:
        print("No Python benchmark data available")
        return None
    
    fig, axes = plt.subplots(1, 3, figsize=(18, 5))
    fig.suptitle('Python Libraries - Time Breakdown', fontsize=16, fontweight='bold')
    
    metrics = ['creation_time', 'layout_time', 'draw_time']
    titles = ['Graph Creation Time', 'Layout Computation Time', 'Drawing Time']
    
    for idx, (metric, title) in enumerate(zip(metrics, titles)):
        ax = axes[idx]
        
        if metric in python_data.columns:
            for lib in python_data['library'].unique():
                lib_data = python_data[python_data['library'] == lib].groupby('num_nodes').agg({
                    metric: 'mean'
                }).reset_index()
                
                # Filter out negative values (errors)
                lib_data = lib_data[lib_data[metric] >= 0]
                
                if not lib_data.empty:
                    ax.plot(lib_data['num_nodes'], lib_data[metric], 
                           marker='o', label=lib, linewidth=2)
        
        ax.set_xlabel('Number of Nodes', fontsize=11)
        ax.set_ylabel('Time (seconds)', fontsize=11)
        ax.set_title(title, fontsize=12, fontweight='bold')
        ax.legend()
        ax.set_xscale('log')
        ax.set_yscale('log')
        ax.grid(True, alpha=0.3)
    
    plt.tight_layout()
    return fig


def generate_summary_table(df):
    """Generate summary statistics table."""
    print("\n" + "="*100)
    print("BENCHMARK SUMMARY STATISTICS")
    print("="*100)
    
    # Group by library and calculate statistics
    summary = df.groupby('library').agg({
        'num_nodes': ['min', 'max'],
        'total_time': ['mean', 'std', 'min', 'max'],
        'memory_mb': ['mean', 'std', 'min', 'max']
    }).round(3)
    
    print(summary)
    print("\n")
    
    # Performance ranking for largest graph
    max_nodes = df['num_nodes'].max()
    ranking = df[df['num_nodes'] == max_nodes].groupby('library').agg({
        'total_time': 'mean'
    }).sort_values('total_time')
    
    print(f"\nPerformance Ranking ({max_nodes} nodes):")
    print("-" * 50)
    for idx, (lib, row) in enumerate(ranking.iterrows(), 1):
        print(f"{idx}. {lib:<20} {row['total_time']:.3f}s")


def main():
    """Main analysis function."""
    print("Loading benchmark results...")
    df = load_all_results()
    
    if df.empty:
        print("No benchmark data found!")
        return
    
    print(f"Loaded {len(df)} benchmark results")
    print(f"Libraries: {', '.join(df['library'].unique())}")
    
    # Generate summary table
    generate_summary_table(df)
    
    # Create comparison plots
    print("\nGenerating comparison plots...")
    fig1 = create_comparison_plots(df)
    output_path1 = Path(__file__).parent / 'benchmark_comparison.png'
    fig1.savefig(output_path1, dpi=300, bbox_inches='tight')
    print(f"Saved: {output_path1}")
    
    # Create detailed breakdown for Python libraries
    print("Generating Python library breakdown...")
    fig2 = create_detailed_breakdown(df)
    if fig2:
        output_path2 = Path(__file__).parent / 'python_breakdown.png'
        fig2.savefig(output_path2, dpi=300, bbox_inches='tight')
        print(f"Saved: {output_path2}")
    
    # Save processed data
    csv_path = Path(__file__).parent / 'benchmark_summary.csv'
    df.to_csv(csv_path, index=False)
    print(f"\nProcessed data saved to: {csv_path}")
    
    print("\n" + "="*100)
    print("Analysis complete!")
    print("="*100)


if __name__ == '__main__':
    main()
