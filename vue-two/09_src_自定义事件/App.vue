<template>
     
    <div>
        <!-- 自定义事件 -->
        <!-- 通过父组件给子组件传递函数类型的props实现，子给父传递数据 -->
        <MySchool :getSchoolName="getSchoolName"></MySchool>
        <hr>
        <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据(第一种写法) -->
        <!-- <MyStudent v-on:getStudentName="getStudentName" @getAge="demo"></MyStudent> -->
        <!-- 简写 触发一次-->
        <!-- <MyStudent @getStudentName.once="getStudentName"></MyStudent> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据(第二种写法) 更灵活-->
        <MyStudent ref="student" @click.native="show"/>
        <h3>学生姓名是：{{studentName}}</h3>
    </div>
</template>

<script>

import MySchool from './components/MySchool.vue';
import MyStudent from './components/MyStudent.vue';

export default {
    name:'App',
    data(){
        return{
            msg: '你好啊！',
            studentName:'',
        }
        
    },
    components:{
        MySchool,
        MyStudent
    },
    methods:{
        getSchoolName(name){
            console.log("学校名称：",name);
        },
        // getStudentName(name,...params){
        //     // console.log("学生姓名："+name,x,y,z);
        //     console.log("学生姓名："+name,params);
        //     this.studentName = name;
        // },
        demo(age){
            console.log("年龄：",age);
        },
        show(){
            alert(123);
        }
    },
    mounted(){
        // setTimeout(() => {
            // this.$refs.student.$on('getStudentName',this.getStudentName);
            // this.$refs.student.$once('getStudentName',this.getStudentName);
            this.$refs.student.$on('getStudentName',(name,...params)=>{
                console.log("学生姓名："+name,params);
                this.studentName = name;//坑，需要使用箭头函数

            });
        // }, 3000); 
        // setTimeout(() => {
        //     this.$destroy();//定时解绑父组件和子组件的实例对象
        // }, 3000); 
    }
    
}
</script>
