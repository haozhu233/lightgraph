import * as d3 from './d3.js';
import { DEFAULT_CONFIG, THEMES, mergeConfig, resolveConfigFromTheme } from './config.js';
import { state } from './state.js';
import { clearSelection } from './utils.js';
import { initRenderer, updateCameraFromTransform, render } from './renderer.js';
import { createNodeMeshes, updateNodeInstances } from './nodes.js';
import { createEdgeMeshes, updateEdgePositions, updateArrows } from './edges.js';
import { updateGroupEllipses } from './ellipses.js';
import { createLabelContainer, createLabels, updateLabels } from './labels.js';
import { buildUI, setButtonActive, updateLegend, updateStatistics, updateSelectionBoxOverlay } from './ui.js';
import { setupInteractions } from './interactions.js';
import { recalculateForce } from './layout.js';
import { exportPNG, exportSVG, exportJSON } from './export.js';

window.lightGraph = window.lightGraph || {};

window.lightGraph.initializeVisualization = () => {
    // =====================================================================
    // 0. Load Configuration
    // =====================================================================
    const configElement = document.getElementById('lightGraphConfig');
    const userConfig = configElement ? JSON.parse(configElement.textContent) : {};
    const config = mergeConfig(DEFAULT_CONFIG, userConfig);

    // Determine theme
    state.currentTheme = config.ui.theme || 'light';

    // Resolve null config values from theme defaults
    resolveConfigFromTheme(config, state.currentTheme);

    state.config = config;
    state.showArrows = config.edges.showArrows;

    // Track whether the user explicitly set node size / edge opacity in config JSON
    const userSetNodeSize = userConfig.nodes && userConfig.nodes.defaultSize !== undefined;
    const userSetEdgeOpacity = userConfig.edges && userConfig.edges.defaultOpacity !== undefined;

    // =====================================================================
    // 1. Initialize container
    // =====================================================================
    const lightGraph = document.getElementById('lightGraph');
    if (lightGraph.clientHeight === 0) {
        lightGraph.style.height = '100vh';
    }
    lightGraph.style.position = 'relative';
    lightGraph.style.overflow = 'hidden';
    state.container = lightGraph;

    // =====================================================================
    // 2. Initialize Three.js renderer
    // =====================================================================
    const success = initRenderer();
    if (!success) return; // WebGL not available

    // =====================================================================
    // 3. Initialize D3 dependencies
    // =====================================================================
    state.transform = d3.zoomIdentity;

    // Extended color palette
    const extendedColors = [
        ...d3.schemeCategory10,
        ...d3.schemeSet2,
        ...d3.schemeSet3
    ];
    state.groupColorScale = d3.scaleOrdinal(extendedColors);

    // Initialize simulation placeholder
    state.simulation = d3.forceSimulation([]);

    // =====================================================================
    // 4. Build UI
    // =====================================================================
    buildUI(ticked);

    // Create label container
    createLabelContainer();

    // =====================================================================
    // 5. Set up interactions
    // =====================================================================
    setupInteractions(ticked);

    // =====================================================================
    // 6. Wire up layout controls
    // =====================================================================
    state.ui.layoutSelect.addEventListener('change', () => {
        config.layout = state.ui.layoutSelect.value;
        recalculateForce(ticked);
    });

    state.ui.restartButton.addEventListener('click', () => {
        recalculateForce(ticked);
    });

    // =====================================================================
    // 7. Wire up export buttons
    // =====================================================================
    state.ui.exportPNGButton.addEventListener('click', exportPNG);
    state.ui.exportSVGButton.addEventListener('click', exportSVG);
    state.ui.exportJSONButton.addEventListener('click', exportJSON);

    // =====================================================================
    // 8. Main tick function
    // =====================================================================
    function ticked() {
        // Update Three.js objects from simulation state
        updateNodeInstances();
        updateEdgePositions();
        updateGroupEllipses();
        updateArrows();
        updateLabels();
        updateSelectionBoxOverlay();

        // Render Three.js scene
        render();

        // Update DOM panels
        updateLegend();
        updateStatistics();
    }

    // =====================================================================
    // 9. Load data and start
    // =====================================================================
    function reloadData() {
        try {
            const nodesData = document.getElementById('nodesData');
            const edgesData = document.getElementById('edgesData');

            if (!nodesData || !edgesData) {
                console.error('nodesData or edgesData element not found');
                return;
            }

            // Reset state
            state.selectionMode = false;
            state.transform = d3.zoomIdentity;
            clearSelection();
            state.selectionBox = null;
            state.draggingNode = null;
            state.dragOffsetX = 0;
            state.dragOffsetY = 0;

            // Parse data
            state.nodes = JSON.parse(nodesData.textContent);
            state.edges = JSON.parse(edgesData.textContent);

            // Auto-calculate node size and edge opacity based on graph density
            const nodeCount = state.nodes.length;
            const edgeCount = state.edges.length;

            if (!userSetNodeSize && !state.userAdjusted.nodeSize) {
                const autoNodeSize = Math.max(4, Math.min(20, 180 / Math.sqrt(nodeCount)));
                config.nodes.defaultSize = Math.round(autoNodeSize);
                if (state.ui.nodeSizeSlider) {
                    state.ui.nodeSizeSlider.value = String(config.nodes.defaultSize);
                    state.ui.nodeSizeValue.textContent = String(config.nodes.defaultSize);
                }
            }

            if (!userSetEdgeOpacity && !state.userAdjusted.edgeOpacity) {
                const density = nodeCount > 1 ? (2 * edgeCount) / (nodeCount * (nodeCount - 1)) : 0;
                const autoEdgeOpacity = Math.max(0.08, Math.min(0.6, 0.5 / Math.sqrt(Math.max(density * nodeCount, 0.1))));
                config.edges.defaultOpacity = parseFloat(autoEdgeOpacity.toFixed(2));
                if (state.ui.edgeOpacitySlider) {
                    state.ui.edgeOpacitySlider.value = String(config.edges.defaultOpacity);
                    state.ui.edgeOpacityValue.textContent = config.edges.defaultOpacity.toFixed(2);
                }
            }

            // Reset mode buttons
            setButtonActive(state.ui.zoomButton, true);
            setButtonActive(state.ui.selectButton, false);

            // Update camera to default view
            updateCameraFromTransform();

            // Create Three.js objects for new data
            createNodeMeshes();
            createEdgeMeshes();
            createLabels();

            // Start layout simulation
            recalculateForce(ticked);
        } catch (error) {
            console.error('Error reloading data:', error);
        }
    }

    // =====================================================================
    // 9b. Apply new data (from edit/load UI)
    // =====================================================================
    function applyNewData(data) {
        state.selectionMode = false;
        state.transform = d3.zoomIdentity;
        clearSelection();
        state.selectionBox = null;
        state.draggingNode = null;

        state.nodes = data.nodes;
        state.edges = data.edges;

        setButtonActive(state.ui.zoomButton, true);
        setButtonActive(state.ui.selectButton, false);
        state.ui.helperText.textContent = 'Scroll to zoom \u00b7 Drag to pan';

        // Re-enable D3 zoom
        d3.select(state.renderer.domElement).call(state.zoom);

        updateCameraFromTransform();
        createNodeMeshes();
        createEdgeMeshes();
        createLabels();
        recalculateForce(ticked);
    }
    state.applyNewData = applyNewData;

    reloadData();

    // =====================================================================
    // 10. Mutation observer for data changes
    // =====================================================================
    const networkDataEl = document.getElementById('networkData');
    if (networkDataEl) {
        const observer = new MutationObserver(() => {
            setTimeout(reloadData, 500);
        });
        observer.observe(networkDataEl, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }
};

// Auto-initialize when #lightGraph element appears
const checkCanvas = setInterval(() => {
    if (document.getElementById('lightGraph')) {
        clearInterval(checkCanvas);
        window.lightGraph.initializeVisualization();
    }
}, 100);
