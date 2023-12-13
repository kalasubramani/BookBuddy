import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // for hot reload to run on wsl 
  server: {
    watch: {
      usePolling: true
    }
  }
})