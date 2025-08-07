import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This binds Vite to all network interfaces
    port: 3000, // Optional, you can change the port if needed
  },
})
