const parentAppConfig = {
  name: "vue-admin-plus",
  host: "http://127.0.0.1",
  port: "8088",
};
exports.parentAppConfig = parentAppConfig

const son1Config = {
  name: "qiankun-admin",
  host: "http://127.0.0.1",
  port: "8033",
  container: "#admincontainer",
  activeRule: "/a/son/"
};
exports.son1Config = son1Config
const appList = [
  {
    name: son1Config.name,
    entry: `${son1Config.host}:${son1Config.port}`,
    container: son1Config.container,
    activeRule: son1Config.activeRule,
    parentRouterData: son1Config.parentRouterData
  },
];
exports.appList = appList
