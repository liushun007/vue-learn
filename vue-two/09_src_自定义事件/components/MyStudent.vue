<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>性别:{{sex}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="sendStudentName">发送学生姓名</button>
        <button @click="unbind">解绑MyStudent事件</button>
        <button @click="sendAge">发送学生年龄</button>
        <hr>
        <button @click="updateAge">点击年龄++</button>
        <button @click="death">销毁所有实例</button>
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
                  sendStudentName(){
                        this.$emit('getStudentName',this.name,1,2,3);
                        this.$emit('click');
                  },
                  sendAge(){
                    this.$emit('getAge',this.age);
                  },
                  updateAge(){
                    this.age++;
                    console.log("demo调用了");
                  },
                  death(){
                    this.$destroy();//销毁了当前所有student组件的实例，销毁后所有组件全都不奏效
                  },
                  unbind(){
                    // this.$off('getStudentName');//解绑一个自定义事件
                    this.$off(['getStudentName','getAge']);//解绑多个自定义事件
                    // this.$off(); //解绑所有自定义事件
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