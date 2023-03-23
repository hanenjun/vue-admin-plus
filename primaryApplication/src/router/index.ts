import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'

import { loginRouter } from "./routers/login";
import { homeRouter } from "./routers/home";

import { useUserStore } from '@/store/user'
import {
  createDiscreteApi
} from 'naive-ui'


const { message } = createDiscreteApi(
  ['message']
)
let appConfig: any = require('../../../applicationConfig/application')

export const routes: Array<RouteRecordRaw> = [
  ...homeRouter,
  ...loginRouter
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  console.log(to, from)
  const userStore = useUserStore()
  let locaToken = localStorage.getItem('USER_TOKEN')
  if (userStore.islogin) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      if (locaToken) {
        let userData = await userStore.getUserInfo(locaToken)
        if (userData.code === 0) {
          next()
        } else {
          message.error('用户信息获取失败，请重新登入！')
          localStorage.clear()
          setTimeout(() => {
            window.history.pushState(
              null,
              "",
              `/login`
            );
          }, 1000)

        }
      } else {
        next({
          path: '/login'
        })
      }
    }
  }
})

export default router

