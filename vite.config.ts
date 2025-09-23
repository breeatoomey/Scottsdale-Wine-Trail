// vite.config.ts  (repo root)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: '.',                             // index.html at repo root
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@assets': path.resolve(__dirname, 'attached_assets'),
    },
  },
  build: { outDir: 'docs', emptyOutDir: true },

  // >>> CHOOSE ONE <<<
  // base: '/',                        // if using custom domain
  base: '/Scottsdale-Wine-Trail/',     // if using GitHub project URL
})