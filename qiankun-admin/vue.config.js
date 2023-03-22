const { defineConfig } = require("@vue/cli-service");
const config = require('../config/app')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    output: {
      library: config.son1Config.name,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${config.son1Config.name}`,
    },
  },
  publicPath: '/',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: config.son1Config.port,
    open: true,
  },
});
