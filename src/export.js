import { state } from './state.js';
import { worldToScreen, getGroupColor } from './utils.js';
import { THEMES } from './config.js';

// =========================================================================
// Export functions
// =========================================================================

function downloadFile(dataURL, filename) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataURL;
    link.click();
}

// =========================================================================
// PNG export — composites WebGL canvas + labels + legend + stats
// =========================================================================

export function exportPNG() {
    const webglCanvas = state.renderer.domElement;
    const dpr = window.devicePixelRatio || 1;
    const w = webglCanvas.width;
    const h = webglCanvas.height;

    const compositeCanvas = document.createElement('canvas');
    compositeCanvas.width = w;
    compositeCanvas.height = h;
    const ctx = compositeCanvas.getContext('2d');

    // 1. Draw WebGL canvas
    ctx.drawImage(webglCanvas, 0, 0, w, h);

    // Scale for device pixel ratio
    ctx.save();
    ctx.scale(dpr, dpr);

    // 2. Draw labels if visible
    if (state.config.labels.visible) {
        drawLabelsToCanvas(ctx);
    }

    // 3. Draw legend if visible
    if (state.config.ui.showLegend) {
        drawLegendToCanvas(ctx);
    }

    // 4. Draw stats if visible
    if (state.config.ui.showStatistics) {
        drawStatsToCanvas(ctx);
    }

    ctx.restore();

    const dataURL = compositeCanvas.toDataURL('image/png');
    downloadFile(dataURL, 'lightgraph.png');
}

function drawLabelsToCanvas(ctx) {
    const { nodes, selectedNodes, config } = state;
    const theme = THEMES[state.currentTheme] || THEMES.dark;

    nodes.forEach(node => {
        const screen = worldToScreen(node.x || 0, node.y || 0);
        const size = node.size || config.nodes.defaultSize;
        const isSelected = selectedNodes.has(node);
        const gap = size / 2 + 4;
        const scaledGap = gap * state.transform.k;

        const fontSize = node.labelFontSize || config.labels.fontSize;
        const fontWeight = isSelected ? '600' : 'normal';
        ctx.font = `${fontWeight} ${fontSize}px ${config.labels.fontFamily}`;
        ctx.fillStyle = isSelected ? config.labels.selectedColor : config.labels.color;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';

        // Text shadow
        if (state.currentTheme === 'dark') {
            ctx.shadowColor = 'rgba(0,0,0,0.8)';
            ctx.shadowBlur = 3;
            ctx.shadowOffsetY = 1;
        } else {
            ctx.shadowColor = 'rgba(255,255,255,0.8)';
            ctx.shadowBlur = 2;
            ctx.shadowOffsetY = 1;
        }

        ctx.fillText(node.id, screen.x - scaledGap, screen.y);
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;
    });
}

function drawLegendToCanvas(ctx) {
    const { nodes, config } = state;
    const theme = THEMES[state.currentTheme] || THEMES.dark;

    const groups = [...new Set(nodes.map(n => n.group).filter(Boolean))].sort();
    if (groups.length === 0) return;

    // Use the legend panel's position from the DOM
    const panel = state.ui.legendPanel;
    if (!panel || panel.style.display === 'none') return;
    const rect = panel.getBoundingClientRect();
    const containerRect = state.container.getBoundingClientRect();
    const x = rect.left - containerRect.left;
    const y = rect.top - containerRect.top;
    const w = rect.width;
    const h = rect.height;

    // Draw panel background
    ctx.fillStyle = theme.panelBg;
    ctx.beginPath();
    roundRect(ctx, x, y, w, h, 10);
    ctx.fill();

    // Title
    ctx.fillStyle = theme.panelText;
    ctx.font = '600 12px Inter, -apple-system, system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('Groups', x + 14, y + 14);

    // Items
    let itemY = y + 36;
    groups.forEach(group => {
        const count = nodes.filter(n => n.group === group).length;
        // Color swatch
        ctx.fillStyle = getGroupColor(group);
        ctx.beginPath();
        roundRect(ctx, x + 14, itemY + 1, 12, 12, 3);
        ctx.fill();

        // Label
        ctx.fillStyle = theme.panelText;
        ctx.font = '12px Inter, -apple-system, system-ui, sans-serif';
        ctx.fillText(`${group} (${count})`, x + 34, itemY + 1);
        itemY += 20;
    });
}

function drawStatsToCanvas(ctx) {
    const { nodes, edges, selectedNodes, config } = state;
    const theme = THEMES[state.currentTheme] || THEMES.dark;

    const panel = state.ui.statsPanel;
    if (!panel || panel.style.display === 'none') return;
    const rect = panel.getBoundingClientRect();
    const containerRect = state.container.getBoundingClientRect();
    const x = rect.left - containerRect.left;
    const y = rect.top - containerRect.top;
    const w = rect.width;
    const h = rect.height;

    // Draw panel background
    ctx.fillStyle = theme.panelBg;
    ctx.beginPath();
    roundRect(ctx, x, y, w, h, 10);
    ctx.fill();

    // Title
    ctx.fillStyle = theme.panelText;
    ctx.font = '600 12px Inter, -apple-system, system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('Statistics', x + 14, y + 14);

    // Stats data
    const nodeCount = nodes.length;
    const edgeCount = edges.length;
    const groupCount = new Set(nodes.map(n => n.group).filter(Boolean)).size;
    const density = nodeCount > 1 ? (2 * edgeCount) / (nodeCount * (nodeCount - 1)) : 0;
    const degrees = {};
    nodes.forEach(n => degrees[n.id] = 0);
    edges.forEach(e => {
        const sid = e.source.id || e.source;
        const tid = e.target.id || e.target;
        if (degrees[sid] !== undefined) degrees[sid]++;
        if (degrees[tid] !== undefined) degrees[tid]++;
    });
    const avgDegree = nodeCount > 0 ? Object.values(degrees).reduce((a, b) => a + b, 0) / nodeCount : 0;

    const stats = [
        ['Nodes', nodeCount],
        ['Edges', edgeCount],
        ['Groups', groupCount],
        ['Density', density.toFixed(4)],
        ['Avg Degree', avgDegree.toFixed(2)],
        ['Selected', selectedNodes.size],
    ];

    ctx.font = '12px Inter, -apple-system, system-ui, sans-serif';
    let rowY = y + 36;
    stats.forEach(([label, value]) => {
        ctx.globalAlpha = 0.7;
        ctx.textAlign = 'left';
        ctx.fillText(label, x + 14, rowY);
        ctx.globalAlpha = 1.0;
        ctx.font = '500 12px Inter, -apple-system, system-ui, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(String(value), x + w - 14, rowY);
        ctx.font = '12px Inter, -apple-system, system-ui, sans-serif';
        rowY += 18;
    });
}

function roundRect(ctx, x, y, w, h, r) {
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

// =========================================================================
// SVG export — includes labels, legend, stats
// =========================================================================

export function exportSVG() {
    const { nodes, edges, config, transform } = state;
    const container = state.container;
    const w = container.clientWidth;
    const h = container.clientHeight;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', w);
    svg.setAttribute('height', h);
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    // Background
    const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bg.setAttribute('width', '100%');
    bg.setAttribute('height', '100%');
    bg.setAttribute('fill', config.canvas.backgroundColor);
    svg.appendChild(bg);

    // Transform group
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${transform.x},${transform.y}) scale(${transform.k})`);

    // Edges
    edges.forEach(edge => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', edge.source.x);
        line.setAttribute('y1', edge.source.y);
        line.setAttribute('x2', edge.target.x);
        line.setAttribute('y2', edge.target.y);
        const edgeColor = edge.color ? edge.color
            : (state.colorEdgesByGroup && edge.source.group) ? getGroupColor(edge.source.group)
            : config.edges.defaultColor;
        line.setAttribute('stroke', edgeColor);
        line.setAttribute('stroke-opacity', config.edges.defaultOpacity);
        line.setAttribute('stroke-width', config.edges.defaultWidth);
        g.appendChild(line);
    });

    // Nodes
    nodes.forEach(node => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', node.x);
        circle.setAttribute('cy', node.y);
        circle.setAttribute('r', (node.size || config.nodes.defaultSize) / 2);
        circle.setAttribute('fill', node.group ? getGroupColor(node.group) : (node.color || config.nodes.defaultColor));
        circle.setAttribute('stroke', config.nodes.borderColor);
        circle.setAttribute('stroke-width', config.nodes.borderWidth);
        g.appendChild(circle);

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

    // Legend (screen-space, outside transform group)
    if (config.ui.showLegend) {
        const groups = [...new Set(nodes.map(n => n.group).filter(Boolean))].sort();
        if (groups.length > 0) {
            const theme = THEMES[state.currentTheme] || THEMES.dark;
            const legendG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            const lx = 20, ly = h - 20 - (groups.length * 20 + 36);

            // Background
            const lbg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            lbg.setAttribute('x', lx);
            lbg.setAttribute('y', ly);
            lbg.setAttribute('width', 140);
            lbg.setAttribute('height', groups.length * 20 + 36);
            lbg.setAttribute('rx', 10);
            lbg.setAttribute('fill', theme.panelBg);
            lbg.setAttribute('opacity', '0.9');
            legendG.appendChild(lbg);

            // Title
            const lt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            lt.setAttribute('x', lx + 14);
            lt.setAttribute('y', ly + 22);
            lt.setAttribute('font-size', '12');
            lt.setAttribute('font-weight', '600');
            lt.setAttribute('fill', theme.panelText);
            lt.textContent = 'Groups';
            legendG.appendChild(lt);

            groups.forEach((group, i) => {
                const count = nodes.filter(n => n.group === group).length;
                const iy = ly + 36 + i * 20;
                const cr = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                cr.setAttribute('x', lx + 14);
                cr.setAttribute('y', iy);
                cr.setAttribute('width', 12);
                cr.setAttribute('height', 12);
                cr.setAttribute('rx', 3);
                cr.setAttribute('fill', getGroupColor(group));
                legendG.appendChild(cr);

                const ct = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                ct.setAttribute('x', lx + 34);
                ct.setAttribute('y', iy + 10);
                ct.setAttribute('font-size', '12');
                ct.setAttribute('fill', theme.panelText);
                ct.textContent = `${group} (${count})`;
                legendG.appendChild(ct);
            });

            svg.appendChild(legendG);
        }
    }

    // Stats (screen-space, outside transform group)
    if (config.ui.showStatistics) {
        const theme = THEMES[state.currentTheme] || THEMES.dark;
        const nodeCount = nodes.length;
        const edgeCount = edges.length;
        const groupCount = new Set(nodes.map(n => n.group).filter(Boolean)).size;
        const density = nodeCount > 1 ? (2 * edgeCount) / (nodeCount * (nodeCount - 1)) : 0;
        const degrees = {};
        nodes.forEach(n => degrees[n.id] = 0);
        edges.forEach(e => {
            const sid = e.source.id || e.source;
            const tid = e.target.id || e.target;
            if (degrees[sid] !== undefined) degrees[sid]++;
            if (degrees[tid] !== undefined) degrees[tid]++;
        });
        const avgDegree = nodeCount > 0 ? Object.values(degrees).reduce((a, b) => a + b, 0) / nodeCount : 0;

        const stats = [
            ['Nodes', nodeCount],
            ['Edges', edgeCount],
            ['Groups', groupCount],
            ['Density', density.toFixed(4)],
            ['Avg Degree', avgDegree.toFixed(2)],
        ];

        const statsG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        const sw = 160, sh = stats.length * 18 + 36;
        const sx = w - 20 - sw, sy = h - 20 - sh;

        const sbg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        sbg.setAttribute('x', sx);
        sbg.setAttribute('y', sy);
        sbg.setAttribute('width', sw);
        sbg.setAttribute('height', sh);
        sbg.setAttribute('rx', 10);
        sbg.setAttribute('fill', theme.panelBg);
        sbg.setAttribute('opacity', '0.9');
        statsG.appendChild(sbg);

        const st = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        st.setAttribute('x', sx + 14);
        st.setAttribute('y', sy + 22);
        st.setAttribute('font-size', '12');
        st.setAttribute('font-weight', '600');
        st.setAttribute('fill', theme.panelText);
        st.textContent = 'Statistics';
        statsG.appendChild(st);

        stats.forEach(([label, value], i) => {
            const iy = sy + 38 + i * 18;
            const sl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            sl.setAttribute('x', sx + 14);
            sl.setAttribute('y', iy + 10);
            sl.setAttribute('font-size', '12');
            sl.setAttribute('fill', theme.panelText);
            sl.setAttribute('opacity', '0.7');
            sl.textContent = label;
            statsG.appendChild(sl);

            const sv = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            sv.setAttribute('x', sx + sw - 14);
            sv.setAttribute('y', iy + 10);
            sv.setAttribute('font-size', '12');
            sv.setAttribute('font-weight', '500');
            sv.setAttribute('fill', theme.panelText);
            sv.setAttribute('text-anchor', 'end');
            sv.textContent = String(value);
            statsG.appendChild(sv);
        });

        svg.appendChild(statsG);
    }

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    downloadFile(URL.createObjectURL(blob), 'lightgraph.svg');
}

export function exportJSON() {
    const { nodes, edges, config } = state;

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
}
