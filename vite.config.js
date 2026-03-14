import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  // 关键：配置公共路径（部署到 Gitee 必须加仓库名）
  base: '/your-gitee-repo-name/', // 替换成你的 Gitee 仓库名，比如 /vue3-demo/
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})