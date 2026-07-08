// =========================================================================
// Theme definitions
// =========================================================================

export const THEMES = {
    dark: {
        background: '#1a1a2e',
        nodeDefault: '#6c9fff',
        nodeBorder: '#2a2a4a',
        selectedBorder: '#ffd700',
        edgeDefault: '#aabbcc',
        edgeOpacity: 1.0,
        edgeSelected: '#a0aec0',
        edgeSelectedOpacity: 1.0,
        labelColor: '#a0aec0',
        selectedLabelColor: '#ffffff',
        panelBg: 'rgba(30, 30, 50, 0.92)',
        panelText: '#c0c8d8',
        panelBorder: '1px solid rgba(255, 255, 255, 0.08)',
        panelShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        panelHeaderBorder: 'rgba(255, 255, 255, 0.1)',
        buttonBg: 'rgba(255, 255, 255, 0.06)',
        buttonBorder: '1px solid rgba(255, 255, 255, 0.12)',
        buttonText: '#c0c8d8',
        buttonHoverBg: 'rgba(255, 255, 255, 0.12)',
        activeButtonBg: 'rgba(108, 159, 255, 0.2)',
        activeButtonBorder: '1px solid #6c9fff',
        activeButtonText: '#6c9fff',
        inactiveText: 'rgba(255, 255, 255, 0.3)',
        inputBg: 'rgba(255, 255, 255, 0.08)',
        inputBorder: '1px solid rgba(255, 255, 255, 0.15)',
        inputText: '#e0e0e0',
        inputPlaceholder: 'rgba(255, 255, 255, 0.3)',
        tooltipBg: 'rgba(20, 20, 40, 0.95)',
        tooltipText: '#ffffff',
        tooltipShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
        selectionBoxFill: 'rgba(108, 159, 255, 0.1)',
        selectionBoxStroke: '#48bb78',
        legendHoverBg: 'rgba(255, 255, 255, 0.08)',
        statsBorder: 'rgba(255, 255, 255, 0.1)',
        groupFillOpacity: 0.15,
        iconColor: '#a0aec0',
    },
    light: {
        background: '#ffffff',
        nodeDefault: '#548ff0',
        nodeBorder: '#ffffff',
        selectedBorder: '#000000',
        edgeDefault: '#1a2a3a',
        edgeOpacity: 1.0,
        edgeSelected: '#555555',
        edgeSelectedOpacity: 1.0,
        labelColor: '#2d3748',
        selectedLabelColor: '#000000',
        panelBg: 'rgba(255, 255, 255, 0.98)',
        panelText: '#2d3748',
        panelBorder: '1px solid #e2e8f0',
        panelShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        panelHeaderBorder: '#e2e8f0',
        buttonBg: 'linear-gradient(145deg, #f8f9fa, #ffffff)',
        buttonBorder: '1px solid #e2e8f0',
        buttonText: '#4a5568',
        buttonHoverBg: '#f0f4ff',
        activeButtonBg: 'rgba(84, 143, 240, 0.12)',
        activeButtonBorder: '1px solid #548ff0',
        activeButtonText: '#548ff0',
        inactiveText: '#a0aec0',
        inputBg: '#ffffff',
        inputBorder: '1px solid #e2e8f0',
        inputText: '#2d3748',
        inputPlaceholder: '#a0aec0',
        tooltipBg: 'rgba(0, 0, 0, 0.85)',
        tooltipText: '#ffffff',
        tooltipShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
        selectionBoxFill: 'rgba(100, 200, 255, 0.1)',
        selectionBoxStroke: '#55c667',
        legendHoverBg: 'rgba(0, 0, 0, 0.04)',
        statsBorder: '#e2e8f0',
        groupFillOpacity: 0.125,
        iconColor: '#4a5568',
    }
};

// =========================================================================
// Default Configuration
// =========================================================================

export const DEFAULT_CONFIG = {
    nodes: {
        defaultSize: 15,
        selectedSizeIncrease: 5,
        defaultColor: null, // resolved from theme
        defaultOpacity: 1.0,
        borderColor: null,  // resolved from theme
        borderWidth: 1,
        selectedBorderColor: null // resolved from theme
    },
    edges: {
        defaultColor: null,
        selectedColor: null,
        defaultOpacity: null,
        selectedOpacity: null,
        defaultWidth: 1,
        selectedWidth: 2,
        showArrows: true,
        arrowSize: 10,
        arrowWidth: 5
    },
    labels: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        fontSize: 8,
        color: null,
        selectedColor: null,
        visible: true
    },
    simulation: {
        chargeStrength: 4000,
        linkDistance: 100,
        centerStrength: 1.0
    },
    groups: {
        fillOpacity: null, // resolved from theme
        strokeWidth: 2,
        showEllipses: true
    },
    canvas: {
        backgroundColor: null, // resolved from theme
        zoomMin: 0.1,
        zoomMax: 5
    },
    ui: {
        theme: 'light',
        showLegend: true,
        showStatistics: false,
        showTooltips: true
    },
    layout: 'force'
};

// Deep merge function for config
export function mergeConfig(defaults, overrides) {
    const result = { ...defaults };
    for (const key in overrides) {
        if (overrides[key] && typeof overrides[key] === 'object' && !Array.isArray(overrides[key])) {
            result[key] = mergeConfig(defaults[key] || {}, overrides[key]);
        } else if (overrides[key] !== undefined) {
            result[key] = overrides[key];
        }
    }
    return result;
}

// Resolve null config values from theme
export function resolveConfigFromTheme(config, theme) {
    const t = THEMES[theme] || THEMES.light;
    if (!config.nodes.defaultColor) config.nodes.defaultColor = t.nodeDefault;
    if (!config.nodes.borderColor) config.nodes.borderColor = t.nodeBorder;
    if (!config.nodes.selectedBorderColor) config.nodes.selectedBorderColor = t.selectedBorder;
    if (!config.edges.defaultColor) config.edges.defaultColor = t.edgeDefault;
    if (!config.edges.selectedColor) config.edges.selectedColor = t.edgeSelected;
    if (config.edges.defaultOpacity === null) config.edges.defaultOpacity = t.edgeOpacity;
    if (config.edges.selectedOpacity === null) config.edges.selectedOpacity = t.edgeSelectedOpacity;
    if (!config.labels.color) config.labels.color = t.labelColor;
    if (!config.labels.selectedColor) config.labels.selectedColor = t.selectedLabelColor;
    if (config.groups.fillOpacity === null) config.groups.fillOpacity = t.groupFillOpacity;
    if (!config.canvas.backgroundColor) config.canvas.backgroundColor = t.background;
    return config;
}
