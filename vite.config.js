import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/williford-abunas.github.io/williford-abunas.github.io',
  plugins: [react()],
})
