import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { aboutRouter } from "./routers/about";
import { homeRouter } from "./routers/home";

const qiankunConfig = require('../../config/app.js')

export const routes: Array<RouteRecordRaw> = [
  ...homeRouter,
  ...aboutRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
