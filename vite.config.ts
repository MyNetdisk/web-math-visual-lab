import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // GitHub Pages 子路径部署，仓库名必须和这里一致
  base: '/web-math-visual-lab/',
})
