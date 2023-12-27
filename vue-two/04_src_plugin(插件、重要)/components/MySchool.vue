<!-- 组件的结构 -->
<template>
      <div class="demo">
            <h2>学校名称：{{name}}</h2>
            <h2>学校地址：{{address}}</h2>
            <input type="text" v-fbind="name">
      </div>  
</template>

<script>
     // 组件交互的代码（数据、方法等等）
     //全称export default School = Vue.extend(options)
      
      export default ({
            name:'MySchool', //名称和文件一致
            data(){
                return{
                    name:'XX学校',
                    address:'北京',
            
                }
            },   
        });
      //   export default School;
</script>

<style>
      /* 组件的样式 */
      .demo{
            background-color: oldlace;
      }
</style>