import * as d3 from './d3.js';
import { state } from './state.js';
import { updateCameraFromTransform } from './renderer.js';

// =========================================================================
// Layout algorithms
// =========================================================================

export function recalculateForce(tickFn) {
    const { nodes, edges, config, container } = state;

    try {
        const simParams = document.getElementById('simulationParams');
        let simulationForce, linkDistance;

        if (simParams) {
            const params = JSON.parse(simParams.textContent);
            simulationForce = params.totalForce / nodes.length;
            linkDistance = params.linkDistance;
        } else {
            simulationForce = config.simulation.chargeStrength / nodes.length;
            linkDistance = config.simulation.linkDistance;
        }

        const numDims = state.is3D ? 3 : 2;

        if (config.layout === 'circular') {
            applyCircularLayout();
            state.simulation = d3.forceSimulation(nodes)
                .numDimensions(numDims)
                .force('link', d3.forceLink(edges).id(d => d.id).distance(linkDistance).strength(0.1))
                .force('charge', d3.forceManyBody().strength(-simulationForce * 0.1))
                .on('tick', tickFn);
        } else {
            const centerForce = state.is3D
                ? d3.forceCenter(container.clientWidth / 2, container.clientHeight / 2, 0)
                : d3.forceCenter(container.clientWidth / 2, container.clientHeight / 2);
            state.simulation = d3.forceSimulation(nodes)
                .numDimensions(numDims)
                .force('link', d3.forceLink(edges).id(d => d.id).distance(linkDistance))
                .force('charge', d3.forceManyBody().strength(-simulationForce))
                .force('center', centerForce)
                .on('tick', tickFn);
        }

        // Apply zoom to the canvas (only in 2D mode; 3D uses OrbitControls)
        if (!state.is3D) {
            d3.select(state.renderer.domElement).call(state.zoom);
        }

    } catch (error) {
        console.error('Error updating visualization:', error);
    }
}

export function applyCircularLayout() {
    const { nodes, container } = state;
    const centerX = container.clientWidth / 2;
    const centerY = container.clientHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.7;

    // Group nodes by their group property
    const groups = [...new Set(nodes.map(n => n.group || 'default'))].sort();
    const groupMap = new Map();
    groups.forEach((g, i) => groupMap.set(g, i));

    // Sort nodes by group for visual clustering
    const sortedNodes = [...nodes].sort((a, b) => {
        const groupA = a.group || 'default';
        const groupB = b.group || 'default';
        return groupMap.get(groupA) - groupMap.get(groupB);
    });

    // Assign positions in a circle
    sortedNodes.forEach((node, i) => {
        const angle = (2 * Math.PI * i) / sortedNodes.length - Math.PI / 2;
        node.x = centerX + radius * Math.cos(angle);
        node.y = centerY + radius * Math.sin(angle);
        node.fx = node.x;
        node.fy = node.y;
    });

    // Unfix after a short delay to allow some movement
    setTimeout(() => {
        nodes.forEach(node => {
            node.fx = null;
            node.fy = null;
        });
    }, 100);
}
