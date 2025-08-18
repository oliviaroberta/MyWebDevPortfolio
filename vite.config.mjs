import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: './',
  
   publicDir: "public", 
   
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2000,
    manifest: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  
  plugins: [
    tsconfigPaths(), 
    react()
  ],
  
  server: {
    port: 4029,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com'],
    hmr: {
      host: 'localhost',
      port: 4028,
      protocol: 'ws' 
    }
  },
  

  
  optimizeDeps: {
    include: ['react-router-dom']
  }
});