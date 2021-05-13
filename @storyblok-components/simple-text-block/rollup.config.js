import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import autoexternal from 'rollup-plugin-auto-external';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: 'dist',
      entryFileNames: '[name].module.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    autoexternal({ dependencies: false }),
    del({
      targets: 'dist',
    }),
    resolve({
      preferBuiltins: true,
    }),
    json(),
    babel({
      exclude: /node_modules/,
      babelHelpers: 'runtime',
      presets: [['@babel/env', { modules: false }], '@babel/preset-react'], // modules false prevents transform to cjs
      plugins: [
        ['@babel/plugin-transform-runtime'],
        '@babel/plugin-proposal-optional-chaining',
      ],
    }),
    commonjs(),
    terser({
      format: {
        comments: false,
      },
    }),
    filesize(),
  ],
};
