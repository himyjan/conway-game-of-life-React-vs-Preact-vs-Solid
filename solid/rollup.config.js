import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import filesize from 'rollup-plugin-filesize'

export default {
  input: 'solid-index.tsx',
  output: {
    format: 'iife',
    file: 'solid-index.js',
  },
  plugins: [
    resolve({ extensions: ['.js', '.ts', '.tsx'] }),
    babel({
      presets: ['solid', '@babel/preset-typescript'],
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'bundled',
    }),
    terser({ format: { comments: false } }),
    filesize(),
  ],
  watch: { clearScreen: false },
}
