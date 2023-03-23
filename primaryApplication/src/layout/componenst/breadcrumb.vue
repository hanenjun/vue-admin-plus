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
import { Router } from 'vue-router'
let currentRoute = reactive((router as Router).currentRoute._rawValue.matched);
watch(
  () => router.currentRoute.value.path,
  () => {
    currentRoute.splice(0, currentRoute.length);
    (router as Router).currentRoute._rawValue.matched.forEach((item:string):void => {
      currentRoute.push(item);
    });
  }
);
</script>
