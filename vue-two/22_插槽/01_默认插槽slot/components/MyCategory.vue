<template>
    <div class="category" >
        <h3>{{title}}分类</h3>
        <!-- <ul>
            <li v-for="(data,index) in dataList" :key="index">{{data}}</li>
        </ul> -->
        <!-- 定义一个插槽，挖个坑，等着组件的使用者进行填充 -->
        <slot>我是一个默认插值，当使用者没有传递具体结构时，我会出现</slot>
    </div>
</template>

<script>
export default {
    name:'MyCategory',
    props:['title'],
    methods:{
    }

}
</script>
<style scoped lang="css">
   .category{
    background-color: aquamarine;
    width: 200px;
    height: 300px;
   }

   h3{
    background-color: orange;
   }

</style>
