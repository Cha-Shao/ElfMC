<template>
    <div class="separate"/>
    <div class="container">
        <div class="cards">
            <learn-more-card v-for="(cardNumber, i) in Configs.learnMore" :key="i" :cardInfos="cardNumber" :number="i"/>
        </div>
    </div>
</template>

<script setup>
import LearnMoreCard from './LearnMoreCard.vue'
import Configs from '@/configs'
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

.container{
    background: $subBackgroundColor;
    margin: 0 auto;
    padding-bottom: 4vh;
    .title{
        display: inline-block;
        font-size: 3em;
        margin-bottom: 97px;
        z-index: 2;
        position: relative;
        left: 12%;
        &::after{
            content: '';
            position: absolute;
            top: 30%;
            left: 15%;
            width: 5em;
            height: 1.3em;
            background: $mainUIColor url('@/assets/button-vector.png');
            background-size: 200%;
            z-index: -1;
            border-radius: 17px;
            box-shadow: 0 10px 20px -10px rgba($color: $mainUIColor, $alpha: 1);
        }
    }
    .cards{
        display: flex;
        justify-content: center;
        max-width: 1600px;
        width: 85%;
        margin: 0 auto;
    }
    @media screen and (max-width: 1500px){
        .cards{
            display: inherit;
        }
    }
}
</style>