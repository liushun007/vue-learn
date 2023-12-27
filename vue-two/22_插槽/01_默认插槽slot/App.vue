<template>
    <!-- 默认插值 -->
    <div class="container">
        <MyCategory title="美食">
            <img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.wPy1cCGKYdvUFZSg4pm-tQHaHf?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
            alt="火锅美食图"/>
        </MyCategory>
        <MyCategory title="游戏">
            <ul>
                <li v-for="(game,index) in games" :key="index">{{game}}</li>
            </ul>
        </MyCategory>
        <MyCategory title="电影">
            <video controls src="http://vod.v.jstv.com/video/2022/10/26/202210261666745382873_202_1767.mp4"/>
        </MyCategory>
    </div>
</template>

<script>
import MyCategory from './components/MyCategory.vue';

export default {
    name:'App',
    data(){
        return{
            foods: ['火锅', '烧烤', '小龙虾'], 
            games: ['红色警戒', '穿越火线', '劲舞团'],
            films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
        }
        
    },
    components:{
        MyCategory
    }

    
}
</script>

<style lang="css">
.container{
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
