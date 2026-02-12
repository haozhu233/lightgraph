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
    state.nodesBorderMesh = null;

    const count = state.nodes.length;
    if (count === 0) return;

    if (state.is3D) {
        // 3D mode: spheres with lit material
        const sphereGeo = new THREE.SphereGeometry(1, 16, 12);
        const fillMaterial = new THREE.MeshStandardMaterial({
            roughness: 0.6,
            metalness: 0.1,
            transparent: true,
            opacity: 1.0,
            depthTest: true,
            depthWrite: true,
        });
        const fillMesh = new THREE.InstancedMesh(sphereGeo, fillMaterial, count);
        fillMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        fillMesh.renderOrder = 5;
        state.scene.add(fillMesh);
        state.nodesFillMesh = fillMesh;

        // No border mesh in 3D — selected nodes use emissive highlight
    } else {
        // 2D mode: circles with basic material (original behavior)
        const circleGeo = new THREE.CircleGeometry(1, 32);

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
    }

    // Initialize colors
    updateNodeInstances();
}

export function updateNodeInstances() {
    const { nodes, selectedNodes, config, nodesFillMesh, nodesBorderMesh, is3D } = state;
    if (!nodesFillMesh) return;

    const borderWidth = config.nodes.borderWidth;

    nodes.forEach((node, i) => {
        const isSelected = selectedNodes.has(node);
        const size = node.size || config.nodes.defaultSize;
        const nodeSize = isSelected ? size + config.nodes.selectedSizeIncrease : size;
        const radius = nodeSize / 2;

        const x = node.x || 0;
        const y = node.y || 0;
        const z = is3D ? (node.z || 0) : 0;

        // Fill mesh: position and scale
        if (is3D) {
            _tempMatrix.makeScale(radius, radius, radius);
        } else {
            _tempMatrix.makeScale(radius, radius, 1);
        }
        _tempMatrix.setPosition(x, y, z);
        nodesFillMesh.setMatrixAt(i, _tempMatrix);

        // Fill color
        const color = node.group ? getGroupColor(node.group) : (node.color || config.nodes.defaultColor);
        _tempColor.set(color);
        nodesFillMesh.setColorAt(i, _tempColor);

        if (is3D) {
            // 3D selected highlight: emissive glow
            // InstancedMesh doesn't support per-instance emissive, so we brighten the color
            if (isSelected) {
                _tempColor.set(config.nodes.selectedBorderColor);
                nodesFillMesh.setColorAt(i, _tempColor);
            }
        } else if (nodesBorderMesh) {
            // 2D border mesh
            const borderRadius = radius + borderWidth;
            _tempMatrix.makeScale(borderRadius, borderRadius, 1);
            _tempMatrix.setPosition(x, y, 0);
            nodesBorderMesh.setMatrixAt(i, _tempMatrix);

            const borderColor = isSelected ? config.nodes.selectedBorderColor : config.nodes.borderColor;
            _tempColor.set(borderColor);
            nodesBorderMesh.setColorAt(i, _tempColor);
        }
    });

    nodesFillMesh.instanceMatrix.needsUpdate = true;
    if (nodesFillMesh.instanceColor) nodesFillMesh.instanceColor.needsUpdate = true;
    if (nodesBorderMesh) {
        nodesBorderMesh.instanceMatrix.needsUpdate = true;
        if (nodesBorderMesh.instanceColor) nodesBorderMesh.instanceColor.needsUpdate = true;
    }
}
