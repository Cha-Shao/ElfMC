<template>
  <nav class="headerFlex header" style="justify-content: space-between;" @click="backToTop()">
    <div class="headerFlex" style="padding-left: 37px;">
        <img alt="ElfMC logo" class="logo" src="./assets/logo.png">
    </div>
    <div class="headerFlex" style="padding-right: 57px;">
      <router-link v-for="(headerLink, i) in Configs.header" :key="i" :to="headerLink.page" class="links">{{headerLink.name}}</router-link>
      <n-dropdown trigger="hover" :options="dropdownOptions" @select="jumpTo">
        <p class="links toolbox">工具箱</p>
      </n-dropdown>
      <div class="login">
        <n-button color="#45F5A9" class="loginButton button" @click="$router.push('/login')">登录</n-button>
      </div>
    </div>
  </nav>
  <router-view class="contents"/>
</template>

<script setup>
import { defineComponent } from 'vue'
import Configs from './configs'

import {NButton,
        NDropdown} from 'naive-ui'

const dropdownOptions = [
  {
    label: "简约时钟",
    key: "https://tools.elfmc.com/clock.html"
  },
  {
    label: "计划表",
    key: "https://tools.elfmc.com/plan.html"
  }
]
const jumpTo = (key) => {
  window.open(key);
}

const backToTop = () => {
const currentY = document.documentElement.scrollTop || document.body.scrollTop        
scrollAnimation(currentY, 0)
}
</script>

<style lang="scss">
$lightFontColor: #2C3E50;

// 取消atropos的默认样式
.atropos-inner{
  overflow: unset !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $lightFontColor;
  box-sizing: border-box;
  background: #FCFCFD;
  font-size: 1rem;
}
</style>
<style lang="scss" scoped>
$BackgroundColor: #FCFCFD;
$subBackgroundColor: #f8f8fb;
$borderColor: #C9CDD4;
$lightFontColor: #2C3E50;
$darkFontColor: #fcfcfd;
$mainLogoColor: #45F5A9;
$subLogoColor: #29bccb;
$mainUIColor: #06E07D;
$subUIColor: #2CD5C4;

body::-webkit-scrollbar{
  display: none !important;
}

.logo{
  height: 47px;
}
.header{
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba($color: $BackgroundColor, $alpha: 0.75);
  box-shadow: 0px 0px 15px rgba($color: $borderColor, $alpha: 0.75);
}
.headerFlex{
  display: flex;
  align-items: center;
}
nav {
  backdrop-filter: blur(7px);
  border-bottom: 1px solid $borderColor;
  z-index: 99;

  .links{
    color: $lightFontColor;
    font-size: 1.3em;
    text-decoration: none;
    padding-left: 13.5px;
    padding-right: 13.5px;
    transition: 0.3s ease;
    &::after{
      content: '';
      display: block;
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      height: 5px;
      width: 23px;
      border-radius: 99px;
      background: $mainLogoColor;
      transition: 0.3s ease;
      opacity: 0;
    }

    &.router-link-exact-active {
      color: $mainLogoColor;
      filter: brightness(0.8);
      &::after{
        opacity: 1;
      }
    }
  }
  .toolbox{
    cursor: default;
  }
  .login{
    width: 75px;
    .loginButton{
      border-radius: 9px;
      font-size: 1.3em;
      margin-left: 17px;
      color: $lightFontColor;
      background: linear-gradient(195deg, $mainLogoColor, $subLogoColor);
      --n-border: none !important;
      }
  }
}
.button{
  filter: brightness(0.97);
  transition: 0.3s ease;
  &:hover{
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -10px rgba($color: $mainLogoColor, $alpha: 0.6),
                0 10px 20px -10px rgba($color: $subLogoColor, $alpha: 0.6);
    filter: brightness(1.03);
  }
}
.contents{
  padding-top: 76px;
}
</style>
