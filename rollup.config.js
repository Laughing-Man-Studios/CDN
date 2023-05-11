import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [{
    input: 'demo/main.js',
    output: {
        file: 'dist/demo.min.js',
    },
    plugins: [nodeResolve()]
},
{
    input: 'node_modules/lit-graph/lit-graph.js',
    output: {
        file: 'dist/lit-graph.min.js',
    },
    context: 'window',
    plugins: [nodeResolve()]  
}]