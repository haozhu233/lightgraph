// Re-export D3 submodules so all modules can import from a local path
// esbuild will bundle these into the output, eliminating the CDN dependency

export {
    forceSimulation,
    forceLink,
    forceManyBody,
    forceCenter,
} from 'd3-force-3d';

export {
    zoom,
    zoomIdentity,
} from 'd3-zoom';

export {
    select,
    pointer,
} from 'd3-selection';

export {
    scaleOrdinal,
} from 'd3-scale';

export {
    schemeCategory10,
    schemeSet2,
    schemeSet3,
} from 'd3-scale-chromatic';
