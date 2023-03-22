import { defineStore } from 'pinia'
import { setGlobalState } from "@/initQiankunState/action";

export interface App {
    collaps: boolean;
    loading: boolean;
}



export const useAppStore = defineStore('app', {
    state: (): App => {
        return {
            collaps: true,
            loading: false
        }
    },
    actions: {
        setCollaps():void {
            this.collaps = !this.collaps
        }
    },
})

setTimeout(()=>{
    useAppStore().$subscribe(()=>{
        setGlobalState()
    })
})