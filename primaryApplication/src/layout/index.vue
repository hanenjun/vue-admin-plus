<template>
  <n-config-provider class="layout"  :theme="appStore.theme" :locale="appStore.locale" :date-locale="appStore.dateLocale">
    <n-layout has-sider>
      <Sider></Sider>
      <n-layout>
        <Header  class="header"></Header>
        <div class="container">
          <router-view></router-view>
        </div>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script lang="ts" setup>
import Sider from "./componenst/sider.vue";
import Header from "./componenst/header.vue";
import { useAppStore } from "@/store/app";
let appStore = useAppStore();

</script>
