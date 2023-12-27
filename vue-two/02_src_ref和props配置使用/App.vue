<template>
    <div>
        <!-- props和ref -->
        <h1 v-text="msg" ref="msg"></h1>
        <button @click="show" ref="show">点击输出</button>
        <MySchool ref="my" id="my"></MySchool>
        <hr>
        <MyStudent name="张三" sex="男" :age="18"></MyStudent>
        <hr>
        <MyStudent name="李四" sex="女" :age="20"></MyStudent>
        <hr>
        <MyStudent name="王五" sex="女"></MyStudent>
    </div>
</template>

<script>

import MySchool from './components/MySchool.vue';
import MyStudent from './components/MyStudent.vue';

export default {
    name:'App',
    data(){
        return{
            msg: '你好啊！'
        }
        
    },
    components:{
        MySchool,
        MyStudent
    },
    methods:{
        show(){
            console.log(this.$refs.msg);//真实dom元素
            console.log(this.$refs.show);//真实dom元素
            console.log(this.$refs.my);//MySchool组件的实例对象
            console.log("@",document.getElementById("my"));//真实的dom元素
        }
    }
    
}
</script>
