<template>
     
    <div>
        <!-- scoped -->
        <MySchool></MySchool>
        <hr>
        <MyStudent></MyStudent>
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
    
}
</script>
