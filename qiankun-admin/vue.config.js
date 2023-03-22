const { defineConfig } = require("@vue/cli-service");
const config = require('../config/app')
console.log(config)
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: `/`,
  configureWebpack: {
    output: {
      library: config.son1Config.name,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${config.son1Config.name}`,
    },
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: config.son1Config.port,
    open: true,
  },
});
