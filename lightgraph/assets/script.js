(function() {
    window.lightGraph = window.lightGraph || {};

    window.lightGraph.initializeVisualization = () => {
        // =====================================================================
        // 1. Visual Element Section -------------------------------------------
        // =====================================================================

        // #region 1.1 Element constructors ------------------------------------
        function createElement(tag, options = {}, styles = {}) {
            const element = document.createElement(tag);
            Object.assign(element, options);
            Object.assign(element.style, styles);
            return element;
        }

        function createContainer() {
            return createElement('div', {}, {
                position: 'absolute',
                right: '10px',
                gap: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '5px',
                borderRadius: '5px',
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)'
            });
        }

        function createButton({ id, title, htmlContent }) {
            return createElement('button', { id, title, innerHTML: htmlContent }, {
                padding: '5px 15px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer'
            });
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
        //#endregion
        
        // #region 1.2 Creating canvas -----------------------------------------
        const lightGraph = document.getElementById("lightGraph");
        Object.assign(lightGraph.style, {
            height: '800px', position: 'relative'});
        const canvas = createElement("canvas", {
            id: "lightGraphCanvas", 
            width: lightGraph.clientWidth, 
            height: lightGraph.clientHeight });
        const context = canvas.getContext("2d");
        lightGraph.appendChild(canvas);
        //#endregion

        // #region 1.3 Additional visual elements ------------------------------
        // 1.3.1 Control and search panel 
        const controlContainer = createContainer();
        Object.assign(controlContainer.style, {display: 'flex', top: '10px'});
        const toggleButton = createButton({
            id: 'toggleButton',
            title: 'Click to switch between selection and zoom modes',
            htmlContent: '<span style="color:lightgray;">Select</span> / <span style="font-weight:bold; color:black;">Zoom</span>'
        });
        const arrowToggleButton = createButton({
            id: 'arrowToggleButton',
            title: 'Click to toggle arrows on edges',
            htmlContent: '<span style="color:lightgray;">Arrows</span>'
        });
        const searchBox = createInput({
            id: 'searchBox',
            placeholder: 'Search node...'});

        // 1.3.2 Cluster/selected node panel
        const groupPanel = createContainer();
        Object.assign(groupPanel.style, {
            width: '240px', maxHeight: '200px', 
            overflowY: 'auto', top: '60px' });
        const [existingGroupBlock, existingGroupBlockContent] = createTextBlock({
            id: "existingGroups", 
            header: "Clusters: ", 
            content: "None"
        });
        const [selectedNodesBlock, selectedNodesBlockContent] = createTextBlock({
            id: "selectedNodes", 
            header: "Selected: ", 
            content: "None",
        });
        const groupInputBox = createInput({
            id: 'groupLabelInput',
            placeholder: 'Enter label'
        });
        groupInputBox.style.width = '80px';
        groupInputBox.disabled = true;
        const groupButton = createButton({
            id: 'groupLabelButton',
            title: 'Click to assign group to selected nodes',
            htmlContent: 'Add',
        })
        groupButton.disabled = true;
        const clearGroupButton = createButton({
            id: 'clearGroupLabelButton',
            title: 'Click to clear labels on selected nodes',
            htmlContent: 'Clear',
        })
        clearGroupButton.disabled = true;
        //#endregion

        // #region 1.4 Element assemble ----------------------------------------
        lightGraph.append(controlContainer, groupPanel);
        controlContainer.append(toggleButton, arrowToggleButton, searchBox);
        groupPanel.append(
            existingGroupBlock, 
            groupInputBox, groupButton, clearGroupButton,
            selectedNodesBlock
        );

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
        const groupColorScale = d3.scaleOrdinal(d3.schemeSet1);
        let zoom = d3.zoom().scaleExtent([0.1, 5])
            .on("zoom", (event) => {
                if (!selectionMode) {
                    transform = event.transform;
                    ticked();
                }
            });
        // #endregion

        // #region 2.2 Interaction functions -----------------------------------
        function clearSelection() {
            selectedNodes.forEach(node => selectedNodes.delete(node));
        }

        function addToSelection(nodes) {
            nodes.forEach(node => selectedNodes.add(node));
        }

        function newSelection(nodes) {
            clearSelection();
            addToSelection(nodes);
        }

        function updateGroupPanel() {
            const groups = [...new Set(nodes.map(node => node.group).filter(Boolean))];
            existingGroupBlockContent.innerHTML = groups.length ? '' : 'None';
            groups.sort().forEach(group => {
                const groupLabel = createElement(
                    'span', { innerHTML: `${group}, ` }, {
                    color: groupColorScale(group), cursor: 'pointer'
                });
                groupLabel.addEventListener('click', () => {
                    newSelection(nodes.filter(node => node.group === group));
                    printSelectedNodes();
                    ticked();
                });
                existingGroupBlockContent.appendChild(groupLabel);
            });
        }

        function ticked() {
            context.save();
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.translate(transform.x, transform.y);
            context.scale(transform.k, transform.k);

            drawGroupEllipses(); 
            edges.forEach(drawEdge);
            nodes.forEach(drawLabel);
            nodes.forEach(drawNode);

            updateSelectionBox();
            updateGroupPanel(); 
            context.restore();
        }
        function updateSelectionBox() {
            if (selectionBox) {
                context.strokeStyle = "#55c667";
                context.strokeRect(
                    selectionBox.x, selectionBox.y,
                    selectionBox.width, selectionBox.height
                );
            }
        }

        function printSelectedNodes() {
            selectedNodeArray = Array.from(selectedNodes);
            selectedNodesBlockContent.innerText = selectedNodeArray.length ? selectedNodeArray.map(node => node.id).sort().join(', ') : "None";
            const enableControls = selectedNodeArray.length > 0;
            [groupInputBox, groupButton, clearGroupButton].forEach(el => el.disabled = !enableControls);
        }

        function drawEdge(d) {
            context.beginPath();
            context.moveTo(d.source.x, d.source.y);
            context.lineTo(d.target.x, d.target.y);
            
            const includeEitherEnd = selectedNodes.has(d.source) || selectedNodes.has(d.target)
            context.strokeStyle = includeEitherEnd ? "#99999911" : "#33333310";
            context.lineWidth = includeEitherEnd ? 2 : 1;
            
            context.stroke();
            if (showArrows) drawArrow(d);
        }

        function drawArrow(d) {
            const arrowLength = 10;
            const arrowWidth = 5;
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

        function drawNode(d) {
            const color = d.group ? groupColorScale(d.group) : (d.color || "#548ff0");
            
            context.fillStyle = color;
            context.strokeStyle = selectedNodes.has(d) ? "#000000" : "#FFFFFF";
            context.lineWidth = selectedNodes.has(d) ? 1 : 1;
            const size = d.size || 7;
            nodeSize = selectedNodes.has(d) ? size + 5 : size;

            context.beginPath();
            context.arc(d.x, d.y, nodeSize / 2, 0, 2 * Math.PI);
            context.fill();
            context.stroke();
        }

        function drawLabel(d) {
            const size = d.size || 5;
            const labelFontSize = d.labelFontSize || 5;
            context.font = `${labelFontSize}px sans-serif`;
            context.fillStyle = selectedNodes.has(d) ? "#000" : "#555";
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
                    context.ellipse(0, 0, radiusX + 5, radiusY + 5, 0, 0, 2 * Math.PI);  // Add padding for better visual coverage
                    context.fillStyle = `${groupColorScale(group)}20`;  // Fill with group color, alpha = 0.2
                    context.fill();
                    context.strokeStyle = groupColorScale(group);
                    context.lineWidth = 2;
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

                toggleButton.innerHTML = '<span style="color:lightgray;">Select</span> / <span style="font-weight:bold; color:black;">Zoom</span>';
                recalculateForce();
            } catch (error) {
                console.error('Error reloading data:', error);
            }
        }
        function recalculateForce() {
            try {
                simulationForce = 4000 / nodes.length;
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;

                simulation = d3.forceSimulation(nodes)
                    .force("link", d3.forceLink(edges).id(d => d.id).distance(100))
                    .force("charge", d3.forceManyBody().strength(-simulationForce))
                    .force("center", d3.forceCenter(centerX, centerY))
                    .on("tick", ticked);

                d3.select(canvas).call(zoom);

            } catch (error) {
                console.error('Error updating visualization:', error);
            }
        };
        // #endregion

        // 2.3 Interactions ----------------------------------------------------
        canvas.addEventListener("mousedown", (event) => {
            console.log('Mouse down event triggered');
            if (selectionMode) {
                const [mouseX, mouseY] = d3.pointer(event);
                const transformedMouseX = (mouseX - transform.x) / transform.k;
                const transformedMouseY = (mouseY - transform.y) / transform.k;
                const onNode = getNodeAtCoordinates(transformedMouseX, transformedMouseY);

                if (onNode) {
                    if (event.shiftKey) {
                        // Shift-click to add or remove node from selected nodes
                        if (selectedNodes.has(onNode)) {
                            selectedNodes.delete(onNode);
                        } else {
                            selectedNodes.add(onNode);
                        }
                    } else {
                        draggingNode = onNode;
                        dragOffsetX = onNode.x - transformedMouseX;
                        dragOffsetY = onNode.y - transformedMouseY;
                        if (!selectedNodes.has(onNode)) {
                            newSelection([onNode]);
                        }
                    }

                } else {
                    if (!event.shiftKey) {
                        clearSelection();
                    }
                    selectionBox = { x: transformedMouseX, y: transformedMouseY, width: 0, height: 0 };
                }
                ticked();
                printSelectedNodes();
            }
        });

        canvas.addEventListener("mousemove", (event) => {
            if (selectionMode) {
                const [mouseX, mouseY] = d3.pointer(event);
                const transformedMouseX = (mouseX - transform.x) / transform.k;
                const transformedMouseY = (mouseY - transform.y) / transform.k;

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
                    printSelectedNodes();
                    selectionBox = null;
                }
                ticked();
            }
        });

        toggleButton.addEventListener('click', () => {
                selectionMode = !selectionMode;
                toggleButton.innerHTML = selectionMode 
                    ? '<span style="font-weight:bold; color:black;">Select</span> / <span style="color:lightgray;">Zoom</span>' 
                    : '<span style="color:lightgray;">Select</span> / <span style="font-weight:bold; color:black;">Zoom</span>';
                if (selectionMode) {
                    d3.select(canvas).on("mousedown.zoom", null).on("mousemove.zoom", null).on("mouseup.zoom", null);
                } else {
                    d3.select(canvas).call(zoom);
                }
            });
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
        });
        clearGroupButton.addEventListener('click', () => {
            if (selectedNodes.size > 0) {
                selectedNodes.forEach(node => delete node.group);
                updateGroupPanel(); 
                ticked();
            }
            groupInputBox.value = "";
        });
        
        reloadData();

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                canvas.width = width;
                canvas.height = height;
                recalculateForce(); 
            }
        });
        resizeObserver.observe(lightGraph);

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
