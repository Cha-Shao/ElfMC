<template>
    <div class="container">
        <div class="part">
            <n-space justify="space-around">



                <div class="introduce">
                    <n-space class="titlePart">
                        <n-avatar
                            round
                            :size="72"
                            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                        />
                        <div>
                            <h1 class="title">这里放个什么标题吧。</h1>
                            <p class="subTitle">这里是比较长的副标题</p>
                        </div>
                    </n-space>
                    <div class="content">
                        <p>春天，小猴在山坡上刚栽下一排梨树，就张罗开了：“我栽的梨树要结果子啦！”</p>
                        <p>小山羊正在栽杏树，他对小猴子说：“兄弟，你高兴得太早了。梨树要五年才结果呢。”小猴子一听，心里凉了半截，忙问山羊：“你栽的杏树几年结果呀？”山羊回答说：“只要四年。”</p>
                        <p>小猴子连夜把梨树拔了，改栽了杏树，又张罗开了：“我的杏树，四年就能结杏子！”小黄牛正在给桃树施肥，他抬起头来对小猴子说：“吹什么！我种的桃树，三年就能结大桃子！”小猴子后悔自己错栽了杏树，又连夜拔掉，栽上了桃树。然后，他又吹嘘自己种的桃树多么好，结果结得多么早。小白马正在给樱桃树浇水，他不耐烦地对小猴子说：“我种的樱桃树，只要两年就结果。”小猴子一听，又心动了……</p>
                        <p>几年后，漫山遍野的果树丰收了！种杏的得杏，种桃的得桃，种樱桃的得樱桃，只有小猴子两手空空，一无所得。</p>
                    </div>
                    <p style="margin-top: 27px">Cha_Shao</p>
                    <div style="text-align:right">
                        <n-button color="#E2E3E8" class="button" round>按钮按钮</n-button>
                    </div>
                </div>



                <div class="infosCards">
                    <div class="card contactUs">
                        <n-space justify="center" style="align-items: center">
                            <div>
                                <h3 class="title">联系我们</h3>
                                <n-avatar round src="https://tenapi.cn/qqimg/?qq=2193113484" class="avatar"/>
                                <n-avatar round src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" class="avatar"/>
                                <n-avatar round src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" class="avatar"/>
                                <img src="@/assets/puzzle-dynamic-color.png" alt="" class="cardImg">
                            </div>
                        </n-space>
                    </div>
                    <div class="card followUs" onclick="window.open('https://space.bilibili.com/38827513')">
                        <n-space justify="center" style="align-items: center">
                            <div style="text-align: right;">
                                <h3 class="title">ElfMC Studio</h3>
                                <h3 class="title">Bilibili</h3>
                                <p class="title">关注ElfMC Bilibili</p>
                            </div>
                            <n-avatar round :src="logoAvatar" :size="72"/>
                        </n-space>
                    </div>
                    <div class="card joinUs" onclick="window.open('https://tenapi.cn/qun/?qun=1074692739')">
                        <n-space justify="center" style="align-items: center">
                            <img src="@/assets/QQ-square-fill.svg" alt=""
                            style="line-height: 0em;width: 2em;">
                            <h3 class="title"> QQ | ElfMC 交流群</h3>
                        </n-space>
                    </div>
                </div>



                <div class="footer" v-if="isWidth">
                    <p v-for="(footerContents, i) in Configs.footer" :key="i" class="footerContent">
                        <a :href="footerContents.href" target="_blank">{{footerContents.name}}</a>
                        {{footerContents.content}}
                    </p>
                    <p>Copyright © 2017-{{new Date().getFullYear()}} <a href="#">ElfMC</a>. All rights reserved.</p>
                </div>



            </n-space>
            <div style="height:12vh"></div>
            <div class="realFooter" v-if="!isWidth">
                <p>Copyright © 2017-{{new Date().getFullYear()}} <a href="#">ElfMC</a>. All rights reserved.</p>
                <div>
                    <p v-for="(footerContents, i) in Configs.footer" :key="i" class="footerContent">
                        <a :href="footerContents.href" target="_blank">{{footerContents.name}}</a>
                        {{footerContents.content}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {NCard,
        NSpace,
        NAvatar,
        NButton} from 'naive-ui'
import Configs from '@/configs'
import axios from 'axios'
import { ref } from 'vue'

const isWidth = ref(true)
// 监听窗口宽度
window.addEventListener('resize', () => {
    if (window.innerWidth < 1300) {
        isWidth.value = false
    } else {
        isWidth.value = true
    }
})

// const isWidth = window.innerWidth >= 1300

import logoAvatar from '@/assets/logo-avatar.png'

const getBilibiliInfo = () => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://tenapi.cn/bilibili/?uid=38827513')
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject(xhr.status)
            }
        }
        xhr.send()
    })
}

// const getBInfo = () => {
//     axios.get('https://tenapi.cn/bilibili/?uid=38827513').then(res => {
//         console.log(res.data)
//     })
// }
// getBInfo()
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
a{
    text-decoration: none;
    color: $mainUIColor;
    filter: brightness(0.9);
}
.container{
    background: $subBackgroundColor;
    .part{
        margin: 12px auto;
        margin-top: 0;
        .introduce{
            flex-shrink: 0;
            border-radius: 17px;
            overflow: hidden;
            padding: 37px;
            background: #f1f1f5;
            position: relative;
            max-width: 450px;
            &::after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url('@/assets/button-vector.png');
                opacity: 0.2;
                background-size: 100%;
            }
            .titlePart{
                align-items: center;
                padding-bottom: 17px;
                .title{
                    margin: 0;
                }
                .subTitle{
                    margin: 0;
                }
            }
            .content{
                p{
                    text-indent: 2em;
                }
            }
        }



        .infosCards{
            max-width: 450px;
            .card{
                box-sizing: border-box;
                width: 100%;
                min-width: 350px;
                border-radius: 17px;
                overflow: hidden;
                padding: 27px 37px;
                margin-bottom: 12px;
                font-size: 1.1em;
                position: relative;
                z-index: 2;
                .title{
                    margin: 0;
                }
                .avatar{
                    margin-top: 7px;
                    margin-right: 17px;
                    cursor: pointer;
                }
                &::after{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url('@/assets/button-vector.png');
                    opacity: 0.2;
                    background-size: 175%;
                    z-index: -1;
                }
            }
        }

        .footer{
            margin: 0;
            .footerContent{
                margin: 0;
            }
        }
    }
}
.realFooter{
    border-top: 1px solid $borderColor;
    display: flex;
    justify-content: space-around;
    padding: 37px 0;
    align-items: flex-end;
    p{
        margin: 0;
    }
}

.button{
    filter: brightness(0.97);
    transition: 0.3s ease;
    z-index: 2;
    font-size: 1.2em;
    color: $lightFontColor !important;
    border: 1px solid $borderColor+a0;
    &:hover{
        transform: translateY(-3px);
        box-shadow: 0 10px 20px -10px rgba($color: $lightFontColor, $alpha: 0.3);
        filter: brightness(0.97);
        border: 1px solid transparent;
    }
}

.contactUs{
    background: linear-gradient(195deg, $mainUIColor, $subUIColor);
}
.followUs{
    background: #ff538a;
    cursor: pointer;
}
.joinUs{
    background: linear-gradient(195deg, #3ABCFF 65%, #8F87FE);
    cursor: pointer;
}
.cardImg{
    position: absolute;
    right: -10px;
    bottom: -25px;
    max-height: 150px;
    height: 150%;
    z-index: -1;
}
</style>