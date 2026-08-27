import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',
  plugins: [vue({
    template: { compilerOptions: { isCustomElement: tag => tag === 'iconify-icon' } }
  })],
  build: { outDir: 'dist/works', chunkSizeWarningLimit: 900 }
})