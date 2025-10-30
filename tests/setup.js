// Jest setup file for mocking D3.js and canvas context

// Mock canvas context
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

// Mock D3.js library
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
