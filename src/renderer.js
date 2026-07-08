import * as THREE from './three.js';
import { state } from './state.js';

// =========================================================================
// Three.js Scene, Camera, Renderer setup
// =========================================================================

export function initRenderer() {
    const container = state.container;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Check WebGL availability
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
    if (!gl) {
        container.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;height:100%;
                        font-family:sans-serif;color:#666;text-align:center;padding:40px;">
                <div>
                    <h3>WebGL Not Available</h3>
                    <p>This visualization requires WebGL support. Please use a modern browser with WebGL enabled.</p>
                </div>
            </div>`;
        return false;
    }

    // Scene
    const scene = new THREE.Scene();
    const bgColor = state.config.canvas.backgroundColor;
    scene.background = new THREE.Color(bgColor);

    // OrthographicCamera matching pixel coordinates
    // top=0, bottom=height flips Y to match screen coords
    const camera = new THREE.OrthographicCamera(
        0, width,     // left, right
        0, height,    // top, bottom (Y-flipped)
        0.1, 100
    );
    camera.position.set(0, 0, 50);
    camera.lookAt(0, 0, 0);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        preserveDrawingBuffer: true // needed for PNG export
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    // Ensure sorted rendering for correct layering
    renderer.sortObjects = true;
    container.appendChild(renderer.domElement);

    // Style the canvas
    renderer.domElement.style.display = 'block';

    // Ellipse group (container for all ellipse objects)
    const ellipseGroup = new THREE.Group();
    ellipseGroup.renderOrder = 0;
    scene.add(ellipseGroup);

    // Store references
    state.scene = scene;
    state.camera = camera;
    state.renderer = renderer;
    state.ellipseGroup = ellipseGroup;

    return true;
}

export function updateCameraFromTransform() {
    const t = state.transform;
    const container = state.container;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = state.camera;

    // Map D3 zoom transform to orthographic camera frustum
    camera.left = -t.x / t.k;
    camera.right = (width - t.x) / t.k;
    camera.top = -t.y / t.k;
    camera.bottom = (height - t.y) / t.k;
    camera.updateProjectionMatrix();
}

export function render() {
    if (!state.renderer) return;
    state.renderer.render(state.scene, state.camera);
}

export function resizeRenderer() {
    const container = state.container;
    const width = container.clientWidth;
    const height = container.clientHeight;

    state.renderer.setSize(width, height);
    updateCameraFromTransform();
}
