import { initGlobalState } from 'qiankun'
import vue from "@/main";
import store from '@/store/pinia';
import router from '@/router';
const initState = {
    store: {
        app: {
            loading: true
        },
        ...store.state.value
    },
    router:router
}
const actions = initGlobalState(initState)
actions.onGlobalStateChange((state, preState) => {
    console.log(preState, '主应用变更前');
    console.log(state, '主应用变更后');
})
export default actions

export const setGlobalState = () => {
    actions.setGlobalState({
        store: {...store.state.value},
        router:router
    });
}

setTimeout(()=>{
    setGlobalState()
},500)