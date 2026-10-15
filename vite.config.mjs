import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' })],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['test/**/*.spec.{js,jsx}'],
    setupFiles: ['./test/setup.js']
  }
});
