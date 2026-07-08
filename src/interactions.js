import * as d3 from './d3.js';
import * as THREE from './three.js';
import { state } from './state.js';
import { THEMES } from './config.js';
import { screenToWorld, getNodeAtCoordinates, isNodeInSelection, clearSelection, addToSelection, newSelection, getGroupColor } from './utils.js';
import { updateCameraFromTransform, render } from './renderer.js';
import { showFloatingInput, hideFloatingInput, updateSelectionBoxOverlay, setButtonActive } from './ui.js';
// =========================================================================
// Interaction setup
// =========================================================================

export function setupInteractions(tickFn) {
    const config = state.config;
    const canvas = state.renderer.domElement;

    // Store tickFn on state so UI can call it (legend click, etc.)
    state._tickFn = tickFn;

    // ---- D3 Zoom setup ----
    state.zoom = d3.zoom()
        .scaleExtent([config.canvas.zoomMin, config.canvas.zoomMax])
        .on('zoom', (event) => {
            if (!state.selectionMode) {
                state.transform = event.transform;
                updateCameraFromTransform();
                tickFn();
            }
        });

    d3.select(canvas).call(state.zoom);

    // ---- Mouse events on canvas ----
    canvas.addEventListener('mousedown', (event) => {
        hideFloatingInput();
        if (!state.selectionMode) return;

        const shiftKey = event.shiftKey;
        const [mouseX, mouseY] = d3.pointer(event);
        const world = screenToWorld(mouseX, mouseY);
        const onNode = getNodeAtCoordinates(world.x, world.y);

        if (onNode) {
            if (shiftKey) {
                state.selectedNodes.has(onNode)
                    ? state.selectedNodes.delete(onNode)
                    : state.selectedNodes.add(onNode);
            } else {
                state.draggingNode = onNode;
                state.dragOffsetX = onNode.x - world.x;
                state.dragOffsetY = onNode.y - world.y;
                if (!state.selectedNodes.has(onNode)) {
                    newSelection([onNode]);
                }
            }
        } else {
            if (!shiftKey) {
                clearSelection();
            }
            state.selectionBox = { x: world.x, y: world.y, width: 0, height: 0 };
        }
        tickFn();
    });

    canvas.addEventListener('mousemove', (event) => {
        const [mouseX, mouseY] = d3.pointer(event);
        const world = screenToWorld(mouseX, mouseY);

        // Tooltip (zoom mode only)
        if (config.ui.showTooltips && !state.selectionMode) {
            const hoveredNode = getNodeAtCoordinates(world.x, world.y);
            const tooltip = state.ui.tooltip;
            if (hoveredNode) {
                let content = `<strong>${hoveredNode.id}</strong>`;
                if (hoveredNode.group) {
                    content += `<br><span style="color:${getGroupColor(hoveredNode.group)}">&#9679; ${hoveredNode.group}</span>`;
                }
                if (hoveredNode.metadata) {
                    for (const [key, value] of Object.entries(hoveredNode.metadata)) {
                        content += `<br><span style="opacity:0.7">${key}:</span> ${value}`;
                    }
                }
                tooltip.innerHTML = content;
                tooltip.style.display = 'block';
                tooltip.style.left = `${mouseX + 15}px`;
                tooltip.style.top = `${mouseY + 15}px`;
            } else {
                tooltip.style.display = 'none';
            }
        }

        // Selection mode interactions
        if (state.selectionMode) {
            state.ui.tooltip.style.display = 'none';

            if (state.draggingNode) {
                const dx = world.x + state.dragOffsetX - state.draggingNode.x;
                const dy = world.y + state.dragOffsetY - state.draggingNode.y;

                if (state.selectedNodes.size > 0 && state.selectedNodes.has(state.draggingNode)) {
                    state.selectedNodes.forEach(node => {
                        node.x += dx;
                        node.y += dy;
                    });
                } else {
                    state.draggingNode.x = world.x + state.dragOffsetX;
                    state.draggingNode.y = world.y + state.dragOffsetY;
                }
                state.simulation.alpha(0.1).restart();
                tickFn();
            } else if (state.selectionBox) {
                state.selectionBox.width = world.x - state.selectionBox.x;
                state.selectionBox.height = world.y - state.selectionBox.y;
                tickFn();
            }
        }
    });

    canvas.addEventListener('mouseleave', () => {
        state.ui.tooltip.style.display = 'none';
    });

    canvas.addEventListener('mouseup', (event) => {
        if (!state.selectionMode) return;

        if (state.draggingNode) {
            state.draggingNode = null;
        } else if (state.selectionBox) {
            addToSelection(state.nodes.filter(node => isNodeInSelection(node, state.selectionBox)));
            if (state.selectedNodes.size > 0) {
                const [mouseX, mouseY] = d3.pointer(event);
                showFloatingInput(mouseX, mouseY);
            }
            state.selectionBox = null;
        }
        tickFn();
    });

    // ---- Zoom button ----
    state.ui.zoomButton.addEventListener('click', () => {
        if (!state.selectionMode) return;
        state.selectionMode = false;
        setButtonActive(state.ui.zoomButton, true);
        setButtonActive(state.ui.selectButton, false);
        d3.select(canvas).call(state.zoom);
        state.ui.helperText.textContent = 'Scroll to zoom \u00b7 Drag to pan';
    });

    // ---- Select button ----
    state.ui.selectButton.addEventListener('click', () => {
        if (state.selectionMode) return;
        state.selectionMode = true;
        setButtonActive(state.ui.selectButton, true);
        setButtonActive(state.ui.zoomButton, false);
        d3.select(canvas)
            .on('mousedown.zoom', null)
            .on('mousemove.zoom', null)
            .on('mouseup.zoom', null)
            .on('wheel.zoom', null)
            .on('dblclick.zoom', null);
        state.ui.helperText.textContent = 'Drag to select \u00b7 Shift+click to add \u00b7 Drag nodes to move';
    });

    // ---- Sidebar toggle ----
    state.ui.sidebarToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const sidebar = state.ui.sceneSidebar;
        const currentRight = parseFloat(sidebar.style.right);
        const isOpening = currentRight < 0;
        sidebar.style.right = isOpening ? '12px' : '-350px';
        setButtonActive(state.ui.sidebarToggle, isOpening);
    });

    // ---- Close sidebar on outside click ----
    document.addEventListener('click', (e) => {
        const sidebar = state.ui.sceneSidebar;
        if (parseFloat(sidebar.style.right) >= 0
            && !sidebar.contains(e.target)
            && !state.ui.sidebarToggle.contains(e.target)) {
            sidebar.style.right = '-350px';
            setButtonActive(state.ui.sidebarToggle, false);
        }
    });

    // ---- Search ----
    state.ui.searchBox.addEventListener('input', () => {
        const searchTerm = state.ui.searchBox.value.toLowerCase();
        newSelection(state.nodes.filter(node => node.id.toLowerCase().includes(searchTerm)));
        tickFn();
    });

    // ---- Arrow toggle ----
    state.ui.arrowToggleButton.addEventListener('click', () => {
        state.showArrows = !state.showArrows;
        setButtonActive(state.ui.arrowToggleButton, state.showArrows);
        tickFn();
    });

    // ---- Labels toggle ----
    state.ui.labelsToggleButton.addEventListener('click', () => {
        config.labels.visible = !config.labels.visible;
        setButtonActive(state.ui.labelsToggleButton, config.labels.visible);
        tickFn();
    });

    // ---- Label position toggle ----
    state.ui.labelPositionButton.addEventListener('click', () => {
        state.labelPosition = state.labelPosition === 'side' ? 'center' : 'side';
        const isCenter = state.labelPosition === 'center';
        setButtonActive(state.ui.labelPositionButton, isCenter);
        tickFn();
    });

    // ---- Ellipses toggle ----
    state.ui.ellipsesToggleButton.addEventListener('click', () => {
        config.groups.showEllipses = !config.groups.showEllipses;
        setButtonActive(state.ui.ellipsesToggleButton, config.groups.showEllipses);
        tickFn();
    });

    // ---- Legend toggle ----
    state.ui.legendToggleButton.addEventListener('click', () => {
        config.ui.showLegend = !config.ui.showLegend;
        setButtonActive(state.ui.legendToggleButton, config.ui.showLegend);
        tickFn();
    });

    // ---- Stats toggle ----
    state.ui.statsToggleButton.addEventListener('click', () => {
        config.ui.showStatistics = !config.ui.showStatistics;
        setButtonActive(state.ui.statsToggleButton, config.ui.showStatistics);
        tickFn();
    });

    // ---- Edge color toggle ----
    state.ui.edgeColorToggleButton.addEventListener('click', () => {
        state.colorEdgesByGroup = !state.colorEdgesByGroup;
        setButtonActive(state.ui.edgeColorToggleButton, state.colorEdgesByGroup);
        tickFn();
    });

    // ---- Group assignment ----
    state.ui.groupButton.addEventListener('click', () => {
        const groups = [...new Set(state.nodes.map(n => n.group).filter(Boolean))];
        const groupLabel = state.ui.groupInputBox.value || `Group ${groups.length + 1}`;
        if (groupLabel && state.selectedNodes.size > 0) {
            state.selectedNodes.forEach(node => node.group = groupLabel);
            tickFn();
        }
        state.ui.groupInputBox.value = '';
        hideFloatingInput();
        clearSelection();
    });

    state.ui.clearGroupButton.addEventListener('click', () => {
        if (state.selectedNodes.size > 0) {
            state.selectedNodes.forEach(node => delete node.group);
            tickFn();
        }
        state.ui.groupInputBox.value = '';
        hideFloatingInput();
        clearSelection();
    });

    // ---- Node size slider ----
    state.ui.nodeSizeSlider.addEventListener('input', () => {
        const val = parseFloat(state.ui.nodeSizeSlider.value);
        config.nodes.defaultSize = val;
        state.ui.nodeSizeValue.textContent = String(Math.round(val));
        state.userAdjusted.nodeSize = true;
        tickFn();
    });

    // ---- Edge opacity slider ----
    state.ui.edgeOpacitySlider.addEventListener('input', () => {
        const val = parseFloat(state.ui.edgeOpacitySlider.value);
        config.edges.defaultOpacity = val;
        state.ui.edgeOpacityValue.textContent = val.toFixed(2);
        state.userAdjusted.edgeOpacity = true;
        if (state.normalEdgesMesh) {
            state.normalEdgesMesh.material.opacity = val;
        }
        tickFn();
    });

    // ---- Label size slider ----
    state.ui.labelSizeSlider.addEventListener('input', () => {
        const val = parseFloat(state.ui.labelSizeSlider.value);
        config.labels.fontSize = val;
        state.ui.labelSizeValue.textContent = String(Math.round(val));
        // Update all existing label divs
        state.labelDivs.forEach(div => {
            div.style.fontSize = val + 'px';
        });
        tickFn();
    });

    // ---- Edge color picker ----
    state.ui.edgeColorPicker.addEventListener('input', () => {
        config.edges.defaultColor = state.ui.edgeColorPicker.value;
        tickFn();
    });

    // ---- Ungrouped node color picker ----
    state.ui.ungroupedColorPicker.addEventListener('input', () => {
        config.nodes.defaultColor = state.ui.ungroupedColorPicker.value;
        tickFn();
    });

    // ---- Data edit ----
    state.ui.dataEditButton.addEventListener('click', () => {
        const data = {
            nodes: state.nodes.map(n => {
                const obj = { id: n.id };
                if (n.group) obj.group = n.group;
                if (n.size) obj.size = n.size;
                if (n.color) obj.color = n.color;
                if (n.metadata) obj.metadata = n.metadata;
                return obj;
            }),
            edges: state.edges.map(e => {
                const obj = {
                    source: e.source.id || e.source,
                    target: e.target.id || e.target,
                };
                if (e.weight) obj.weight = e.weight;
                if (e.color) obj.color = e.color;
                return obj;
            }),
        };
        state.ui.dataTextarea.value = JSON.stringify(data, null, 2);
        state.ui.dataModal.style.display = 'flex';
    });

    state.ui.dataApplyButton.addEventListener('click', () => {
        try {
            const data = JSON.parse(state.ui.dataTextarea.value);
            if (!data.nodes || !data.edges) {
                alert('JSON must contain "nodes" and "edges" arrays.');
                return;
            }
            state.ui.dataModal.style.display = 'none';
            if (state.applyNewData) state.applyNewData(data);
        } catch (e) {
            alert('Invalid JSON: ' + e.message);
        }
    });

    state.ui.dataCancelButton.addEventListener('click', () => {
        state.ui.dataModal.style.display = 'none';
    });

    // ---- Data load ----
    state.ui.dataLoadButton.addEventListener('click', () => {
        state.ui.dataFileInput.click();
    });

    state.ui.dataFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                const data = JSON.parse(evt.target.result);
                if (!data.nodes || !data.edges) {
                    alert('JSON must contain "nodes" and "edges" arrays.');
                    return;
                }
                if (state.applyNewData) state.applyNewData(data);
            } catch (err) {
                alert('Invalid JSON file: ' + err.message);
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    });

    // ---- Data download ----
    state.ui.dataDownloadButton.addEventListener('click', () => {
        const data = {
            nodes: state.nodes.map(n => {
                const obj = { id: n.id, x: n.x, y: n.y };
                if (n.group) obj.group = n.group;
                if (n.size) obj.size = n.size;
                if (n.color) obj.color = n.color;
                if (n.metadata) obj.metadata = n.metadata;
                return obj;
            }),
            edges: state.edges.map(e => ({
                source: e.source.id || e.source,
                target: e.target.id || e.target,
                ...(e.weight && { weight: e.weight }),
                ...(e.color && { color: e.color }),
            })),
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.download = 'lightgraph_data.json';
        link.href = URL.createObjectURL(blob);
        link.click();
    });

    // ---- Theme toggle ----
    state.ui.themeToggle.addEventListener('click', () => {
        state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
        applyThemeSwitch();
        tickFn();
    });

    // ---- Resize ----
    window.addEventListener('resize', () => {
        const width = state.container.clientWidth;
        const height = state.container.clientHeight;
        state.renderer.setSize(width, height);
        updateCameraFromTransform();
        tickFn();
    });
}

// =========================================================================
// Theme switching
// =========================================================================

function applyThemeSwitch() {
    // This is a simplified theme switch that rebuilds the UI
    // For efficiency, we just update the background and key elements
    const theme = THEMES[state.currentTheme] || THEMES.dark;

    // Update scene background
    state.scene.background = new THREE.Color(theme.background);

    // Update config colors from theme
    state.config.nodes.defaultColor = theme.nodeDefault;
    state.config.nodes.borderColor = theme.nodeBorder;
    state.config.nodes.selectedBorderColor = theme.selectedBorder;
    state.config.edges.defaultColor = theme.edgeDefault;
    state.config.edges.selectedColor = theme.edgeSelected;
    // Preserve user-adjusted edge opacity across theme switches
    if (!state.userAdjusted.edgeOpacity) {
        state.config.edges.defaultOpacity = theme.edgeOpacity;
    }
    state.config.edges.selectedOpacity = theme.edgeSelectedOpacity;
    state.config.labels.color = theme.labelColor;
    state.config.labels.selectedColor = theme.selectedLabelColor;
    state.config.canvas.backgroundColor = theme.background;
    state.config.groups.fillOpacity = theme.groupFillOpacity;

    // Sync color pickers
    if (state.ui.edgeColorPicker) {
        state.ui.edgeColorPicker.value = theme.edgeDefault;
    }
    if (state.ui.ungroupedColorPicker) {
        state.ui.ungroupedColorPicker.value = theme.nodeDefault;
    }

    // Update edge materials
    if (state.normalEdgesMesh) {
        state.normalEdgesMesh.material.opacity = state.config.edges.defaultOpacity;
    }
    if (state.highlightedEdgesMesh) {
        state.highlightedEdgesMesh.material.opacity = state.config.edges.selectedOpacity;
    }

    // Update slider values to reflect current config
    if (state.ui.edgeOpacitySlider) {
        state.ui.edgeOpacitySlider.value = String(state.config.edges.defaultOpacity);
        state.ui.edgeOpacityValue.textContent = state.config.edges.defaultOpacity.toFixed(2);
        state.ui.edgeOpacitySlider.style.accentColor = theme.activeButtonText;
    }
    if (state.ui.nodeSizeSlider) {
        state.ui.nodeSizeSlider.style.accentColor = theme.activeButtonText;
    }

    // Update panel styles
    const panels = [
        state.ui.mainControlBar,
        state.ui.sceneSidebar,
        state.ui.legendPanel,
        state.ui.statsPanel,
        state.ui.floatingInput,
    ];
    panels.forEach(panel => {
        if (panel) {
            panel.style.backgroundColor = theme.panelBg;
            panel.style.boxShadow = theme.panelShadow;
            panel.style.border = theme.panelBorder;
            panel.style.color = theme.panelText;
        }
    });

    // Update tooltip
    state.ui.tooltip.style.backgroundColor = theme.tooltipBg;
    state.ui.tooltip.style.color = theme.tooltipText;
    state.ui.tooltip.style.boxShadow = theme.tooltipShadow;

    // Update selection box
    if (state.selectionBoxDiv) {
        state.selectionBoxDiv.style.borderColor = theme.selectionBoxStroke;
        state.selectionBoxDiv.style.backgroundColor = theme.selectionBoxFill;
    }

    // Update theme toggle icon
    state.ui.themeToggle.innerHTML = state.currentTheme === 'dark'
        ? '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>'
        : '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>';

    // Update buttons
    const allButtons = state.ui.mainControlBar.querySelectorAll('button');
    allButtons.forEach(btn => {
        btn.style.color = theme.iconColor;
        if (btn.dataset.active !== 'true') {
            btn.style.border = theme.buttonBorder;
            btn.style.background = theme.buttonBg;
        }
    });

    // Update search box
    state.ui.searchBox.style.background = theme.inputBg;
    state.ui.searchBox.style.border = theme.inputBorder;
    state.ui.searchBox.style.color = theme.inputText;

    // Update helper text
    if (state.ui.helperText) {
        state.ui.helperText.style.color = theme.panelText;
    }

    // Update sidebar buttons
    const sidebar = state.ui.sceneSidebar;
    if (sidebar) {
        sidebar.querySelectorAll('button').forEach(btn => {
            const isActive = btn.dataset.active === 'true';
            btn.style.color = isActive ? theme.activeButtonText : theme.buttonText;
            btn.style.border = isActive ? theme.activeButtonBorder : theme.buttonBorder;
            btn.style.background = isActive ? theme.activeButtonBg : theme.buttonBg;
        });

        // Update section headers (cursor:pointer divs with borderBottom)
        sidebar.querySelectorAll('div').forEach(div => {
            if (div.style.cursor === 'pointer' && div.style.borderBottom) {
                div.style.color = theme.panelText;
                div.style.borderBottom = `1px solid ${theme.panelHeaderBorder}`;
            }
        });

        // Update select elements
        sidebar.querySelectorAll('select').forEach(sel => {
            sel.style.background = theme.inputBg;
            sel.style.border = theme.inputBorder;
            sel.style.color = theme.inputText;
        });

        // Update slider accent colors
        sidebar.querySelectorAll('input[type="range"]').forEach(slider => {
            slider.style.accentColor = theme.activeButtonText;
        });
    }
}

