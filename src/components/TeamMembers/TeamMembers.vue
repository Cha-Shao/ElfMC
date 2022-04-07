<template>
    <div class="container">
        <div class="scroll">
            <n-space class="part">
                <div style="width: 100px;" v-if="isWidth"></div>
                <atropos class="atroposCard showfade" v-for="(cards, i) in Configs.members" :key="i" v-animate-onscroll="'animated fadeInUp'" :style="'animation-delay:'+cards.delay+';'"
                
                :active-offset="150"
                :shadow="false"   :highlight="false"
                :rotateXMax="7"   :rotateYMax="7">

                    <n-card :bordered="false"
                    :title="cards.name" class="card members" data-atropos-offset="-5">
                        <template #header-extra>
                        #{{cards.identity}}
                        </template>
                        <p class="content">{{cards.autograph}}</p>
                        <p class="content">正在学习: {{cards.learning}}</p>
                        <p class="content">{{cards.describe}}</p>
                        <template #footer>
                        <n-space>
                            <n-tag round size="small" v-for="(post, i) in cards.post" :key="i"
                            :color="{ color: '#2C3E5011', textColor: '#fcfcfd', borderColor: '#2C3E5033' }">
                            {{post}}
                            </n-tag>
                        </n-space>
                        </template>
                        <img :src="membersSkin[i]" alt="成员立绘" class="memberSkin" data-atropos-offset="-3">
                    </n-card>
                </atropos>
                <div style="width: 50px;"></div>
            </n-space>
        </div>
    </div>
</template>

<script setup>
import {NCard,
        NTag,
        NSpace} from 'naive-ui'
import {onMounted, ref} from 'vue'
import Configs from '@/configs'
import Atropos from 'atropos/vue'
import 'atropos/atropos.css'

import YuzeTT from '@/assets/YuzeTT.png'
import Cha_Shao from '@/assets/Cha_Shao.png'
import Chx_ChaZi from '@/assets/Chx_ChaZi.png'
import p1uginL from '@/assets/p1uginL.png'

const membersSkin = [
  Cha_Shao,
  YuzeTT,
  Chx_ChaZi,
  p1uginL
]

const isWidth = window.innerWidth >= 1300
</script>

<style lang="scss">
.members .n-card-header .n-card-header__main{
  font-size: 1.5em;
  color: #fcfcfd !important;
}
.members .n-card-header .n-card-header__extra{
  color: #fcfcfd !important;
}
</style>

<style lang="scss" scoped>
$BackgroundColor: #FCFCFD;
$subBackgroundColor: #f8f8fb;
$borderColor: #C9CDD4;
$lightFontColor: #2C3E50;
$darkFontColor: #fcfcfd;
$mainLogoColor: #45F5A9;
$subLogoColor: #29BCCB;
$mainUIColor: #06E07D;
$subUIColor: #2CD5C4;

.container{
    background: $subBackgroundColor;
    margin: 0 auto;
    padding-bottom: 4vh;
    .scroll::-webkit-scrollbar{
        height: 9px;
        background-color: transparent;
        border-top: 2px solid $mainUIColor;
        border-image: linear-gradient(to right, $mainUIColor, $subUIColor) 1;
    }
    .scroll::-webkit-scrollbar-thumb{
        background: linear-gradient(to right, $mainUIColor, $subUIColor);
        border-radius: 99px;
    }
    .scroll{
        overflow-y: hidden;
        padding: 20px;
        .part{
            // max-width: 1600px;
            margin: 0 auto;
            flex-flow: row nowrap !important;
            .card{
                position: relative;
                background: linear-gradient(195deg, $mainUIColor 20%, $subUIColor);
                box-shadow: 0 3px 20px -10px rgba($color: $mainUIColor, $alpha: 1),
                            0 3px 20px -10px rgba($color: $subUIColor, $alpha: 1);
                width: 320px;
                height: 450px;
                color: $darkFontColor;
                font-size: 1rem !important;
                border-radius: 12px;
                transition: 0.3s ease;
                margin: 4vw;
                margin-right: 100px;
                .content{
                max-width: 66%;
                font-size: 0.95em;
                }
                &::after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url('@/assets/button-vector.png');
                opacity: 0.3;
                }
                .memberSkin{
                position: absolute;
                top: 15%;
                left: 65%;
                width: 240px;
                z-index: 2;
                }
            }
        }
    }
}
</style>