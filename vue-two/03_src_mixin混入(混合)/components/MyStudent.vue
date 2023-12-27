<!-- 组件的结构 -->
<template>
    <div>
        <h2 @click="show">学生姓名：{{name}}</h2>
        <h2>性别:{{sex}}</h2>
        <h2 @click="show2">年龄：{{age}}</h2>
    </div>  
</template>

<script>
     // 组件交互的代码（数据、方法等等）
     //全称export default Student = Vue.extend(options)
    //  import { mixin } from "../mixin.js";
    //  import { mixin2 } from "../mixin.js";
      export default ({
            name:'MyStudent', //名称和文件一致
            data(){
                return{
                    name:'张三',
                    sex:"男",
                    age:18
                
                }
            },
            //局部引入
            // mixins:[mixin,mixin2],
            methods:{
                show(){
                    alert(this.name);
                    console.log("我是方法");
                }
            },
            mounted(){
                console.log("你好student");
            }
            //方法重复
            // methods:{
            //     show(){
            //         alert(this.name);
            //     }
            // }

        });
      //   export default Student;
</script>