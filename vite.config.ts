import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // We keep index.html at the repo root
  root: '.',

  plugins: [
    react(),
    ...(process.env.NODE_ENV !== 'production' ? [] : []),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@assets': path.resolve(__dirname, 'attached_assets'),
    },
  },

  // Build the static site into /docs so GitHub Pages can serve it
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
