import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint(),
    
   viteStaticCopy({
      targets: [
        {
          src: 'public/manifest.json',
          dest: '.',
        }
      ],
    }),
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});