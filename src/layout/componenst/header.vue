<template>
  <n-layout-header>
    <div class="header_box">
      <Breadcrumb></Breadcrumb>
      <div class="header_box_avatar">
        <n-dropdown :options="options">
          <div class="header_box_avatar_name_center">
            <n-avatar
              round
              size="medium"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
            <span class="header_box_avatar_name_text">你好！</span>
          </div>
        </n-dropdown>
      </div>
    </div>
  </n-layout-header>
</template>
<script lang="ts" setup>
import Breadcrumb from "./breadcrumb.vue";
import { h, reactive } from "vue";
import type { Component } from "vue";
import { NIcon } from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
} from "@vicons/ionicons5";
const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};
let options = reactive([
  {
    label: "用户资料",
    key: "profile",
    icon: renderIcon(UserIcon),
  },
  {
    label: "编辑用户资料",
    key: "editProfile",
    icon: renderIcon(EditIcon),
  },
  {
    label: "退出登录",
    key: "logout",
    icon: renderIcon(LogoutIcon),
  },
]);
</script>
<style lang=""></style>
