import { createApp } from 'vue'
import App from './App.vue'
import store from './store/pinia'
import router from './router'
import naive from 'naive-ui'
import '@/style/main.scss'
import '@/initQiankunState/index'
import i18n from '@/lang'
export default createApp(App).use(naive).use(store).use(router).use(i18n).mount('#app')