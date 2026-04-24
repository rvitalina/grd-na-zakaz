import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/grd-na-zakaz/',
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
})
