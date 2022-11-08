const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/global.scss";`
      }
    }
  },
  configureWebpack: {
      devServer: {
          headers: { "Access-Control-Allow-Origin": "*" }
        }
  },
  devServer: {
      proxy: {
          '/v1': {
              target: 'https://lck-data-gyu-young-park.koyeb.app',
              changeOrigin: true,
          }
      }
  }
})
