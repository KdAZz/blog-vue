const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  lintOnSave: false,
  devServer: {
    port:8080,
    host: 'localhost',
    proxy: 'http://119.3.124.132:9999',
    open: true,
  },
})
