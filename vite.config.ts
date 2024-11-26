import react from "@vitejs/plugin-react"
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      },
    }),
  ],
  server: {
    open: true,
    port: 8000,
  },
  resolve: {
    alias: [
      {
		find: '@',
		replacement: '/src',
	  },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-venders': ['react', 'react-dom'],
        },
      },
    },
  },
})