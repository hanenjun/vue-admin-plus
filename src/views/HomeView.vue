<template>
  <n-card title="工作台">
    <n-avatar
      round
      :size="100"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
  </n-card>
  <h1>Welcome to Your Vue.js + TypeScript App</h1>
  {{ msg }}
  <div id="usercenter"></div>
</template>

,<script lang="ts" setup>
import { defineProps } from 'vue'
let msg = defineProps({
  msg: {
    default: '',
    type: String
  }
})
</script>