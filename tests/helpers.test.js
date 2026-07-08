/**
 * Unit tests for the pure helpers exported by lightgraph.js.
 * These require() the module directly - no DOM or d3 mocking needed.
 */

const {
  DEFAULT_CONFIG,
  mergeConfig,
  escapeHtml,
  hexToRgba,
  computeEigen,
  isNodeInSelection,
  LightGraph,
} = require('../lightgraph.js');

describe('escapeHtml', () => {
  test('escapes HTML metacharacters', () => {
    expect(escapeHtml('<img src=x onerror=alert(1)>'))
      .toBe('&lt;img src=x onerror=alert(1)&gt;');
    expect(escapeHtml(`a & b "c" 'd'`)).toBe('a &amp; b &quot;c&quot; &#39;d&#39;');
  });

  test('passes plain strings and numbers through', () => {
    expect(escapeHtml('node-42')).toBe('node-42');
    expect(escapeHtml(42)).toBe('42');
  });
});

describe('mergeConfig', () => {
  test('returns defaults when overrides are empty', () => {
    const merged = mergeConfig(DEFAULT_CONFIG, {});
    expect(merged.nodes.defaultSize).toBe(DEFAULT_CONFIG.nodes.defaultSize);
    expect(merged.layout).toBe('force');
  });

  test('deep-merges nested sections without dropping siblings', () => {
    const merged = mergeConfig(DEFAULT_CONFIG, { nodes: { defaultSize: 12 } });
    expect(merged.nodes.defaultSize).toBe(12);
    expect(merged.nodes.borderWidth).toBe(DEFAULT_CONFIG.nodes.borderWidth);
  });

  test('overrides scalars at the top level', () => {
    const merged = mergeConfig(DEFAULT_CONFIG, { layout: 'circular' });
    expect(merged.layout).toBe('circular');
  });

  test('ignores undefined override values', () => {
    const merged = mergeConfig(DEFAULT_CONFIG, { layout: undefined });
    expect(merged.layout).toBe('force');
  });

  test('rejects empty-array overrides of object sections (jsonlite quirk)', () => {
    const merged = mergeConfig(DEFAULT_CONFIG, { canvas: [] });
    expect(merged.canvas.zoomMin).toBe(DEFAULT_CONFIG.canvas.zoomMin);
  });

  test('still allows array values where defaults are arrays', () => {
    const merged = mergeConfig(DEFAULT_CONFIG, { edges: { weightWidthRange: [1, 8] } });
    expect(merged.edges.weightWidthRange).toEqual([1, 8]);
  });
});

describe('hexToRgba', () => {
  test('converts 6-digit hex with alpha', () => {
    expect(hexToRgba('#ff0000', 0.5)).toBe('rgba(255, 0, 0, 0.5)');
    expect(hexToRgba('#00ff00', 1)).toBe('rgba(0, 255, 0, 1)');
  });

  test('returns cached value on repeat calls', () => {
    expect(hexToRgba('#123456', 0.3)).toBe(hexToRgba('#123456', 0.3));
  });
});

describe('computeEigen', () => {
  test('diagonal matrix yields its diagonal as eigenvalues', () => {
    const [l1, l2, v1, v2] = computeEigen([[4, 0], [0, 1]]);
    expect(l1).toBe(4);
    expect(l2).toBe(1);
    expect(v1).toEqual([1, 0]);
    expect(v2).toEqual([0, 1]);
  });

  test('symmetric off-diagonal matrix yields normalized eigenvectors', () => {
    const [l1, l2, v1] = computeEigen([[2, 1], [1, 2]]);
    expect(l1).toBeCloseTo(3);
    expect(l2).toBeCloseTo(1);
    expect(Math.hypot(v1[0], v1[1])).toBeCloseTo(1);
  });

  test('zero matrix does not produce NaN', () => {
    const [l1, l2, v1] = computeEigen([[0, 0], [0, 0]]);
    expect(l1).toBe(0);
    expect(l2).toBe(0);
    expect(v1.every(Number.isFinite)).toBe(true);
  });
});

describe('isNodeInSelection', () => {
  const box = { x: 0, y: 0, width: 10, height: 10 };

  test('detects a node inside the box', () => {
    expect(isNodeInSelection({ x: 5, y: 5 }, box)).toBe(true);
  });

  test('rejects a node outside the box', () => {
    expect(isNodeInSelection({ x: 15, y: 5 }, box)).toBe(false);
  });

  test('handles boxes dragged up-left (negative width/height)', () => {
    const negBox = { x: 10, y: 10, width: -10, height: -10 };
    expect(isNodeInSelection({ x: 5, y: 5 }, negBox)).toBe(true);
    expect(isNodeInSelection({ x: 15, y: 15 }, negBox)).toBe(false);
  });
});

describe('LightGraph constructor guards', () => {
  test('throws without a container', () => {
    expect(() => new LightGraph(null)).toThrow(/container/);
  });

  test('throws without d3', () => {
    const fakeContainer = { style: {} };
    const savedD3 = global.d3;
    delete global.d3;
    try {
      expect(() => new LightGraph(fakeContainer, {})).toThrow(/d3/);
    } finally {
      if (savedD3 !== undefined) global.d3 = savedD3;
    }
  });
});
