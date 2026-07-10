(function () {
  'use strict';

  // ?embed=compact trims the demo down to graph + sliders + metrics so it
  // fits the narrow content column when embedded on the docs front page.
  const compact = new URLSearchParams(window.location.search).get('embed') === 'compact';
  if (compact) document.body.classList.add('compact');

  const container = document.getElementById('demo-graph');
  const modelButtons = Array.from(document.querySelectorAll('.model-button'));
  const nodesRange = document.getElementById('nodes-range');
  const edgesRange = document.getElementById('edges-range');
  const nodesValue = document.getElementById('nodes-value');
  const edgesValue = document.getElementById('edges-value');
  const toggles = {
    highlight: document.getElementById('toggle-highlight'),
    weights: document.getElementById('toggle-weights'),
    ellipses: document.getElementById('toggle-ellipses'),
    theme: document.getElementById('toggle-theme')
  };
  const metrics = {
    nodes: document.getElementById('metric-nodes'),
    edges: document.getElementById('metric-edges'),
    groups: document.getElementById('metric-groups'),
    density: document.getElementById('metric-density')
  };
  const stageTitle = document.getElementById('stage-title');
  const stageSubtitle = document.getElementById('stage-subtitle');
  const resetButton = document.getElementById('reset-view');
  const regenerateButton = document.getElementById('regenerate');

  let graph = null;
  let currentModel = 'erdos';
  let seed = 42;

  const colors = ['#2f80ed', '#20a39e', '#f2994a', '#c43c3c'];

  function mulberry32(value) {
    return function () {
      let t = value += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function clampEdgeTarget(n, requested) {
    const max = n * (n - 1) / 2;
    return Math.max(n - 1, Math.min(requested, max));
  }

  function weightedChoice(items, weights, rng) {
    const total = weights.reduce((sum, w) => sum + w, 0);
    let draw = rng() * total;
    for (let i = 0; i < items.length; i++) {
      draw -= weights[i];
      if (draw <= 0) return items[i];
    }
    return items[items.length - 1];
  }

  function edgeKey(a, b) {
    return a < b ? `${a}|${b}` : `${b}|${a}`;
  }

  function groupForIndex(i, n, rng) {
    const quarter = Math.floor(i / Math.max(1, n / 4));
    if (rng() < 0.82) return Math.min(3, quarter);
    return Math.floor(rng() * 4);
  }

  function buildNodes(n, rng) {
    return Array.from({ length: n }, (_, i) => {
      const groupIndex = groupForIndex(i, n, rng);
      return {
        id: `n${String(i + 1).padStart(3, '0')}`,
        group: ['Cluster A', 'Cluster B', 'Cluster C', 'Cluster D'][groupIndex],
        color: colors[groupIndex],
        size: 6
      };
    });
  }

  function addEdge(edges, seen, source, target, weight) {
    if (source === target) return false;
    const key = edgeKey(source, target);
    if (seen.has(key)) return false;
    seen.add(key);
    edges.push({ source, target, weight: Number(weight.toFixed(2)) });
    return true;
  }

  function buildErdos(nodes, targetEdges, rng) {
    const edges = [];
    const seen = new Set();
    const ids = nodes.map(n => n.id);

    // A light backbone keeps the graph connected enough for exploration.
    for (let i = 1; i < ids.length; i++) {
      const previous = ids[Math.floor(rng() * i)];
      addEdge(edges, seen, ids[i], previous, 0.25 + rng() * 0.75);
    }

    while (edges.length < targetEdges) {
      const a = ids[Math.floor(rng() * ids.length)];
      const b = ids[Math.floor(rng() * ids.length)];
      addEdge(edges, seen, a, b, 0.1 + rng() * 0.9);
    }
    return edges;
  }

  function buildScaleFree(nodes, targetEdges, rng) {
    const edges = [];
    const seen = new Set();
    const ids = nodes.map(n => n.id);
    const degree = new Map(ids.map(id => [id, 1]));

    for (let i = 1; i < ids.length; i++) {
      if (edges.length >= targetEdges) break;
      const source = ids[i];
      const prior = ids.slice(0, i);
      const links = Math.min(i, i < 6 ? 1 : 1 + Math.floor(rng() * 3));
      let attempts = 0;
      let nodeLinks = 0;
      while (nodeLinks < links && attempts < 40 && edges.length < targetEdges) {
        attempts++;
        const target = weightedChoice(prior, prior.map(id => degree.get(id)), rng);
        if (addEdge(edges, seen, source, target, 0.2 + rng() * 0.8)) {
          nodeLinks++;
          degree.set(source, degree.get(source) + 1);
          degree.set(target, degree.get(target) + 1);
        }
      }
    }

    while (edges.length < targetEdges) {
      const source = weightedChoice(ids, ids.map(id => degree.get(id)), rng);
      const target = weightedChoice(ids, ids.map(id => degree.get(id)), rng);
      if (addEdge(edges, seen, source, target, 0.1 + rng() * 0.9)) {
        degree.set(source, degree.get(source) + 1);
        degree.set(target, degree.get(target) + 1);
      }
    }
    return edges;
  }

  function applyDegreeMetric(nodes, edges) {
    const degree = new Map(nodes.map(n => [n.id, 0]));
    for (const edge of edges) {
      degree.set(edge.source, degree.get(edge.source) + 1);
      degree.set(edge.target, degree.get(edge.target) + 1);
    }
    const values = Array.from(degree.values());
    const min = Math.min(...values);
    const max = Math.max(...values);
    for (const node of nodes) {
      const t = max === min ? 0.5 : (degree.get(node.id) - min) / (max - min);
      node.size = Math.round(5 + t * 12);
    }
  }

  function buildGraphData() {
    const n = Number(nodesRange.value);
    const targetEdges = clampEdgeTarget(n, Number(edgesRange.value));
    edgesRange.max = Math.min(5000, Math.floor(n * Math.min(n - 1, 14) / 2));
    if (targetEdges !== Number(edgesRange.value)) edgesRange.value = targetEdges;
    nodesValue.textContent = n;
    edgesValue.textContent = targetEdges;

    const rng = mulberry32(seed + n * 13 + targetEdges * 17 + (currentModel === 'scale' ? 1000 : 0));
    const nodes = buildNodes(n, rng);
    const edges = currentModel === 'scale'
      ? buildScaleFree(nodes, targetEdges, rng)
      : buildErdos(nodes, targetEdges, rng);
    applyDegreeMetric(nodes, edges);
    return { nodes, edges };
  }

  function demoConfig() {
    const dark = toggles.theme.checked;
    document.body.classList.toggle('dark', dark);
    return {
      ui: {
        theme: dark ? 'dark' : 'light',
        showLegend: true,
        showStatistics: false,
        showTooltips: true
      },
      canvas: {
        autoFit: true,
        backgroundColor: dark ? '#111827' : '#ffffff'
      },
      labels: {
        visible: Number(nodesRange.value) <= 120,
        fontSize: 6
      },
      edges: {
        weightToWidth: toggles.weights.checked,
        weightToOpacity: toggles.weights.checked,
        weightWidthRange: [0.45, 3.6]
      },
      groups: {
        showEllipses: toggles.ellipses.checked
      },
      highlight: {
        enabled: toggles.highlight.checked,
        neighborFade: 0.12
      },
      simulation: {
        chargeStrength: Number(nodesRange.value) > 180 ? 3600 : 2600,
        linkDistance: currentModel === 'scale' ? 72 : 82,
        groupAttraction: 0.45
      }
    };
  }

  function summarize(data) {
    const groupCount = new Set(data.nodes.map(n => n.group)).size;
    const possible = data.nodes.length * (data.nodes.length - 1) / 2;
    metrics.nodes.textContent = data.nodes.length;
    metrics.edges.textContent = data.edges.length;
    metrics.groups.textContent = groupCount;
    metrics.density.textContent = `${Math.round(data.edges.length / possible * 100)}%`;
    stageTitle.textContent = currentModel === 'scale'
      ? 'Scale-free graph'
      : 'Erdos-Renyi random graph';
    stageSubtitle.textContent = currentModel === 'scale'
      ? 'Preferential attachment creates hubs; node size reflects degree.'
      : 'Random edges create a more even degree distribution; node size reflects degree.';
  }

  function render() {
    const data = buildGraphData();
    summarize(data);
    modelButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.model === currentModel);
    });
    if (graph) graph.destroy();
    graph = new lightGraph.LightGraph(container, {
      nodes: data.nodes,
      edges: data.edges,
      config: demoConfig()
    });
    graph.on('selectionChange', selected => {
      if (!selected.length) {
        summarize(data);
        return;
      }
      const label = selected.slice(0, 4).map(n => n.id).join(', ');
      stageSubtitle.textContent = `${selected.length} selected: ${label}${selected.length > 4 ? ', ...' : ''}`;
    });
    graph.on('egoFilter', event => {
      if (event && event.active) {
        stageSubtitle.textContent = `Ego view around ${event.nodeId}: ${event.visibleNodeCount} visible nodes`;
      } else {
        summarize(data);
      }
    });
  }

  function updateFeatureConfig() {
    if (!graph) return render();
    graph.updateConfig(demoConfig());
    graph.zoomToFit();
  }

  let rangeTimer = null;
  function scheduleRender() {
    nodesValue.textContent = nodesRange.value;
    edgesValue.textContent = clampEdgeTarget(Number(nodesRange.value), Number(edgesRange.value));
    clearTimeout(rangeTimer);
    rangeTimer = setTimeout(render, 180);
  }

  modelButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentModel = button.dataset.model;
      render();
    });
  });

  nodesRange.addEventListener('input', scheduleRender);
  edgesRange.addEventListener('input', scheduleRender);
  Object.values(toggles).forEach(toggle => {
    toggle.addEventListener('change', updateFeatureConfig);
  });
  regenerateButton.addEventListener('click', () => {
    seed += 101;
    render();
  });
  resetButton.addEventListener('click', () => {
    if (!graph) return;
    graph.clearEgoFilter();
    graph.selectNodes([]);
    graph.zoomToFit();
  });

  render();
})();
