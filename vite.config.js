// Import necessary functions from Vite and the React plugin
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Export the Vite configuration using defineConfig for better type support and autocomplete
export default defineConfig({
  // Include the React plugin to enable React-specific features and optimizations
  plugins: [react()],
  
  // Server configuration for development environment
  server: {
    // Specify the port number for the dev server (default is 5173, but can be changed if needed)
    port: 5173,
  }
})
