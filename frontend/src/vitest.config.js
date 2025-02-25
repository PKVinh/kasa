import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Simule le DOM pour les tests
    setupFiles: './setupTests.js', // Optionnel, pour configurer Jest-DOM
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'] // Ajoute cette ligne !
  }
});

