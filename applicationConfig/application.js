const parentAppConfig = {
  name: "vue-admin-plus",
  host: "http://127.0.0.1",
  port: "8088",
};
exports.parentAppConfig = parentAppConfig

const loginConfig = {
  name: "admin-plus-login",
  host: "http://127.0.0.1",
  port: "8033",
  container: "#login",
  activeRule: "/login"
};
exports.loginConfig = loginConfig
const appList = [
  {
    name: loginConfig.name,
    entry: `${loginConfig.host}:${loginConfig.port}`,
    container: loginConfig.container,
    activeRule: loginConfig.activeRule,
    parentRouterData: loginConfig.parentRouterData
  },
];
exports.appList = appList
