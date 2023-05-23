import * as path from 'node:path';
import react from '@vitejs/plugin-react';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), peerDepsExternal(), tsconfigPaths(), dts({ insertTypesEntry: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@storybook-components': path.resolve(__dirname, '.storybook/components'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: packageJson.name,
      formats: ['es', 'umd'],
    },
  },
});
