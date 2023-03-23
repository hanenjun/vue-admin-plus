<template>
  <div class="home">
    <el-button @click="handle1">点击向子应用发送消息</el-button>
  </div>
</template>

<script lang="ts" setup>
import actions from "@/initQiankunState/action";
import { reactive, onMounted, ref } from "vue";
let mes1 = reactive({
  project_id: "机电平台f",
});
onMounted(() => {
  actions.onGlobalStateChange((state, preState) => {
    console.log(preState, "主应用观察者变更前");
    console.log(state, "主应用观察者变更后");
  });
});
function handle1() {
  actions.setGlobalState(mes1);
}
</script>
