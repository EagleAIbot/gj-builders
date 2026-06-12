import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works on both the GitHub Pages
// project URL (/gj-builders/) and the custom domain root.
export default defineConfig({
  base: './',
  plugins: [react()],
})
