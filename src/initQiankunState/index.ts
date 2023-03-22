import { registerMicroApps, start } from 'qiankun'
let appConfig:any = require('../../config/app')
registerMicroApps(appConfig.appList)
start()