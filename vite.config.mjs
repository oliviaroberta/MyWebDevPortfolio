import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: '/',
  
  build: {
    outDir: "dist",
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
  
  define: {
    __WS_TOKEN__: JSON.stringify('dev_skip_auth'), 
    'process.env': {},
    'import.meta.env.BASE_URL': JSON.stringify('/')
  },
  
  optimizeDeps: {
    include: ['react-router-dom']
  }
});