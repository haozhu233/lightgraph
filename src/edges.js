import * as THREE from './three.js';
import { state } from './state.js';
import { getGroupColor } from './utils.js';

// =========================================================================
// Edge rendering with LineSegments (two sets: normal + highlighted)
// =========================================================================

export function createEdgeMeshes() {
    // Remove old meshes
    if (state.normalEdgesMesh) {
        state.scene.remove(state.normalEdgesMesh);
        state.normalEdgesMesh.geometry.dispose();
        state.normalEdgesMesh.material.dispose();
    }
    if (state.highlightedEdgesMesh) {
        state.scene.remove(state.highlightedEdgesMesh);
        state.highlightedEdgesMesh.geometry.dispose();
        state.highlightedEdgesMesh.material.dispose();
    }
    if (state.arrowMesh) {
        state.scene.remove(state.arrowMesh);
        state.arrowMesh.geometry.dispose();
        state.arrowMesh.material.dispose();
        state.arrowMesh = null;
    }

    const { edges, config } = state;
    if (edges.length === 0) return;

    // Each edge = 2 vertices = 6 floats
    const floatsPerEdge = 6;

    // Normal edges
    const normalGeo = new THREE.BufferGeometry();
    const normalPositions = new Float32Array(edges.length * floatsPerEdge);
    const normalColors = new Float32Array(edges.length * floatsPerEdge);
    normalGeo.setAttribute('position', new THREE.BufferAttribute(normalPositions, 3));
    normalGeo.setAttribute('color', new THREE.BufferAttribute(normalColors, 3));
    normalGeo.attributes.position.setUsage(THREE.DynamicDrawUsage);
    normalGeo.attributes.color.setUsage(THREE.DynamicDrawUsage);

    const normalMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: config.edges.defaultOpacity,
        depthTest: false,
        depthWrite: false,
    });

    const normalMesh = new THREE.LineSegments(normalGeo, normalMat);
    normalMesh.renderOrder = 2;
    state.scene.add(normalMesh);
    state.normalEdgesMesh = normalMesh;

    // Highlighted edges (same structure, higher opacity)
    const hlGeo = new THREE.BufferGeometry();
    const hlPositions = new Float32Array(edges.length * floatsPerEdge);
    const hlColors = new Float32Array(edges.length * floatsPerEdge);
    hlGeo.setAttribute('position', new THREE.BufferAttribute(hlPositions, 3));
    hlGeo.setAttribute('color', new THREE.BufferAttribute(hlColors, 3));
    hlGeo.attributes.position.setUsage(THREE.DynamicDrawUsage);
    hlGeo.attributes.color.setUsage(THREE.DynamicDrawUsage);

    const hlMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: config.edges.selectedOpacity,
        depthTest: false,
        depthWrite: false,
    });

    const hlMesh = new THREE.LineSegments(hlGeo, hlMat);
    hlMesh.renderOrder = 3;
    state.scene.add(hlMesh);
    state.highlightedEdgesMesh = hlMesh;
}

export function updateEdgePositions() {
    const { edges, selectedNodes, config, normalEdgesMesh, highlightedEdgesMesh } = state;
    if (!normalEdgesMesh || !highlightedEdgesMesh) return;

    const normalPositions = normalEdgesMesh.geometry.attributes.position.array;
    const normalColors = normalEdgesMesh.geometry.attributes.color.array;
    const hlPositions = highlightedEdgesMesh.geometry.attributes.position.array;
    const hlColors = highlightedEdgesMesh.geometry.attributes.color.array;

    let normalCount = 0;
    let hlCount = 0;

    const defaultColor = new THREE.Color(config.edges.defaultColor);

    edges.forEach((edge) => {
        const sx = edge.source.x || 0;
        const sy = edge.source.y || 0;
        const tx = edge.target.x || 0;
        const ty = edge.target.y || 0;

        const isHighlighted = selectedNodes.has(edge.source) || selectedNodes.has(edge.target);

        // Use same color for both normal and highlighted edges
        const edgeColor = edge.color ? new THREE.Color(edge.color)
            : (state.colorEdgesByGroup && edge.source.group) ? new THREE.Color(getGroupColor(edge.source.group))
            : defaultColor;

        if (isHighlighted) {
            const idx = hlCount * 6;
            hlPositions[idx] = sx;
            hlPositions[idx + 1] = sy;
            hlPositions[idx + 2] = 0;
            hlPositions[idx + 3] = tx;
            hlPositions[idx + 4] = ty;
            hlPositions[idx + 5] = 0;
            hlColors[idx] = edgeColor.r;
            hlColors[idx + 1] = edgeColor.g;
            hlColors[idx + 2] = edgeColor.b;
            hlColors[idx + 3] = edgeColor.r;
            hlColors[idx + 4] = edgeColor.g;
            hlColors[idx + 5] = edgeColor.b;
            hlCount++;
        } else {
            const idx = normalCount * 6;
            normalPositions[idx] = sx;
            normalPositions[idx + 1] = sy;
            normalPositions[idx + 2] = 0;
            normalPositions[idx + 3] = tx;
            normalPositions[idx + 4] = ty;
            normalPositions[idx + 5] = 0;
            normalColors[idx] = edgeColor.r;
            normalColors[idx + 1] = edgeColor.g;
            normalColors[idx + 2] = edgeColor.b;
            normalColors[idx + 3] = edgeColor.r;
            normalColors[idx + 4] = edgeColor.g;
            normalColors[idx + 5] = edgeColor.b;
            normalCount++;
        }
    });

    // Update draw ranges
    normalEdgesMesh.geometry.setDrawRange(0, normalCount * 2);
    normalEdgesMesh.geometry.attributes.position.needsUpdate = true;
    normalEdgesMesh.geometry.attributes.color.needsUpdate = true;

    highlightedEdgesMesh.geometry.setDrawRange(0, hlCount * 2);
    highlightedEdgesMesh.geometry.attributes.position.needsUpdate = true;
    highlightedEdgesMesh.geometry.attributes.color.needsUpdate = true;
}

// =========================================================================
// Arrow rendering
// =========================================================================

export function updateArrows() {
    if (!state.showArrows) {
        if (state.arrowMesh) {
            state.arrowMesh.visible = false;
        }
        return;
    }

    const { edges, config } = state;
    if (edges.length === 0) return;

    // Rebuild arrow geometry each time (arrows change with edge positions)
    if (state.arrowMesh) {
        state.scene.remove(state.arrowMesh);
        state.arrowMesh.geometry.dispose();
        state.arrowMesh.material.dispose();
    }

    const arrowLength = config.edges.arrowSize;
    const arrowWidth = config.edges.arrowWidth;

    // Each arrow = 2 line segments = 4 vertices
    const positions = new Float32Array(edges.length * 4 * 3);
    const colors = new Float32Array(edges.length * 4 * 3);
    const edgeColor = new THREE.Color(config.edges.defaultColor);

    edges.forEach((edge, i) => {
        const dx = (edge.target.x || 0) - (edge.source.x || 0);
        const dy = (edge.target.y || 0) - (edge.source.y || 0);
        const angle = Math.atan2(dy, dx);
        // Offset arrow tip to the target node's border (radius = size / 2)
        const targetSize = edge.target.size || config.nodes.defaultSize;
        const targetRadius = targetSize / 2 + config.nodes.borderWidth;
        const tipX = (edge.target.x || 0) - targetRadius * Math.cos(angle);
        const tipY = (edge.target.y || 0) - targetRadius * Math.sin(angle);

        const idx = i * 12;
        // Line 1: arrowhead tip -> left wing
        positions[idx] = tipX;
        positions[idx + 1] = tipY;
        positions[idx + 2] = 0;
        positions[idx + 3] = tipX - arrowLength * Math.cos(angle - Math.PI / 6);
        positions[idx + 4] = tipY - arrowLength * Math.sin(angle - Math.PI / 6);
        positions[idx + 5] = 0;

        // Line 2: arrowhead tip -> right wing
        positions[idx + 6] = tipX;
        positions[idx + 7] = tipY;
        positions[idx + 8] = 0;
        positions[idx + 9] = tipX - arrowLength * Math.cos(angle + Math.PI / 6);
        positions[idx + 10] = tipY - arrowLength * Math.sin(angle + Math.PI / 6);
        positions[idx + 11] = 0;

        const c = edge.color ? new THREE.Color(edge.color) : edgeColor;
        for (let j = 0; j < 4; j++) {
            colors[idx + j * 3] = c.r;
            colors[idx + j * 3 + 1] = c.g;
            colors[idx + j * 3 + 2] = c.b;
        }
    });

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: config.edges.defaultOpacity,
        depthTest: false,
        depthWrite: false,
    });

    const mesh = new THREE.LineSegments(geo, mat);
    mesh.renderOrder = 3;
    state.scene.add(mesh);
    state.arrowMesh = mesh;
}
