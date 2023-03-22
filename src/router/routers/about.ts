import Layout from '@/layout/index.vue'
import { RouteRecordRaw } from 'vue-router'

import {
    PersonOutline as PersonIcon,
    WineOutline as WineIcon,
  } from "@vicons/ionicons5";

export const aboutRouter:Array<RouteRecordRaw> = [
    {
        path: '/a',
        name: 'about',
        component: Layout,
        redirect: '/a/about',
        meta: {
            name: 'about',
            key: 'about',
            icon: PersonIcon
        },
        children: [
            {
                meta: {
                    name: '1about',
                    key: '1about',
                    icon: WineIcon
                },
                path: '/a/about',
                name: '1about',
                component: () => import('@/views/AboutView.vue')
            },
            {
                meta: {
                    name: 'son',
                    key: 'son',
                    icon: WineIcon
                },
                path: '/a/son',
                name: 'son',
                component: () => import('@/views/AboutView.vue')
            },
        ]
    }
]