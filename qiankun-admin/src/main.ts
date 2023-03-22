import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const isQiankun = (window as any).__POWERED_BY_QIANKUN__;

if ((window as any).__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let appDom: any = null;

function render() {
  appDom = createApp(App).use(store).use(router)
}

export async function bootstrap() {
}

export async function mount(props: any) {
  if (!appDom) {
    render();
  }
  appDom.mount(window.document.querySelector('#son-1'));
}

export async function unmount(props: any) {
  if (!appDom) {
    render();
  }
  appDom.unmount();
  appDom = null;
}

if (!isQiankun) {
  render();
  appDom.mount("#son-1");
}
