<template>
  <el-button @click="handle1">点我向父应用发送数据</el-button>
</template>
<script lang="ts" setup>
import actions from "@/action";
import { onMounted,  reactive } from "vue";
let router = reactive({})
// 在mounted中
onMounted(() => {
  actions.onGlobalStateChange((state) => {
    console.log(state, "子应用检测数据");
    // state.router.back()
    router = state.router
  }, true); // onGlobalStateChange 第二个参数设置为true，会立即触发一次观察者函数
});
function handle1() {
  router.back()
  actions.setGlobalState({ project_id: "机电子应用s" });
}
</script>
