import config  from "../../applicationConfig/application"


(function () {
  //添加乾坤判断
  if ((window as any).__POWERED_BY_QIANKUN__) {
    if (process.env.NODE_ENV === 'development') {
      __webpack_public_path__ = `//${config.loginConfig.host}:${config.loginConfig.port}`
      return
    }
    __webpack_public_path__ = (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  }
})()