import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

import {
    BookOutline as BookIcon,
    WineOutline as WineIcon,
  } from "@vicons/ionicons5";

export const homeRouter:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Layout,
        redirect: '/home',
        meta: {
          name: 'home',
          key: 'home',
          icon: BookIcon
        },
        children: [
          {
            meta: {
              name: '1home',
              key: '1home',
              icon: WineIcon
            },
            path: '/home',
            name: '1home',
            component: () => import('@/views/HomeView.vue')
          },
          {
            meta: {
              name: '1home1',
              key: '1home1',
              icon: WineIcon
            },
            path: '/home1',
            name: '1home1',
            component: () => import('@/views/HomeView.vue')
          }
        ]
      },
]