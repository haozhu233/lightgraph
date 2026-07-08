const esbuild = require('esbuild');

const isWatch = process.argv.includes('--watch');

const buildOptions = {
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'lightgraph.js',
    format: 'iife',
    globalName: '__lightgraph_internal',
    // D3 loaded via CDN; Three.js bundled from node_modules
    external: [],
    target: ['es2020'],
    minify: true,
    sourcemap: false,
};

if (isWatch) {
    esbuild.context(buildOptions).then(ctx => {
        ctx.watch();
        console.log('Watching for changes...');
    });
} else {
    esbuild.build(buildOptions).then(() => {
        console.log('Build complete: lightgraph.js');
    });
}
