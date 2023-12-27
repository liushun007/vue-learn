<!-- 组件的结构 -->
<template>
      <div class="demo">
            <h2 @click="show">学校名称：{{name}}</h2>
            <h2 @click="show2">学校地址：{{address}}</h2>
      </div>  
</template>

<script>
     // 组件交互的代码（数据、方法等等）
     //全称export default School = Vue.extend(options)
      
      // import { mixin } from "../mixin.js";
      export default ({
            name:'MySchool', //名称和文件一致
            data(){
                return{
                    name:'XX学校',
                    address:'北京',
                    x:1000 //比混入级别高
                }
            },   
            //局部引入
            // mixins:[mixin],
            mounted(){
                console.log("你好school");
            }
            //方法重复        
            // methods:{
            //     show(){
            //         alert(this.name);
            //     }
            // }
        });
      //   export default School;
</script>

<style>
      /* 组件的样式 */
      .demo{
            background-color: oldlace;
      }
</style>