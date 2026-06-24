import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: { modules: { generateScopedName: '[hash:base64:5]' } },
  resolve: { tsconfigPaths: true },
  base: '/cartUnI',
});
