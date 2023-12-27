<!-- 组件的结构 -->
<template>
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
    </div>  
</template>

<script>
     // 组件交互的代码（数据、方法等等）
     //全称export default Student = Vue.extend(options)
      export default ({
            name:'Student', //名称和文件一致
            data(){
                return{
                    name:'张三',
                    age:18
                }
            },
        });
      //   export default Student;
</script>