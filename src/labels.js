import { state } from './state.js';
import { worldToScreen } from './utils.js';
import { THEMES } from './config.js';

// =========================================================================
// Label rendering using DOM overlay
// =========================================================================

export function createLabelContainer() {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.overflow = 'hidden';
    container.style.zIndex = '1';
    state.container.appendChild(container);
    state.labelContainer = container;
}

export function createLabels() {
    if (!state.labelContainer) return;

    // Clear existing labels
    state.labelContainer.innerHTML = '';
    state.labelDivs = [];

    const { nodes, config } = state;
    const theme = THEMES[state.currentTheme] || THEMES.dark;

    nodes.forEach((node) => {
        const div = document.createElement('div');
        div.textContent = node.id;
        div.style.position = 'absolute';
        div.style.top = '0';
        div.style.left = '0';
        div.style.fontSize = (node.labelFontSize || config.labels.fontSize) + 'px';
        div.style.fontFamily = config.labels.fontFamily;
        div.style.color = config.labels.color;
        div.style.whiteSpace = 'nowrap';
        div.style.pointerEvents = 'none';
        div.style.userSelect = 'none';
        div.style.willChange = 'transform';
        div.style.textShadow = state.currentTheme === 'dark'
            ? '0 1px 3px rgba(0,0,0,0.8)'
            : '0 1px 2px rgba(255,255,255,0.8)';
        state.labelContainer.appendChild(div);
        state.labelDivs.push(div);
    });
}

export function updateLabels() {
    const { nodes, selectedNodes, config, labelDivs, labelContainer } = state;
    if (!labelContainer) return;

    // Toggle visibility
    if (!config.labels.visible) {
        labelContainer.style.display = 'none';
        return;
    }
    labelContainer.style.display = '';

    const theme = THEMES[state.currentTheme] || THEMES.dark;

    labelDivs.forEach((div, i) => {
        if (i >= nodes.length) {
            div.style.display = 'none';
            return;
        }

        const node = nodes[i];
        const screen = worldToScreen(node.x || 0, node.y || 0);
        const size = node.size || config.nodes.defaultSize;
        const isSelected = selectedNodes.has(node);

        // Position label to the left of the node, vertically centered
        // translate(-100%, -50%) uses the label's own dimensions (no layout reflow needed)
        const gap = (size / 2 + 4) * state.transform.k;
        div.style.transform = `translate(${screen.x - gap}px, ${screen.y}px) translate(-100%, -50%)`;
        div.style.color = isSelected ? config.labels.selectedColor : config.labels.color;
        div.style.fontWeight = isSelected ? '600' : 'normal';
        div.style.display = '';
    });
}
