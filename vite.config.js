import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { RES_LIST_API } from './src/components/utils/constants'

// https://vite.dev/config/
export default defineConfig({
  server: {
      proxy: {
        "/api": {
          target: RES_LIST_API,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  plugins: [react(), tailwindcss()],
})


