import { defineStore } from 'pinia'

export interface App {
    collaps: boolean
}


export const useAppStore = defineStore('app', {
    state: (): App => {
        return {
            collaps: true
        }
    },
    actions: {
        setCollaps():void {
            this.collaps = !this.collaps
        }
    },
})