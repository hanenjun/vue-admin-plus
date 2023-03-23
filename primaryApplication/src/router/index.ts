import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'

import { loginRouter } from "./routers/login";
import { homeRouter } from "./routers/home";

import { useUserStore } from '@/store/user'

let appConfig: any = require('../../../applicationConfig/application')

export const routes: Array<RouteRecordRaw> = [
  ...homeRouter,
  ...loginRouter
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  const userStore = useUserStore()
  if (to.query?.token) {
    userStore.login((to.query as any)?.token)
  }
  if (userStore.islogin) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
})

export default router

