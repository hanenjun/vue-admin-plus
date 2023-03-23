import { defineStore } from 'pinia'
import { setGlobalState } from "@/initQiankunState/action";
import router from '@/router'

export interface USER {
    islogin: boolean
}
export const useUserStore = defineStore('user', {
    state: (): USER => {
        return {
            islogin: false
        }
    },
    actions: {
        login(login:boolean): void {
            this.islogin = login
            if(login) {
                router.push('/home')
            }
        }
    },
})

setTimeout(() => {
    useUserStore().$subscribe(() => {
        setGlobalState()
    })
})