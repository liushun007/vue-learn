<template>
    <!-- 具名插值 -->
    <div class="container">
        <MyCategory title="美食" >
            <template scope="{foods}">
                <ol>
                    <li v-for="(food,index) in foods" :key="index">{{food}}</li>
                </ol>
            </template>
        </MyCategory>
        <MyCategory title="游戏">
            <template v-slot="item">
            <ol>
                <li v-for="(game,index) in item.games" :key="index">{{game}}</li>
            </ol>
            </template>
        </MyCategory>
        <MyCategory title="电影">
            <template v-slot="{films}">
            <h5 v-for="(film,index) in films" :key="index">{{film}}</h5>
            </template>
        </MyCategory>
    </div>
</template>

<script>
import MyCategory from './components/MyCategory.vue';

export default {
    name:'App',
    data(){
        return{

        }
        
    },
    components:{
        MyCategory
    }

    
}
</script>

<style lang="css">
.container,.foot{
    display: flex;
    justify-content: space-around;
}

img{
    width:100%;
}
video{
    width:100%;
}
 
</style>
