/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Load the lightgraph.js file
const lightgraphCode = fs.readFileSync(
  path.join(__dirname, '../lightgraph.js'),
  'utf8'
);

describe('lightGraph Visualization Library', () => {
  let container;

  beforeEach(() => {
    // Set up DOM elements
    document.body.innerHTML = `
      <div id="lightGraph" style="width: 800px; height: 600px;"></div>
      <div id="networkData"></div>
      <script type="application/json" id="nodesData">
        [{"id": "A"}, {"id": "B"}, {"id": "C"}]
      </script>
      <script type="application/json" id="edgesData">
        [{"source": "A", "target": "B", "weight": 1}, {"source": "B", "target": "C", "weight": 1}]
      </script>
    `;
    
    // Initialize window.lightGraph
    window.lightGraph = {};
    
    container = document.getElementById('lightGraph');
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  describe('Library Initialization', () => {
    test('should define lightGraph namespace on window', () => {
      eval(lightgraphCode);
      expect(window.lightGraph).toBeDefined();
    });

    test('should define initializeVisualization function', () => {
      eval(lightgraphCode);
      expect(typeof window.lightGraph.initializeVisualization).toBe('function');
    });

    test('should not throw error when container exists', () => {
      expect(() => {
        eval(lightgraphCode);
      }).not.toThrow();
    });
  });

  describe('DOM Element Checks', () => {
    test('should find lightGraph container element', () => {
      const element = document.getElementById('lightGraph');
      expect(element).toBeTruthy();
      expect(element.tagName).toBe('DIV');
    });

    test('should find nodesData script element', () => {
      const element = document.getElementById('nodesData');
      expect(element).toBeTruthy();
      expect(element.type).toBe('application/json');
    });

    test('should find edgesData script element', () => {
      const element = document.getElementById('edgesData');
      expect(element).toBeTruthy();
      expect(element.type).toBe('application/json');
    });

    test('should parse valid nodes data', () => {
      const nodesElement = document.getElementById('nodesData');
      const nodes = JSON.parse(nodesElement.textContent);
      expect(Array.isArray(nodes)).toBe(true);
      expect(nodes.length).toBe(3);
      expect(nodes[0]).toHaveProperty('id');
    });

    test('should parse valid edges data', () => {
      const edgesElement = document.getElementById('edgesData');
      const edges = JSON.parse(edgesElement.textContent);
      expect(Array.isArray(edges)).toBe(true);
      expect(edges.length).toBe(2);
      expect(edges[0]).toHaveProperty('source');
      expect(edges[0]).toHaveProperty('target');
      expect(edges[0]).toHaveProperty('weight');
    });
  });

  describe('Data Validation', () => {
    test('should handle nodes with groups', () => {
      document.body.innerHTML = `
        <div id="lightGraph"></div>
        <script type="application/json" id="nodesData">
          [{"id": "A", "group": "1"}, {"id": "B", "group": "2"}]
        </script>
        <script type="application/json" id="edgesData">[]</script>
      `;

      const nodesElement = document.getElementById('nodesData');
      const nodes = JSON.parse(nodesElement.textContent);
      expect(nodes[0]).toHaveProperty('group');
      expect(nodes[1]).toHaveProperty('group');
    });

    test('should handle empty edges array', () => {
      document.body.innerHTML = `
        <div id="lightGraph"></div>
        <script type="application/json" id="nodesData">
          [{"id": "A"}]
        </script>
        <script type="application/json" id="edgesData">[]</script>
      `;

      const edgesElement = document.getElementById('edgesData');
      const edges = JSON.parse(edgesElement.textContent);
      expect(Array.isArray(edges)).toBe(true);
      expect(edges.length).toBe(0);
    });

    test('should handle weighted edges', () => {
      const edgesElement = document.getElementById('edgesData');
      const edges = JSON.parse(edgesElement.textContent);
      expect(edges[0].weight).toBe(1);
      expect(typeof edges[0].weight).toBe('number');
    });
  });

  describe('Visualization Features', () => {
    test('should initialize without errors when d3 is available', () => {
      expect(() => {
        eval(lightgraphCode);
        if (window.lightGraph.initializeVisualization) {
          window.lightGraph.initializeVisualization();
        }
      }).not.toThrow();
    });

    test('should handle container with specific dimensions', () => {
      const element = document.getElementById('lightGraph');
      expect(element.style.width).toBe('800px');
      expect(element.style.height).toBe('600px');
    });
  });

  describe('Edge Cases', () => {
    test('should handle single node network', () => {
      document.body.innerHTML = `
        <div id="lightGraph"></div>
        <script type="application/json" id="nodesData">
          [{"id": "A"}]
        </script>
        <script type="application/json" id="edgesData">[]</script>
      `;

      const nodesElement = document.getElementById('nodesData');
      const nodes = JSON.parse(nodesElement.textContent);
      expect(nodes.length).toBe(1);
    });

    test('should handle large network data', () => {
      const largeNodes = Array.from({ length: 100 }, (_, i) => ({ id: `Node${i}` }));
      const largeEdges = Array.from({ length: 200 }, (_, i) => ({
        source: `Node${i % 100}`,
        target: `Node${(i + 1) % 100}`,
        weight: 1
      }));

      document.body.innerHTML = `
        <div id="lightGraph"></div>
        <script type="application/json" id="nodesData">
          ${JSON.stringify(largeNodes)}
        </script>
        <script type="application/json" id="edgesData">
          ${JSON.stringify(largeEdges)}
        </script>
      `;

      const nodesElement = document.getElementById('nodesData');
      const edgesElement = document.getElementById('edgesData');
      const nodes = JSON.parse(nodesElement.textContent);
      const edges = JSON.parse(edgesElement.textContent);
      
      expect(nodes.length).toBe(100);
      expect(edges.length).toBe(200);
    });

    test('should handle directed graph edges', () => {
      document.body.innerHTML = `
        <div id="lightGraph"></div>
        <script type="application/json" id="nodesData">
          [{"id": "A"}, {"id": "B"}]
        </script>
        <script type="application/json" id="edgesData">
          [{"source": "A", "target": "B", "weight": 1}]
        </script>
      `;

      const edgesElement = document.getElementById('edgesData');
      const edges = JSON.parse(edgesElement.textContent);
      expect(edges[0].source).toBe('A');
      expect(edges[0].target).toBe('B');
      expect(edges[0].source).not.toBe(edges[0].target);
    });

    test('should handle self-loops', () => {
      document.body.innerHTML = `
        <div id="lightGraph"></div>
        <script type="application/json" id="nodesData">
          [{"id": "A"}]
        </script>
        <script type="application/json" id="edgesData">
          [{"source": "A", "target": "A", "weight": 1}]
        </script>
      `;

      const edgesElement = document.getElementById('edgesData');
      const edges = JSON.parse(edgesElement.textContent);
      expect(edges[0].source).toBe(edges[0].target);
    });
  });

  describe('Data Format Validation', () => {
    test('should validate node id is present', () => {
      const nodesElement = document.getElementById('nodesData');
      const nodes = JSON.parse(nodesElement.textContent);
      nodes.forEach(node => {
        expect(node).toHaveProperty('id');
        expect(node.id).toBeTruthy();
      });
    });

    test('should validate edge has source and target', () => {
      const edgesElement = document.getElementById('edgesData');
      const edges = JSON.parse(edgesElement.textContent);
      edges.forEach(edge => {
        expect(edge).toHaveProperty('source');
        expect(edge).toHaveProperty('target');
        expect(edge.source).toBeTruthy();
        expect(edge.target).toBeTruthy();
      });
    });

    test('should validate edge weight is a number', () => {
      const edgesElement = document.getElementById('edgesData');
      const edges = JSON.parse(edgesElement.textContent);
      edges.forEach(edge => {
        expect(edge).toHaveProperty('weight');
        expect(typeof edge.weight).toBe('number');
      });
    });
  });

  describe('Integration with D3', () => {
    test('should call d3.select when initialized', () => {
      eval(lightgraphCode);
      if (window.lightGraph.initializeVisualization) {
        window.lightGraph.initializeVisualization();
        expect(d3.select).toHaveBeenCalled();
      }
    });

    test('should call d3.forceSimulation for physics', () => {
      eval(lightgraphCode);
      if (window.lightGraph.initializeVisualization) {
        window.lightGraph.initializeVisualization();
        expect(d3.forceSimulation).toHaveBeenCalled();
      }
    });

    test('should call d3.zoom for zoom functionality', () => {
      eval(lightgraphCode);
      if (window.lightGraph.initializeVisualization) {
        window.lightGraph.initializeVisualization();
        expect(d3.zoom).toHaveBeenCalled();
      }
    });
  });

  describe('Metric Legend', () => {
    function setConfig(config) {
      const el = document.createElement('script');
      el.type = 'application/json';
      el.id = 'lightGraphConfig';
      el.textContent = JSON.stringify(config);
      document.body.appendChild(el);
    }

    test('renders a metric section with gradient and min/max labels', () => {
      setConfig({ ui: { metricLegend: {
        label: 'PageRank', map: 'both', min: 0.01, max: 0.25,
        sizeRange: [4, 20], colors: ['#c6dbef', '#08306b']
      } } });
      eval(lightgraphCode);
      window.lightGraph.initializeVisualization();

      const panel = document.getElementById('legendPanel');
      expect(panel.style.display).toBe('block');
      const metric = document.getElementById('metricLegend');
      expect(metric).toBeTruthy();
      expect(panel.textContent).toContain('PageRank');
      expect(panel.textContent).toContain('0.01');
      expect(panel.textContent).toContain('0.25');
      // Gradient bar for the color channel
      expect(metric.querySelectorAll('.lg-metric-gradient').length).toBe(1);
    });

    test('size-only metric renders dots but no gradient', () => {
      setConfig({ ui: { metricLegend: {
        map: 'size', min: 1, max: 10, sizeRange: [4, 20]
      } } });
      eval(lightgraphCode);
      window.lightGraph.initializeVisualization();

      const metric = document.getElementById('metricLegend');
      expect(metric).toBeTruthy();
      // Falls back to the generic 'Metric' title when no label is given
      expect(document.getElementById('legendPanel').textContent).toContain('Metric');
      expect(metric.querySelectorAll('.lg-metric-gradient').length).toBe(0);
      const dots = [...metric.querySelectorAll('div')]
        .filter(d => d.style.borderRadius === '50%');
      expect(dots.length).toBe(3);
    });

    test('legend stays hidden without groups or metric', () => {
      eval(lightgraphCode);
      window.lightGraph.initializeVisualization();
      expect(document.getElementById('legendPanel').style.display).toBe('none');
    });
  });

  describe('Group Colors', () => {
    // d3.schemeCategory10 in rgb form, as jsdom reports backgroundColor
    function hexToRgb(hex) {
      const n = parseInt(hex.slice(1), 16);
      return `rgb(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255})`;
    }

    function setUp(nodes, config) {
      document.body.innerHTML = `
        <div id="lightGraph" style="width: 800px; height: 600px;"></div>
        <script type="application/json" id="nodesData">${JSON.stringify(nodes)}</script>
        <script type="application/json" id="edgesData">[]</script>
      `;
      if (config) {
        const el = document.createElement('script');
        el.type = 'application/json';
        el.id = 'lightGraphConfig';
        el.textContent = JSON.stringify(config);
        document.body.appendChild(el);
      }
      window.lightGraph = {};
      eval(lightgraphCode);
      window.lightGraph.initializeVisualization();
    }

    // Legend renders groups alphabetically; returns {group: rgbColor}
    function legendColors() {
      const colors = {};
      document.querySelectorAll('#legendContent .lg-legend-item').forEach(item => {
        const group = item.querySelector('span').textContent.split(' ')[0];
        colors[group] = item.firstChild.style.backgroundColor;
      });
      return colors;
    }

    test('colors follow sorted group order, not node order', () => {
      setUp([
        { id: 'A', group: 'gamma' },
        { id: 'B', group: 'alpha' },
        { id: 'C', group: 'beta' }
      ]);
      expect(legendColors()).toEqual({
        alpha: hexToRgb('#1f77b4'),
        beta: hexToRgb('#ff7f0e'),
        gamma: hexToRgb('#2ca02c')
      });
    });

    test('same groups get same colors regardless of node order', () => {
      setUp([
        { id: 'A', group: 'gamma' },
        { id: 'B', group: 'alpha' },
        { id: 'C', group: 'beta' }
      ]);
      const first = legendColors();
      setUp([
        { id: 'C', group: 'beta' },
        { id: 'A', group: 'gamma' },
        { id: 'B', group: 'alpha' }
      ]);
      expect(legendColors()).toEqual(first);
    });

    test('colorOrder keeps colors stable when a group is absent', () => {
      const config = { groups: { colorOrder: ['alpha', 'beta', 'gamma'] } };
      setUp([
        { id: 'A', group: 'alpha' },
        { id: 'B', group: 'beta' },
        { id: 'C', group: 'gamma' }
      ], config);
      const full = legendColors();

      // Drop beta entirely: alpha and gamma must keep their colors.
      setUp([
        { id: 'A', group: 'alpha' },
        { id: 'C', group: 'gamma' }
      ], config);
      const subset = legendColors();
      expect(subset.alpha).toBe(full.alpha);
      expect(subset.gamma).toBe(full.gamma);
      expect(subset.beta).toBeUndefined();
    });

    test('groups not in colorOrder follow the listed ones in sorted order', () => {
      setUp([
        { id: 'A', group: 'alpha' },
        { id: 'B', group: 'beta' },
        { id: 'C', group: 'gamma' }
      ], { groups: { colorOrder: ['gamma'] } });
      expect(legendColors()).toEqual({
        gamma: hexToRgb('#1f77b4'),
        alpha: hexToRgb('#ff7f0e'),
        beta: hexToRgb('#2ca02c')
      });
    });

    test('groups.colors pins named groups and leaves the rest on the palette', () => {
      setUp([
        { id: 'A', group: 'alpha' },
        { id: 'B', group: 'beta' },
        { id: 'C', group: 'gamma' }
      ], { groups: { colors: { beta: '#123456', missing: '#ffffff' } } });
      expect(legendColors()).toEqual({
        alpha: hexToRgb('#1f77b4'),
        beta: hexToRgb('#123456'),
        gamma: hexToRgb('#2ca02c')
      });
    });

    test('updateConfig({groups}) recolors an existing instance', () => {
      setUp([
        { id: 'A', group: 'alpha' },
        { id: 'B', group: 'beta' }
      ]);
      const instance = document.getElementById('lightGraph').lightgraph;
      instance.updateConfig({ groups: { colors: { alpha: '#abcdef' } } });
      expect(legendColors().alpha).toBe(hexToRgb('#abcdef'));
      expect(legendColors().beta).toBe(hexToRgb('#ff7f0e'));
    });
  });

  describe('Namespace and Global Scope', () => {
    test('should define lightGraph namespace', () => {
      window.lightGraph = undefined;
      eval(lightgraphCode);
      expect(window.lightGraph).toBeDefined();
      expect(window.lightGraph.initializeVisualization).toBeDefined();
    });

    test('should preserve existing lightGraph properties', () => {
      window.lightGraph = { existingProp: 'value' };
      eval(lightgraphCode);
      expect(window.lightGraph.existingProp).toBe('value');
      expect(window.lightGraph.initializeVisualization).toBeDefined();
    });
  });
});
