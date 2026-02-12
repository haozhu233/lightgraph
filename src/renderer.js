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

    // 2D OrthographicCamera matching pixel coordinates
    // top=0, bottom=height flips Y to match screen coords
    const camera2D = new THREE.OrthographicCamera(
        0, width,     // left, right
        0, height,    // top, bottom (Y-flipped)
        0.1, 100
    );
    camera2D.position.set(0, 0, 50);
    camera2D.lookAt(0, 0, 0);

    // 3D PerspectiveCamera (held in reserve until 3D mode)
    const camera3D = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera3D.position.set(width / 2, height / 2, 800);
    camera3D.lookAt(width / 2, height / 2, 0);

    // Lighting for 3D mode (hidden by default)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    ambientLight.visible = false;
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, -1, 1).normalize();
    directionalLight.visible = false;
    scene.add(directionalLight);

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
    state.camera = camera2D;
    state.camera2D = camera2D;
    state.camera3D = camera3D;
    state.renderer = renderer;
    state.ellipseGroup = ellipseGroup;
    state.ambientLight = ambientLight;
    state.directionalLight = directionalLight;

    return true;
}

export function switchTo3D() {
    const width = state.container.clientWidth;
    const height = state.container.clientHeight;

    // Position 3D camera looking at graph center
    const cx = width / 2;
    const cy = height / 2;
    state.camera3D.position.set(cx, cy, 800);
    state.camera3D.lookAt(cx, cy, 0);
    state.camera3D.aspect = width / height;
    state.camera3D.updateProjectionMatrix();

    state.camera = state.camera3D;

    // Enable lighting
    state.ambientLight.visible = true;
    state.directionalLight.visible = true;
}

export function switchTo2D() {
    state.camera = state.camera2D;

    // Disable lighting
    state.ambientLight.visible = false;
    state.directionalLight.visible = false;

    updateCameraFromTransform();
}

export function updateCameraFromTransform() {
    if (state.is3D) return; // OrbitControls manages 3D camera

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

    if (state.is3D) {
        state.camera3D.aspect = width / height;
        state.camera3D.updateProjectionMatrix();
    } else {
        updateCameraFromTransform();
    }
}

// =========================================================================
// Animation loop for 3D mode (OrbitControls damping needs continuous updates)
// =========================================================================

export function startAnimationLoop(tickFn) {
    function animate() {
        if (!state.is3D) {
            state._animationFrameId = null;
            return;
        }
        if (state.orbitControls) state.orbitControls.update();
        tickFn();
        state._animationFrameId = requestAnimationFrame(animate);
    }
    if (!state._animationFrameId) animate();
}

export function stopAnimationLoop() {
    if (state._animationFrameId) {
        cancelAnimationFrame(state._animationFrameId);
        state._animationFrameId = null;
    }
}
