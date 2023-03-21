const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  lintOnSave: false,
  devServer: {
    port:8080,
    host: 'localhost',
    proxy: 'http://localhost:9999',
    open: true,
  },
})
