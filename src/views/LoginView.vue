<template>
  <div class="container">
    <div class="panel">
      <h1 class="title"></h1>
      <div class="part">
        <p class="notes">账号</p>{{inputUser}}
        <n-input v-model:value="inputUser" type="text" placeholder="用户名/邮箱" />
      </div>
      <div class="part">
        <p class="notes">密码</p>{{inputPassword}}
        <n-input v-model:value="inputPassword" type="password" show-password-on="mousedown" placeholder="顾名思义" :maxlength="16" />
      </div>
      <div class="part" style="display: flex;justify-content: space-between;">
        <span>
          <n-popover trigger="manual" :show="showPopover">
            <template #trigger>
              <n-checkbox v-model:checked="accept"></n-checkbox>
            </template>
            <span>请勾选此项</span>
          </n-popover>
          我已阅读并同意<a href="#" class="link" target="_blank">用户协议</a>和<a href="#" class="link" target="_blank">隐私政策</a>
        </span>
        <span>未有账号?<a href="#" class="link">申请注册</a></span>
      </div>
      <div class="part">
        <n-button class="login button" color="#45F5A9" @click="login()">登录</n-button>
        <!-- <e-button content="登录" @click="login()"/> -->
      </div>
      <div class="part">
        <n-button size="medium" secondary strong class="forgetPwd">忘记密码?</n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import {NInput,
        NCheckbox,
        NButton,
        NPopover} from 'naive-ui'

const inputUser = ref(null)
const inputPassword = ref(null)
const accept = ref(null)
const showPopover = ref(false)

async function login () {
  if (accept.value != true) {
    await dontAccept()
  }
  else {
    console.log(accept.value)
    accepted()
  }
}
const dontAccept = () => {
  // console.log(accept.value)
  console.log("未同意");
  showPopover.value = true
  setTimeout(function() {
    showPopover.value = !showPopover.value
  },3000)
}
const accepted = () => {
  console.log("logined");
  // axios.post('https://service-4jo9y5im-1303833782.gz.apigw.tencentcs.com/release/login', {user: inputUser.value, pwd: inputPassword.value}).then(function (response){
  //   console.log(response)
  // }).catch(function (error){
  //   console.log(error)
  // })
  // axios post登录信息

  

  // axios.post('/api/login', {
  //     username: 'admin',
  //     password: 'admin'
  // }).then(function (response) {
  //     console.log(response);
  // })
  // .catch(function (error) {
  //     console.log(error);
  // });
  // // 如果返回值是401就登录失败
  // if(response.status == 401){
  //     // 跳转到登录页面
  //     router.push('/login')
  // }
  // // 如果返回值是200就登录成功
  // if(response.status == 200){
  //     // 跳转到首页
  //     router.push('/')
  // }
}
</script>

<style lang="scss" scoped>
$backgroundColor: #F1F1F5;
$BackgroundColor: #FCFCFD;
$borderColor: #c9cdd4;
$fontColor: #2c3e50;
$mainColor: #45F5A9;
$subColor: #29bccb;

.container{
  padding-top: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: $backgroundColor;
}
.panel{
  display: inline-block;
  background: $BackgroundColor;
  padding: 37px;
  // border: 1px solid $borderColor;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba($color: $borderColor, $alpha: 0.75);
  width: 30%;
  max-width: 400px;
  .title{
    content: '';
    display: block;
    position: relative;
    background: #45f5a9bb;
    height: 29px;
    width: 13px;
    // color: $mainColor;
    // filter: brightness(0.9);
    &::after{
      content: '登录到ElfMC';
      position: absolute;
      top: -17px;
      left: 7px;
      font-size: 1em;
      white-space: nowrap;
    }
  }
  .part{
    margin-bottom: 13px;
    .notes{
      margin: 3px 0;
    }
  }
}
.link{
  color: $mainColor;
  filter: brightness(0.9);
}
.login{
  width: 100%;
  font-size: 1.3em;
}
.forgetPwd{
  width: 100%;
}
.button{
  filter: brightness(0.97);
  transition: 0.3s ease;
  &:hover{
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -10px rgba($color: $mainColor, $alpha: 1);
  }
}
</style>