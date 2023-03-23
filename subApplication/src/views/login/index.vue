<template>
  <div class="view-account">
    <div class="view-account-header"></div>
    <div class="view-account-container">
      <div class="view-account-top">
        <div class="view-account-top-logo">
          <img :src="webConfig.primaryApplicationConfig.logo" alt="" />
        </div>
        <div class="view-account-top-desc">{{ webConfig.primaryApplicationConfig.title }}</div>
      </div>
      <div class="view-account-form">
        <n-form :model="userinfo" :rules="rules" ref="formRef" label-placement="left" size="large">
          <n-form-item path="username">
            <n-input :disabled="loading" placeholder="请输入用户名" v-model:value="userinfo.username">
              <template #prefix>
                <n-icon size="18" color="#808695">
                  <PersonOutline />
                </n-icon>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item path="password">
            <n-input :disabled="loading" type="password" showPasswordOn="click" placeholder="请输入密码" v-model:value="userinfo.password">
              <template #prefix>
                <n-icon size="18" color="#808695">
                  <LockClosedOutline />
                </n-icon>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item class="default-color">
            <div class="flex justify-between">
              <div class="flex-initial">
                <n-checkbox :disabled="loading" v-model:value="userinfo.autoLogin">自动登录</n-checkbox>
              </div>
            </div>
          </n-form-item>
          <n-form-item>
            <n-button :loading="loading" type="primary" size="large" @click="login" block>
              登录
            </n-button>
          </n-form-item>
        </n-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import {
  PersonOutline,
  LockClosedOutline,
  LogoGithub,
  LogoFacebook,
} from "@vicons/ionicons5";
import Config from '../../../../applicationConfig/application'
import {
  login as loginApi, USER_LOGIN,
  Response, RequestUserlogin
} from "@/api/user";
import { FormInst, useNotification, NotificationType } from 'naive-ui'
let loading = ref(false)
let Notification = useNotification()
let notification = (type: NotificationType, msg: string, meta: string) => {
  console.log(Notification)
  Notification[type]({
    content: msg,
    meta: meta,
    duration: 2500,
    keepAliveOnHover: true
  })
}
const webConfig = reactive(Config)
const formRef = ref<FormInst | null>(null)

let userinfo = reactive({
  username: '',
  password: '',
  autoLogin: false
})
const rules = reactive({
  username: {
    required: true,
    message: '请输入姓名',
    trigger: 'blur'
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: 'blur'
  }
})

function login(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      loading.value = true
      loginApi(userinfo).then((res: Response<USER_LOGIN>): void => {
        if (res.code === 0) {
          localStorage.setItem('USER_TOKEN', res.result.token)
          notification('success', '登入成功', '😄')
          loading.value = false
          setTimeout(()=>{
            window.history.pushState(
            null,
            "",
            `/`
          );
          },1000)
        } else {
          loading.value = false
          notification('error', '登入失败', '😭')
        }
      });
    } else {
      console.log(errors)
    }
  })

}
</script>

<style lang="less">
.view-account {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;

  &-container {
    flex: 1;
    padding: 32px 12px;
    max-width: 384px;
    min-width: 320px;
    margin: 0 auto;
  }

  &-top {
    padding: 32px 0;
    text-align: center;

    &-desc {
      font-size: 14px;
      color: #808695;
    }
  }

  &-other {
    width: 100%;
  }

  .default-color {
    color: #515a6e;

    .ant-checkbox-wrapper {
      color: #515a6e;
    }
  }
}

@media (min-width: 768px) {
  .view-account {
    background-image: url("../../assets/images/login.svg");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
  }

  .page-account-container {
    padding: 32px 0 24px 0;
  }
}
</style>
