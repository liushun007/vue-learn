<template>
<!-- 多个过度效果 -->
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group  
        name="animate__animated animate__bounce" 
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
        appear> 
            <h1 v-show="isShow" key="1">你好啊</h1>
            <h1 v-show="!isShow" key="2">哈哈哈</h1>
        </transition-group>
    </div>
</template>

<script>
//引入animate
import 'animate.css'
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
    background-color: red;
}

</style>