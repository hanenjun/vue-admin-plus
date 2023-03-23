const { defineConfig } = require("@vue/cli-service");
const config = require('../config/app')
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
  publicPath: '/',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: config.loginConfig.port,
    open: true,
  },
});
