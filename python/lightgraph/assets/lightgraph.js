(function() {
    window.lightGraph = window.lightGraph || {};

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
            selectedBorderColor: '#000000'
        },
        edges: {
            defaultColor: '#333333',
            selectedColor: '#999999',
            defaultOpacity: 0.1,
            selectedOpacity: 0.6,
            defaultWidth: 1,
            selectedWidth: 2,
            showArrows: false,
            arrowSize: 10,
            arrowWidth: 5
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
            centerStrength: 1.0
        },
        groups: {
            fillOpacity: 0.125,
            strokeWidth: 2,
            showEllipses: true
        },
        canvas: {
            backgroundColor: '#ffffff',
            zoomMin: 0.1,
            zoomMax: 5
        },
        ui: {
            theme: 'light',
            showLegend: true,
            showStatistics: false,
            showTooltips: true
        },
        layout: 'force' // 'force' or 'circular'
    };

    // Deep merge function for config
    function mergeConfig(defaults, overrides) {
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

    window.lightGraph.initializeVisualization = () => {
        // =====================================================================
        // 0. Load Configuration -----------------------------------------------
        // =====================================================================
        const configElement = document.getElementById('lightGraphConfig');
        const userConfig = configElement ? JSON.parse(configElement.textContent) : {};
        const config = mergeConfig(DEFAULT_CONFIG, userConfig);

        // =====================================================================
        // 1. Visual Element Section -------------------------------------------
        // =====================================================================

        const style = document.createElement('style');
        style.textContent = `
            .select-icon { color: #666; }
            .zoom-icon { color: #666; }
            .active-mode .select-icon { opacity: 0.3; }
            .active-mode .zoom-icon { opacity: 1; }
        `;
        document.head.appendChild(style);

        // #region 1.1 Element constructors ------------------------------------
        function createElement(tag, options = {}, styles = {}) {
            const element = document.createElement(tag);
            Object.assign(element, options);
            Object.assign(element.style, styles);
            return element;
        }

        function createContainer() {
            return createElement('div', {}, {
                padding: '8px 20px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                border: 'none',
                borderRadius: '6px',
                background: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s'
            });
        }

        function createButton({ id, title, htmlContent }) {
            const button = createElement('button', { id, title, innerHTML: htmlContent }, {
                padding: '5px 15px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s'
            });
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-1px)';
                button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
            });
            button.addEventListener('mouseleave', () => {
                button.style.transform = '';
                button.style.boxShadow = '';
            });
            return button;
        }

        function createInput({ id, placeholder }) {
            return createElement('input', { id, type: 'text', placeholder }, {
                padding: '5px',
                fontSize: '14px',
                borderRadius: '3px',
                border: '1px solid #ccc',
                width: '120px'
            });
        }

        function createTextBlock({ id, header, content }) {
            const textBlockHeader = createElement('span', { innerHTML: header }, {
                fontSize: '14px',
                fontWeight: 'bold'
            });
            const textBlockContent = createElement('span', { id, innerHTML: content });
            const textBlock = createElement('div');
            textBlock.append(textBlockHeader, textBlockContent);
            return [textBlock, textBlockContent];
        }

        function createCollapsibleSection(title, defaultOpen = true) {
            const header = createElement('div', { 
                className: 'section-header',
                innerHTML: `<span>${title}</span><div class="toggle-icon"><svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" /></svg></div>` 
            }, {
                display: 'flex',
                justifyContent: 'space-between',
                cursor: 'pointer',
                padding: '8px 0',
                borderBottom: '1px solid #eee',
                fontFamily: 'Arial, Helvetica, sans-serif'
            });
        
            const content = createElement('div', { 
                className: 'section-content' 
            }, {
                padding: '8px 0',
                display: defaultOpen ? 'block' : 'none'
            });
        
            header.addEventListener('click', () => {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
                header.querySelector('.toggle-icon').innerHTML = 
                    content.style.display === 'none' ? '<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg>' : '<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" /></svg>';
            });
        
            return [header, content];
        }
        //#endregion
        
        // #region 1.2 Creating canvas -----------------------------------------
        const lightGraph = document.getElementById("lightGraph");
        Object.assign(lightGraph.style, {
            height: '800px', position: 'relative', overflow: 'hidden'});
        const canvas = createElement("canvas", {
            id: "lightGraphCanvas", 
            width: lightGraph.clientWidth, 
            height: lightGraph.clientHeight });
        const context = canvas.getContext("2d");
        lightGraph.appendChild(canvas);
        //#endregion

        // #region 1.3 Additional visual elements ------------------------------
        // 1.3.1 Control and search panel 
        const mainControlBar = createElement('div', { id: 'mainBar' }, {
            position: 'absolute',
            top: '12px',
            right: '12px',
            display: 'flex',
            gap: '8px',
            zIndex: 1000,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '8px',
            padding: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(8px)'
        });

        const sceneSidebar = createElement('div', { id: 'sceneSidebar' }, {
            position: 'absolute',
            top: '60px',  
            right: '-350px', 
            width: '330px',
            transition: 'right 0.3s ease',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(6px)'
        });

        // # Main Control Bar
        const toggleButton = createButton({
            id: 'toggleButton',
            title: 'Switch between Zoom and Selection modes',
            htmlContent: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="zoom-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <svg width="18" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="select-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            `
        });
        const searchBox = createInput({ 
            id: 'searchBox',
            placeholder: 'Search Node...'
        });
        searchBox.style.width = '180px';
        
        const sidebarToggle = createButton({
            id: 'sidebarToggle',
            title: 'Display More Tools',
            htmlContent: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>'  
        });

        const arrowToggleButton = createButton({
            id: 'arrowToggleButton',
            title: 'Click to toggle arrows on edges',
            htmlContent: '<span style="color:lightgray;">Arrows</span>'
        });
        
        // Add control panel to the page
        lightGraph.append(mainControlBar, sceneSidebar);
        mainControlBar.append(toggleButton, searchBox, sidebarToggle);

        // Display Settings Section
        const [viewHeader, viewContent] = createCollapsibleSection('Display Settings');
        const labelsToggleButton = createButton({
            id: 'labelsToggleButton',
            title: 'Toggle node labels',
            htmlContent: config.labels.visible ? '<strong>Labels</strong>' : '<span style="color:lightgray;">Labels</span>'
        });
        const ellipsesToggleButton = createButton({
            id: 'ellipsesToggleButton',
            title: 'Toggle group ellipses',
            htmlContent: config.groups.showEllipses ? '<strong>Ellipses</strong>' : '<span style="color:lightgray;">Ellipses</span>'
        });
        const legendToggleButton = createButton({
            id: 'legendToggleButton',
            title: 'Toggle legend',
            htmlContent: config.ui.showLegend ? '<strong>Legend</strong>' : '<span style="color:lightgray;">Legend</span>'
        });
        const statsToggleButton = createButton({
            id: 'statsToggleButton',
            title: 'Toggle statistics panel',
            htmlContent: config.ui.showStatistics ? '<strong>Stats</strong>' : '<span style="color:lightgray;">Stats</span>'
        });
        viewContent.append(arrowToggleButton, labelsToggleButton, ellipsesToggleButton, legendToggleButton, statsToggleButton);

        // Layout Section
        const [layoutHeader, layoutContent] = createCollapsibleSection('Layout', false);
        const layoutSelect = createElement('select', { id: 'layoutSelect' }, {
            padding: '5px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '100%',
            marginBottom: '8px'
        });
        layoutSelect.innerHTML = `
            <option value="force" ${config.layout === 'force' ? 'selected' : ''}>Force-Directed</option>
            <option value="circular" ${config.layout === 'circular' ? 'selected' : ''}>Circular</option>
        `;
        const restartButton = createButton({
            id: 'restartButton',
            title: 'Restart simulation',
            htmlContent: 'Restart Layout'
        });
        layoutContent.append(layoutSelect, restartButton);

        // Export Section
        const [exportHeader, exportContent] = createCollapsibleSection('Export', false);
        const exportPNGButton = createButton({
            id: 'exportPNG',
            title: 'Export as PNG image',
            htmlContent: 'PNG'
        });
        const exportSVGButton = createButton({
            id: 'exportSVG',
            title: 'Export as SVG (vector)',
            htmlContent: 'SVG'
        });
        const exportJSONButton = createButton({
            id: 'exportJSON',
            title: 'Export graph data as JSON',
            htmlContent: 'JSON'
        });
        exportContent.append(exportPNGButton, exportSVGButton, exportJSONButton);

        sceneSidebar.append(viewHeader, viewContent, layoutHeader, layoutContent, exportHeader, exportContent);


        const floatingInput = createElement('div', { id: 'floatingLabelInput' }, {
            position: 'absolute',
            display: 'none',
            background: 'white',
            padding: '8px',
            borderRadius: '6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        });
        const groupInputBox = createInput({
                id: 'groupLabelInput',
                placeholder: 'Enter label'
        });
        groupInputBox.style.width = '160px';
        const groupButton = createButton({
            id: 'groupLabelButton',
            title: 'Click to assign group to selected nodes',
            htmlContent: '✓'
        });
        const clearGroupButton = createButton({
            id: 'clearGroupLabelButton',
            title: 'Click to clear labels on selected nodes',
            htmlContent: 'Clear',
        })
        
        floatingInput.append(groupInputBox, groupButton, clearGroupButton);
        lightGraph.appendChild(floatingInput);

        // 1.3.3 Legend Panel
        const legendPanel = createElement('div', { id: 'legendPanel' }, {
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '8px',
            padding: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            maxHeight: '200px',
            overflowY: 'auto',
            fontSize: '12px',
            display: 'none',
            minWidth: '120px'
        });
        const legendTitle = createElement('div', { innerHTML: '<strong>Groups</strong>' }, {
            marginBottom: '8px',
            borderBottom: '1px solid #eee',
            paddingBottom: '4px'
        });
        const legendContent = createElement('div', { id: 'legendContent' });
        legendPanel.append(legendTitle, legendContent);
        lightGraph.appendChild(legendPanel);

        // 1.3.4 Statistics Panel
        const statsPanel = createElement('div', { id: 'statsPanel' }, {
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '8px',
            padding: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            fontSize: '11px',
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

        // const groupPanel = createContainer();
        // Object.assign(groupPanel.style, {
        //     width: '240px', maxHeight: '200px', 
        //     overflowY: 'auto', top: '60px' });
        // const [existingGroupBlock, existingGroupBlockContent] = createTextBlock({
        //     id: "existingGroups", 
        //     header: "Clusters: ", 
        //     content: "None"
        // });
        // const [selectedNodesBlock, selectedNodesBlockContent] = createTextBlock({
        //     id: "selectedNodes", 
        //     header: "Selected: ", 
        //     content: "None",
        // });
        // const groupInputBox = createInput({
        //     id: 'groupLabelInput',
        //     placeholder: 'Enter label'
        // });
        // groupInputBox.style.width = '80px';
        // groupInputBox.disabled = true;
        // const groupButton = createButton({
        //     id: 'groupLabelButton',
        //     title: 'Click to assign group to selected nodes',
        //     htmlContent: 'Add',
        // })
        // groupButton.disabled = true;
        // const clearGroupButton = createButton({
        //     id: 'clearGroupLabelButton',
        //     title: 'Click to clear labels on selected nodes',
        //     htmlContent: 'Clear',
        // })
        // clearGroupButton.disabled = true;

        // #endregion

        // =====================================================================
        // 2. UI logics --------------------------------------------------------
        // =====================================================================

        // #region 2.1 global variables ----------------------------------------
        let selectionMode = false;
        let transform = d3.zoomIdentity;
        let showArrows = false;
        let nodes = [];
        let edges = [];
        let selectedNodes = new Set([]);
        let selectionBox = null;
        let draggingNode = null;
        let dragOffsetX = 0;
        let dragOffsetY = 0;
        let simulation = d3.forceSimulation([]);
        // Extended color palette: schemeCategory10 (10) + schemeSet2 (8) + schemeSet3 (12) = 30 colors
        const extendedColors = [
            ...d3.schemeCategory10,
            ...d3.schemeSet2,
            ...d3.schemeSet3
        ];
        const groupColorScale = d3.scaleOrdinal(extendedColors);
        let zoom = d3.zoom().scaleExtent([config.canvas.zoomMin, config.canvas.zoomMax])
            .on("zoom", (event) => {
                if (!selectionMode) {
                    transform = event.transform;
                    ticked();
                }
            });
        // #endregion

        // #region 2.2 Interaction functions -----------------------------------
        function clearSelection() {
            selectedNodes.clear();
        }

        function addToSelection(nodes) {
            nodes.forEach(node => selectedNodes.add(node));
        }

        function newSelection(nodes) {
            clearSelection();
            addToSelection(nodes);
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
        function updateGroupPanel() {
            // Legacy function - kept for compatibility
        }

        function updateLegend() {
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

            groups.forEach(group => {
                const count = nodes.filter(n => n.group === group).length;
                const item = createElement('div', {}, {
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '4px',
                    cursor: 'pointer',
                    padding: '2px 4px',
                    borderRadius: '3px'
                });

                const colorBox = createElement('div', {}, {
                    width: '12px',
                    height: '12px',
                    borderRadius: '2px',
                    backgroundColor: groupColorScale(group),
                    marginRight: '8px',
                    flexShrink: '0'
                });

                const label = createElement('span', {
                    innerHTML: `${group} (${count})`
                }, { fontSize: '11px' });

                item.append(colorBox, label);
                item.addEventListener('mouseenter', () => {
                    item.style.backgroundColor = 'rgba(0,0,0,0.05)';
                });
                item.addEventListener('mouseleave', () => {
                    item.style.backgroundColor = '';
                });
                item.addEventListener('click', () => {
                    newSelection(nodes.filter(n => n.group === group));
                    ticked();
                });

                legendContent.appendChild(item);
            });
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
                <div style="font-weight: bold; margin-bottom: 6px; border-bottom: 1px solid #eee; padding-bottom: 4px;">Statistics</div>
                <table style="border-collapse: collapse;">
                    <tr><td style="padding-right: 12px;">Nodes:</td><td style="text-align: right;">${nodeCount}</td></tr>
                    <tr><td style="padding-right: 12px;">Edges:</td><td style="text-align: right;">${edgeCount}</td></tr>
                    <tr><td style="padding-right: 12px;">Groups:</td><td style="text-align: right;">${groupCount}</td></tr>
                    <tr><td style="padding-right: 12px;">Density:</td><td style="text-align: right;">${density.toFixed(4)}</td></tr>
                    <tr><td style="padding-right: 12px;">Avg Degree:</td><td style="text-align: right;">${avgDegree.toFixed(2)}</td></tr>
                    <tr><td style="padding-right: 12px;">Selected:</td><td style="text-align: right;">${selectedNodes.size}</td></tr>
                </table>
            `;
        }

        function ticked() {
            context.save();
            // Set background color
            context.fillStyle = config.canvas.backgroundColor;
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.translate(transform.x, transform.y);
            context.scale(transform.k, transform.k);

            if (config.groups.showEllipses) {
                drawGroupEllipses();
            }
            edges.forEach(drawEdge);
            nodes.forEach(drawLabel);
            nodes.forEach(drawNode);

            updateSelectionBox();
            updateGroupPanel();
            updateLegend();
            updateStatistics();
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

        function printSelectedNodes() {
            // selectedNodeArray = Array.from(selectedNodes);
            // // selectedNodesBlockContent.innerText = selectedNodeArray.length ? selectedNodeArray.map(node => node.id).sort().join(', ') : "None";
            // const enableControls = selectedNodeArray.length > 0;
            // if (enableControls) {
            //     showFloatingInput(x, y);
            // } else {
            //     showFloatingInput(x, y);
            // }
        }

        function drawEdge(d) {
            context.beginPath();
            context.moveTo(d.source.x, d.source.y);
            context.lineTo(d.target.x, d.target.y);

            const includeEitherEnd = selectedNodes.has(d.source) || selectedNodes.has(d.target);
            const edgeColor = d.color || config.edges.defaultColor;
            const opacity = includeEitherEnd ? config.edges.selectedOpacity : config.edges.defaultOpacity;

            // Convert hex color to rgba with opacity
            context.strokeStyle = hexToRgba(edgeColor, opacity);
            context.lineWidth = includeEitherEnd ? config.edges.selectedWidth : config.edges.defaultWidth;

            context.stroke();
            if (showArrows) drawArrow(d);
        }

        function drawArrow(d) {
            const arrowLength = config.edges.arrowSize;
            const arrowWidth = config.edges.arrowWidth;
            const dx = d.target.x - d.source.x;
            const dy = d.target.y - d.source.y;
            const angle = Math.atan2(dy, dx);
            const arrowX = d.target.x - arrowLength * Math.cos(angle);
            const arrowY = d.target.y - arrowLength * Math.sin(angle);

            context.beginPath();
            context.moveTo(arrowX, arrowY);
            context.lineTo(arrowX - arrowWidth * Math.cos(angle - Math.PI / 6), arrowY - arrowWidth * Math.sin(angle - Math.PI / 6));
            context.moveTo(arrowX, arrowY);
            context.lineTo(arrowX - arrowWidth * Math.cos(angle + Math.PI / 6), arrowY - arrowWidth * Math.sin(angle + Math.PI / 6));
            context.stroke();
        }

        function hexToRgba(hex, alpha) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }

        function drawNode(d) {
            const color = d.group ? groupColorScale(d.group) : (d.color || config.nodes.defaultColor);
            const isSelected = selectedNodes.has(d);

            context.fillStyle = color;
            context.globalAlpha = d.opacity !== undefined ? d.opacity : config.nodes.defaultOpacity;
            context.strokeStyle = isSelected ? config.nodes.selectedBorderColor : config.nodes.borderColor;
            context.lineWidth = config.nodes.borderWidth;
            const size = d.size || config.nodes.defaultSize;
            const nodeSize = isSelected ? size + config.nodes.selectedSizeIncrease : size;

            context.beginPath();
            context.arc(d.x, d.y, nodeSize / 2, 0, 2 * Math.PI);
            context.fill();
            context.stroke();
            context.globalAlpha = 1.0;
        }

        function drawLabel(d) {
            if (!config.labels.visible) return;
            const size = d.size || config.nodes.defaultSize;
            const labelFontSize = d.labelFontSize || config.labels.fontSize;
            context.font = `${labelFontSize}px ${config.labels.fontFamily}`;
            context.fillStyle = selectedNodes.has(d) ? config.labels.selectedColor : config.labels.color;
            const textWidth = context.measureText(d.id).width;
            context.fillText(d.id, d.x - textWidth - 4, d.y + size / 2 + 4);
        }

        function computeEigen(covMatrix) {
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

        function drawGroupEllipses() {
            const groups = [...new Set(nodes.map(node => node.group).filter(Boolean))];
            
            groups.forEach(group => {
                const groupNodes = nodes.filter(node => node.group === group);
                
                if (groupNodes.length > 1) {
                    // Calculate the centroid of the group
                    const centroid = {
                        x: d3.mean(groupNodes, d => d.x),
                        y: d3.mean(groupNodes, d => d.y)
                    };
        
                    // Calculate the covariance matrix
                    let sumXX = 0, sumXY = 0, sumYY = 0;
                    groupNodes.forEach(node => {
                        const dx = node.x - centroid.x;
                        const dy = node.y - centroid.y;
                        sumXX += dx * dx;
                        sumXY += dx * dy;
                        sumYY += dy * dy;
                    });
        
                    const covarianceMatrix = [
                        [sumXX / groupNodes.length, sumXY / groupNodes.length],
                        [sumXY / groupNodes.length, sumYY / groupNodes.length]
                    ];

                    const [lambda1, lambda2, v1, v2] = computeEigen(covarianceMatrix);
        
                    // Calculate rotation angle of the ellipse
                    const angle = Math.atan2(v1[1], v1[0]);
        
                    // Semi-axis lengths (scaled by a factor for better visual coverage)
                    const radiusX = Math.sqrt(lambda1) * 2;
                    const radiusY = Math.sqrt(lambda2) * 2;
        
                    // Draw the ellipse
                    context.save();
                    context.translate(centroid.x, centroid.y);
                    context.rotate(angle);
                    context.beginPath();
                    context.ellipse(0, 0, radiusX + 5, radiusY + 5, 0, 0, 2 * Math.PI);
                    context.fillStyle = hexToRgba(groupColorScale(group), config.groups.fillOpacity);
                    context.fill();
                    context.strokeStyle = groupColorScale(group);
                    context.lineWidth = config.groups.strokeWidth;
                    context.stroke();
                    context.restore();
                }
            });
        }        

        function isNodeInSelection(node, box) {
            const x0 = Math.min(box.x, box.x + box.width),
                  x1 = Math.max(box.x, box.x + box.width),
                  y0 = Math.min(box.y, box.y + box.height),
                  y1 = Math.max(box.y, box.y + box.height);

            return node.x >= x0 && node.x <= x1 && node.y >= y0 && node.y <= y1;
        }

        function getNodeAtCoordinates(x, y) {
            return nodes.find(node => Math.sqrt((node.x - x) ** 2 + (node.y - y) ** 2) < (node.size || 15) / 2);
        }

        function reloadData() {
            try {
                const nodesData = document.getElementById('nodesData');
                const edgesData = document.getElementById('edgesData');
                
                if (!nodesData || !edgesData) {
                    console.error('nodesData or edgesData element not found');
                    return;
                }

                selectionMode = false;
                transform = d3.zoomIdentity;
                clearSelection();
                selectionBox = null;
                draggingNode = null;
                dragOffsetX = 0;
                dragOffsetY = 0;

                nodes = JSON.parse(nodesData.textContent);
                edges = JSON.parse(edgesData.textContent);

                console.log('nodesData:', nodes);
                console.log('edgesData:', edges);

                toggleButton.classList.add('active-mode');
                toggleButton.querySelector('.zoom-icon').style.opacity = 1.0;
                toggleButton.querySelector('.select-icon').style.opacity = 0.3;
                recalculateForce();
            } catch (error) {
                console.error('Error reloading data:', error);
            }
        }
        function recalculateForce() {
            try {
                const simParams = document.getElementById('simulationParams');
                let simulationForce, linkDistance;

                if (simParams) {
                    const simParams_ = JSON.parse(simParams.textContent);
                    simulationForce = simParams_.totalForce / nodes.length;
                    linkDistance = simParams_.linkDistance;
                } else {
                    simulationForce = config.simulation.chargeStrength / nodes.length;
                    linkDistance = config.simulation.linkDistance;
                }

                if (config.layout === 'circular') {
                    applyCircularLayout();
                    simulation = d3.forceSimulation(nodes)
                        .force("link", d3.forceLink(edges).id(d => d.id).distance(linkDistance).strength(0.1))
                        .force("charge", d3.forceManyBody().strength(-simulationForce * 0.1))
                        .on("tick", ticked);
                } else {
                    simulation = d3.forceSimulation(nodes)
                        .force("link", d3.forceLink(edges).id(d => d.id).distance(linkDistance))
                        .force("charge", d3.forceManyBody().strength(-simulationForce))
                        .force("center", d3.forceCenter(lightGraph.clientWidth / 2, lightGraph.clientHeight / 2))
                        .on("tick", ticked);
                }

                d3.select(canvas).call(zoom);

            } catch (error) {
                console.error('Error updating visualization:', error);
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
            const currentRight = parseFloat(sceneSidebar.style.right);
            sceneSidebar.style.right = currentRight < 0 ? '12px' : '-350px';
        });
        canvas.addEventListener("mousedown", (event) => {
            console.log('Mouse down event triggered');
            hideFloatingInput();
            if (selectionMode) {
                const shiftKey = event.shiftKey;

                const [mouseX, mouseY] = d3.pointer(event);
                const transformedMouseX = (mouseX - transform.x) / transform.k;
                const transformedMouseY = (mouseY - transform.y) / transform.k;
                const onNode = getNodeAtCoordinates(transformedMouseX, transformedMouseY);

                if (onNode) {
                    if (shiftKey) {
                        // Shift-click to add or remove node from selected nodes
                        selectedNodes.has(onNode) ? selectedNodes.delete(onNode) : selectedNodes.add(onNode);
                    } else {
                        draggingNode = onNode;
                        dragOffsetX = onNode.x - transformedMouseX;
                        dragOffsetY = onNode.y - transformedMouseY;
                        if (!selectedNodes.has(onNode)) {
                            newSelection([onNode]);
                        }
                    }

                } else {
                    if (!shiftKey) {
                        clearSelection();
                    }
                    selectionBox = { x: transformedMouseX, y: transformedMouseY, width: 0, height: 0 };
                }
                ticked();
                // printSelectedNodes();
            }
        });

        canvas.addEventListener("mousemove", (event) => {
            const [mouseX, mouseY] = d3.pointer(event);
            const transformedMouseX = (mouseX - transform.x) / transform.k;
            const transformedMouseY = (mouseY - transform.y) / transform.k;

            // Handle tooltip (always active)
            if (config.ui.showTooltips && !selectionMode) {
                const hoveredNode = getNodeAtCoordinates(transformedMouseX, transformedMouseY);
                if (hoveredNode) {
                    let tooltipContent = `<strong>${hoveredNode.id}</strong>`;
                    if (hoveredNode.group) {
                        tooltipContent += `<br><span style="color: ${groupColorScale(hoveredNode.group)};">● ${hoveredNode.group}</span>`;
                    }
                    // Add any custom metadata
                    if (hoveredNode.metadata) {
                        for (const [key, value] of Object.entries(hoveredNode.metadata)) {
                            tooltipContent += `<br>${key}: ${value}`;
                        }
                    }
                    tooltip.innerHTML = tooltipContent;
                    tooltip.style.display = 'block';
                    tooltip.style.left = `${mouseX + 15}px`;
                    tooltip.style.top = `${mouseY + 15}px`;
                } else {
                    tooltip.style.display = 'none';
                }
            }

            // Handle selection mode interactions
            if (selectionMode) {
                tooltip.style.display = 'none'; // Hide tooltip in selection mode

                if (draggingNode) {
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
                    simulation.alpha(0.1).restart();
                    ticked();
                } else if (selectionBox) {
                    selectionBox.width = transformedMouseX - selectionBox.x;
                    selectionBox.height = transformedMouseY - selectionBox.y;
                    ticked();
                }
            }
        });

        // Hide tooltip when mouse leaves canvas
        canvas.addEventListener("mouseleave", () => {
            tooltip.style.display = 'none';
        });

        canvas.addEventListener("mouseup", (event) => {
            console.log('Mouse up event listener attached to canvas');
            if (selectionMode) {
                console.log('Mouse up event triggered');
                if (draggingNode) {
                    console.log('Releasing draggingNode:', draggingNode);
                    draggingNode = null;
                } else if (selectionBox) {
                    console.log('Final selection box:', selectionBox);
                    addToSelection(nodes.filter(node => isNodeInSelection(node, selectionBox)));
                    const selectedLength = Array.from(selectedNodes).length;
                    if (selectedLength > 0) {
                        const [mouseX, mouseY] = d3.pointer(event);
                        showFloatingInput(mouseX, mouseY);
                    } 
                    selectionBox = null;
                }
                ticked();
            }
        });

        toggleButton.addEventListener('click', () => {
                selectionMode = !selectionMode;
                if (selectionMode) {
                    toggleButton.classList.add('active-mode');
                    toggleButton.querySelector('.select-icon').style.opacity = 1.0;
                    toggleButton.querySelector('.zoom-icon').style.opacity = 0.3;
                    d3.select(canvas).on("mousedown.zoom", null).on("mousemove.zoom", null).on("mouseup.zoom", null);
                } else {
                    toggleButton.classList.remove('active-mode');
                    toggleButton.querySelector('.select-icon').style.opacity = 0.3;
                    toggleButton.querySelector('.zoom-icon').style.opacity = 1.0;
                    d3.select(canvas).call(zoom);
                }
            });
        // document.addEventListener('keydown', (event) => {
        //     const activeElement = document.activeElement;
        //     const isInputFocused = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';
        
        //     if (!isInputFocused) {
        //         if (event.key === 's' || event.key === 'S') {
        //             if (!selectionMode) toggleButton.click();
        //             event.preventDefault();
        //         } else if (event.key === 'z' || event.key === 'Z') {
        //             if (selectionMode) toggleButton.click();
        //             event.preventDefault();
        //         }
        //     }
        // });
        arrowToggleButton.addEventListener('click', () => {
                showArrows = !showArrows;
                arrowToggleButton.innerHTML = showArrows ? '<span style="font-weight:bold; color:black;">Arrows</span>' : '<span style="color:lightgray;">Arrows</span>';
                ticked();
            });
        searchBox.addEventListener('input', () => {
            const searchTerm = searchBox.value.toLowerCase();
            newSelection(nodes.filter(node => node.id.toLowerCase().includes(searchTerm)));
            printSelectedNodes();
            ticked();
            }
        );
        groupButton.addEventListener('click', () => {
            const groups = [...new Set(nodes.map(node => node.group).filter(Boolean))];
            const groupLabel = groupInputBox.value || `Group ${groups.length+1}`;
            if (groupLabel && selectedNodes.size > 0) {
                selectedNodes.forEach(node => node.group = groupLabel);
                updateGroupPanel(); 
                ticked();
            };
            groupInputBox.value = "";
            hideFloatingInput();
            clearSelection();
        });
        clearGroupButton.addEventListener('click', () => {
            if (selectedNodes.size > 0) {
                selectedNodes.forEach(node => delete node.group);
                updateGroupPanel();
                ticked();
            }
            groupInputBox.value = "";
            hideFloatingInput();
            clearSelection();
        });

        // Toggle buttons for display settings
        labelsToggleButton.addEventListener('click', () => {
            config.labels.visible = !config.labels.visible;
            labelsToggleButton.innerHTML = config.labels.visible ? '<strong>Labels</strong>' : '<span style="color:lightgray;">Labels</span>';
            ticked();
        });

        ellipsesToggleButton.addEventListener('click', () => {
            config.groups.showEllipses = !config.groups.showEllipses;
            ellipsesToggleButton.innerHTML = config.groups.showEllipses ? '<strong>Ellipses</strong>' : '<span style="color:lightgray;">Ellipses</span>';
            ticked();
        });

        legendToggleButton.addEventListener('click', () => {
            config.ui.showLegend = !config.ui.showLegend;
            legendToggleButton.innerHTML = config.ui.showLegend ? '<strong>Legend</strong>' : '<span style="color:lightgray;">Legend</span>';
            ticked();
        });

        statsToggleButton.addEventListener('click', () => {
            config.ui.showStatistics = !config.ui.showStatistics;
            statsToggleButton.innerHTML = config.ui.showStatistics ? '<strong>Stats</strong>' : '<span style="color:lightgray;">Stats</span>';
            ticked();
        });

        // Layout controls
        layoutSelect.addEventListener('change', () => {
            config.layout = layoutSelect.value;
            recalculateForce();
        });

        restartButton.addEventListener('click', () => {
            recalculateForce();
        });

        // Export functions
        function downloadFile(dataURL, filename) {
            const link = document.createElement('a');
            link.download = filename;
            link.href = dataURL;
            link.click();
        }

        exportPNGButton.addEventListener('click', () => {
            const dataURL = canvas.toDataURL('image/png');
            downloadFile(dataURL, 'lightgraph.png');
        });

        exportSVGButton.addEventListener('click', () => {
            // Create SVG from current canvas state
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', canvas.width);
            svg.setAttribute('height', canvas.height);
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
                line.setAttribute('stroke-opacity', config.edges.defaultOpacity);
                line.setAttribute('stroke-width', config.edges.defaultWidth);
                g.appendChild(line);
            });

            // Draw nodes
            nodes.forEach(node => {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', node.x);
                circle.setAttribute('cy', node.y);
                circle.setAttribute('r', (node.size || config.nodes.defaultSize) / 2);
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

        reloadData();

        window.addEventListener('resize', () => {
            canvas.width = lightGraph.clientWidth;
            canvas.height = lightGraph.clientHeight;
            recalculateForce(); 
        });

        const observer = new MutationObserver((mutationsList, observer) => {
            setTimeout(() => {
                console.log('Mutation detected:', mutationsList);
                reloadData();
            }, 500);
        });
        observer.observe(
            document.getElementById('networkData'), 
            { childList: true, subtree: true, characterData: true });
    };
    
    const checkCanvas = setInterval(() => {
        if (document.getElementById("lightGraph")) {
            clearInterval(checkCanvas);
            window.lightGraph.initializeVisualization();
        }
    }, 100);
})();