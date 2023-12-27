<template>
    <!-- 求和案例 -->
    <div>
        <MyCount/>
        <hr>
        <MyPerson/>
    </div>
</template>

<script>
import MyCount from './components/MyCount.vue';
import MyPerson from './components/MyPerson.vue';
export default {
    name:'App',
    data(){
        return{

        }
        
    },
    components:{
        MyCount,
        MyPerson
    }

    
}
</script>
