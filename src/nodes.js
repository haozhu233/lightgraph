import * as THREE from './three.js';
import { state } from './state.js';
import { getGroupColor } from './utils.js';

// =========================================================================
// Node rendering with InstancedMesh
// =========================================================================

const _tempMatrix = new THREE.Matrix4();
const _tempColor = new THREE.Color();

export function createNodeMeshes() {
    // Remove old meshes if they exist
    if (state.nodesFillMesh) {
        state.scene.remove(state.nodesFillMesh);
        state.nodesFillMesh.geometry.dispose();
        state.nodesFillMesh.material.dispose();
    }
    if (state.nodesBorderMesh) {
        state.scene.remove(state.nodesBorderMesh);
        state.nodesBorderMesh.geometry.dispose();
        state.nodesBorderMesh.material.dispose();
    }

    const count = state.nodes.length;
    if (count === 0) return;

    // Shared geometry for all nodes
    const circleGeo = new THREE.CircleGeometry(1, 32);

    // Fill mesh (transparent so it shares render list with edges for correct renderOrder)
    const fillMaterial = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 1.0,
        depthTest: false,
        depthWrite: false,
        side: THREE.DoubleSide,
    });
    const fillMesh = new THREE.InstancedMesh(circleGeo, fillMaterial, count);
    fillMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    fillMesh.renderOrder = 5;
    state.scene.add(fillMesh);
    state.nodesFillMesh = fillMesh;

    // Border mesh (slightly larger, rendered behind fills)
    const borderGeo = new THREE.CircleGeometry(1, 32);
    const borderMaterial = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 1.0,
        depthTest: false,
        depthWrite: false,
        side: THREE.DoubleSide,
    });
    const borderMesh = new THREE.InstancedMesh(borderGeo, borderMaterial, count);
    borderMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    borderMesh.renderOrder = 4;
    state.scene.add(borderMesh);
    state.nodesBorderMesh = borderMesh;

    // Initialize colors
    updateNodeInstances();
}

export function updateNodeInstances() {
    const { nodes, selectedNodes, config, nodesFillMesh, nodesBorderMesh } = state;
    if (!nodesFillMesh || !nodesBorderMesh) return;

    const borderWidth = config.nodes.borderWidth;

    nodes.forEach((node, i) => {
        const isSelected = selectedNodes.has(node);
        const size = node.size || config.nodes.defaultSize;
        const nodeSize = isSelected ? size + config.nodes.selectedSizeIncrease : size;
        const radius = nodeSize / 2;

        // Fill mesh: position and scale
        _tempMatrix.makeScale(radius, radius, 1);
        _tempMatrix.setPosition(node.x || 0, node.y || 0, 0);
        nodesFillMesh.setMatrixAt(i, _tempMatrix);

        // Fill color
        const color = node.group ? getGroupColor(node.group) : (node.color || config.nodes.defaultColor);
        _tempColor.set(color);
        nodesFillMesh.setColorAt(i, _tempColor);

        // Border mesh: slightly larger
        const borderRadius = radius + borderWidth;
        _tempMatrix.makeScale(borderRadius, borderRadius, 1);
        _tempMatrix.setPosition(node.x || 0, node.y || 0, 0);
        nodesBorderMesh.setMatrixAt(i, _tempMatrix);

        // Border color
        const borderColor = isSelected ? config.nodes.selectedBorderColor : config.nodes.borderColor;
        _tempColor.set(borderColor);
        nodesBorderMesh.setColorAt(i, _tempColor);
    });

    nodesFillMesh.instanceMatrix.needsUpdate = true;
    if (nodesFillMesh.instanceColor) nodesFillMesh.instanceColor.needsUpdate = true;
    nodesBorderMesh.instanceMatrix.needsUpdate = true;
    if (nodesBorderMesh.instanceColor) nodesBorderMesh.instanceColor.needsUpdate = true;
}
