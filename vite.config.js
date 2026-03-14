// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import path from 'path'

// export default defineConfig({
//   plugins: [vue()],
//   // 关键：配置公共路径（部署到 Gitee 必须加仓库名）
//   base: '/MyWeb/', // 替换成你的 Gitee 仓库名，比如 /vue3-demo/
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src')
//     }
//   }
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 关键配置：设置基础路径
  // 格式：/你的仓库名称/
  base: '/MyWeb/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 打包配置（可选，优化打包结果）
  build: {
    outDir: 'dist', // 打包输出目录，默认就是dist，可省略
    assetsDir: 'assets' // 静态资源目录
  }
})