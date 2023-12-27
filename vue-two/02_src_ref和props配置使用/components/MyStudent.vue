<!-- 组件的结构 -->
<template>
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>性别:{{sex}}</h2>
        <h2>年龄：{{myAge+1}}</h2>
        <button @click="updateAge">点击年龄增加</button>
    </div>  
</template>

<script>
     // 组件交互的代码（数据、方法等等）
     //全称export default Student = Vue.extend(options)
      export default ({
            name:'MyStudent', //名称和文件一致
            data(){
                return{
                    // name:'张三',
                    // sex:"男",
                    // age:18
                    myAge:this.age //定义一个来修改
                }
            },
            //第一种
            // props:['name','sex','age']

            // 第二种
            // props:{
            //     name:String,
            //     age:Number,
            //     sex:String
            // }

            //第三种
            props:{
                name:{
                    type:String,//类型
                    required:true //必填
                },
                age:{
                    type:Number,
                    default:50 //默认值
                },
                sex:{
                    type:String
                }
            },
            methods:{
                updateAge(){
                    this.myAge++;
                }
            }

        });
      //   export default Student;
</script>