import { babel } from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

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
  plugins: [
    del({
      targets: 'dist',
    }),
    resolve({
      resolveOnly: ['lib-that-we-want-to-bundle'],
    }),
    babel({
      exclude: '/node_modules/',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    }),
    terser({
      format: {
        comments: false,
      },
    }),
    filesize(),
  ],
};
