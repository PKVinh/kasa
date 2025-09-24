import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/kasa/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js', 
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'] 
  }
});

