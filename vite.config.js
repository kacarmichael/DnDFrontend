import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { env } from 'react-dotenv'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  envPrefix: 'VITE_',
  env: {
    NODE_ENV: env.NODE_ENV,
  },
})
