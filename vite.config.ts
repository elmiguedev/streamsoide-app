import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://elmiguedev.github.io/streamsoide-app/",
  plugins: [react()],
})
