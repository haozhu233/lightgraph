import * as THREE from './three.js';
import { state } from './state.js';
import { computeEigen, hexToRgba, getGroupColor } from './utils.js';

// =========================================================================
// Group ellipse rendering
// =========================================================================

export function updateGroupEllipses() {
    const { nodes, config, ellipseGroup } = state;
    if (!ellipseGroup) return;

    // Clear existing ellipses
    while (ellipseGroup.children.length > 0) {
        const child = ellipseGroup.children[0];
        ellipseGroup.remove(child);
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
    }

    if (!config.groups.showEllipses) return;

    const groups = [...new Set(nodes.map(node => node.group).filter(Boolean))];

    groups.forEach(group => {
        const groupNodes = nodes.filter(node => node.group === group);

        if (groupNodes.length > 1) {
            // Calculate centroid
            const centroid = {
                x: groupNodes.reduce((s, n) => s + (n.x || 0), 0) / groupNodes.length,
                y: groupNodes.reduce((s, n) => s + (n.y || 0), 0) / groupNodes.length
            };

            // Calculate covariance matrix
            let sumXX = 0, sumXY = 0, sumYY = 0;
            groupNodes.forEach(node => {
                const dx = (node.x || 0) - centroid.x;
                const dy = (node.y || 0) - centroid.y;
                sumXX += dx * dx;
                sumXY += dx * dy;
                sumYY += dy * dy;
            });

            const covarianceMatrix = [
                [sumXX / groupNodes.length, sumXY / groupNodes.length],
                [sumXY / groupNodes.length, sumYY / groupNodes.length]
            ];

            const [lambda1, lambda2, v1] = computeEigen(covarianceMatrix);

            const angle = Math.atan2(v1[1], v1[0]);
            const radiusX = Math.sqrt(Math.max(lambda1, 0)) * 2 + 5;
            const radiusY = Math.sqrt(Math.max(lambda2, 0)) * 2 + 5;

            const groupColor = getGroupColor(group);
            const threeColor = new THREE.Color(groupColor);

            // Create ellipse shape for fill
            const segments = 64;
            const fillShape = new THREE.Shape();
            fillShape.moveTo(radiusX, 0);
            for (let i = 1; i <= segments; i++) {
                const theta = (i / segments) * Math.PI * 2;
                fillShape.lineTo(radiusX * Math.cos(theta), radiusY * Math.sin(theta));
            }

            const fillGeo = new THREE.ShapeGeometry(fillShape);
            const fillMat = new THREE.MeshBasicMaterial({
                color: threeColor,
                transparent: true,
                opacity: config.groups.fillOpacity,
                depthTest: false,
                depthWrite: false,
                side: THREE.DoubleSide,
            });
            const fillMesh = new THREE.Mesh(fillGeo, fillMat);
            fillMesh.position.set(centroid.x, centroid.y, 0);
            fillMesh.rotation.z = angle;
            fillMesh.renderOrder = 0;
            ellipseGroup.add(fillMesh);

            // Create ellipse stroke using LineLoop
            const strokePositions = new Float32Array((segments + 1) * 3);
            for (let i = 0; i <= segments; i++) {
                const theta = (i / segments) * Math.PI * 2;
                strokePositions[i * 3] = radiusX * Math.cos(theta);
                strokePositions[i * 3 + 1] = radiusY * Math.sin(theta);
                strokePositions[i * 3 + 2] = 0;
            }
            const strokeGeo = new THREE.BufferGeometry();
            strokeGeo.setAttribute('position', new THREE.BufferAttribute(strokePositions, 3));

            const strokeMat = new THREE.LineBasicMaterial({
                color: threeColor,
                linewidth: config.groups.strokeWidth,
                depthTest: false,
                depthWrite: false,
            });
            const strokeMesh = new THREE.LineLoop(strokeGeo, strokeMat);
            strokeMesh.position.set(centroid.x, centroid.y, 0);
            strokeMesh.rotation.z = angle;
            strokeMesh.renderOrder = 1;
            ellipseGroup.add(strokeMesh);
        }
    });
}
