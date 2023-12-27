<template>
    <!-- 具名插值 -->
    <div class="container">
        <MyCategory title="美食">
            <div slot="center">
                <img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.wPy1cCGKYdvUFZSg4pm-tQHaHf?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
                alt="火锅美食图"/>
            </div>
            <div class="foot" slot="footer">
                <a href="https://www.bilibili.com">更多美食</a>
            </div>
            
        </MyCategory>
        <MyCategory title="游戏">
            <ul slot="center">
                <li v-for="(game,index) in games" :key="index">{{game}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="https://www.bilibili.com">单机游戏</a>
                <a href="https://www.bilibili.com">网络游戏</a>
            </div>
        </MyCategory>
        <MyCategory title="电影">
            <video slot="center" controls src="http://vod.v.jstv.com/video/2022/10/26/202210261666745382873_202_1767.mp4"/>
            <template  v-slot:footer>
                <div class="foot">
                    <a href="https://www.bilibili.com">经典</a>
                    <a href="https://www.bilibili.com">热门</a>
                    <a href="https://www.bilibili.com">推荐</a>
                </div>
                <h3>欢迎观看更多视频</h3>
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
