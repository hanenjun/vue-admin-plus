import { initGlobalState } from 'qiankun'
import store from '@/store/pinia';
import router from '@/router';
const initState = {
    store,
    router
}
const actions = initGlobalState(initState)
actions.onGlobalStateChange((state, preState) => {
    console.log(preState, '主应用变更前');
    console.log(state, '主应用变更后');
})
export default actions

export const setGlobalState = () => {
    actions.setGlobalState({
        store,
        router
    });
}

setTimeout(()=>{
    setGlobalState()
},500)