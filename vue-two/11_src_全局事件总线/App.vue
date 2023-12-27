<template>
     
    <div>
        <!-- 全局定义事件 -->
        <MySchool></MySchool>
        <hr>
        <MyStudent/>
    </div>
</template>

<script>

import MySchool from './components/MySchool.vue';
import MyStudent from './components/MyStudent.vue';

export default {
    name:'App',
    data(){
        return{
            msg: '你好啊！',
        }
        
    },
    components:{
        MySchool,
        MyStudent
    },
    
}
</script>
