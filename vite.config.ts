import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// ----- CHOOSE ONE -----
// 1) Custom domain (root)  -> base: '/'
const USING_CUSTOM_DOMAIN = false
// 2) Project page path     -> base: '/Scottsdale-Wine-Trail/'
// const USING_CUSTOM_DOMAIN = false

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
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  base: USING_CUSTOM_DOMAIN ? '/' : '/Scottsdale-Wine-Trail/',
})
