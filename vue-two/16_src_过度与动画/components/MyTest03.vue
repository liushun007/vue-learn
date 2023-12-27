<template>
<!-- 多个过度效果 -->
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group appear>
            <h1 v-show="isShow" key="1">你好啊</h1>
            <h1 v-show="!isShow" key="2">哈哈哈</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    name:'MyTest03',
    data(){
        return {
            isShow:true
        }
    },

}
</script>

<style scoped>
h1{
    background-color:aqua;
}



.v-enter-active, .v-leave-active{
    transition: 0.5s linear;

}
/* 进入的起点，离开的终点 */
.v-enter,.v-leave-to{
    transform: translateX(-100%);
}
/* 进入的终点，离开的起点 */
.v-enter-to,.v-leave{
    transform: translateX(0);
}

</style>