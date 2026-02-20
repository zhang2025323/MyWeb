const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  // 关键：末尾的斜杠不能少，仓库名大小写要和 GitHub 一致
  publicPath: '/MyWeb/' 
}
