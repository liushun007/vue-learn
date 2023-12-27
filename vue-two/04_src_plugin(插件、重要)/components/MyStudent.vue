<!-- 组件的结构 -->
<template>
    <div>
        <h2>学生姓名：{{name | slic}}</h2>
        <h2>性别:{{sex}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="demo">点击后震惊</button>
    </div>  
</template>

<script>
     // 组件交互的代码（数据、方法等等）
     //全称export default Student = Vue.extend(options)
      export default ({
            name:'MyStudent', //名称和文件一致
            data(){
                return{
                    name:'张三hhhhhhhhhh',
                    sex:"男",
                    age:18,
                    x:1000
                }
            },
            methods:{
                demo(){
                    this.hello();
                }
            }

        });
      //   export default Student;
</script>