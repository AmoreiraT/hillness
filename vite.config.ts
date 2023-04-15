import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@core', replacement: path.resolve(__dirname, 'src/core') },
      {
        find: '@domain',
        replacement: path.resolve(__dirname, 'src/domain'),
      },
      {
        find: '@features',
        replacement: path.resolve(__dirname, 'src/features'),
      },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: '@i18n', replacement: path.resolve(__dirname, 'src/i18n') },
      { find: '@stories', replacement: path.resolve(__dirname, 'stories') },
    ],
  },
  build: {
    sourcemap: true,
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
});
