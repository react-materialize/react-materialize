import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Storybook builds an app, not the library: keep the root config's library
// settings (externals, es2019 target, type copying) out of it.
export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' })]
});
