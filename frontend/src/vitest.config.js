import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/kasa/',
  build: {
    outDir: '../docs', // 👈 build directement dans ton dossier docs à la racine
    emptyOutDir: true, // nettoie avant chaque build
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js', 
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'] 
  }
});

