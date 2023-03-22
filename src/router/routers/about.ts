import Layout from '@/layout/index.vue'
import { RouteRecordRaw } from 'vue-router'

import {
    PersonOutline as PersonIcon,
    WineOutline as WineIcon,
  } from "@vicons/ionicons5";

export const aboutRouter:Array<RouteRecordRaw> = [
    {
        path: '/about',
        name: 'about',
        component: Layout,
        redirect: '/about/son',
        meta: {
            name: 'about',
            key: 'about',
            icon: PersonIcon
        },
        children: [
            {
                meta: {
                    name: 'son',
                    key: 'son',
                    icon: WineIcon
                },
                path: '/about/son/',
                name: 'son',
                component: () => import('@/views/AboutView.vue')
            }
        ]
    }
]