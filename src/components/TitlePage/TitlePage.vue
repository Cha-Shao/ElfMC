<template>
  <div class="container">
    <div class="titleLabel">
      <img src="@/assets/simple-logo.png" alt="" class="imgLogo">
      <h1 class="title"><span class="colored">ElfMC</span> 精灵物语.</h1>
      <p class="slogan"><span class="colored">我们</span>致力于打造优秀的<br>MC服务器</p>
      <daily-string class="dailyString"/>
      <n-space>
        <n-popover trigger="manual" :show="showIPPopover">
          <template #trigger>
            <n-button color="#45f5a9" round size="large" class="button mainbutton copyIP"
            @click="copyStr('.copyIP','IP')" data-clipboard-text="PLAY.ELFMC.COM"
            >复制IP</n-button>
          </template>
          <span>已复制👍</span>
        </n-popover>
        <n-button color="#45f5a9" round size="large" ghost class="button">交流群</n-button>
        <n-button circle secondary round size="large" class="play button">
          <template #icon>
              <n-icon><Play /></n-icon>
          </template>
        </n-button>
      </n-space>
    </div>
    <div class="imageLabel">
      <img src="../../assets/titleimg.png" alt="">
    </div>
  </div>
</template>

<script setup>
import Configs from '@/configs'
import DailyString from './DailyString.vue'
import {Play} from '@vicons/ionicons5'
import Clipboard from 'clipboard'
import {ref} from 'vue'

import {NButton,
        NSpace,
        NIcon,
        NPopover} from 'naive-ui'

const showIPPopover = ref(false)
const copyStr = () => {
  let clipboard = new Clipboard('.copyIP');
  clipboard.on('success',e => {
    e.clearSelection();
    clipboard.destroy()
    showIPPopover.value = true
    setTimeout(function() {
      showIPPopover.value = !showIPPopover.value
    },2000)
  })
  clipboard.on('error',e => {
    clipboard.destroy()
    alert('你的浏览器好像不支持复制呢...\nPLAY.ELFMC.COM')
    console.log('不支持复制')
    console.log('PLAY.ELFMC.COM')
  })
}
</script>

<style lang="scss" scoped>
$BackgroundColor: #FCFCFD;
$borderColor: #c9cdd4;
$fontColor: #2c3e50;
$mainColor: #45F5A9;
$subColor: #29bccb;

.colored{
  color: $mainColor;
  filter: brightness(0.9);
}
.button{
  font-size: 1.2em;
  transition: 0.3s ease;
  &:hover{
    transform: translateY(-3px);
  }
}
.mainbutton{
  filter: brightness(0.97);
  transition: 0.3s ease;
  &:hover{
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -10px rgba($color: $mainColor, $alpha: 1);
  }
}
.copyIP{
  background: linear-gradient(195deg,#06e07d,#2cd5c4);
}
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12vh auto 12vh auto;
  .titleLabel{
    flex-shrink: 0;
    margin-left: 27px;
    .imgLogo{
      max-width: 35px;
      margin-left: 2%;
    }
    .title{
      font-size: 3em;
      margin: 7px;
      position: relative;
      z-index: 2;
      &::after{
        content: 'Minecraft';
        position: absolute;
        font-size: 1.8em;
        top: -27px;
        left: 105px;
        color: $mainColor;
        opacity: 0.15;
        z-index: -1;
      }
    }
    .slogan{
      font-size: 1.9em;
      margin: 7px;
    }
    .dailyString{
      margin: 17px;
      margin-top: 37px;
      font-size: 1.2em;
    }
    @media screen and (min-width: 1481px){
      .imgLogo{
        max-width: 75px;
      }
      .title{
        font-size: 5em;
      }
      .slogan{
        font-size: 2.5em;
      }
      .dailyString{
        font-size: 1.3em;
      }
    }
  }
  .imageLabel{
    margin-left: 7%;
    animation: floatingIMG 7s ease-in-out infinite;
    flex-shrink: 1;
    img{
      width: 100%;
    }
  }
}
.play{
  color: #71757E;
}

@keyframes floatingIMG {
  0% {
    transform: translateY(0)
  }

  50% {
    transform: translateY(25px)
  }

  to {
    transform: translateY(0)
  }
}
</style>