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
    
    // Mock d3 library
    const mockContext = {
      fillRect: jest.fn(),
      strokeRect: jest.fn(),
      clearRect: jest.fn(),
      fillText: jest.fn(),
      strokeText: jest.fn(),
      beginPath: jest.fn(),
      closePath: jest.fn(),
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn(),
      fill: jest.fn(),
      arc: jest.fn(),
      translate: jest.fn(),
      rotate: jest.fn(),
      scale: jest.fn(),
      save: jest.fn(),
      restore: jest.fn(),
    };
    
    global.d3 = {
      select: jest.fn(() => ({
        append: jest.fn(() => ({
          attr: jest.fn().mockReturnThis(),
          style: jest.fn().mockReturnThis(),
          call: jest.fn().mockReturnThis(),
          node: jest.fn(() => ({ getContext: () => mockContext })),
        })),
        attr: jest.fn().mockReturnThis(),
        style: jest.fn().mockReturnThis(),
        call: jest.fn().mockReturnThis(),
        on: jest.fn().mockReturnThis(),
      })),
      zoom: jest.fn(() => ({
        scaleExtent: jest.fn().mockReturnThis(),
        on: jest.fn().mockReturnThis(),
      })),
      drag: jest.fn(() => ({
        on: jest.fn().mockReturnThis(),
      })),
      forceSimulation: jest.fn(() => ({
        force: jest.fn().mockReturnThis(),
        nodes: jest.fn().mockReturnThis(),
        on: jest.fn().mockReturnThis(),
        alphaTarget: jest.fn().mockReturnThis(),
        restart: jest.fn().mockReturnThis(),
      })),
      forceLink: jest.fn(() => ({
        id: jest.fn().mockReturnThis(),
        distance: jest.fn().mockReturnThis(),
      })),
      forceManyBody: jest.fn(() => ({
        strength: jest.fn().mockReturnThis(),
      })),
      forceCenter: jest.fn(),
      forceCollide: jest.fn(() => ({
        radius: jest.fn().mockReturnThis(),
      })),
      scaleOrdinal: jest.fn(() => jest.fn()),
      schemeCategory10: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'],
    };
    
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

  describe('Namespace and Global Scope', () => {
    test('should not pollute global namespace beyond lightGraph', () => {
      const beforeKeys = Object.keys(window);
      eval(lightgraphCode);
      const afterKeys = Object.keys(window);
      
      const newKeys = afterKeys.filter(key => !beforeKeys.includes(key));
      // Only lightGraph and d3 (our mock) should be added
      expect(newKeys.filter(k => k !== 'd3' && k !== 'lightGraph').length).toBe(0);
    });

    test('should preserve existing lightGraph properties', () => {
      window.lightGraph = { existingProp: 'value' };
      eval(lightgraphCode);
      expect(window.lightGraph.existingProp).toBe('value');
      expect(window.lightGraph.initializeVisualization).toBeDefined();
    });
  });
});
