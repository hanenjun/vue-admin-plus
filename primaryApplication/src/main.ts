import { createApp } from 'vue'
import App from './App.vue'
import store from './store/pinia'
import router from './router'
import naive from 'naive-ui'
import '@/style/main.scss'
import '@/initQiankunState/index'
import i18n from '@/lang'
import '@/icons'
if (process.env.NODE_ENV === 'development') {
    const { mockRequest } = require('../mock')
    mockRequest()
}
import '@/api/user'
export default createApp(App).use(naive).use(store).use(router).use(i18n).mount('#app')