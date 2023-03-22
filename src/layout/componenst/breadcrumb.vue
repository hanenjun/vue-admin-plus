<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="item in currentRoute" :key="item.path">
      {{ item.name }}</n-breadcrumb-item
    >
  </n-breadcrumb>
</template>
<script lang="ts" setup>
import { reactive, watch } from "vue";
import router from "@/router";
let currentRoute = reactive(router.currentRoute._rawValue.matched);
watch(
  () => router.currentRoute.value.path,
  () => {
    currentRoute.splice(0, currentRoute.length);
    router.currentRoute._rawValue.matched.forEach((item) => {
      currentRoute.push(item);
    });
  }
);
</script>
