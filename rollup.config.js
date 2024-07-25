import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser'; // Add this for minification
import typescript from 'rollup-plugin-typescript2';
import tscompile from "typescript";
import json from '@rollup/plugin-json';

import { map, mapValues } from 'lodash'

const packages = require('./package.json')

const { dependencies } = packages


const external = map(dependencies, (mod, key) => key)
const globals = mapValues(dependencies, (mod, key) => key)

const plugins = [
    commonjs({ include: "node_modules/**" }),
    typescript({ typescript: tscompile }),
    babel(),
    terser(), 
    resolve(),
    json()
  ];

export default {
    input: 'src/api/server.ts',
    output: {
        sourcemap: true,
        name: 'optionstradingcoach-backend',
        file: 'dist/bundle.esm.js', // Change the output file name to reflect the module type
        format: 'es', // Change this to 'es' to enable tree shaking
        globals,
    },
    external,
    plugins,
}
