import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './router'
import store from './store'
import './public-path.js'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import actions from './action'



let router = null
let instance:any = null

function render(props?: any){
  if (props) {
    actions.setActions(props)
  }
  router = createRouter({
    routes,
    history: (window as any).__POWERED_BY_QIANKUN__ ? createWebHashHistory('/a/son/') : createWebHistory(),
  })
  instance = createApp(App)
  instance.use(store).use(router).mount(props.container ? (props.container as any).querySelector('#son-1') : '#son-1')
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('第一次进入admin')
}
export async function mount(props:any) {
  render(props)
}
export async function unmount() {
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null
  router = null
}
