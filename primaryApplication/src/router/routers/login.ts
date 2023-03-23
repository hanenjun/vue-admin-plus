import Login from '@/views/LoginView.vue'
import { RouteRecordRaw } from 'vue-router'

export const loginRouter:Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            name: 'login',
            key: 'login'
        }
    }
]