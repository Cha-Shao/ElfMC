<template>
    <div>
        <div class="paragraph" v-if="randomString == 0">
            <p class="dailyString">ElfMC服务器自开始以来已经运行了 <span class="colored"><n-number-animation ref="numberAnimationInstRef" :from="0" :to="Math.round((new Date() / 1000-1495555200)/(60*60*24))" :duration="5000" /></span> 天!</p>
            <p class="dailyString">感谢陪伴.</p>
        </div>
        <div class="paragraph" v-if="randomString == 1">
            <p class="dailyString">服务器现有 <span class="colored"><n-number-animation ref="numberAnimationInstRef" :from="0" :to="99"/></span> 人在线.</p>
            <p class="dailyString">&nbsp;</p>
        </div>
        <div class="paragraph" v-if="randomString == 2">
            <p class="dailyString">{{hour}}, 旅行者!</p>
            <p class="dailyString">&nbsp;</p>
        </div>
    </div>
</template>

<script setup>
import {NNumberAnimation} from 'naive-ui'
import Configs from '@/configs'

// 随机显示一言
let randomString = Math.floor(Math.random() * 3)

// // 给hour赋值现在是几点
let hour = new Date().getHours()
// // 早上好 上午好 中午好 下午好 晚上好
switch (hour) {
    case (0 <= hour < 6):
        hour = '晚上好'; break
    case 6 <= hour < 9:
        hour = '早上好'; break
    case 9 <= hour < 12:
        hour = '上午好'; break
    case 12:
        hour = '中午好'; break
    case 13 <= hour < 18:
        hour = '下午好'; break
    case 18 <= hour < 24:
        hour = '晚上好'; break
    default:
        hour = '你好'; break
}

</script>

<style lang="scss" scoped>
$BackgroundColor: #FCFCFD;
$borderColor: #c9cdd4;
$fontColor: #2c3e50;
$mainColor: #45F5A9;
$subColor: #29bccb;

.dailyString{
    font-size: 1em;
    margin: 0;
}
.colored{
  color: $mainColor;
  font-weight: bold;
  font-size: 1.2em;
  filter: brightness(0.9);
}
</style>