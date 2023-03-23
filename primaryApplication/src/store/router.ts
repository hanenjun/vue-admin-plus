import { defineStore } from 'pinia'
import { routes } from "@/router/index";
import { h, Component } from "vue";
import { RouterLink } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import { setGlobalState } from "@/initQiankunState/action";
import {renderIcon} from '@/utils/icon'

export interface Routermenu {
    label: string | Component;
    key: string;
    icon: Component;
    children?: Array<Routermenu>;
    name?: string;
    hidden?: boolean;
}

export interface CustomRouteRecordRaw {
    meta: Routermenu;
    path: string;
    children: Array<CustomRouteRecordRaw>
}

const getRouterMenus = (routes: Array<CustomRouteRecordRaw>, routerKey: CustomRouteRecordRaw | null): Array<Routermenu> => {
    if (routes instanceof Array) {
        return routes.filter(item => !item.meta.hidden).map((router: CustomRouteRecordRaw) => {
            if (router.children && router.children.length) {
                return {
                    label: (): Component => {
                        return h(
                            (RouterLink as Component),
                            (routerKey ? {
                                to: {
                                    path: router.path
                                }
                            } : {
                                to: {
                                    path: ''
                                }
                            }),
                            { default: () => router.meta.name }
                        )
                    },
                    key: router.meta.key,
                    icon: renderIcon(router.meta.icon),
                    children: getRouterMenus(router.children, router)
                }
            } else {
                return {
                    label: (): Component => h(
                        RouterLink,
                        {
                            to: {
                                path: router.path
                            }
                        },
                        { default: () => router.meta.name }
                    ),
                    key: router.meta.key,
                    icon: renderIcon(router.meta.icon)
                }
            }
        })
    } else {
        return routes
    }
}

export interface RouterStore {
    routes: Array<RouteRecordRaw>
}


export const useRouterStore = defineStore('router', {
    state: function ():RouterStore {
        return {
            routes: routes
        }
    },
    getters: {
        siderMenus(state: RouterStore): Array<Routermenu>{
            return getRouterMenus(state.routes as unknown as Array<CustomRouteRecordRaw>, null)
        }
    }
})

setTimeout(()=>{
    useRouterStore().$subscribe(()=>{
        setGlobalState()
    })
})