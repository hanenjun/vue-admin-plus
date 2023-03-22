const { defineConfig } = require("@vue/cli-service");
const config = require("./config/app");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [],
    },
  },
  devServer: {
    proxy: {},
    headers: {
      "Access-Control-Allow-Origin": "*", // 设置允许跨域请求，否则会因为在其他端口号获取资源报错
    },
    port: config.parentAppConfig.port, // 设置每次打开本地的端口号
    open: true, // 每次 serve 完成自动打开
  },
});
