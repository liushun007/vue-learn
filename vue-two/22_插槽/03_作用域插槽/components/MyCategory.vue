<template>
    <div class="category" >
        <h3>{{title}}分类</h3>
        <!-- <ul>
            <li v-for="(data,index) in dataList" :key="index">{{data}}</li>
        </ul> -->
        <!-- 定义一个插槽，挖个坑，等着组件的使用者进行填充 -->
        <slot :foods="foods" :games="games" :films="films">我是第一个默认值</slot>
    </div>
</template>

<script>
export default {
    name:'MyCategory',
    props:['title'],
    data(){
        return{
            foods: ['火锅', '烧烤', '小龙虾'], 
            games: ['红色警戒', '穿越火线', '劲舞团'],
            films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
        }
    },
    methods:{
    }

}
</script>
<style scoped lang="css">
   .category{
    background-color: aquamarine;
    width: 200px;
    height: 400px;
   }

   h3{
    background-color: orange;
   }

</style>
