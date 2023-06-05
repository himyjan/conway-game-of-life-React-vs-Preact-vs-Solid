import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import filesize from 'rollup-plugin-filesize'

export default {
  input: 'react-index.tsx',
  output: {
    format: 'iife',
    file: 'react-index.js',
  },
  plugins: [
    replace({ values: { 'process.env.NODE_ENV': '"production"' }, preventAssignment: false }),
    resolve({ extensions: ['.js', '.ts', '.tsx'] }),
    commonjs(),
    babel({
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'bundled',
    }),
    terser({ format: { comments: false } }),
    filesize(),
  ],
  watch: { clearScreen: false },
}
