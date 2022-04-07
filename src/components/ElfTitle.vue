<template>
    <div class="container" :style="bg?'background: '+bg+';':'background: #F8F8FB;'">
        <h1 class="title">{{title}}</h1>
    </div>
</template>

<script>
export default{
    name: 'Title',
    props: {
        title: String,
        bg: String
    }
}
</script>

<style lang="scss" scoped>
$mainUIColor: #06E07D;

.container{
    padding-bottom: 3vh;
    .title{
        display: inline-block;
        font-size: 3em;
        margin-bottom: 47px;
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
}
</style>