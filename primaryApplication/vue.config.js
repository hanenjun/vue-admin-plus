const { defineConfig } = require("@vue/cli-service");
const config = require("../applicationConfig/application");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [],
    },
  },
  publicPath: "/",
  devServer: {
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
    headers: {
      "Access-Control-Allow-Origin": "*", // 设置允许跨域请求，否则会因为在其他端口号获取资源报错
    },
    port: config.primaryApplicationConfig.port, // 设置每次打开本地的端口号
    open: true, // 每次 serve 完成自动打开
  },
});
