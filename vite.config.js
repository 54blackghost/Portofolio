import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173, // ou un autre port de ton choix
  },
  build: {
    assetsInlineLimit: 0, // Ensure assets are not inlined
  },
  publicDir: 'public', // Explicitly set the public directory
});
