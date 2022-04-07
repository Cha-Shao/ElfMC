<template>
    <div class="card" v-animate-onscroll="'animated fadeIn'+fadeInFrom[number]">
        <p class="title">{{cardInfos.title}}</p>
        <p class="content" v-html="cardInfos.contents"/>
        <a class="footer" :href="cardInfos.href">了解更多
            <n-icon class="readMoreIcon"><ArrowForward/></n-icon>
        </a>
        <img :src="imgSrc[number]" alt="" class="cardImg">
    </div>
</template>

<script setup>
import {NIcon} from 'naive-ui'
import {ArrowForward} from '@vicons/ionicons5'

import CoffeeCup from '@/assets/takeaway-cup-dynamic-color.png'
import Medal from '@/assets/medal-dynamic-color.png'

const imgSrc = [
    Medal,
    CoffeeCup
]
const fadeInFrom = [
    'Left',
    'Right'
]
</script>
<script>
export default{
    name: 'LearnMoreCard',
    props:{
        cardInfos: Object,
        number: Number
    }
}
</script>


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

.card{
    background: #f1f1f5;
    border-radius: 19px;
    overflow: hidden;
    padding: 27px;
    margin: 13px;
    margin-top: 0;
    flex: 1 0 auto;
    position: relative;
    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('@/assets/button-vector.png');
        opacity: 0.2;
        background-size: cover;
    }
    .title{
        font-size: 1.7em;
        margin: 0;
    }
    .content{
        color: $lightFontColor;
        font-size: 1em;
        opacity: 0.9;
        margin-bottom: 64px;
        width: 70%;
        margin-left: 7px;
    }
    .footer{
        position: absolute;
        bottom: 27px;
        text-decoration: none;
        color: $lightFontColor;
        margin: 0;
        font-size: 1em;
        display: flex;
        align-items: center;
        font-weight: bold;
        transition: 0.2s ease;
        max-width: 100px;
        z-index: 2;
        cursor: pointer;
        .readMoreIcon{
            margin-left: 7px;
            transition: 0.2s ease;
        }
        &:hover{
            color: $mainUIColor;
            filter: brightness(0.9);
        }
        &:hover .readMoreIcon{
            transform: translateX(7px);
        }
    }
    .cardImg{
        position: absolute;
        right: -75px;
        bottom: -35px;
        max-height: 300px;
        height: 150%;
    }
}
</style>