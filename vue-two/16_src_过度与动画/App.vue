<template>
    <div>
        <MyTest/>
        <MyTest02/>
        <MyTest03/>
        <MyTest04/>
    </div>
</template>

<script>
import MyTest from './components/MyTest.vue';
import MyTest02 from './components/MyTest02.vue';
import MyTest03 from './components/MyTest03.vue';
import MyTest04 from './components/MyTest04.vue';

export default {
    name:'App',
    data(){
        return{
        }
        
    },
    components:{
        MyTest,
        MyTest02,
        MyTest03,
        MyTest04
    }

    
}
</script>

