<template>
    <div>
        <MySearch/>
        <MyList/>
    </div>
</template>

<script>
import MySearch from './components/MySearch.vue';
import MyList from './components/MyList.vue';

export default {
    name:'App',
    data(){
        return{
        }
        
    },
    components:{
        MySearch,
        MyList,
    }

    
}
</script>

