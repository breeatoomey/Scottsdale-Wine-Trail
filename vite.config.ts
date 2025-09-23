import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  root: '.',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@assets': path.resolve(__dirname, 'attached_assets'),
    },
  },
  build: { outDir: 'docs', emptyOutDir: true },
  // Use repo path in prod (GitHub Pages), plain '/' in dev
  base: isProd ? '/Scottsdale-Wine-Trail/' : '/',
})