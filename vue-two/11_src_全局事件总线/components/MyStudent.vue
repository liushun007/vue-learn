<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>性别:{{sex}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="sendStudentName(name)">发送学生姓名</button>
    </div>  
</template>

<script>
     // 组件交互的代码（数据、方法等等）
     //全称export default Student = Vue.extend(options)
      export default ({
            name:'MyStudent', //名称和文件一致
            data(){
                return{
                    name:'张三',
                    sex:"男",
                    age:18,
                }
            },
            methods:{
                  sendStudentName(name){
                        // this.x.$emit('hello',name);
                        this.$bus.$emit('hello',name);
                  }
            }
        });
      //   export default Student;
</script>
<style scoped lang="css">
      /* 组件的样式 */
      .demo{
            background-color:blueviolet;
      }
</style>