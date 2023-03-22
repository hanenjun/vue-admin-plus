import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './router'
import store from './store'
import './public-path.ts'


// 引入 vue-router 的方法
import { createRouter, createWebHistory, RouterHistory, createWebHashHistory } from 'vue-router'

let router = null
let instance:any = null

function render(props?: any){
  router = createRouter({
    routes,
    history: createWebHashHistory((window as any).__POWERED_BY_QIANKUN__ ? '/a/son/' : '/'),
    // base: (window as any).__POWERED_BY_QIANKUN__ ? '/a/son/' : '/'
  })
  instance = createApp(App)
  instance.use(store).use(router).mount(props.container ? (props.container as any).querySelector('#son-1') : '#son-1')
}

// 如果是单独启动的子文件，保证仍能正常运行
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({})
}

// 生命周期的钩子函数
// 导出第一次进入当前子应用的钩子函数
export async function bootstrap() {
  console.log('第一次进入admin')
}

// 导出每次创建挂载时的钩子函数
export async function mount(props:any) {
  console.log("创建挂载组件")
  render(props)
}

// 导出每次销毁时的钩子函数
export async function unmount() {
  console.log("销毁组件")
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null
  router = null
}


// const isQiankun = (window as any).__POWERED_BY_QIANKUN__;

// let appDom: any = null;

// function render() {
//   appDom = createApp(App).use(store).use(router)
// }

// export async function bootstrap() {
// }

// export async function mount(props: any) {
//   if (!appDom) {
//     render();
//   }
//   appDom.mount(window.document.querySelector('#son-1'));
// }

// export async function unmount(props: any) {
//   if (!appDom) {
//     render();
//   }
//   appDom.unmount();
//   appDom = null;
// }

// if (!isQiankun) {
//   render();
//   appDom.mount("#son-1");
// }
