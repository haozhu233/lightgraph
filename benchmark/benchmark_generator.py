import os
import json
import numpy as np

def generate_graph_data(num_nodes, num_edges):
    """Generates random graph data."""
    nodes = [{'id': str(i)} for i in range(num_nodes)]
    edges = []
    edges2 = []
    for _ in range(num_edges):
        source = np.random.randint(0, num_nodes)
        target = np.random.randint(0, num_nodes)
        if source != target:
            edges.append({'id': str(source) + '-' + str(target), 'source': str(source), 'target': str(target), 'weight': 1.0})
            edges2.append({'id': str(source) + '-' + str(target), 'source': str(source), 'target': str(target)})
    ver2 = nodes + edges2
    ver2 = [{'data': x} for x in ver2]
    return {'nodes': nodes, 'edges': edges}, ver2

def create_benchmark_html(data, lib_name, template_path, output_path):
    """Creates an HTML file for a specific benchmark test."""
    with open(template_path, 'r') as f:
        template = f.read()

    html_content = template.replace('{{LIB_NAME}}', lib_name)
    html_content = html_content.replace('{{GRAPH_DATA}}', json.dumps(data))

    with open(output_path, 'w') as f:
        f.write(html_content)

if __name__ == '__main__':
    # Define the test cases
    test_cases = [
        (100, 200),
        (500, 1000),
        (1000, 2000),
        (5000, 10000),
        (10000, 20000),
    ]

    # Paths
    output_dir = 'benchmarks'
    template_path = 'benchmark_template.html'
    os.makedirs(output_dir, exist_ok=True)

    for num_nodes, num_edges in test_cases:
        # Generate data
        graph_data1, graph_data2 = generate_graph_data(num_nodes, num_edges)
        data_filename = f'data_{num_nodes}_{num_edges}.json'
        with open(os.path.join(output_dir, data_filename), 'w') as f:
            json.dump(graph_data1, f)

        # Create lightgraph HTML
        create_benchmark_html(graph_data1, 'lightgraph', template_path,
                              os.path.join(output_dir, f'lightgraph_{num_nodes}_{num_edges}.html'))

        # Create cytoscape.js HTML
        create_benchmark_html(graph_data2, 'cytoscape', template_path,
                              os.path.join(output_dir, f'cytoscape_{num_nodes}_{num_edges}.html'))

    print(f"Benchmark files generated in the '{output_dir}' directory.")