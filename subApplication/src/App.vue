<template>
  <n-notification-provider>
    <router-view></router-view>
  </n-notification-provider>
</template>
<script lang="ts" setup>
import actions from "@/action";
import { onMounted, reactive } from "vue";
// 在mounted中
onMounted(() => {
  if ((window as any).__POWERED_BY_QIANKUN__) {
    actions.onGlobalStateChange((state) => {
      console.log(state, "子应用检测数据");
    }, true);
  }
});
function handle1() {
  // actions.setGlobalState({ project_id: "机电子应用s" });
}
</script>
