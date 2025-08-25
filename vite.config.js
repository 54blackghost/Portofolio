import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import MotionResolver from 'motion-v/resolver';

export default defineConfig({
  plugins: [vue(),
    Components({
      dts: true,
      resolvers: [
        MotionResolver()
      ],
    }),
  ],
  
  server: {
    port: 5173, // ou un autre port de ton choix
  },
  build: {
    assetsInlineLimit: 0, // Ensure assets are not inlined
  },
  publicDir: 'public', // Explicitly set the public directory
});
