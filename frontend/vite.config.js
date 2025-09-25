import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../docs', // build ira directement dans /docs
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js'
  }
});
