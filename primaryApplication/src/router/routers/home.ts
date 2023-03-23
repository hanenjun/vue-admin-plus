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
              name: 'home_redirect',
              key: 'home_redirect',
              icon: WineIcon
            },
            path: '/home',
            name: 'home_redirect',
            component: () => import('@/views/HomeView.vue')
          }
        ]
      },
]