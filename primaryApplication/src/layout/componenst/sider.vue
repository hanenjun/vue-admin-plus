<template>
  <n-layout-sider
    class="sider"
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :native-scrollbar="false"
    :value="currentRoute"
    :collapsed="appStore.collaps"
    :on-update:collapsed="appStore.setCollaps"
  >
    <n-affix :trigger-top="0" position="absolute">
      <div class="sider_logo">
        <div
          class="sider_logo_box"
          :style="{
            width: appStore.collaps ? '64px' : '240px',
          }"
        >
          <img
            v-show="appStore.collaps"
            :src="webConfig.primaryApplicationConfig.logo"
            alt=""
          />
          <img
            v-show="!appStore.collaps"
            :src="webConfig.primaryApplicationConfig.logoBigImage"
            alt=""
          />
        </div>
      </div>
    </n-affix>
    <n-menu
      class="menu"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="siderMenus"
      :value="currentRoute"
      :on-update:value="setValue"
    />
  </n-layout-sider>
</template>
<script lang="ts" setup>
import { ref, reactive, watch } from "vue";
import { useAppStore } from "@/store/app";
import { useRouterStore } from "@/store/router";
import router from "@/router";
import { Router } from 'vue-rouer'
import Config from '../../../../applicationConfig/application'
const webConfig = reactive(Config)
let appStore = useAppStore();
const routerStore = useRouterStore();
let siderMenus = reactive(routerStore.siderMenus);
let currentRoute = ref(router.currentRoute.value.name);
function setValue(val: string): void {
  currentRoute.value = val;
}
watch(router.currentRoute, () => {
  setValue((router as Router).currentRoute.value.name);
});
</script>
