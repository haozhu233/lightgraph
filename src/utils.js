import * as THREE from './three.js';
import { state } from './state.js';

// =========================================================================
// Coordinate transforms
// =========================================================================

export function screenToWorld(screenX, screenY) {
    const t = state.transform;
    return {
        x: (screenX - t.x) / t.k,
        y: (screenY - t.y) / t.k
    };
}

export function worldToScreen(worldX, worldY) {
    const t = state.transform;
    return {
        x: worldX * t.k + t.x,
        y: worldY * t.k + t.y
    };
}

// =========================================================================
// Math utilities
// =========================================================================

export function computeEigen(covMatrix) {
    const a = covMatrix[0][0];
    const b = covMatrix[0][1];
    const d = covMatrix[1][1];

    const trace = a + d;
    const determinant = a * d - b * b;
    const discriminant = Math.sqrt(trace * trace - 4 * determinant);
    const eigenvalue1 = (trace + discriminant) / 2;
    const eigenvalue2 = (trace - discriminant) / 2;

    let eigenvector1, eigenvector2;
    if (b !== 0) {
        eigenvector1 = [eigenvalue1 - d, b];
        eigenvector2 = [eigenvalue2 - d, b];
    } else {
        eigenvector1 = [1, 0];
        eigenvector2 = [0, 1];
    }

    const normalize = (v) => {
        const length = Math.sqrt(v[0] * v[0] + v[1] * v[1]);
        return [v[0] / length, v[1] / length];
    };
    eigenvector1 = normalize(eigenvector1);
    eigenvector2 = normalize(eigenvector2);

    return [eigenvalue1, eigenvalue2, eigenvector1, eigenvector2];
}

export function isNodeInSelection(node, box) {
    const x0 = Math.min(box.x, box.x + box.width);
    const x1 = Math.max(box.x, box.x + box.width);
    const y0 = Math.min(box.y, box.y + box.height);
    const y1 = Math.max(box.y, box.y + box.height);
    return node.x >= x0 && node.x <= x1 && node.y >= y0 && node.y <= y1;
}

export function getNodeAtCoordinates(x, y) {
    const defaultSize = state.config ? state.config.nodes.defaultSize : 15;
    return state.nodes.find(node =>
        Math.sqrt((node.x - x) ** 2 + (node.y - y) ** 2) < (node.size || defaultSize) / 2
    );
}

// =========================================================================
// 3D coordinate transforms
// =========================================================================

const _vec3 = new THREE.Vector3();
const _raycaster = new THREE.Raycaster();
const _mouse = new THREE.Vector2();

export function worldToScreen3D(x, y, z) {
    _vec3.set(x, y, z);
    _vec3.project(state.camera);
    const w = state.container.clientWidth;
    const h = state.container.clientHeight;
    return {
        x: (_vec3.x * 0.5 + 0.5) * w,
        y: (-_vec3.y * 0.5 + 0.5) * h,
        visible: _vec3.z < 1 // behind camera check
    };
}

export function getNodeAtScreenCoordinates3D(screenX, screenY) {
    const w = state.container.clientWidth;
    const h = state.container.clientHeight;
    _mouse.set((screenX / w) * 2 - 1, -(screenY / h) * 2 + 1);
    _raycaster.setFromCamera(_mouse, state.camera);

    const ray = _raycaster.ray;
    let closest = null;
    let closestDist = Infinity;

    state.nodes.forEach(node => {
        const nodeSize = node.size || state.config.nodes.defaultSize;
        const radius = nodeSize / 2;
        _vec3.set(node.x || 0, node.y || 0, node.z || 0);
        const dist = ray.distanceToPoint(_vec3);
        if (dist < radius * 1.5 && dist < closestDist) {
            closestDist = dist;
            closest = node;
        }
    });

    return closest;
}

export function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// =========================================================================
// Group color helper
// =========================================================================

export function getGroupColor(group) {
    return state.groupColorOverrides[group] || state.groupColorScale(group);
}

// =========================================================================
// Selection helpers
// =========================================================================

export function clearSelection() {
    state.selectedNodes.clear();
}

export function addToSelection(nodes) {
    nodes.forEach(node => state.selectedNodes.add(node));
}

export function newSelection(nodes) {
    clearSelection();
    addToSelection(nodes);
}
