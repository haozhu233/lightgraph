HTMLWidgets.widget({

  name: 'lightgraph',

  type: 'output',

  factory: function(el, width, height) {

    var instance = null;

    return {

      renderValue: function(x) {
        // Shiny re-renders call this repeatedly; tear down the previous
        // instance so listeners and simulations do not accumulate.
        if (instance) {
          instance.destroy();
          instance = null;
        }
        el.innerHTML = '';

        if (!(window.lightGraph && window.lightGraph.LightGraph)) {
          console.error('lightGraph library not loaded');
          return;
        }

        instance = new window.lightGraph.LightGraph(el, {
          nodes: x.nodes || [],
          edges: x.edges || [],
          config: x.config || {}
        });
      },

      resize: function(width, height) {
        if (instance) {
          instance.resize();
        }
      }

    };
  }
});
