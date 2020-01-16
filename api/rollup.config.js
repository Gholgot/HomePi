// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'server.ts',
  output: {
    dir: 'bin',
    format: 'cjs'
  },
  plugins: [typescript()]
};