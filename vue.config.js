const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关键配置：和 GitHub 仓库名 MyWeb 完全一致（大小写、斜杠都要对）
  publicPath: '/MyWeb/'
})
