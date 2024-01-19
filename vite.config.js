import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

server: {
  https: { // https => https://localhost:3000 | http => http://localhost:3000
    maxSessionMemory: 100
  }
}
export default defineConfig({
  plugins: [react()],
})
