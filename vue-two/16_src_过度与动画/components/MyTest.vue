<template>
<!-- 动画效果 -->
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- <transition :appear="true"> -->
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name:'MyTest',
    data(){
        return {
            isShow:true
        }
    },

}
</script>

<style scoped>
h1{
    background-color: blueviolet;
}
.v-enter-active{
    /* animation: demo 1s linear; 匀速 */
    animation: demo 1s;
}
.v-leave-active{
    animation: demo 1s reverse;
}

.hello-enter-active{
    /* animation: demo 1s linear; 匀速 */
    animation: demo 1s;
}
.hello-leave-active{
    animation: demo 1s reverse;
}
@keyframes demo {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0);
    }
}
</style>