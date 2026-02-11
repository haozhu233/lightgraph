// Shared mutable state for the visualization
// All modules import this and read/write to it

export const state = {
    // Data
    nodes: [],
    edges: [],

    // Selection
    selectedNodes: new Set(),
    selectionMode: false,
    selectionBox: null,

    // Dragging
    draggingNode: null,
    dragOffsetX: 0,
    dragOffsetY: 0,

    // View
    transform: null, // d3.zoomIdentity - set at init
    showArrows: false,
    colorEdgesByGroup: false,
    groupColorOverrides: {},

    // D3
    simulation: null,
    zoom: null,
    groupColorScale: null,

    // Config (set at init)
    config: null,
    currentTheme: 'light',

    // Three.js objects
    scene: null,
    camera: null,
    renderer: null,
    nodesFillMesh: null,
    nodesBorderMesh: null,
    normalEdgesMesh: null,
    highlightedEdgesMesh: null,
    arrowMesh: null,
    ellipseGroup: null, // THREE.Group for all ellipses

    // DOM references
    container: null,    // #lightGraph div
    labelContainer: null,
    labelDivs: [],      // array of DOM elements for labels
    selectionBoxDiv: null,

    // UI element references (set by ui.js)
    ui: {},

    // Track whether user manually adjusted values via sliders
    userAdjusted: {
        nodeSize: false,
        edgeOpacity: false,
    },
};
