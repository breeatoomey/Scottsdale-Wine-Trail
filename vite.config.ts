import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: '.',                                // index.html is at repo root
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@assets': path.resolve(__dirname, 'attached_assets'),
    },
  },
  build: {
    outDir: 'docs',                          // Pages will serve /docs
    emptyOutDir: true,
  },
  base: '/Scottsdale-Wine-Trail/',           // <—— IMPORTANT (exact repo name)
})
