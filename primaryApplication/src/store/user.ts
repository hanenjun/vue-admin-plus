import { defineStore } from 'pinia'
import { setGlobalState } from "@/initQiankunState/action";
import router from '@/router'
import { getUserinfo, Response, USER_INFO } from '@/api/user'



export interface USER {
    islogin: boolean;
    userData: object;
}
export const useUserStore = defineStore('user', {
    state: (): USER => {
        return {
            islogin: false,
            userData: {

            }
        }
    },
    actions: {
        login(login: boolean): void {
            this.islogin = login
            if (login) {
                router.push('/home')
            }
        },
        async getUserInfo(locaToken: string): Promise<Response<USER_INFO>> {
            let userinfo = await getUserinfo({
                token: locaToken
            })
            if(userinfo.code === 0) {
                this.userData = userinfo.result.userData
            }
            return userinfo
        }
    },
})

setTimeout(() => {
    useUserStore().$subscribe(() => {
        setGlobalState()
    })
})