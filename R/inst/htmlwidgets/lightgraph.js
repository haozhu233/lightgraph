HTMLWidgets.widget({

  name: 'lightgraph',

  type: 'output',

  factory: function(el, width, height) {

    return {

      renderValue: function(x) {
        // Clear any existing content
        el.innerHTML = '';
        
        // Set up the container structure
        el.style.position = 'relative';
        el.style.width = '100%';
        el.style.height = height || '800px';
        el.style.overflow = 'hidden';
        
        // Create the lightGraph div
        var lightGraphDiv = document.createElement('div');
        lightGraphDiv.id = 'lightGraph';
        lightGraphDiv.style.width = '100%';
        lightGraphDiv.style.height = '100%';
        el.appendChild(lightGraphDiv);
        
        // Create script tags for data
        var nodesScript = document.createElement('script');
        nodesScript.type = 'application/json';
        nodesScript.id = 'nodesData';
        nodesScript.textContent = JSON.stringify(x.nodes);
        el.appendChild(nodesScript);
        
        var edgesScript = document.createElement('script');
        edgesScript.type = 'application/json';
        edgesScript.id = 'edgesData';
        edgesScript.textContent = JSON.stringify(x.edges);
        el.appendChild(edgesScript);
        
        // Create a container for mutation observer
        var networkDataDiv = document.createElement('div');
        networkDataDiv.id = 'networkData';
        networkDataDiv.style.display = 'none';
        el.appendChild(networkDataDiv);
        
        // Initialize the visualization if lightGraph is available
        if (window.lightGraph && window.lightGraph.initializeVisualization) {
          window.lightGraph.initializeVisualization();
        } else {
          console.error('lightGraph library not loaded');
        }
      },

      resize: function(width, height) {
        // Handle resize if needed
        if (window.lightGraph && window.lightGraph.resize) {
          window.lightGraph.resize(width, height);
        }
      }

    };
  }
});
