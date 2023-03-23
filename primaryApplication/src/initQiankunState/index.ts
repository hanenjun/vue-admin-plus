import { registerMicroApps, start } from 'qiankun'
let appConfig:any = require('../../../applicationConfig/application')
registerMicroApps(appConfig.appList)
start()
import actions from './action'
