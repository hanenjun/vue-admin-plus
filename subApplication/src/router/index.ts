import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/login/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
