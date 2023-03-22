import { createApp } from 'vue'
import App from './App.vue'
import store from './store/pinia'
import router from './router'
import naive from 'naive-ui'
import '@/style/main.scss'
export default createApp(App).use(naive).use(store).use(router).mount('#app')
import '@/initQiankunState/index'