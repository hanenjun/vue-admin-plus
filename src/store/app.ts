import { defineStore } from 'pinia'
import { setGlobalState } from "@/initQiankunState/action";
import { darkTheme } from 'naive-ui'
import type { GlobalTheme, NLocale, NDateLocale } from 'naive-ui'
import { zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'
import vue from '@/main'
export interface App {
    collaps: boolean;
    loading: boolean;
    theme: GlobalTheme | null;
    locale: NLocale | {name: string};
    dateLocale: NDateLocale | {name: string};
}



export const useAppStore = defineStore('app', {
    state: (): App => {
        return {
            collaps: true,
            loading: false,
            theme: null,
            locale: zhCN,
            dateLocale: dateZhCN
        }
    },
    actions: {
        setCollaps(): void {
            this.collaps = !this.collaps
        },
        switchTheme(): void {
            this.loading = true
            this.theme = this.theme ? null : darkTheme
            setTimeout(() => {
                this.loading = false
            }, 500)
        },
        switchLanguage(): void {
            this.loading = true;
            vue.$i18n.locale = vue.$i18n.locale === 'en' ? 'zh' : 'en'
            this.locale = this.locale.name == "zh-CN" ? enUS : zhCN
            this.dateLocale = this.locale.name == "zh-CN" ? dateEnUS : dateZhCN
            setTimeout(() => {
                this.loading = false
            }, 500)
        }
    },
})

setTimeout(() => {
    useAppStore().$subscribe(() => {
        setGlobalState()
    })
})