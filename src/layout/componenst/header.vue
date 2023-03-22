<template>
  <n-layout-header>
    <div class="header_box">
      <Breadcrumb></Breadcrumb>
      <div class="header_box_avatar">
        <div class="header_box_theme" @click="appStore.switchTheme">
          <IconConfigProvider size="25">
            <Icon>
              <DarkThemeFilled></DarkThemeFilled>
            </Icon>
          </IconConfigProvider>
        </div>
        <div class="header_box_theme" @click="appStore.switchLanguage">
          <IconConfigProvider size="25">
            <Icon>
              <Language></Language>
            </Icon>
          </IconConfigProvider>
        </div>
        <n-dropdown :options="options">
          <div class="header_box_avatar_name_center">
            <n-avatar
              round
              size="medium"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
            <span class="header_box_avatar_name_text">{{ $t("person.name") }}</span>
          </div>
        </n-dropdown>
      </div>
    </div>
  </n-layout-header>
</template>
<script lang="ts" setup>
import Breadcrumb from "./breadcrumb.vue";
import { reactive } from "vue";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  Language,
} from "@vicons/ionicons5";
import { useAppStore } from "@/store/app";
import { DarkTheme20Filled as DarkThemeFilled } from "@vicons/fluent";
import { IconConfigProvider, Icon } from "@vicons/utils"; // vue3
import { renderIcon } from '@/utils/icon'
let appStore = useAppStore();


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
