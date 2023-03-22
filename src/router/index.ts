import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { aboutRouter } from "./routers/about";
import { homeRouter } from "./routers/home";
import { setGlobalState } from "@/initQiankunState/action";

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