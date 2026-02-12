import { state } from './state.js';
import { THEMES } from './config.js';
import { newSelection, clearSelection, worldToScreen, getGroupColor } from './utils.js';

// =========================================================================
// SVG Icons
// =========================================================================

const ICONS = {
    zoom: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>',
    pan: '<svg width="16" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>',
    select: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>',
    settings: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>',
    chevronDown: '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>',
    chevronRight: '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>',
    sun: '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>',
    moon: '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>',
};

// =========================================================================
// Element constructors (theme-aware)
// =========================================================================

function getTheme() {
    return THEMES[state.currentTheme] || THEMES.light;
}

function createElement(tag, options = {}, styles = {}) {
    const element = document.createElement(tag);
    Object.assign(element, options);
    Object.assign(element.style, styles);
    return element;
}

function createButton({ id, title, htmlContent, active = false }) {
    const theme = getTheme();
    const button = createElement('button', { id, title, innerHTML: htmlContent }, {
        padding: '6px 14px',
        fontSize: '13px',
        fontWeight: '500',
        cursor: 'pointer',
        border: active ? theme.activeButtonBorder : theme.buttonBorder,
        borderRadius: '6px',
        background: active ? theme.activeButtonBg : theme.buttonBg,
        color: active ? theme.activeButtonText : theme.buttonText,
        transition: 'all 0.15s ease',
        outline: 'none',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    });
    button.addEventListener('mouseenter', () => {
        if (!button.dataset.active) {
            button.style.background = theme.buttonHoverBg;
        }
        button.style.transform = 'translateY(-1px)';
    });
    button.addEventListener('mouseleave', () => {
        const isActive = button.dataset.active === 'true';
        button.style.background = isActive ? theme.activeButtonBg : theme.buttonBg;
        button.style.transform = '';
    });
    return button;
}

export function setButtonActive(button, active) {
    const theme = getTheme();
    button.dataset.active = active;
    button.style.background = active ? theme.activeButtonBg : theme.buttonBg;
    button.style.border = active ? theme.activeButtonBorder : theme.buttonBorder;
    button.style.color = active ? theme.activeButtonText : theme.buttonText;
}

function createInput({ id, placeholder }) {
    const theme = getTheme();
    return createElement('input', { id, type: 'text', placeholder }, {
        padding: '6px 10px',
        fontSize: '13px',
        borderRadius: '6px',
        border: theme.inputBorder,
        background: theme.inputBg,
        color: theme.inputText,
        outline: 'none',
        width: '140px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    });
}

function createCollapsibleSection(title, defaultOpen = true) {
    const theme = getTheme();
    const header = createElement('div', {
        innerHTML: `<span style="font-size:12px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">${title}</span><span class="toggle-icon">${defaultOpen ? ICONS.chevronDown : ICONS.chevronRight}</span>`
    }, {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '10px 0',
        borderBottom: `1px solid ${theme.panelHeaderBorder}`,
        color: theme.panelText,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    });

    const content = createElement('div', {}, {
        padding: '10px 0',
        display: defaultOpen ? 'flex' : 'none',
        flexWrap: 'wrap',
        gap: '6px',
    });

    header.addEventListener('click', () => {
        const isHidden = content.style.display === 'none';
        content.style.display = isHidden ? 'flex' : 'none';
        header.querySelector('.toggle-icon').innerHTML = isHidden ? ICONS.chevronDown : ICONS.chevronRight;
    });

    return [header, content];
}

// =========================================================================
// Build all UI elements
// =========================================================================

export function buildUI(tickFn) {
    const container = state.container;
    const config = state.config;
    const theme = getTheme();

    // ---- Main control bar ----
    const mainControlBar = createElement('div', { id: 'mainBar' }, {
        position: 'absolute',
        top: '12px',
        right: '12px',
        display: 'flex',
        gap: '6px',
        zIndex: '1000',
        backgroundColor: theme.panelBg,
        borderRadius: '10px',
        padding: '8px',
        boxShadow: theme.panelShadow,
        border: theme.panelBorder,
        backdropFilter: 'blur(12px)',
        alignItems: 'center',
    });

    // Zoom / Select mode buttons
    const zoomButton = createButton({ id: 'zoomButton', title: 'Zoom & pan mode', htmlContent: `${ICONS.zoom} Zoom`, active: true });
    const selectButton = createButton({ id: 'selectButton', title: 'Selection mode', htmlContent: `${ICONS.select} Select`, active: false });
    setButtonActive(zoomButton, true);
    setButtonActive(selectButton, false);

    // 2D/3D toggle
    const dimensionToggle = createButton({ id: 'dimensionToggle', title: 'Toggle 2D/3D view', htmlContent: '3D', active: false });

    // Search box
    const searchBox = createInput({ id: 'searchBox', placeholder: 'Search Node...' });
    searchBox.style.width = '160px';

    // Theme toggle
    const themeToggle = createElement('button', {
        id: 'themeToggle',
        title: 'Toggle dark/light theme',
        innerHTML: state.currentTheme === 'dark' ? ICONS.sun : ICONS.moon,
    }, {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px',
        border: theme.buttonBorder,
        borderRadius: '6px',
        background: theme.buttonBg,
        color: theme.iconColor,
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        outline: 'none',
    });

    // Sidebar toggle
    const sidebarToggle = createButton({
        id: 'sidebarToggle',
        title: 'Display More Tools',
        htmlContent: ICONS.settings
    });

    mainControlBar.append(zoomButton, selectButton, dimensionToggle, searchBox, themeToggle, sidebarToggle);

    // ---- Sidebar ----
    const sceneSidebar = createElement('div', { id: 'sceneSidebar' }, {
        position: 'absolute',
        top: '60px',
        right: '-350px',
        width: '300px',
        transition: 'right 0.3s ease',
        backgroundColor: theme.panelBg,
        borderRadius: '10px',
        padding: '16px',
        boxShadow: theme.panelShadow,
        border: theme.panelBorder,
        backdropFilter: 'blur(12px)',
        color: theme.panelText,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        zIndex: '999',
    });

    // Display Settings section
    const [viewHeader, viewContent] = createCollapsibleSection('Display', true);
    const arrowToggleButton = createButton({ id: 'arrowToggle', title: 'Toggle arrows', htmlContent: 'Arrows', active: config.edges.showArrows });
    const labelsToggleButton = createButton({ id: 'labelsToggle', title: 'Toggle labels', htmlContent: 'Labels', active: config.labels.visible });
    const ellipsesToggleButton = createButton({ id: 'ellipsesToggle', title: 'Toggle ellipses', htmlContent: 'Ellipses', active: config.groups.showEllipses });
    const legendToggleButton = createButton({ id: 'legendToggle', title: 'Toggle legend', htmlContent: 'Legend', active: config.ui.showLegend });
    const statsToggleButton = createButton({ id: 'statsToggle', title: 'Toggle stats', htmlContent: 'Stats', active: config.ui.showStatistics });

    setButtonActive(arrowToggleButton, config.edges.showArrows);
    setButtonActive(labelsToggleButton, config.labels.visible);
    setButtonActive(ellipsesToggleButton, config.groups.showEllipses);
    setButtonActive(legendToggleButton, config.ui.showLegend);
    setButtonActive(statsToggleButton, config.ui.showStatistics);

    const edgeColorToggleButton = createButton({ id: 'edgeColorToggle', title: 'Color edges by group', htmlContent: 'Edge Colors', active: false });
    setButtonActive(edgeColorToggleButton, false);

    const labelPositionButton = createButton({ id: 'labelPositionToggle', title: 'Toggle label position (side / center)', htmlContent: 'Center Labels', active: false });
    setButtonActive(labelPositionButton, false);

    viewContent.append(arrowToggleButton, labelsToggleButton, labelPositionButton, ellipsesToggleButton, legendToggleButton, statsToggleButton, edgeColorToggleButton);

    // Appearance section (sliders for node size and edge opacity)
    const [appearanceHeader, appearanceContent] = createCollapsibleSection('Appearance', true);
    appearanceContent.style.flexDirection = 'column';
    appearanceContent.style.gap = '12px';

    // Node Size slider
    const nodeSizeRow = createElement('div', {}, {
        display: 'flex', alignItems: 'center', gap: '8px', width: '100%',
    });
    const nodeSizeLabel = createElement('span', { textContent: 'Node Size' }, {
        fontSize: '12px', whiteSpace: 'nowrap', minWidth: '78px',
    });
    const nodeSizeSlider = createElement('input', {
        id: 'nodeSizeSlider', type: 'range', min: '2', max: '40', step: '1',
        value: String(Math.round(config.nodes.defaultSize)),
    }, { flex: '1', cursor: 'pointer', accentColor: theme.activeButtonText });
    const nodeSizeValue = createElement('span', {
        id: 'nodeSizeValue', textContent: String(Math.round(config.nodes.defaultSize)),
    }, { fontSize: '12px', minWidth: '24px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' });
    nodeSizeRow.append(nodeSizeLabel, nodeSizeSlider, nodeSizeValue);

    // Edge Opacity slider
    const edgeOpacityRow = createElement('div', {}, {
        display: 'flex', alignItems: 'center', gap: '8px', width: '100%',
    });
    const edgeOpacityLabel = createElement('span', { textContent: 'Edge Opacity' }, {
        fontSize: '12px', whiteSpace: 'nowrap', minWidth: '78px',
    });
    const edgeOpacitySlider = createElement('input', {
        id: 'edgeOpacitySlider', type: 'range', min: '0.05', max: '1.0', step: '0.05',
        value: String(config.edges.defaultOpacity),
    }, { flex: '1', cursor: 'pointer', accentColor: theme.activeButtonText });
    const edgeOpacityValue = createElement('span', {
        id: 'edgeOpacityValue', textContent: String(config.edges.defaultOpacity),
    }, { fontSize: '12px', minWidth: '24px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' });
    edgeOpacityRow.append(edgeOpacityLabel, edgeOpacitySlider, edgeOpacityValue);

    // Label Size slider
    const labelSizeRow = createElement('div', {}, {
        display: 'flex', alignItems: 'center', gap: '8px', width: '100%',
    });
    const labelSizeLabel = createElement('span', { textContent: 'Label Size' }, {
        fontSize: '12px', whiteSpace: 'nowrap', minWidth: '78px',
    });
    const labelSizeSlider = createElement('input', {
        id: 'labelSizeSlider', type: 'range', min: '2', max: '20', step: '1',
        value: String(Math.round(config.labels.fontSize)),
    }, { flex: '1', cursor: 'pointer', accentColor: theme.activeButtonText });
    const labelSizeValue = createElement('span', {
        id: 'labelSizeValue', textContent: String(Math.round(config.labels.fontSize)),
    }, { fontSize: '12px', minWidth: '24px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' });
    labelSizeRow.append(labelSizeLabel, labelSizeSlider, labelSizeValue);

    // Edge Color picker
    const edgeColorRow = createElement('div', {}, {
        display: 'flex', alignItems: 'center', gap: '8px', width: '100%',
    });
    const edgeColorLabel = createElement('span', { textContent: 'Edge Color' }, {
        fontSize: '12px', whiteSpace: 'nowrap', minWidth: '78px',
    });
    const edgeColorPicker = createElement('input', {
        id: 'edgeColorPicker', type: 'color',
        value: config.edges.defaultColor,
    }, {
        width: '32px', height: '24px', border: 'none', padding: '0',
        cursor: 'pointer', borderRadius: '4px', background: 'none',
    });
    edgeColorRow.append(edgeColorLabel, edgeColorPicker);

    // Ungrouped Node Color picker
    const ungroupedColorRow = createElement('div', {}, {
        display: 'flex', alignItems: 'center', gap: '8px', width: '100%',
    });
    const ungroupedColorLabel = createElement('span', { textContent: 'Node Color' }, {
        fontSize: '12px', whiteSpace: 'nowrap', minWidth: '78px',
    });
    const ungroupedColorPicker = createElement('input', {
        id: 'ungroupedColorPicker', type: 'color',
        value: config.nodes.defaultColor,
    }, {
        width: '32px', height: '24px', border: 'none', padding: '0',
        cursor: 'pointer', borderRadius: '4px', background: 'none',
    });
    ungroupedColorRow.append(ungroupedColorLabel, ungroupedColorPicker);

    appearanceContent.append(nodeSizeRow, edgeOpacityRow, labelSizeRow, edgeColorRow, ungroupedColorRow);

    // Layout section
    const [layoutHeader, layoutContent] = createCollapsibleSection('Layout', false);
    const layoutSelect = createElement('select', { id: 'layoutSelect' }, {
        padding: '6px 10px',
        borderRadius: '6px',
        border: theme.inputBorder,
        background: theme.inputBg,
        color: theme.inputText,
        width: '100%',
        marginBottom: '6px',
        fontSize: '13px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        outline: 'none',
    });
    layoutSelect.innerHTML = `
        <option value="force" ${config.layout === 'force' ? 'selected' : ''}>Force-Directed</option>
        <option value="circular" ${config.layout === 'circular' ? 'selected' : ''}>Circular</option>
    `;
    const restartButton = createButton({ id: 'restartButton', title: 'Restart simulation', htmlContent: 'Restart Layout' });
    layoutContent.style.flexDirection = 'column';
    layoutContent.append(layoutSelect, restartButton);

    // Export section
    const [exportHeader, exportContent] = createCollapsibleSection('Export', false);
    const exportPNGButton = createButton({ id: 'exportPNG', title: 'Raster image of the current view', htmlContent: 'PNG' });
    const exportSVGButton = createButton({ id: 'exportSVG', title: 'Scalable vector graphic', htmlContent: 'SVG' });
    const exportJSONButton = createButton({ id: 'exportJSON', title: 'Node and edge data with positions', htmlContent: 'JSON' });
    exportContent.append(exportPNGButton, exportSVGButton, exportJSONButton);

    // Data section
    const [dataHeader, dataContent] = createCollapsibleSection('Data', false);
    const dataEditButton = createButton({ id: 'dataEdit', title: 'Edit current data in JSON editor', htmlContent: 'Edit' });
    const dataLoadButton = createButton({ id: 'dataLoad', title: 'Load data from a JSON file', htmlContent: 'Load' });
    const dataDownloadButton = createButton({ id: 'dataDownload', title: 'Download current data as JSON', htmlContent: 'Download' });
    const dataFileInput = createElement('input', { type: 'file', accept: '.json' }, { display: 'none' });
    dataContent.append(dataEditButton, dataLoadButton, dataDownloadButton, dataFileInput);

    sceneSidebar.append(viewHeader, viewContent, appearanceHeader, appearanceContent, layoutHeader, layoutContent, exportHeader, exportContent, dataHeader, dataContent);

    // ---- Floating group input ----
    const floatingInput = createElement('div', { id: 'floatingLabelInput' }, {
        position: 'absolute',
        display: 'none',
        background: theme.panelBg,
        padding: '8px',
        borderRadius: '8px',
        boxShadow: theme.panelShadow,
        border: theme.panelBorder,
        backdropFilter: 'blur(12px)',
        gap: '4px',
        zIndex: '1002',
    });
    const groupInputBox = createInput({ id: 'groupLabelInput', placeholder: 'Enter label' });
    groupInputBox.style.width = '130px';
    const groupButton = createButton({ id: 'groupLabelButton', title: 'Assign group', htmlContent: '&#10003;' });
    const clearGroupButton = createButton({ id: 'clearGroupButton', title: 'Clear group', htmlContent: 'Clear' });
    floatingInput.append(groupInputBox, groupButton, clearGroupButton);

    // ---- Legend panel ----
    const legendPanel = createElement('div', { id: 'legendPanel' }, {
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        backgroundColor: theme.panelBg,
        borderRadius: '10px',
        padding: '14px',
        boxShadow: theme.panelShadow,
        border: theme.panelBorder,
        backdropFilter: 'blur(12px)',
        maxHeight: '200px',
        overflowY: 'auto',
        fontSize: '12px',
        display: 'none',
        minWidth: '120px',
        color: theme.panelText,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        zIndex: '1000',
    });
    const legendTitle = createElement('div', { innerHTML: '<strong>Groups</strong>' }, {
        marginBottom: '8px',
        borderBottom: `1px solid ${theme.panelHeaderBorder}`,
        paddingBottom: '6px',
        fontSize: '12px',
        fontWeight: '600',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
    });
    const legendContent = createElement('div', { id: 'legendContent' });
    legendPanel.append(legendTitle, legendContent);

    // ---- Stats panel ----
    const statsPanel = createElement('div', { id: 'statsPanel' }, {
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        backgroundColor: theme.panelBg,
        borderRadius: '10px',
        padding: '14px',
        boxShadow: theme.panelShadow,
        border: theme.panelBorder,
        backdropFilter: 'blur(12px)',
        fontSize: '12px',
        display: 'none',
        color: theme.panelText,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        zIndex: '1000',
    });

    // ---- Tooltip ----
    const tooltip = createElement('div', { id: 'nodeTooltip' }, {
        position: 'absolute',
        display: 'none',
        backgroundColor: theme.tooltipBg,
        color: theme.tooltipText,
        padding: '8px 12px',
        borderRadius: '8px',
        fontSize: '12px',
        pointerEvents: 'none',
        zIndex: '1001',
        maxWidth: '220px',
        boxShadow: theme.tooltipShadow,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        lineHeight: '1.5',
    });

    // ---- Data edit modal ----
    const dataModal = createElement('div', { id: 'dataModal' }, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '2000',
    });
    const dataModalPanel = createElement('div', {}, {
        backgroundColor: theme.panelBg,
        borderRadius: '12px',
        padding: '20px',
        width: '600px',
        maxWidth: '90vw',
        maxHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        border: theme.panelBorder,
        boxShadow: theme.panelShadow,
        color: theme.panelText,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    });
    const dataModalTitle = createElement('div', { textContent: 'Edit Graph Data (JSON)' }, {
        fontSize: '14px',
        fontWeight: '600',
    });
    const dataTextarea = createElement('textarea', { id: 'dataTextarea' }, {
        width: '100%',
        height: '300px',
        fontFamily: "'Menlo', 'Monaco', 'Consolas', monospace",
        fontSize: '12px',
        borderRadius: '6px',
        border: theme.inputBorder,
        background: theme.inputBg,
        color: theme.inputText,
        padding: '10px',
        resize: 'vertical',
        outline: 'none',
        boxSizing: 'border-box',
    });
    const dataModalButtons = createElement('div', {}, {
        display: 'flex',
        gap: '8px',
        justifyContent: 'flex-end',
    });
    const dataApplyButton = createButton({ id: 'dataApply', title: 'Apply changes', htmlContent: 'Apply' });
    const dataCancelButton = createButton({ id: 'dataCancel', title: 'Cancel editing', htmlContent: 'Cancel' });
    dataModalButtons.append(dataApplyButton, dataCancelButton);
    dataModalPanel.append(dataModalTitle, dataTextarea, dataModalButtons);
    dataModal.appendChild(dataModalPanel);

    // ---- Helper text ----
    const helperText = createElement('div', { id: 'helperText', textContent: 'Scroll to zoom \u00b7 Drag to pan' }, {
        position: 'absolute',
        bottom: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: '0.4',
        pointerEvents: 'none',
        fontSize: '12px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        color: theme.panelText,
        whiteSpace: 'nowrap',
        zIndex: '1',
    });

    // ---- Selection box overlay ----
    const selectionBoxDiv = createElement('div', { id: 'selectionBox' }, {
        position: 'absolute',
        display: 'none',
        border: `2px dashed ${theme.selectionBoxStroke}`,
        backgroundColor: theme.selectionBoxFill,
        pointerEvents: 'none',
        zIndex: '2',
    });

    // ---- Append all to container ----
    container.append(mainControlBar, sceneSidebar, floatingInput, legendPanel, statsPanel, tooltip, selectionBoxDiv, helperText, dataModal);

    // Store UI references
    state.ui = {
        mainControlBar,
        zoomButton,
        selectButton,
        dimensionToggle,
        searchBox,
        themeToggle,
        sidebarToggle,
        sceneSidebar,
        arrowToggleButton,
        labelsToggleButton,
        ellipsesToggleButton,
        legendToggleButton,
        statsToggleButton,
        edgeColorToggleButton,
        labelPositionButton,
        nodeSizeSlider,
        nodeSizeValue,
        edgeOpacitySlider,
        edgeOpacityValue,
        labelSizeSlider,
        labelSizeValue,
        layoutSelect,
        restartButton,
        exportPNGButton,
        exportSVGButton,
        exportJSONButton,
        floatingInput,
        groupInputBox,
        groupButton,
        clearGroupButton,
        legendPanel,
        legendContent,
        statsPanel,
        tooltip,
        helperText,
        dataEditButton,
        dataLoadButton,
        dataDownloadButton,
        dataFileInput,
        dataModal,
        dataTextarea,
        edgeColorPicker,
        ungroupedColorPicker,
        dataApplyButton,
        dataCancelButton,
    };
    state.selectionBoxDiv = selectionBoxDiv;
}

// =========================================================================
// Legend update
// =========================================================================

export function updateLegend() {
    const { config, nodes } = state;
    const { legendPanel, legendContent } = state.ui;
    if (!legendPanel) return;

    if (!config.ui.showLegend) {
        legendPanel.style.display = 'none';
        return;
    }

    const groups = [...new Set(nodes.map(node => node.group).filter(Boolean))].sort();
    if (groups.length === 0) {
        legendPanel.style.display = 'none';
        return;
    }

    legendPanel.style.display = 'block';
    legendContent.innerHTML = '';
    const theme = getTheme();

    groups.forEach(group => {
        const count = nodes.filter(n => n.group === group).length;
        const item = createElement('div', {}, {
            display: 'flex',
            alignItems: 'center',
            marginTop: '4px',
            cursor: 'pointer',
            padding: '3px 6px',
            borderRadius: '4px',
            transition: 'background 0.1s',
        });

        const colorBox = createElement('div', {
            title: 'Click to change color',
        }, {
            width: '12px',
            height: '12px',
            borderRadius: '3px',
            backgroundColor: getGroupColor(group),
            marginRight: '8px',
            flexShrink: '0',
            cursor: 'pointer',
            border: '2px solid transparent',
            boxSizing: 'content-box',
            transition: 'border-color 0.15s ease, transform 0.15s ease',
        });

        colorBox.addEventListener('mouseenter', () => {
            colorBox.style.borderColor = getGroupColor(group);
            colorBox.style.transform = 'scale(1.2)';
        });
        colorBox.addEventListener('mouseleave', () => {
            colorBox.style.borderColor = 'transparent';
            colorBox.style.transform = '';
        });

        // Color picker on swatch click
        colorBox.addEventListener('click', (e) => {
            e.stopPropagation();
            const picker = document.createElement('input');
            picker.type = 'color';
            picker.value = getGroupColor(group);
            picker.style.position = 'absolute';
            picker.style.opacity = '0';
            picker.style.pointerEvents = 'none';
            document.body.appendChild(picker);
            picker.addEventListener('input', () => {
                state.groupColorOverrides[group] = picker.value;
                colorBox.style.backgroundColor = picker.value;
                if (state._tickFn) state._tickFn();
            });
            picker.addEventListener('change', () => {
                document.body.removeChild(picker);
            });
            picker.click();
        });

        const editHint = createElement('span', {
            textContent: '\u270E',
        }, {
            fontSize: '10px',
            opacity: '0',
            transition: 'opacity 0.15s ease',
            marginLeft: '-4px',
            marginRight: '4px',
            pointerEvents: 'none',
        });

        const label = createElement('span', {
            innerHTML: `${group} <span style="opacity:0.6">(${count})</span>`
        }, { fontSize: '12px' });

        item.append(colorBox, editHint, label);
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = theme.legendHoverBg;
            editHint.style.opacity = '0.5';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = '';
            editHint.style.opacity = '0';
        });
        item.addEventListener('click', () => {
            newSelection(nodes.filter(n => n.group === group));
            if (state._tickFn) state._tickFn();
        });

        legendContent.appendChild(item);
    });
}

// =========================================================================
// Statistics update
// =========================================================================

export function updateStatistics() {
    const { config, nodes, edges, selectedNodes } = state;
    const { statsPanel } = state.ui;
    if (!statsPanel) return;

    if (!config.ui.showStatistics) {
        statsPanel.style.display = 'none';
        return;
    }

    statsPanel.style.display = 'block';
    const theme = getTheme();

    const nodeCount = nodes.length;
    const edgeCount = edges.length;
    const groupCount = new Set(nodes.map(n => n.group).filter(Boolean)).size;
    const density = nodeCount > 1 ? (2 * edgeCount) / (nodeCount * (nodeCount - 1)) : 0;

    const degrees = {};
    nodes.forEach(n => degrees[n.id] = 0);
    edges.forEach(e => {
        const sourceId = e.source.id || e.source;
        const targetId = e.target.id || e.target;
        if (degrees[sourceId] !== undefined) degrees[sourceId]++;
        if (degrees[targetId] !== undefined) degrees[targetId]++;
    });
    const avgDegree = nodeCount > 0
        ? Object.values(degrees).reduce((a, b) => a + b, 0) / nodeCount : 0;

    statsPanel.innerHTML = `
        <div style="font-weight:600;margin-bottom:8px;border-bottom:1px solid ${theme.statsBorder};padding-bottom:6px;font-size:12px;letter-spacing:0.5px;text-transform:uppercase;">Statistics</div>
        <table style="border-collapse:collapse;font-size:12px;">
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Nodes</td><td style="text-align:right;font-weight:500;">${nodeCount}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Edges</td><td style="text-align:right;font-weight:500;">${edgeCount}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Groups</td><td style="text-align:right;font-weight:500;">${groupCount}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Density</td><td style="text-align:right;font-weight:500;">${density.toFixed(4)}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Avg Degree</td><td style="text-align:right;font-weight:500;">${avgDegree.toFixed(2)}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Selected</td><td style="text-align:right;font-weight:500;">${selectedNodes.size}</td></tr>
        </table>
    `;
}

// =========================================================================
// Floating input helpers
// =========================================================================

export function showFloatingInput(x, y) {
    const { floatingInput, groupInputBox } = state.ui;
    floatingInput.style.display = 'flex';
    floatingInput.style.left = `${x + 15}px`;
    floatingInput.style.top = `${y - 30}px`;
    groupInputBox.focus();
}

export function hideFloatingInput() {
    state.ui.floatingInput.style.display = 'none';
}

// =========================================================================
// Selection box overlay
// =========================================================================

export function updateSelectionBoxOverlay() {
    const div = state.selectionBoxDiv;
    if (!div) return;

    const box = state.selectionBox;
    if (!box) {
        div.style.display = 'none';
        return;
    }

    const tl = worldToScreen(box.x, box.y);
    const br = worldToScreen(box.x + box.width, box.y + box.height);

    div.style.display = 'block';
    div.style.left = Math.min(tl.x, br.x) + 'px';
    div.style.top = Math.min(tl.y, br.y) + 'px';
    div.style.width = Math.abs(br.x - tl.x) + 'px';
    div.style.height = Math.abs(br.y - tl.y) + 'px';
}
