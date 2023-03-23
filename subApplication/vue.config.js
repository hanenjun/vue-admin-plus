const { defineConfig } = require("@vue/cli-service");
const config = require("../applicationConfig/application");
const dev = process.env.NODE_ENV === 'development'

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    output: {
      library: config.loginConfig.name,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${config.loginConfig.name}`,
    },
  },
  publicPath: `${config.loginConfig.host}:${config.loginConfig.port}`,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
        ws: true,
        secure: false,
      },
    },
    port: config.loginConfig.port,
    open: true,
  },
});
