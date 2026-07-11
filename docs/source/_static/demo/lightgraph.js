// lightgraph: high-performance canvas-based network visualization.
//
// Usage (module):   const { LightGraph } = require('lightgraph');
//                   const graph = new LightGraph(containerEl, { nodes, edges, config });
// Usage (browser):  include this script; the class is window.lightGraph.LightGraph.
//                   Pages providing the legacy #lightGraph / #nodesData /
//                   #edgesData elements (Python/R embeddings) auto-initialize.
(function (factory) {
    const api = factory();
    if (typeof window !== 'undefined') {
        window.lightGraph = Object.assign(window.lightGraph || {}, api);
    }
    if (typeof module === 'object' && module.exports) {
        module.exports = api;
    }
})(function () {
    'use strict';

    // =========================================================================
    // Default Configuration
    // =========================================================================
    const DEFAULT_CONFIG = {
        nodes: {
            defaultSize: 7,
            selectedSizeIncrease: 5,
            defaultColor: '#548ff0',
            defaultOpacity: 1.0,
            borderColor: '#ffffff',
            borderWidth: 1,
            selectedBorderColor: '#000000',
            // Render-time multiplier on all node sizes (UI slider).
            sizeScale: 1
        },
        edges: {
            defaultColor: '#333333',
            selectedColor: '#999999',
            defaultOpacity: 0.3,
            selectedOpacity: 0.6,
            defaultWidth: 0.45,
            selectedWidth: 2,
            // Scale edge opacity (and, when weight-mapped widths make
            // strokes thick, edge width) by on-screen ink density so dense
            // graphs fade into a readable texture instead of a solid block.
            // Disabled automatically when defaultOpacity is set explicitly.
            autoOpacity: true,
            // Render-time multiplier on all edge widths (UI slider).
            widthScale: 1,
            showArrows: false,
            arrowSize: 10,
            arrowWidth: 5,
            // Map edge weight to visual properties (quantized into a few
            // buckets so batched rendering is preserved).
            weightToWidth: false,
            weightToOpacity: false,
            weightWidthRange: [0.5, 4],
            weightOpacityRange: [0.05, 0.6]
        },
        highlight: {
            // Fade everything outside the 1-hop neighborhood of the hovered
            // or selected nodes.
            enabled: true,
            neighborFade: 0.15
        },
        egoFilter: {
            // Double-click a node to show only its k-hop neighborhood;
            // double-click empty space or press Escape to restore.
            enabled: true,
            depth: 1
        },
        labels: {
            fontFamily: 'sans-serif',
            fontSize: 5,
            color: '#555555',
            selectedColor: '#000000',
            visible: true
        },
        simulation: {
            chargeStrength: 4000,
            linkDistance: 100,
            centerStrength: 1.0,
            // Pull nodes toward their group's centroid so groups separate
            // spatially (makes ellipses tight and meaningful). 0 disables.
            groupAttraction: 0.3,
            // Synchronous layout ticks run before the first paint so the
            // graph appears already untangled instead of unfolding from
            // random positions. 'auto' spends a roughly fixed time budget
            // (full settle for small graphs, fewer ticks as size grows);
            // a number forces that tick count; 0 disables.
            warmupTicks: 'auto'
        },
        groups: {
            fillOpacity: 0.125,
            strokeWidth: 2,
            showEllipses: true
        },
        canvas: {
            backgroundColor: '#ffffff',
            zoomMin: 0.1,
            zoomMax: 5,
            // Zoom to fit the graph once the layout settles (skipped if the
            // user has already panned/zoomed manually).
            autoFit: true,
            // Backing-store resolution multiplier. null = follow the
            // display's devicePixelRatio (sharp on retina); set to 1 to
            // trade sharpness for speed on very large graphs.
            pixelRatio: null,
            // Resolution multiplier for PNG export, relative to the
            // on-screen size.
            exportScale: 2
        },
        ui: {
            theme: 'light',
            showLegend: true,
            showStatistics: false,
            showTooltips: true,
            // Metadata describing a numeric metric encoded as node size
            // and/or color, rendered as an extra legend section. The
            // Python/R wrappers set this automatically for node_metric;
            // standalone users can supply it directly:
            // { label, min, max, map: 'size'|'color'|'both',
            //   sizeRange: [minPx, maxPx], colors: [lowHex, highHex] }
            metricLegend: null
        },
        layout: 'force' // 'force' or 'circular'
    };

    // Defaults that differ under ui.theme: 'dark'; applied between
    // DEFAULT_CONFIG and the user config so explicit values always win.
    const DARK_THEME_DEFAULTS = {
        canvas: { backgroundColor: '#111827' },
        labels: { color: '#9ca3af', selectedColor: '#f9fafb' },
        edges: { defaultColor: '#cbd5e1', selectedColor: '#e2e8f0' },
        nodes: { borderColor: '#111827', selectedBorderColor: '#f9fafb' }
    };

    // Deep merge function for config
    function mergeConfig(defaults, overrides) {
        const result = { ...defaults };
        for (const key in overrides) {
            const value = overrides[key];
            const defaultIsSection = defaults[key] && typeof defaults[key] === 'object'
                && !Array.isArray(defaults[key]);
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                result[key] = mergeConfig(defaults[key] || {}, value);
            } else if (value !== undefined) {
                // Guard against malformed section overrides: R's jsonlite
                // serializes empty lists as [], which must not replace an
                // object-valued config section.
                if (!(defaultIsSection && Array.isArray(value))) {
                    result[key] = value;
                }
            }
        }
        return result;
    }

    // =========================================================================
    // Pure helpers (module level, exported for unit testing)
    // =========================================================================
    // Node ids, groups, and metadata are user data; escape them before they
    // reach innerHTML (tooltip, legend).
    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, ch => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[ch]));
    }

    const rgbaCache = new Map();
    function hexToRgba(hex, alpha) {
        const key = hex + '|' + alpha;
        let value = rgbaCache.get(key);
        if (!value) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            value = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            rgbaCache.set(key, value);
        }
        return value;
    }

    // Linear interpolation between two '#rrggbb' colors; used for the
    // metric legend's size dots when the metric also drives color.
    function lerpHex(hex0, hex1, t) {
        const c0 = [1, 3, 5].map(i => parseInt(hex0.slice(i, i + 2), 16));
        const c1 = [1, 3, 5].map(i => parseInt(hex1.slice(i, i + 2), 16));
        return '#' + c0.map((v, i) => Math.round(v + (c1[i] - v) * t)
            .toString(16).padStart(2, '0')).join('');
    }

    // Compact human-readable form of a metric value for legend labels.
    function formatMetricValue(value) {
        if (!Number.isFinite(value)) return '';
        const abs = Math.abs(value);
        if (abs !== 0 && (abs < 0.001 || abs >= 100000)) {
            return value.toExponential(2);
        }
        return String(parseFloat(value.toPrecision(3)));
    }

    // Eigen decomposition of a symmetric 2x2 covariance matrix; used for the
    // orientation and radii of group ellipses.
    function computeEigen(covMatrix) {
        const a = covMatrix[0][0];
        const b = covMatrix[0][1];
        const d = covMatrix[1][1];

        const trace = a + d;
        const determinant = a * d - b * b;
        const discriminant = Math.sqrt(Math.max(trace * trace - 4 * determinant, 0));
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
            if (length === 0) return [1, 0];
            return [v[0] / length, v[1] / length];
        };
        eigenvector1 = normalize(eigenvector1);
        eigenvector2 = normalize(eigenvector2);

        return [eigenvalue1, eigenvalue2, eigenvector1, eigenvector2];
    }

    // Weak attraction of each node toward its group's centroid, so groups
    // separate spatially and their ellipses stay tight. d3-force plugin
    // shape: a function with an initialize() hook.
    function forceCluster(strength) {
        let clusterNodes = [];
        function force(alpha) {
            const centroids = new Map();
            for (const node of clusterNodes) {
                if (!node.group) continue;
                let c = centroids.get(node.group);
                if (!c) {
                    c = { x: 0, y: 0, count: 0 };
                    centroids.set(node.group, c);
                }
                c.x += node.x;
                c.y += node.y;
                c.count++;
            }
            centroids.forEach(c => {
                c.x /= c.count;
                c.y /= c.count;
            });
            const k = alpha * strength;
            for (const node of clusterNodes) {
                if (!node.group) continue;
                const c = centroids.get(node.group);
                if (c.count < 2) continue;
                node.vx += (c.x - node.x) * k;
                node.vy += (c.y - node.y) * k;
            }
        }
        force.initialize = (initNodes) => { clusterNodes = initNodes; };
        return force;
    }

    function isNodeInSelection(node, box) {
        const x0 = Math.min(box.x, box.x + box.width),
              x1 = Math.max(box.x, box.x + box.width),
              y0 = Math.min(box.y, box.y + box.height),
              y1 = Math.max(box.y, box.y + box.height);

        return node.x >= x0 && node.x <= x1 && node.y >= y0 && node.y <= y1;
    }

    // =========================================================================
    // LightGraph instance
    // =========================================================================
    // container: the DOM element to render into.
    // options:
    //   nodes, edges  initial data ([{id, group?, color?, size?, ...}],
    //                 [{source, target, weight?}])
    //   config        partial config merged over DEFAULT_CONFIG
    //   d3            explicit d3 instance (defaults to window.d3)
    //   legacyDom     read initial data from #nodesData/#edgesData script tags
    function LightGraph(container, options = {}) {
        if (!container) {
            throw new Error('LightGraph: a container element is required');
        }
        const d3 = options.d3 || (typeof window !== 'undefined' ? window.d3 : undefined);
        if (!d3) {
            throw new Error('LightGraph: d3 v7 must be loaded (or passed via options.d3)');
        }
        const self = this;
        // Expose the instance on the container element so embedding hosts
        // (the R htmlwidget, generated Python/R pages, onRender hooks) can
        // reach the API without holding the constructor's return value.
        container.lightgraph = this;
        const userConfig = options.config || {};
        const theme = (userConfig.ui && userConfig.ui.theme) || DEFAULT_CONFIG.ui.theme;
        let config = mergeConfig(
            theme === 'dark' ? mergeConfig(DEFAULT_CONFIG, DARK_THEME_DEFAULTS) : DEFAULT_CONFIG,
            userConfig);
        // Adaptive defaults apply only where the user did not set a value.
        let userSetEdgeOpacity =
            !!(userConfig.edges && userConfig.edges.defaultOpacity !== undefined);
        let userSetEdgeWidth =
            !!(userConfig.edges && userConfig.edges.widthScale !== undefined);

        // =====================================================================
        // 1. Visual Element Section -------------------------------------------
        // =====================================================================

        if (!document.getElementById('lightGraphSharedStyle')) {
            const style = document.createElement('style');
            style.id = 'lightGraphSharedStyle';
            style.textContent = `
.lg-root {
    --lg-accent: #548ff0;
    --lg-bg: rgba(255, 255, 255, 0.95);
    --lg-text: #1f2937;
    --lg-muted: #6b7280;
    --lg-border: #e5e7eb;
    --lg-hover: rgba(0, 0, 0, 0.06);
    --lg-radius: 8px;
    --lg-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 13px;
    color: var(--lg-text);
}
.lg-root[data-lg-theme="dark"] {
    --lg-bg: rgba(24, 28, 36, 0.95);
    --lg-text: #e5e7eb;
    --lg-muted: #9ca3af;
    --lg-border: #374151;
    --lg-hover: rgba(255, 255, 255, 0.09);
    --lg-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}
.lg-root *, .lg-root *::before, .lg-root *::after { box-sizing: border-box; }
.lg-panel {
    background: var(--lg-bg);
    border-radius: var(--lg-radius);
    box-shadow: var(--lg-shadow);
    backdrop-filter: blur(8px);
    color: var(--lg-text);
}
.lg-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 32px;
    min-width: 32px;
    padding: 0 10px;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: var(--lg-text);
    font: inherit;
    cursor: pointer;
    white-space: nowrap;
}
.lg-btn:hover { background: var(--lg-hover); }
.lg-btn.lg-active { background: var(--lg-accent); color: #ffffff; }
.lg-btn-outline { border: 1px solid var(--lg-border); }
.lg-btn svg { flex-shrink: 0; }
.lg-seg {
    display: inline-flex;
    border: 1px solid var(--lg-border);
    border-radius: 6px;
    padding: 2px;
    gap: 2px;
}
.lg-seg .lg-btn { height: 26px; border-radius: 4px; }
.lg-divider { width: 1px; align-self: stretch; margin: 4px 2px; background: var(--lg-border); }
.lg-input {
    height: 32px;
    padding: 0 8px;
    border: 1px solid var(--lg-border);
    border-radius: 6px;
    background: transparent;
    color: var(--lg-text);
    font: inherit;
    outline: none;
}
.lg-input:focus { border-color: var(--lg-accent); }
.lg-input::placeholder { color: var(--lg-muted); }
.lg-search { position: relative; display: inline-flex; align-items: center; }
.lg-search svg { position: absolute; left: 8px; color: var(--lg-muted); pointer-events: none; }
.lg-search .lg-input { padding-left: 30px; padding-right: 52px; width: 210px; }
.lg-search-count {
    position: absolute; right: 28px;
    font-size: 11px; color: var(--lg-muted);
    pointer-events: none;
}
.lg-search-clear {
    position: absolute; right: 4px;
    display: none;
    width: 20px; height: 20px;
    border: none; border-radius: 50%;
    background: transparent; color: var(--lg-muted);
    font-size: 14px; line-height: 1; cursor: pointer;
}
.lg-search-clear:hover { background: var(--lg-hover); }
.lg-switch-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 6px 0; cursor: pointer; user-select: none;
}
.lg-switch {
    appearance: none; -webkit-appearance: none;
    width: 34px; height: 20px; margin: 0;
    border-radius: 10px; background: var(--lg-border);
    position: relative; cursor: pointer; transition: background 0.15s;
    flex-shrink: 0;
}
.lg-switch:checked { background: var(--lg-accent); }
.lg-switch::after {
    content: ''; position: absolute; top: 2px; left: 2px;
    width: 16px; height: 16px; border-radius: 50%;
    background: #ffffff; transition: left 0.15s;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
.lg-switch:checked::after { left: 16px; }
.lg-panel::-webkit-scrollbar { width: 8px; }
.lg-panel::-webkit-scrollbar-thumb { background: var(--lg-border); border-radius: 4px; }
.lg-panel::-webkit-scrollbar-track { background: transparent; }
.lg-slider-row { padding: 6px 0; }
.lg-slider-label {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 4px;
}
.lg-slider-value { color: var(--lg-muted); font-variant-numeric: tabular-nums; }
.lg-slider {
    width: 100%; margin: 0; accent-color: var(--lg-accent); cursor: pointer;
}
.lg-section-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 8px 0; cursor: pointer; user-select: none;
    font-weight: 600; border-bottom: 1px solid var(--lg-border);
}
.lg-section-header .lg-chevron { transition: transform 0.15s; color: var(--lg-muted); }
.lg-section-header.lg-collapsed .lg-chevron { transform: rotate(-90deg); }
.lg-section-content { padding: 8px 0 12px; }
.lg-legend-item {
    display: flex; align-items: center; gap: 8px;
    padding: 3px 6px; border-radius: 4px; cursor: pointer;
}
.lg-legend-item:hover { background: var(--lg-hover); }
.lg-stats-table { border-collapse: collapse; }
.lg-stats-table td { padding: 1px 0; }
.lg-stats-table td:first-child { padding-right: 14px; color: var(--lg-muted); }
.lg-stats-table td:last-child { text-align: right; }
`;
            document.head.appendChild(style);
        }

        // #region 1.1 Element constructors ------------------------------------
        function createElement(tag, options = {}, styles = {}) {
            const element = document.createElement(tag);
            Object.assign(element, options);
            Object.assign(element.style, styles);
            return element;
        }

        function createButton({ id, title, htmlContent, className }) {
            return createElement('button', {
                id, title, innerHTML: htmlContent,
                className: className ? `lg-btn ${className}` : 'lg-btn'
            });
        }

        function createInput({ id, placeholder }) {
            return createElement('input', {
                id, type: 'text', placeholder, className: 'lg-input'
            });
        }

        // A labelled on/off switch row for the settings sidebar.
        function createSwitchRow({ id, label, checked, onChange }) {
            const row = createElement('label', { className: 'lg-switch-row' });
            const text = createElement('span', { textContent: label });
            const input = createElement('input', {
                id, type: 'checkbox', className: 'lg-switch', checked
            });
            input.addEventListener('change', () => onChange(input.checked));
            row.append(text, input);
            return [row, input];
        }

        // A labelled range slider row with a live value readout.
        function createSliderRow({ id, label, min, max, step = 1, value, format, onInput }) {
            const row = createElement('div', { className: 'lg-slider-row' });
            const top = createElement('div', { className: 'lg-slider-label' });
            const text = createElement('span', { textContent: label });
            const readout = createElement('span', {
                className: 'lg-slider-value', textContent: format(value)
            });
            top.append(text, readout);
            const input = createElement('input', { id, type: 'range', className: 'lg-slider' });
            input.min = min;
            input.max = max;
            input.step = step;
            input.value = value;
            input.addEventListener('input', () => {
                readout.textContent = format(Number(input.value));
                onInput(Number(input.value));
            });
            // Called when the value is changed programmatically (auto mode).
            input.sync = (v) => {
                input.value = v;
                readout.textContent = format(Number(input.value));
            };
            row.append(top, input);
            return [row, input];
        }

        function createCollapsibleSection(title, defaultOpen = true) {
            const header = createElement('div', {
                className: 'lg-section-header' + (defaultOpen ? '' : ' lg-collapsed'),
                innerHTML: `<span>${title}</span><svg class="lg-chevron" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>`
            });

            const content = createElement('div', {
                className: 'lg-section-content'
            }, {
                display: defaultOpen ? 'block' : 'none'
            });

            header.addEventListener('click', () => {
                const collapsed = content.style.display === 'none';
                content.style.display = collapsed ? 'block' : 'none';
                header.classList.toggle('lg-collapsed', !collapsed);
            });

            return [header, content];
        }
        //#endregion
        
        // #region 1.2 Creating canvas -----------------------------------------
        const lightGraph = container;
        lightGraph.classList.add('lg-root');
        lightGraph.setAttribute('data-lg-theme', theme);
        Object.assign(lightGraph.style, {
            position: 'relative', overflow: 'hidden'});
        // Respect a height set by the embedding page (Python/R wrappers size
        // the container); only fall back to 800px when it has no height.
        if (!lightGraph.clientHeight) {
            lightGraph.style.height = '800px';
        }
        const canvas = createElement("canvas", { id: "lightGraphCanvas" });
        canvas.style.cursor = 'grab';
        let context = canvas.getContext("2d");
        // The backing store is scaled by pixelRatio so the canvas stays
        // sharp on high-DPI displays; all layout math uses the CSS-pixel
        // view size (viewWidth/viewHeight), never canvas.width/height.
        let pixelRatio = 1;
        let viewWidth = 0;
        let viewHeight = 0;
        function sizeCanvas() {
            pixelRatio = config.canvas.pixelRatio ||
                Math.max(1, (typeof window !== 'undefined' && window.devicePixelRatio) || 1);
            viewWidth = lightGraph.clientWidth;
            viewHeight = lightGraph.clientHeight;
            canvas.width = Math.round(viewWidth * pixelRatio);
            canvas.height = Math.round(viewHeight * pixelRatio);
            canvas.style.width = viewWidth + 'px';
            canvas.style.height = viewHeight + 'px';
            watchPixelRatio();
        }
        // Re-resolve the backing store when the display density changes
        // (window dragged to another monitor, browser zoom). The media
        // query only matches the current density, so it must be rebuilt
        // after every change.
        let dprMedia = null;
        function handleDprChange() { self.resize(); }
        function watchPixelRatio() {
            if (config.canvas.pixelRatio) return; // fixed ratio, nothing to watch
            if (typeof window === 'undefined' || !window.matchMedia) return;
            if (dprMedia && dprMedia.removeEventListener) {
                dprMedia.removeEventListener('change', handleDprChange);
            }
            dprMedia = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
            if (dprMedia.addEventListener) {
                dprMedia.addEventListener('change', handleDprChange);
            }
        }
        sizeCanvas();
        lightGraph.appendChild(canvas);
        //#endregion

        // #region 1.3 Additional visual elements ------------------------------
        // 1.3.1 Control and search panel
        const mainControlBar = createElement('div', { id: 'mainBar', className: 'lg-panel' }, {
            position: 'absolute',
            top: '12px',
            right: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            zIndex: 1000,
            padding: '6px'
        });

        const sceneSidebar = createElement('div', { id: 'sceneSidebar', className: 'lg-panel' }, {
            position: 'absolute',
            top: '58px',
            right: '-320px',
            width: '280px',
            transition: 'right 0.25s ease',
            padding: '4px 16px 12px',
            zIndex: 999,
            // Never taller than the container: scroll on small screens.
            maxHeight: 'calc(100% - 74px)',
            overflowY: 'auto',
            overscrollBehavior: 'contain',
            boxSizing: 'border-box'
        });

        // Search with embedded icon, match count, and clear button
        const searchWrap = createElement('div', { className: 'lg-search' });
        const searchIcon = createElement('span', {
            innerHTML: '<svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>'
        });
        searchIcon.firstChild.style.position = 'absolute';
        searchIcon.firstChild.style.left = '8px';
        searchIcon.firstChild.style.top = '8px';
        searchIcon.firstChild.style.color = 'var(--lg-muted)';
        searchIcon.firstChild.style.pointerEvents = 'none';
        const searchBox = createInput({
            id: 'searchBox',
            placeholder: 'Search nodes...'
        });
        const searchCount = createElement('span', { className: 'lg-search-count' });
        const searchClear = createElement('button', {
            className: 'lg-search-clear', title: 'Clear search', innerHTML: '×'
        });
        searchWrap.append(searchBox, searchIcon.firstChild, searchCount, searchClear);

        const fitButton = createButton({
            id: 'fitButton',
            title: 'Zoom to fit the whole graph',
            htmlContent: '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>'
        });

        const sidebarToggle = createButton({
            id: 'sidebarToggle',
            title: 'Settings',
            htmlContent: '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>'
        });

        // Add control panel to the page
        lightGraph.append(mainControlBar, sceneSidebar);
        const toolbarDivider = createElement('div', { className: 'lg-divider' });
        mainControlBar.append(searchWrap, toolbarDivider, fitButton, sidebarToggle);

        // Display Settings Section: labelled switches
        const [viewHeader, viewContent] = createCollapsibleSection('Display');
        const [arrowsRow, arrowsToggle] = createSwitchRow({
            id: 'arrowsToggle', label: 'Edge arrows', checked: config.edges.showArrows,
            onChange: (checked) => { showArrows = checked; requestRender(); }
        });
        const [labelsRow, labelsToggle] = createSwitchRow({
            id: 'labelsToggle', label: 'Node labels', checked: config.labels.visible,
            onChange: (checked) => { config.labels.visible = checked; requestRender(); }
        });
        const [ellipsesRow, ellipsesToggle] = createSwitchRow({
            id: 'ellipsesToggle', label: 'Group ellipses', checked: config.groups.showEllipses,
            onChange: (checked) => { config.groups.showEllipses = checked; requestRender(); }
        });
        const [legendRow, legendToggle] = createSwitchRow({
            id: 'legendToggle', label: 'Legend', checked: config.ui.showLegend,
            onChange: (checked) => { config.ui.showLegend = checked; updateLegend(); }
        });
        const [statsRow, statsToggle] = createSwitchRow({
            id: 'statsToggle', label: 'Statistics', checked: config.ui.showStatistics,
            onChange: (checked) => { config.ui.showStatistics = checked; updateStatistics(); }
        });
        viewContent.append(arrowsRow, labelsRow, ellipsesRow, legendRow, statsRow);

        // Style Section: sliders for edge opacity/width and node size.
        // Moving the opacity slider takes over from the automatic
        // density-based styling entirely; moving the width slider takes
        // over just the width half; the switch hands control back.
        const [styleHeader, styleContent] = createCollapsibleSection('Style', false);
        const [edgeOpacityRow, edgeOpacitySlider] = createSliderRow({
            id: 'edgeOpacitySlider', label: 'Edge opacity',
            min: 1, max: 100, value: Math.round(baseEdgeAlpha() * 100),
            format: (v) => v + '%',
            onInput: (v) => {
                config.edges.autoOpacity = false;
                autoOpacityToggle.checked = false;
                edgeAlphaFactor = (v / 100) / Math.max(baseEdgeAlpha(), 0.001);
                requestRender();
            }
        });
        const [autoOpacityRow, autoOpacityToggle] = createSwitchRow({
            id: 'autoOpacityToggle', label: 'Auto edge style',
            checked: autoEdgeAlphaActive(),
            onChange: (checked) => {
                config.edges.autoOpacity = checked;
                if (checked) {
                    userSetEdgeOpacity = false;
                    userSetEdgeWidth = false;
                    updateEdgeAlpha();
                } else {
                    edgeAlphaFactor = 1;
                    edgeWidthFactor = 1;
                    edgeOpacitySlider.sync(Math.round(baseEdgeAlpha() * 100));
                    edgeWidthSlider.sync(Math.round(config.edges.widthScale * 100));
                }
                requestRender();
            }
        });
        const [edgeWidthRow, edgeWidthSlider] = createSliderRow({
            id: 'edgeWidthSlider', label: 'Edge width',
            min: 25, max: 300, value: Math.round(config.edges.widthScale * 100),
            format: (v) => (v / 100).toFixed(2).replace(/0+$/, '').replace(/\.$/, '') + 'x',
            onInput: (v) => {
                config.edges.widthScale = v / 100;
                userSetEdgeWidth = true;
                edgeWidthFactor = 1;
                // Re-budget opacity for the new stroke width.
                updateEdgeAlpha();
                requestRender();
            }
        });
        const [nodeSizeRow, nodeSizeSlider] = createSliderRow({
            id: 'nodeSizeSlider', label: 'Node size',
            min: 25, max: 300, value: Math.round(config.nodes.sizeScale * 100),
            format: (v) => (v / 100).toFixed(2).replace(/0+$/, '').replace(/\.$/, '') + 'x',
            onInput: (v) => {
                config.nodes.sizeScale = v / 100;
                requestRender();
            }
        });
        styleContent.append(edgeOpacityRow, autoOpacityRow, edgeWidthRow, nodeSizeRow);

        // Layout Section: segmented layout choice + restart
        const [layoutHeader, layoutContent] = createCollapsibleSection('Layout', false);
        const forceLayoutButton = createButton({
            id: 'forceLayoutButton', title: 'Force-directed layout',
            className: config.layout === 'force' ? 'lg-active' : '',
            htmlContent: 'Force'
        });
        const circularLayoutButton = createButton({
            id: 'circularLayoutButton', title: 'Circular layout',
            className: config.layout === 'circular' ? 'lg-active' : '',
            htmlContent: 'Circular'
        });
        const layoutSegment = createElement('div', { className: 'lg-seg' }, {
            display: 'flex', marginBottom: '8px'
        });
        layoutSegment.append(forceLayoutButton, circularLayoutButton);
        forceLayoutButton.style.flex = '1';
        circularLayoutButton.style.flex = '1';
        const restartButton = createButton({
            id: 'restartButton',
            title: 'Restart simulation',
            className: 'lg-btn-outline',
            htmlContent: 'Restart layout'
        });
        restartButton.style.width = '100%';
        layoutContent.append(layoutSegment, restartButton);

        // Export Section
        const [exportHeader, exportContent] = createCollapsibleSection('Export', false);
        const exportRow = createElement('div', {}, { display: 'flex', gap: '8px' });
        const exportPNGButton = createButton({
            id: 'exportPNG', title: 'Export as PNG image',
            className: 'lg-btn-outline', htmlContent: 'PNG'
        });
        const exportSVGButton = createButton({
            id: 'exportSVG', title: 'Export as SVG (vector)',
            className: 'lg-btn-outline', htmlContent: 'SVG'
        });
        const exportJSONButton = createButton({
            id: 'exportJSON', title: 'Export graph data as JSON',
            className: 'lg-btn-outline', htmlContent: 'JSON'
        });
        [exportPNGButton, exportSVGButton, exportJSONButton].forEach(b => { b.style.flex = '1'; });
        exportRow.append(exportPNGButton, exportSVGButton, exportJSONButton);
        exportContent.append(exportRow);

        sceneSidebar.append(viewHeader, viewContent, styleHeader, styleContent,
            layoutHeader, layoutContent, exportHeader, exportContent);


        const floatingInput = createElement('div', {
            id: 'floatingLabelInput', className: 'lg-panel'
        }, {
            position: 'absolute',
            display: 'none',
            gap: '6px',
            alignItems: 'center',
            padding: '8px',
            zIndex: 1001
        });
        const groupInputBox = createInput({
                id: 'groupLabelInput',
                placeholder: 'Group name...'
        });
        groupInputBox.style.width = '150px';
        const groupButton = createButton({
            id: 'groupLabelButton',
            title: 'Assign group to selected nodes',
            className: 'lg-active',
            htmlContent: '✓'
        });
        const clearGroupButton = createButton({
            id: 'clearGroupLabelButton',
            title: 'Clear group from selected nodes',
            htmlContent: 'Clear',
        })

        floatingInput.append(groupInputBox, groupButton, clearGroupButton);
        lightGraph.appendChild(floatingInput);

        // 1.3.3 Legend Panel
        const legendPanel = createElement('div', { id: 'legendPanel', className: 'lg-panel' }, {
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            padding: '10px 12px',
            // Cap the legend to roughly half the viewport; long group
            // lists (plus the metric section) scroll beyond that.
            maxHeight: 'min(50%, 340px)',
            overflowY: 'auto',
            fontSize: '12px',
            display: 'none',
            minWidth: '130px'
        });
        // Section titles ('Groups', metric label) are rebuilt inside
        // updateLegend along with the items.
        const legendContent = createElement('div', { id: 'legendContent' });
        legendPanel.append(legendContent);
        lightGraph.appendChild(legendPanel);

        // 1.3.4 Statistics Panel
        const statsPanel = createElement('div', { id: 'statsPanel', className: 'lg-panel' }, {
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            padding: '10px 12px',
            fontSize: '12px',
            display: 'none'
        });
        lightGraph.appendChild(statsPanel);

        // 1.3.5 Tooltip
        const tooltip = createElement('div', { id: 'nodeTooltip' }, {
            position: 'absolute',
            display: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            pointerEvents: 'none',
            zIndex: '1001',
            maxWidth: '200px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
        });
        lightGraph.appendChild(tooltip);

        // #endregion

        // =====================================================================
        // 2. UI logics --------------------------------------------------------
        // =====================================================================

        // #region 2.1 global variables ----------------------------------------
        let transform = d3.zoomIdentity;
        let showArrows = config.edges.showArrows;
        let nodes = [];
        let edges = [];
        let selectedNodes = new Set([]);
        let selectionBox = null;
        let draggingNode = null;
        let dragOffsetX = 0;
        let dragOffsetY = 0;
        let dragMoved = false;
        // A completed node-drag or box-select fires a browser click on
        // mouseup; swallow that one so it does not clear the selection.
        let suppressNextClick = false;
        let simulation = null;
        // Draw batches: edges/nodes grouped by identical canvas style so each
        // group renders as a single path + stroke/fill instead of one per
        // element. Rebuilt on data/selection/group changes, not per frame.
        let edgeBatches = [];
        let nodeBatches = [];
        let maxNodeSize = 0;
        let renderScheduled = false;
        // Neighbor highlighting state: adjacency built at data load; the
        // highlight set is null when inactive, else nodes to keep vivid.
        let neighborMap = new Map();
        let highlightSet = null;
        let hoverNode = null;
        let weightExtent = [1, 1];
        // Ego filter: when non-null, only these nodes (and edges among them)
        // are rendered and hit-testable.
        let egoSet = null;
        // Auto-fit bookkeeping: fit once per data load, and never fight a
        // user who already panned/zoomed.
        let userInteracted = false;
        let autoFitDone = false;
        // Minimal event emitter: 'nodeClick', 'selectionChange', 'dataLoad', 'destroy'
        const listeners = new Map();
        function emit(event, payload) {
            const callbacks = listeners.get(event);
            if (callbacks) callbacks.forEach(cb => cb(payload));
        }
        // Extended color palette: schemeCategory10 (10) + schemeSet2 (8) + schemeSet3 (12) = 30 colors
        const extendedColors = [
            ...d3.schemeCategory10,
            ...d3.schemeSet2,
            ...d3.schemeSet3
        ];
        const groupColorScale = d3.scaleOrdinal(extendedColors);
        // Modeless interaction: d3-zoom owns wheel events and drags that
        // start on empty space; node drags and shift box-selects fall
        // through to the canvas listeners below.
        let zoom = d3.zoom().scaleExtent([config.canvas.zoomMin, config.canvas.zoomMax])
            .filter((event) => {
                if (event.type === 'wheel') return true;
                if (event.button) return false;
                if (event.shiftKey) return false;
                const [mouseX, mouseY] = d3.pointer(event, canvas);
                return !getNodeAtCoordinates(
                    (mouseX - transform.x) / transform.k,
                    (mouseY - transform.y) / transform.k);
            })
            .on("zoom", (event) => {
                // sourceEvent is null for programmatic transforms
                // (zoomToFit, resets); only real gestures count.
                if (event.sourceEvent) {
                    userInteracted = true;
                }
                transform = event.transform;
                // Overlap density scales with zoom; refresh the auto edge
                // alpha once k drifts ~30% from the last computation.
                if (autoEdgeAlphaActive() &&
                    (transform.k > edgeAlphaK * 1.3 || transform.k < edgeAlphaK / 1.3)) {
                    updateEdgeAlpha();
                }
                requestRender();
            });
        // #endregion

        // #region 2.2 Interaction functions -----------------------------------
        // All selection mutations go through these helpers so the style
        // batches and statistics stay in sync without per-frame work.
        function onSelectionChanged() {
            updateHighlight();
            updateStatistics();
            emit('selectionChange', Array.from(selectedNodes));
        }

        // Recompute the highlight set (hovered node wins over selection),
        // then rebuild the style batches that encode the fading.
        function updateHighlight() {
            let seeds = null;
            if (config.highlight.enabled) {
                if (hoverNode) {
                    seeds = [hoverNode];
                } else if (selectedNodes.size > 0) {
                    seeds = selectedNodes;
                }
            }
            if (!seeds) {
                highlightSet = null;
            } else {
                const set = new Set();
                seeds.forEach(node => {
                    set.add(node);
                    const neighbors = neighborMap.get(node);
                    if (neighbors) neighbors.forEach(neighbor => set.add(neighbor));
                });
                highlightSet = set;
            }
            rebuildRenderBatches();
        }

        // Ego filter: BFS out to `depth` hops from a start node.
        function computeEgoSet(startNode, depth) {
            const set = new Set([startNode]);
            let frontier = [startNode];
            for (let hop = 0; hop < depth; hop++) {
                const next = [];
                for (const node of frontier) {
                    const neighbors = neighborMap.get(node);
                    if (!neighbors) continue;
                    neighbors.forEach(neighbor => {
                        if (!set.has(neighbor)) {
                            set.add(neighbor);
                            next.push(neighbor);
                        }
                    });
                }
                frontier = next;
            }
            return set;
        }

        function applyEgoFilter(node, depth) {
            egoSet = computeEgoSet(node, depth);
            updateHighlight();
            emit('egoFilter', { node, depth });
            self.zoomToFit();
        }

        function clearEgoFilter() {
            if (!egoSet) return;
            egoSet = null;
            updateHighlight();
            emit('egoFilter', null);
            self.zoomToFit();
        }

        function clearSelection() {
            selectedNodes.clear();
            onSelectionChanged();
        }

        function addToSelection(nodesToAdd) {
            nodesToAdd.forEach(node => selectedNodes.add(node));
            onSelectionChanged();
        }

        function newSelection(nodesToSelect) {
            selectedNodes.clear();
            nodesToSelect.forEach(node => selectedNodes.add(node));
            onSelectionChanged();
        }

        function toggleSelection(node) {
            selectedNodes.has(node) ? selectedNodes.delete(node) : selectedNodes.add(node);
            onSelectionChanged();
        }

        function showFloatingInput(x, y) {
            floatingInput.style.display = 'flex';
            floatingInput.style.left = `${x + 15}px`; 
            floatingInput.style.top = `${y - 30}px`;
            groupInputBox.focus();
        }
        function hideFloatingInput(x, y) {
            floatingInput.style.display = 'none';
        }
        function legendSectionTitle(text, isFirst) {
            return createElement('div', { textContent: text }, {
                marginTop: isFirst ? '0' : '10px',
                marginBottom: '6px',
                paddingBottom: '5px',
                fontWeight: '600',
                borderBottom: '1px solid var(--lg-border)'
            });
        }

        // Legend section for a metric encoded as node size and/or color:
        // a row of proportionally sized dots for size, a gradient bar for
        // color, and min/max value labels underneath.
        function buildMetricLegend(metric) {
            const section = createElement('div', { id: 'metricLegend' });
            const mapsSize = metric.map === 'size' || metric.map === 'both';
            const mapsColor = metric.map === 'color' || metric.map === 'both';
            const colors = (mapsColor && Array.isArray(metric.colors)
                && metric.colors.length >= 2) ? metric.colors : null;

            if (mapsSize) {
                const range = (Array.isArray(metric.sizeRange)
                    && metric.sizeRange.length >= 2) ? metric.sizeRange : [4, 20];
                // Dots keep their relative proportions but are capped so
                // large node sizes do not blow up the panel.
                const scale = Math.min(1, 16 / Math.max(range[0], range[1], 1));
                const row = createElement('div', {}, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    margin: '2px 0 4px'
                });
                [0, 0.5, 1].forEach(t => {
                    const d = Math.max(3,
                        (range[0] + t * (range[1] - range[0])) * scale);
                    row.appendChild(createElement('div', {}, {
                        width: `${d}px`,
                        height: `${d}px`,
                        borderRadius: '50%',
                        backgroundColor: colors
                            ? lerpHex(colors[0], colors[1], t)
                            : config.nodes.defaultColor,
                        flexShrink: '0'
                    }));
                });
                section.appendChild(row);
            }
            if (colors) {
                section.appendChild(createElement('div', { className: 'lg-metric-gradient' }, {
                    height: '10px',
                    borderRadius: '3px',
                    background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
                    margin: '2px 0 4px'
                }));
            }
            const labels = createElement('div', {}, {
                display: 'flex',
                justifyContent: 'space-between',
                gap: '12px',
                color: 'var(--lg-muted)',
                fontSize: '11px'
            });
            labels.append(
                createElement('span', { textContent: formatMetricValue(metric.min) }),
                createElement('span', { textContent: formatMetricValue(metric.max) })
            );
            section.appendChild(labels);
            return section;
        }

        function updateLegend() {
            if (!config.ui.showLegend) {
                legendPanel.style.display = 'none';
                return;
            }

            const groups = [...new Set(nodes.map(node => node.group).filter(Boolean))].sort();
            const metric = config.ui.metricLegend;
            const hasMetric = !!(metric
                && ['size', 'color', 'both'].includes(metric.map)
                && Number.isFinite(metric.min) && Number.isFinite(metric.max));
            if (groups.length === 0 && !hasMetric) {
                legendPanel.style.display = 'none';
                return;
            }

            legendPanel.style.display = 'block';
            legendContent.innerHTML = '';

            if (groups.length > 0) {
                legendContent.appendChild(legendSectionTitle('Groups', true));
            }
            groups.forEach(group => {
                const count = nodes.filter(n => n.group === group).length;
                const item = createElement('div', { className: 'lg-legend-item' });

                const colorBox = createElement('div', {}, {
                    width: '11px',
                    height: '11px',
                    borderRadius: '3px',
                    backgroundColor: groupColorScale(group),
                    flexShrink: '0'
                });

                const label = createElement('span', {
                    innerHTML: `${escapeHtml(group)} <span style="color: var(--lg-muted);">(${count})</span>`
                });

                item.append(colorBox, label);
                item.addEventListener('click', () => {
                    newSelection(nodes.filter(n => n.group === group));
                    requestRender();
                });

                legendContent.appendChild(item);
            });

            if (hasMetric) {
                legendContent.appendChild(legendSectionTitle(
                    metric.label || 'Metric', groups.length === 0));
                legendContent.appendChild(buildMetricLegend(metric));
            }
        }

        function updateStatistics() {
            if (!config.ui.showStatistics) {
                statsPanel.style.display = 'none';
                return;
            }

            statsPanel.style.display = 'block';
            const nodeCount = nodes.length;
            const edgeCount = edges.length;
            const groupCount = new Set(nodes.map(n => n.group).filter(Boolean)).size;
            const density = nodeCount > 1 ? (2 * edgeCount) / (nodeCount * (nodeCount - 1)) : 0;

            // Calculate average degree
            const degrees = {};
            nodes.forEach(n => degrees[n.id] = 0);
            edges.forEach(e => {
                const sourceId = e.source.id || e.source;
                const targetId = e.target.id || e.target;
                if (degrees[sourceId] !== undefined) degrees[sourceId]++;
                if (degrees[targetId] !== undefined) degrees[targetId]++;
            });
            const avgDegree = nodeCount > 0 ?
                Object.values(degrees).reduce((a, b) => a + b, 0) / nodeCount : 0;

            statsPanel.innerHTML = `
                <div style="font-weight: 600; margin-bottom: 6px; border-bottom: 1px solid var(--lg-border); padding-bottom: 5px;">Statistics</div>
                <table class="lg-stats-table">
                    <tr><td>Nodes</td><td>${nodeCount}</td></tr>
                    <tr><td>Edges</td><td>${edgeCount}</td></tr>
                    <tr><td>Groups</td><td>${groupCount}</td></tr>
                    <tr><td>Density</td><td>${density.toFixed(4)}</td></tr>
                    <tr><td>Avg degree</td><td>${avgDegree.toFixed(2)}</td></tr>
                    <tr><td>Selected</td><td>${selectedNodes.size}</td></tr>
                </table>
            `;
        }

        // Coalesces render requests from any source (simulation ticks, mouse
        // interaction, toggles) into at most one canvas draw per animation
        // frame. Legend/statistics are DOM panels updated on data/selection
        // changes, not here.
        function requestRender() {
            if (renderScheduled) return;
            renderScheduled = true;
            requestAnimationFrame(() => {
                renderScheduled = false;
                render();
            });
        }

        // ---- Adaptive edge opacity + width (ink budget) ------------------
        // Overlapping strokes accumulate alpha (N edges at alpha a cover
        // 1-(1-a)^N), so any fixed opacity turns dense graphs into a solid
        // block when zoomed out yet looks fine zoomed in. Instead we
        // estimate how much "ink" the edges deposit per viewport pixel at
        // the current zoom and scale render-time alpha/width factors to
        // keep that near a fixed budget. When strokes are thicker than a
        // hairline (e.g. weightToWidth) the correction is split between
        // width and alpha — thin-and-visible reads better than
        // thick-and-invisible; hairline strokes put it all on alpha.
        // Recomputed on data load, zoom changes (with hysteresis), and
        // periodically while the layout is moving — never per frame.
        let edgeAlphaFactor = 1;
        let edgeWidthFactor = 1;
        let edgeAlphaK = 0; // transform.k at the last recompute
        let tickCounter = 0;

        function autoEdgeAlphaActive() {
            return config.edges.autoOpacity && !userSetEdgeOpacity;
        }

        function autoEdgeWidthActive() {
            return autoEdgeAlphaActive() && !userSetEdgeWidth;
        }

        function baseEdgeAlpha() {
            if (config.edges.weightToOpacity) {
                const [lo, hi] = config.edges.weightOpacityRange;
                return (lo + hi) / 2;
            }
            return config.edges.defaultOpacity;
        }

        // On-screen (CSS px) stroke width: floored at a hairline so edges
        // never vanish, capped so zooming in doesn't produce ropes. Widths
        // configured below the hairline are honored as-is.
        function screenEdgeWidth(width) {
            const nominal = width * config.edges.widthScale;
            return Math.max(Math.min(0.5, nominal),
                Math.min(nominal * transform.k, nominal * 1.5));
        }

        function updateEdgeAlpha() {
            if (!autoEdgeAlphaActive() || !edges.length || !nodes.length) return;
            edgeAlphaK = transform.k;
            // Mean edge length and node bounding box from a bounded sample,
            // so this stays O(1)-ish regardless of graph size.
            const eStride = Math.max(1, Math.floor(edges.length / 400));
            const useWidth = config.edges.weightToWidth;
            const weightSpan = weightExtent[1] - weightExtent[0];
            const [wLo, wHi] = config.edges.weightWidthRange;
            let totalLen = 0;
            let totalWidth = 0;
            let counted = 0;
            for (let i = 0; i < edges.length; i += eStride) {
                const e = edges[i];
                if (typeof e.source !== 'object' || typeof e.target !== 'object') continue;
                const dx = e.source.x - e.target.x;
                const dy = e.source.y - e.target.y;
                const len = Math.sqrt(dx * dx + dy * dy);
                if (!Number.isFinite(len)) continue;
                totalLen += len;
                // Budget for the *mapped* width, not defaultWidth, so
                // weight-to-width graphs account for their thicker strokes.
                if (useWidth && weightSpan > 0) {
                    const w = e.weight !== undefined ? e.weight : weightExtent[0];
                    const t = Math.max(0, Math.min(1, (w - weightExtent[0]) / weightSpan));
                    totalWidth += wLo + t * (wHi - wLo);
                } else {
                    totalWidth += config.edges.defaultWidth;
                }
                counted++;
            }
            if (!counted) return;
            const nStride = Math.max(1, Math.floor(nodes.length / 400));
            let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
            for (let i = 0; i < nodes.length; i += nStride) {
                const n = nodes[i];
                if (!Number.isFinite(n.x) || !Number.isFinite(n.y)) continue;
                if (n.x < x0) x0 = n.x;
                if (n.x > x1) x1 = n.x;
                if (n.y < y0) y0 = n.y;
                if (n.y > y1) y1 = n.y;
            }
            if (!(x1 > x0) || !(y1 > y0)) return;

            const k = transform.k;
            const viewArea = Math.max(viewWidth * viewHeight, 1);
            // Ink per edge on screen at full alpha, discounted by the share
            // of the graph actually inside the viewport when zoomed in.
            const meanScreenLen = (totalLen / counted) * k;
            const visibleShare = Math.min(1,
                viewArea / Math.max((x1 - x0) * (y1 - y0) * k * k, 1));
            const meanScreenWidth = screenEdgeWidth(totalWidth / counted);
            const coverage = edges.length * meanScreenLen *
                meanScreenWidth * visibleShare / viewArea;
            // Sub-linear ink budget, tuned on a matrix of graph sizes and
            // degrees (benchmark: 50-5000 nodes, mean degree 2-16): target
            // alpha ~= 0.12/sqrt(coverage). Linear-in-coverage budgets fail
            // at both ends — edges concentrate near the center, so a budget
            // loose enough for hairballs lets mid-density graphs go gray,
            // and one tight enough for mid-density erases hairball fringes.
            // Only ever dims: sparse graphs keep their configured style
            // (factors cap at 1), and effective alpha never drops below 0.02.
            const base = Math.max(baseEdgeAlpha(), 0.001);
            const ideal = 0.12 / Math.sqrt(Math.max(coverage, 1e-6));
            const needed = Math.min(1, ideal / base);
            // Width absorbs up to half the correction (in log space), but
            // the mean stroke never shrinks below the 0.5px hairline — so
            // hairline-width graphs put the whole correction on alpha,
            // leaving their behavior unchanged.
            let widthFactor = 1;
            if (autoEdgeWidthActive()) {
                widthFactor = Math.max(Math.sqrt(needed),
                    Math.min(1, 0.5 / Math.max(meanScreenWidth, 1e-6)));
            }
            const factor = Math.max(0.02 / base, needed / widthFactor);
            // Quantize so hexToRgba's cache stays effective.
            edgeAlphaFactor = Math.round(factor * 200) / 200;
            edgeWidthFactor = Math.round(widthFactor * 200) / 200;
            if (edgeOpacitySlider && autoEdgeAlphaActive()) {
                edgeOpacitySlider.sync(Math.round(base * edgeAlphaFactor * 100));
            }
            if (edgeWidthSlider && autoEdgeWidthActive()) {
                edgeWidthSlider.sync(
                    Math.round(config.edges.widthScale * edgeWidthFactor * 100));
            }
        }

        function rebuildRenderBatches() {
            const useWidth = config.edges.weightToWidth;
            const useOpacity = config.edges.weightToOpacity;
            const WEIGHT_BUCKETS = 5;
            const weightSpan = weightExtent[1] - weightExtent[0];
            const mapWeights = (useWidth || useOpacity) && weightSpan > 0;
            const fade = config.highlight.neighborFade;

            const edgeGroups = new Map();
            for (const d of edges) {
                // Before d3.forceLink resolves links, source/target are ids.
                if (typeof d.source !== 'object' || typeof d.target !== 'object') continue;
                if (egoSet && !(egoSet.has(d.source) && egoSet.has(d.target))) continue;
                const isSelected = selectedNodes.has(d.source) || selectedNodes.has(d.target);
                const isFaded = highlightSet !== null
                    && !(highlightSet.has(d.source) && highlightSet.has(d.target));
                const color = d.color || config.edges.defaultColor;
                let bucket = -1;
                if (mapWeights) {
                    const w = d.weight !== undefined ? d.weight : weightExtent[0];
                    const t = (w - weightExtent[0]) / weightSpan;
                    bucket = Math.min(WEIGHT_BUCKETS - 1, Math.floor(t * WEIGHT_BUCKETS));
                }
                const key = color + '|' + (isSelected ? 1 : 0) + '|' + (isFaded ? 1 : 0) + '|' + bucket;
                let batch = edgeGroups.get(key);
                if (!batch) {
                    // Resolve the final style once per batch. Selection wins
                    // over weight mapping; fading multiplies whatever opacity
                    // was chosen.
                    const tc = bucket >= 0 ? (bucket + 0.5) / WEIGHT_BUCKETS : 0;
                    let width = isSelected ? config.edges.selectedWidth : config.edges.defaultWidth;
                    if (!isSelected && useWidth && bucket >= 0) {
                        const [lo, hi] = config.edges.weightWidthRange;
                        width = lo + tc * (hi - lo);
                    }
                    let opacity = isSelected ? config.edges.selectedOpacity : config.edges.defaultOpacity;
                    if (!isSelected && useOpacity && bucket >= 0) {
                        const [lo, hi] = config.edges.weightOpacityRange;
                        opacity = lo + tc * (hi - lo);
                    }
                    if (isFaded) opacity *= fade;
                    batch = { color, width, opacity, selected: isSelected, items: [] };
                    edgeGroups.set(key, batch);
                }
                batch.items.push(d);
            }
            edgeBatches = [...edgeGroups.values()];

            const nodeGroups = new Map();
            maxNodeSize = config.nodes.defaultSize;
            for (const d of nodes) {
                if (egoSet && !egoSet.has(d)) continue;
                const color = d.group ? groupColorScale(d.group) : (d.color || config.nodes.defaultColor);
                const isSelected = selectedNodes.has(d);
                const isFaded = highlightSet !== null && !highlightSet.has(d);
                let opacity = d.opacity !== undefined ? d.opacity : config.nodes.defaultOpacity;
                if (isFaded) opacity *= fade;
                const size = d.size || config.nodes.defaultSize;
                if (size > maxNodeSize) maxNodeSize = size;
                const key = color + '|' + (isSelected ? 1 : 0) + '|' + opacity;
                let batch = nodeGroups.get(key);
                if (!batch) {
                    batch = { color, isSelected, opacity, items: [] };
                    nodeGroups.set(key, batch);
                }
                batch.items.push(d);
            }
            nodeBatches = [...nodeGroups.values()];
        }

        // Visible area in graph coordinates, padded so elements straddling
        // the viewport edge still draw.
        function viewportBounds(pad) {
            return {
                x0: -transform.x / transform.k - pad,
                y0: -transform.y / transform.k - pad,
                x1: (viewWidth - transform.x) / transform.k + pad,
                y1: (viewHeight - transform.y) / transform.k + pad
            };
        }

        function render() {
            context.save();
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            context.fillStyle = config.canvas.backgroundColor;
            context.fillRect(0, 0, viewWidth, viewHeight);
            context.translate(transform.x, transform.y);
            context.scale(transform.k, transform.k);

            if (config.groups.showEllipses) {
                drawGroupEllipses();
            }
            drawEdges();
            drawLabels();
            drawNodes();

            updateSelectionBox();
            context.restore();
        }
        function updateSelectionBox() {
            if (selectionBox) {
                context.setLineDash([5, 3]); 
                context.fillStyle = "rgba(100, 200, 255, 0.1)"; 
                context.strokeStyle = "#55c667";
                context.strokeRect(selectionBox.x, selectionBox.y, selectionBox.width, selectionBox.height);
                context.fillRect(selectionBox.x, selectionBox.y, selectionBox.width, selectionBox.height);
            }
        }

        function drawEdges() {
            const bounds = viewportBounds(config.edges.arrowSize);
            for (const batch of edgeBatches) {
                context.beginPath();
                for (const d of batch.items) {
                    const sx = d.source.x, sy = d.source.y;
                    const tx = d.target.x, ty = d.target.y;
                    if ((sx < bounds.x0 && tx < bounds.x0) || (sx > bounds.x1 && tx > bounds.x1) ||
                        (sy < bounds.y0 && ty < bounds.y0) || (sy > bounds.y1 && ty > bounds.y1)) continue;
                    context.moveTo(sx, sy);
                    context.lineTo(tx, ty);
                    if (showArrows) appendArrow(d);
                }
                // Selected edges keep full configured opacity and width so
                // the selection stays prominent in dense views.
                const alpha = batch.selected ? batch.opacity
                    : Math.min(1, Math.round(batch.opacity * edgeAlphaFactor * 100) / 100);
                context.strokeStyle = hexToRgba(batch.color, alpha);
                const width = batch.selected ? batch.width
                    : batch.width * edgeWidthFactor;
                // lineWidth is in graph units (the context is scaled by k);
                // divide the clamped screen width back down.
                context.lineWidth = screenEdgeWidth(width) / transform.k;
                context.stroke();
            }
        }

        // Adds arrow-head segments to the path currently being built by
        // drawEdges; stroked together with the rest of the batch.
        function appendArrow(d) {
            const arrowWidth = config.edges.arrowWidth;
            // Place the chevron tip on the target node's border (matching
            // the drawn radius), not offset from its center.
            const radius = ((d.target.size || config.nodes.defaultSize)
                * config.nodes.sizeScale) / 2;
            const angle = Math.atan2(d.target.y - d.source.y, d.target.x - d.source.x);
            const arrowX = d.target.x - radius * Math.cos(angle);
            const arrowY = d.target.y - radius * Math.sin(angle);

            context.moveTo(arrowX, arrowY);
            context.lineTo(arrowX - arrowWidth * Math.cos(angle - Math.PI / 6), arrowY - arrowWidth * Math.sin(angle - Math.PI / 6));
            context.moveTo(arrowX, arrowY);
            context.lineTo(arrowX - arrowWidth * Math.cos(angle + Math.PI / 6), arrowY - arrowWidth * Math.sin(angle + Math.PI / 6));
        }

        function drawNodes() {
            const sizeScale = config.nodes.sizeScale;
            const bounds = viewportBounds(maxNodeSize * sizeScale + config.nodes.selectedSizeIncrease);
            for (const batch of nodeBatches) {
                context.beginPath();
                for (const d of batch.items) {
                    if (d.x < bounds.x0 || d.x > bounds.x1 || d.y < bounds.y0 || d.y > bounds.y1) continue;
                    const size = (d.size || config.nodes.defaultSize) * sizeScale;
                    const radius = (batch.isSelected ? size + config.nodes.selectedSizeIncrease : size) / 2;
                    context.moveTo(d.x + radius, d.y);
                    context.arc(d.x, d.y, radius, 0, 2 * Math.PI);
                }
                context.fillStyle = batch.color;
                context.globalAlpha = batch.opacity;
                context.fill();
                context.strokeStyle = batch.isSelected ? config.nodes.selectedBorderColor : config.nodes.borderColor;
                context.lineWidth = config.nodes.borderWidth;
                context.stroke();
            }
            context.globalAlpha = 1.0;
        }

        function drawLabels() {
            if (!config.labels.visible) return;
            // Labels extend left of the node; pad the cull bounds so labels
            // of just-offscreen nodes stay visible.
            const bounds = viewportBounds(200);
            const defaultFont = `${config.labels.fontSize}px ${config.labels.fontFamily}`;
            let currentFont = defaultFont;
            let currentFill = null;
            context.font = defaultFont;
            for (const d of nodes) {
                if (d.x < bounds.x0 || d.x > bounds.x1 || d.y < bounds.y0 || d.y > bounds.y1) continue;
                if (egoSet && !egoSet.has(d)) continue;
                // Faded nodes keep their dot but lose the label: less clutter
                // around the highlighted neighborhood.
                if (highlightSet !== null && !highlightSet.has(d)) continue;
                const fill = selectedNodes.has(d) ? config.labels.selectedColor : config.labels.color;
                if (fill !== currentFill) {
                    context.fillStyle = fill;
                    currentFill = fill;
                }
                const font = d.labelFontSize
                    ? `${d.labelFontSize}px ${config.labels.fontFamily}`
                    : defaultFont;
                if (font !== currentFont) {
                    context.font = font;
                    currentFont = font;
                }
                // Text width only changes if the font does; cache it per node.
                if (d._labelWidth === undefined || d._labelFont !== font) {
                    d._labelWidth = context.measureText(d.id).width;
                    d._labelFont = font;
                }
                const size = (d.size || config.nodes.defaultSize) * config.nodes.sizeScale;
                context.fillText(d.id, d.x - d._labelWidth - 4, d.y + size / 2 + 4);
            }
        }

        function drawGroupEllipses() {
            // Accumulate raw moments per group in a single pass over nodes;
            // centroid and covariance follow from them directly.
            const groupStats = new Map();
            for (const node of nodes) {
                if (!node.group) continue;
                let s = groupStats.get(node.group);
                if (!s) {
                    s = { n: 0, sx: 0, sy: 0, sxx: 0, sxy: 0, syy: 0 };
                    groupStats.set(node.group, s);
                }
                s.n++;
                s.sx += node.x;
                s.sy += node.y;
                s.sxx += node.x * node.x;
                s.sxy += node.x * node.y;
                s.syy += node.y * node.y;
            }

            groupStats.forEach((s, group) => {
                if (s.n < 2) return;
                const cx = s.sx / s.n;
                const cy = s.sy / s.n;
                const covarianceMatrix = [
                    [s.sxx / s.n - cx * cx, s.sxy / s.n - cx * cy],
                    [s.sxy / s.n - cx * cy, s.syy / s.n - cy * cy]
                ];

                const [lambda1, lambda2, v1] = computeEigen(covarianceMatrix);

                // Rotation angle of the ellipse
                const angle = Math.atan2(v1[1], v1[0]);

                // Semi-axis lengths (scaled by a factor for better visual
                // coverage); clamp against tiny negative values from
                // floating-point error in the moment computation.
                const radiusX = Math.sqrt(Math.max(lambda1, 0)) * 2;
                const radiusY = Math.sqrt(Math.max(lambda2, 0)) * 2;

                context.save();
                context.translate(cx, cy);
                context.rotate(angle);
                context.beginPath();
                context.ellipse(0, 0, radiusX + 5, radiusY + 5, 0, 0, 2 * Math.PI);
                context.fillStyle = hexToRgba(groupColorScale(group), config.groups.fillOpacity);
                context.fill();
                context.strokeStyle = groupColorScale(group);
                context.lineWidth = config.groups.strokeWidth;
                context.stroke();
                context.restore();
            });
        }

        function getNodeAtCoordinates(x, y) {
            // Pick radius matches the drawn radius, with a minimum of ~6
            // screen pixels so small nodes stay clickable when zoomed out.
            const minRadius = 6 / transform.k;
            return nodes.find(node => {
                if (egoSet && !egoSet.has(node)) return false;
                const size = (node.size || config.nodes.defaultSize) * config.nodes.sizeScale;
                const drawn = (selectedNodes.has(node) ? size + config.nodes.selectedSizeIncrease : size) / 2;
                const r = Math.max(drawn, minRadius);
                const dx = node.x - x;
                const dy = node.y - y;
                return dx * dx + dy * dy < r * r;
            });
        }

        function loadData(newNodes, newEdges) {
            transform = d3.zoomIdentity;
            selectedNodes.clear();
            selectionBox = null;
            draggingNode = null;
            dragOffsetX = 0;
            dragOffsetY = 0;
            hoverNode = null;
            highlightSet = null;
            egoSet = null;
            userInteracted = false;
            autoFitDone = false;

            nodes = newNodes;
            edges = newEdges;

            recalculateForce();
            updateEdgeAlpha();
            updateLegend();
            updateStatistics();
            // Reset d3-zoom's internal state to match the fresh transform;
            // otherwise the first zoom gesture jumps back to the old view.
            if (zoom.transform) {
                d3.select(canvas).call(zoom.transform, d3.zoomIdentity);
            }
            emit('dataLoad', { nodes, edges });
        }

        // Legacy data path: JSON embedded in #nodesData/#edgesData script
        // tags (used by the Python/R embeddings).
        function reloadData() {
            try {
                const nodesData = document.getElementById('nodesData');
                const edgesData = document.getElementById('edgesData');

                if (!nodesData || !edgesData) {
                    console.error('nodesData or edgesData element not found');
                    return;
                }
                loadData(JSON.parse(nodesData.textContent), JSON.parse(edgesData.textContent));
            } catch (error) {
                console.error('Error reloading data:', error);
            }
        }
        function recalculateForce() {
            try {
                const simulationForce = config.simulation.chargeStrength / Math.max(nodes.length, 1);
                const linkDistance = config.simulation.linkDistance;

                // Stop the previous simulation so its timer does not keep
                // ticking (and rendering) alongside the new one.
                if (simulation && simulation.stop) {
                    simulation.stop();
                }

                if (config.layout === 'circular') {
                    applyCircularLayout();
                    simulation = d3.forceSimulation(nodes)
                        .force("link", d3.forceLink(edges).id(d => d.id).distance(linkDistance).strength(0.1))
                        .force("charge", d3.forceManyBody().strength(-simulationForce * 0.1))
                        .on("tick", handleSimulationTick)
                        .on("end", handleSimulationEnd);
                } else {
                    const clusterGroups = config.simulation.groupAttraction > 0
                        && nodes.some(n => n.group);
                    // Short intra-group and long cross-group link distances
                    // break the symmetry that a pure centroid-attraction
                    // force cannot (coincident centroids pull nowhere).
                    const linkDistanceFor = clusterGroups
                        ? (link) => {
                            const sameGroup = link.source.group
                                && link.source.group === link.target.group;
                            return sameGroup ? linkDistance * 0.5 : linkDistance * 1.6;
                        }
                        : linkDistance;
                    simulation = d3.forceSimulation(nodes)
                        .force("link", d3.forceLink(edges).id(d => d.id).distance(linkDistanceFor))
                        .force("charge", d3.forceManyBody().strength(-simulationForce))
                        .force("center", d3.forceCenter(lightGraph.clientWidth / 2, lightGraph.clientHeight / 2))
                        .on("tick", handleSimulationTick)
                        .on("end", handleSimulationEnd);
                    if (clusterGroups) {
                        simulation.force("cluster", forceCluster(config.simulation.groupAttraction));
                    }
                    const warmup = warmupTickCount();
                    if (warmup > 0) simulation.tick(warmup);
                }

                // forceLink has resolved edge endpoints to node objects now;
                // build the adjacency map, weight extent, and style batches.
                neighborMap = new Map();
                let wLo = Infinity, wHi = -Infinity;
                for (const e of edges) {
                    if (typeof e.source !== 'object' || typeof e.target !== 'object') continue;
                    if (!neighborMap.has(e.source)) neighborMap.set(e.source, new Set());
                    if (!neighborMap.has(e.target)) neighborMap.set(e.target, new Set());
                    neighborMap.get(e.source).add(e.target);
                    neighborMap.get(e.target).add(e.source);
                    const w = e.weight !== undefined ? e.weight : 1;
                    if (w < wLo) wLo = w;
                    if (w > wHi) wHi = w;
                }
                weightExtent = edges.length ? [wLo, wHi] : [1, 1];
                updateHighlight();

                d3.select(canvas).call(zoom);
                // Double-click is reserved for the ego filter.
                d3.select(canvas).on("dblclick.zoom", null);

            } catch (error) {
                console.error('Error updating visualization:', error);
            }
        }

        // Pan/zoom the viewport to frame the given nodes.
        function fitToNodes(fitNodes, padding = 40) {
            if (!fitNodes.length) return;
            let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
            for (const node of fitNodes) {
                if (node.x < x0) x0 = node.x;
                if (node.x > x1) x1 = node.x;
                if (node.y < y0) y0 = node.y;
                if (node.y > y1) y1 = node.y;
            }
            const k = Math.max(config.canvas.zoomMin, Math.min(config.canvas.zoomMax,
                Math.min((viewWidth - 2 * padding) / Math.max(x1 - x0, 1),
                         (viewHeight - 2 * padding) / Math.max(y1 - y0, 1))));
            transform = d3.zoomIdentity
                .translate(viewWidth / 2 - k * (x0 + x1) / 2,
                           viewHeight / 2 - k * (y0 + y1) / 2)
                .scale(k);
            if (zoom.transform) {
                d3.select(canvas).call(zoom.transform, transform);
            }
            requestRender();
        }

        // 'auto' warmup: run the whole layout up front when that is cheap,
        // and back off toward ~50 ticks (still enough to untangle the
        // initial random placement) as the per-tick cost grows.
        function warmupTickCount() {
            const setting = config.simulation.warmupTicks;
            if (setting === 'auto') {
                return Math.max(50, Math.min(300,
                    Math.round(150000 / Math.max(nodes.length + edges.length, 1))));
            }
            return Math.max(0, Math.floor(setting) || 0);
        }

        // Fit the view once the force layout settles, unless the user
        // already navigated somewhere on purpose.
        function handleSimulationTick() {
            // Layout motion stretches edges; refresh the auto alpha every
            // 64 ticks rather than every frame.
            if ((tickCounter++ & 63) === 0) updateEdgeAlpha();
            // Track the settling layout with the camera so it stays framed
            // while it expands; hands off after the first settle or as soon
            // as the user pans, zooms, or drags a node.
            if (config.canvas.autoFit && !autoFitDone && !userInteracted) {
                fitToNodes(egoSet ? nodes.filter(node => egoSet.has(node)) : nodes);
            }
            requestRender();
        }

        function handleSimulationEnd() {
            updateEdgeAlpha();
            if (config.canvas.autoFit && !autoFitDone && !userInteracted) {
                autoFitDone = true;
                self.zoomToFit();
            }
        }

        function applyCircularLayout() {
            const centerX = lightGraph.clientWidth / 2;
            const centerY = lightGraph.clientHeight / 2;
            const radius = Math.min(centerX, centerY) * 0.7;

            // Group nodes by their group property
            const groups = [...new Set(nodes.map(n => n.group || 'default'))].sort();
            const groupMap = new Map();
            groups.forEach((g, i) => groupMap.set(g, i));

            // Sort nodes by group for better visual clustering
            const sortedNodes = [...nodes].sort((a, b) => {
                const groupA = a.group || 'default';
                const groupB = b.group || 'default';
                return groupMap.get(groupA) - groupMap.get(groupB);
            });

            // Assign positions in a circle
            sortedNodes.forEach((node, i) => {
                const angle = (2 * Math.PI * i) / sortedNodes.length - Math.PI / 2;
                node.x = centerX + radius * Math.cos(angle);
                node.y = centerY + radius * Math.sin(angle);
                node.fx = node.x; // Fix position initially
                node.fy = node.y;
            });

            // Unfix after a short delay to allow some movement
            setTimeout(() => {
                nodes.forEach(node => {
                    node.fx = null;
                    node.fy = null;
                });
            }, 100);
        }
        // #endregion

        // 2.3 Interactions ----------------------------------------------------
        sidebarToggle.addEventListener('click', () => {
            const open = parseFloat(sceneSidebar.style.right) < 0;
            sceneSidebar.style.right = open ? '12px' : '-320px';
            sidebarToggle.classList.toggle('lg-active', open);
        });
        canvas.addEventListener("mousedown", (event) => {
            if (event.button !== 0) return;
            hideFloatingInput();
            const [mouseX, mouseY] = d3.pointer(event);
            const transformedMouseX = (mouseX - transform.x) / transform.k;
            const transformedMouseY = (mouseY - transform.y) / transform.k;
            const onNode = getNodeAtCoordinates(transformedMouseX, transformedMouseY);

            if (onNode) {
                if (event.shiftKey) {
                    // Shift-click to add or remove node from selected nodes
                    toggleSelection(onNode);
                } else {
                    draggingNode = onNode;
                    dragMoved = false;
                    dragOffsetX = onNode.x - transformedMouseX;
                    dragOffsetY = onNode.y - transformedMouseY;
                    if (!selectedNodes.has(onNode)) {
                        newSelection([onNode]);
                    }
                }
                requestRender();
            } else if (event.shiftKey) {
                selectionBox = { x: transformedMouseX, y: transformedMouseY, width: 0, height: 0 };
                requestRender();
            }
            // Plain drag on empty space is handled by d3-zoom (pan).
        });

        canvas.addEventListener("mousemove", (event) => {
            const [mouseX, mouseY] = d3.pointer(event);
            const transformedMouseX = (mouseX - transform.x) / transform.k;
            const transformedMouseY = (mouseY - transform.y) / transform.k;

            if (draggingNode) {
                tooltip.style.display = 'none';
                const dx = transformedMouseX + dragOffsetX - draggingNode.x;
                const dy = transformedMouseY + dragOffsetY - draggingNode.y;

                if (selectedNodes.size > 0 && selectedNodes.has(draggingNode)) {
                    selectedNodes.forEach(node => {
                        node.x += dx;
                        node.y += dy;
                    });
                } else {
                    draggingNode.x = transformedMouseX + dragOffsetX;
                    draggingNode.y = transformedMouseY + dragOffsetY;
                }
                dragMoved = true;
                // A node drag counts as taking over the view: stop the
                // camera from re-fitting mid-drag.
                userInteracted = true;
                if (simulation) {
                    simulation.alpha(0.1).restart();
                }
                requestRender();
                return;
            }

            if (selectionBox) {
                tooltip.style.display = 'none';
                selectionBox.width = transformedMouseX - selectionBox.x;
                selectionBox.height = transformedMouseY - selectionBox.y;
                requestRender();
                return;
            }

            // A held button here means d3-zoom is panning: skip hover work.
            if (event.buttons) return;

            // Hover: cursor hint + tooltip + neighbor highlighting
            const hoveredNode = getNodeAtCoordinates(transformedMouseX, transformedMouseY);
            canvas.style.cursor = hoveredNode ? 'pointer' : 'grab';

            if (config.highlight.enabled && hoveredNode !== hoverNode) {
                hoverNode = hoveredNode || null;
                updateHighlight();
                requestRender();
            }

            if (config.ui.showTooltips && hoveredNode) {
                let tooltipContent = `<strong>${escapeHtml(hoveredNode.id)}</strong>`;
                if (hoveredNode.group) {
                    tooltipContent += `<br><span style="color: ${groupColorScale(hoveredNode.group)};">● ${escapeHtml(hoveredNode.group)}</span>`;
                }
                // Add any custom metadata
                if (hoveredNode.metadata) {
                    for (const [key, value] of Object.entries(hoveredNode.metadata)) {
                        tooltipContent += `<br>${escapeHtml(key)}: ${escapeHtml(value)}`;
                    }
                }
                tooltip.innerHTML = tooltipContent;
                tooltip.style.display = 'block';
                tooltip.style.left = `${mouseX + 15}px`;
                tooltip.style.top = `${mouseY + 15}px`;
            } else {
                tooltip.style.display = 'none';
            }
        });

        // Hide tooltip and clear hover highlight when mouse leaves canvas
        canvas.addEventListener("mouseleave", () => {
            tooltip.style.display = 'none';
            if (hoverNode) {
                hoverNode = null;
                updateHighlight();
                requestRender();
            }
        });

        canvas.addEventListener("click", (event) => {
            if (suppressNextClick) {
                suppressNextClick = false;
                return;
            }
            const [mouseX, mouseY] = d3.pointer(event);
            const node = getNodeAtCoordinates(
                (mouseX - transform.x) / transform.k,
                (mouseY - transform.y) / transform.k);
            if (node) {
                emit('nodeClick', { node, event });
            } else if (!event.shiftKey && selectedNodes.size > 0) {
                // Click on empty space deselects (d3-zoom swallows the
                // click if the gesture was actually a pan).
                clearSelection();
                requestRender();
            }
        });

        canvas.addEventListener("dblclick", (event) => {
            if (!config.egoFilter.enabled) return;
            const [mouseX, mouseY] = d3.pointer(event);
            const node = getNodeAtCoordinates(
                (mouseX - transform.x) / transform.k,
                (mouseY - transform.y) / transform.k);
            if (node) {
                applyEgoFilter(node, config.egoFilter.depth);
            } else {
                clearEgoFilter();
            }
        });

        function handleKeydown(event) {
            const active = document.activeElement;
            const typing = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA');
            if (event.key === 'Escape' && !typing && egoSet) {
                clearEgoFilter();
            }
        }
        document.addEventListener('keydown', handleKeydown);

        // On window so drags that end outside the canvas still finish.
        function handleWindowMouseUp(event) {
            if (draggingNode) {
                if (dragMoved) {
                    suppressNextClick = true;
                }
                draggingNode = null;
                requestRender();
            } else if (selectionBox) {
                addToSelection(nodes.filter(node => isNodeInSelection(node, selectionBox)));
                if (selectedNodes.size > 0) {
                    const [mouseX, mouseY] = d3.pointer(event, canvas);
                    showFloatingInput(mouseX, mouseY);
                }
                selectionBox = null;
                suppressNextClick = true;
                requestRender();
            }
        }
        window.addEventListener('mouseup', handleWindowMouseUp);

        searchBox.addEventListener('input', () => {
            const searchTerm = searchBox.value.trim().toLowerCase();
            if (searchTerm) {
                const matches = nodes.filter(node => node.id.toLowerCase().includes(searchTerm));
                newSelection(matches);
                searchCount.textContent = String(matches.length);
                searchClear.style.display = 'block';
            } else {
                clearSelection();
                searchCount.textContent = '';
                searchClear.style.display = 'none';
            }
            requestRender();
        });
        searchBox.addEventListener('keydown', (event) => {
            // Enter frames the current matches
            if (event.key === 'Enter' && selectedNodes.size > 0) {
                fitToNodes(Array.from(selectedNodes));
            }
        });
        searchClear.addEventListener('click', () => {
            searchBox.value = '';
            searchBox.dispatchEvent(new Event('input'));
            searchBox.focus();
        });
        groupButton.addEventListener('click', () => {
            const groups = [...new Set(nodes.map(node => node.group).filter(Boolean))];
            const groupLabel = groupInputBox.value || `Group ${groups.length+1}`;
            if (groupLabel && selectedNodes.size > 0) {
                selectedNodes.forEach(node => node.group = groupLabel);
                updateLegend();
                requestRender();
            };
            groupInputBox.value = "";
            hideFloatingInput();
            clearSelection();
        });
        clearGroupButton.addEventListener('click', () => {
            if (selectedNodes.size > 0) {
                selectedNodes.forEach(node => delete node.group);
                updateLegend();
                requestRender();
            }
            groupInputBox.value = "";
            hideFloatingInput();
            clearSelection();
        });

        // Layout controls
        function setLayout(layout) {
            config.layout = layout;
            forceLayoutButton.classList.toggle('lg-active', layout === 'force');
            circularLayoutButton.classList.toggle('lg-active', layout === 'circular');
            recalculateForce();
        }
        forceLayoutButton.addEventListener('click', () => setLayout('force'));
        circularLayoutButton.addEventListener('click', () => setLayout('circular'));

        restartButton.addEventListener('click', () => {
            recalculateForce();
        });

        fitButton.addEventListener('click', () => {
            self.zoomToFit();
        });

        // Export functions
        function downloadFile(dataURL, filename) {
            const link = document.createElement('a');
            link.download = filename;
            link.href = dataURL;
            link.click();
        }

        // Re-render the scene into an offscreen canvas at export resolution
        // rather than copying the on-screen bitmap, so exports stay sharp
        // regardless of display DPI.
        function renderToCanvas(scale) {
            const exportCanvas = document.createElement('canvas');
            exportCanvas.width = Math.round(viewWidth * scale);
            exportCanvas.height = Math.round(viewHeight * scale);
            const prevContext = context;
            const prevRatio = pixelRatio;
            context = exportCanvas.getContext('2d');
            pixelRatio = scale;
            try {
                render();
            } finally {
                context = prevContext;
                pixelRatio = prevRatio;
            }
            return exportCanvas;
        }

        exportPNGButton.addEventListener('click', () => {
            const scale = Math.max(1, config.canvas.exportScale || 1) *
                Math.max(1, pixelRatio);
            downloadFile(renderToCanvas(scale).toDataURL('image/png'), 'lightgraph.png');
        });

        exportSVGButton.addEventListener('click', () => {
            // Create SVG from current canvas state
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', viewWidth);
            svg.setAttribute('height', viewHeight);
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

            // Background
            const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            bg.setAttribute('width', '100%');
            bg.setAttribute('height', '100%');
            bg.setAttribute('fill', config.canvas.backgroundColor);
            svg.appendChild(bg);

            // Create a group with transform
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            g.setAttribute('transform', `translate(${transform.x},${transform.y}) scale(${transform.k})`);

            // Draw edges
            edges.forEach(edge => {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', edge.source.x);
                line.setAttribute('y1', edge.source.y);
                line.setAttribute('x2', edge.target.x);
                line.setAttribute('y2', edge.target.y);
                line.setAttribute('stroke', config.edges.defaultColor);
                line.setAttribute('stroke-opacity',
                    Math.min(1, config.edges.defaultOpacity * edgeAlphaFactor));
                line.setAttribute('stroke-width',
                    config.edges.defaultWidth * config.edges.widthScale * edgeWidthFactor);
                g.appendChild(line);
            });

            // Draw nodes
            nodes.forEach(node => {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', node.x);
                circle.setAttribute('cy', node.y);
                circle.setAttribute('r',
                    (node.size || config.nodes.defaultSize) * config.nodes.sizeScale / 2);
                circle.setAttribute('fill', node.group ? groupColorScale(node.group) : (node.color || config.nodes.defaultColor));
                circle.setAttribute('stroke', config.nodes.borderColor);
                circle.setAttribute('stroke-width', config.nodes.borderWidth);
                g.appendChild(circle);

                // Draw label
                if (config.labels.visible) {
                    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    text.setAttribute('x', node.x - 4);
                    text.setAttribute('y', node.y + 4);
                    text.setAttribute('font-size', node.labelFontSize || config.labels.fontSize);
                    text.setAttribute('font-family', config.labels.fontFamily);
                    text.setAttribute('fill', config.labels.color);
                    text.setAttribute('text-anchor', 'end');
                    text.textContent = node.id;
                    g.appendChild(text);
                }
            });

            svg.appendChild(g);

            const serializer = new XMLSerializer();
            const svgString = serializer.serializeToString(svg);
            const blob = new Blob([svgString], { type: 'image/svg+xml' });
            downloadFile(URL.createObjectURL(blob), 'lightgraph.svg');
        });

        exportJSONButton.addEventListener('click', () => {
            const graphData = {
                nodes: nodes.map(n => ({
                    id: n.id,
                    group: n.group,
                    x: n.x,
                    y: n.y,
                    size: n.size,
                    color: n.color
                })),
                edges: edges.map(e => ({
                    source: e.source.id || e.source,
                    target: e.target.id || e.target,
                    weight: e.weight
                })),
                config: config
            };
            const blob = new Blob([JSON.stringify(graphData, null, 2)], { type: 'application/json' });
            downloadFile(URL.createObjectURL(blob), 'lightgraph.json');
        });

        // Debounced: resize events fire continuously during a drag-resize.
        // Only the canvas dimensions and centering force need updating;
        // rebuilding the simulation would discard the current layout.
        let resizeTimer = null;
        function handleWindowResize() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => self.resize(), 150);
        }
        window.addEventListener('resize', handleWindowResize);

        // =====================================================================
        // 3. Public API ---------------------------------------------------------
        // =====================================================================
        this.on = (event, callback) => {
            if (!listeners.has(event)) listeners.set(event, new Set());
            listeners.get(event).add(callback);
            return this;
        };

        this.off = (event, callback) => {
            const callbacks = listeners.get(event);
            if (callbacks) callbacks.delete(callback);
            return this;
        };

        // Replace the graph data: setData({nodes: [...], edges: [...]})
        this.setData = (data = {}) => {
            loadData(data.nodes || [], data.edges || []);
            return this;
        };

        // Re-read data from the legacy #nodesData/#edgesData script tags.
        this.reloadFromDom = () => {
            reloadData();
            return this;
        };

        // Merge a partial config over the current one and re-render.
        this.updateConfig = (partial = {}) => {
            config = mergeConfig(config, partial);
            if (partial.edges && 'showArrows' in partial.edges) {
                showArrows = config.edges.showArrows;
                arrowsToggle.checked = showArrows;
            }
            if (partial.edges && partial.edges.defaultOpacity !== undefined) {
                userSetEdgeOpacity = true;
            }
            if (partial.edges && partial.edges.widthScale !== undefined) {
                userSetEdgeWidth = true;
            }
            if (!autoEdgeWidthActive()) {
                edgeWidthFactor = 1;
            }
            if (autoEdgeAlphaActive()) {
                updateEdgeAlpha();
            } else {
                edgeAlphaFactor = 1;
            }
            autoOpacityToggle.checked = autoEdgeAlphaActive();
            if (partial.canvas && 'pixelRatio' in partial.canvas) {
                sizeCanvas();
            }
            updateHighlight();
            updateLegend();
            updateStatistics();
            if (partial.simulation || partial.layout) {
                recalculateForce();
            }
            requestRender();
            return this;
        };

        this.getSelection = () => Array.from(selectedNodes);

        this.selectNodes = (ids) => {
            const idSet = new Set(ids);
            newSelection(nodes.filter(node => idSet.has(node.id)));
            requestRender();
            return this;
        };

        // Show only the k-hop neighborhood of a node (same as double-click).
        this.egoFilter = (nodeId, depth = config.egoFilter.depth) => {
            const node = nodes.find(n => n.id === nodeId);
            if (node) {
                applyEgoFilter(node, depth);
            }
            return this;
        };

        this.clearEgoFilter = () => {
            clearEgoFilter();
            return this;
        };

        this.getVisibleNodes = () =>
            egoSet ? nodes.filter(node => egoSet.has(node)) : nodes.slice();

        // Pan/zoom so the visible graph (all nodes, or the active ego
        // neighborhood) fits with the given padding.
        this.zoomToFit = (padding = 40) => {
            fitToNodes(egoSet ? nodes.filter(node => egoSet.has(node)) : nodes, padding);
            return this;
        };

        // Run the force layout synchronously (no animation) and render the
        // settled result — for static exports and headless rendering.
        this.settle = (ticks = 300) => {
            if (simulation && simulation.stop && simulation.tick) {
                simulation.stop();
                simulation.tick(ticks);
                handleSimulationEnd();
            }
            render();
            return this;
        };

        this.resize = () => {
            sizeCanvas();
            if (simulation && simulation.force && simulation.force("center")) {
                simulation.force("center",
                    d3.forceCenter(lightGraph.clientWidth / 2, lightGraph.clientHeight / 2));
            }
            requestRender();
            return this;
        };

        // Tear down everything this instance attached outside its own scope.
        this.destroy = () => {
            emit('destroy');
            if (simulation && simulation.stop) {
                simulation.stop();
            }
            clearTimeout(resizeTimer);
            if (dprMedia && dprMedia.removeEventListener) {
                dprMedia.removeEventListener('change', handleDprChange);
            }
            window.removeEventListener('resize', handleWindowResize);
            window.removeEventListener('mouseup', handleWindowMouseUp);
            document.removeEventListener('keydown', handleKeydown);
            listeners.clear();
            [canvas, mainControlBar, sceneSidebar, floatingInput,
             legendPanel, statsPanel, tooltip].forEach(el => el.remove());
            lightGraph.classList.remove('lg-root');
            lightGraph.removeAttribute('data-lg-theme');
            if (container.lightgraph === self) {
                delete container.lightgraph;
            }
        };

        // Initial data load
        if (options.legacyDom) {
            reloadData();
        } else {
            loadData(options.nodes || [], options.edges || []);
        }
    }

    // =========================================================================
    // Legacy bootstrap: reads graph data from well-known DOM elements
    // (#lightGraph, #nodesData, #edgesData, #lightGraphConfig). Used by the
    // Python/R embeddings; new code should use `new LightGraph(...)`.
    // =========================================================================
    let legacyInstance = null;

    function initializeVisualization() {
        const container = document.getElementById('lightGraph');
        if (!container) {
            console.error('lightGraph container element not found');
            return null;
        }
        // Hosts like the R htmlwidget call this on every re-render; clean up
        // the previous instance so listeners and observers do not accumulate.
        if (legacyInstance) {
            legacyInstance.destroy();
        }
        const configElement = document.getElementById('lightGraphConfig');
        const config = configElement ? JSON.parse(configElement.textContent) : {};
        legacyInstance = new LightGraph(container, { config, legacyDom: true });

        // Live-update hook: hosts that re-render data in place provide a
        // #networkData element to observe.
        const networkDataElement = document.getElementById('networkData');
        if (networkDataElement) {
            const observer = new MutationObserver(() => {
                setTimeout(() => legacyInstance && legacyInstance.reloadFromDom(), 500);
            });
            observer.observe(networkDataElement,
                { childList: true, subtree: true, characterData: true });
            legacyInstance.on('destroy', () => observer.disconnect());
        }
        return legacyInstance;
    }

    // Resize hook for the R htmlwidget.
    function resize() {
        if (legacyInstance) legacyInstance.resize();
    }

    // Auto-initialize in the browser when the legacy container appears.
    if (typeof document !== 'undefined') {
        let initAttempts = 0;
        const checkCanvas = setInterval(() => {
            if (document.getElementById("lightGraph")) {
                clearInterval(checkCanvas);
                initializeVisualization();
            } else if (++initAttempts >= 100) {
                // Give up after ~10s rather than polling forever on pages
                // that never create the container.
                clearInterval(checkCanvas);
            }
        }, 100);
    }

    return {
        LightGraph,
        initializeVisualization,
        resize,
        DEFAULT_CONFIG,
        mergeConfig,
        escapeHtml,
        hexToRgba,
        lerpHex,
        formatMetricValue,
        computeEigen,
        isNodeInSelection
    };
});
