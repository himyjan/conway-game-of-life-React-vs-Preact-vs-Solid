import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import filesize from 'rollup-plugin-filesize'

export default {
  input: 'preact-index.tsx',
  output: {
    format: 'iife',
    file: 'preact-index.js',
  },
  plugins: [
    resolve({ extensions: ['.js', '.ts', '.tsx'] }),
    babel({
      presets: [['@babel/preset-typescript', { jsxPragma: 'h' }]],
      plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'h' }]],
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'bundled',
    }),
    terser({ format: { comments: false } }),
    filesize(),
  ],
  watch: { clearScreen: false },
}
