<template>
     
    <div>
        <button @click="getStus">点击获取学生信息</button>
        <button @click="getCars">点击获取汽车信息</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    
    name:'App',
    data(){
        return{
        }
        
    },
    components:{
    },
    methods:{
        getStus(){
            //读取到public中的stu文件了 'http://localhost:8080/stu'
            axios.get('http://localhost:8080/demo1/stus').then(
                response => {
                    console.log("请求成功了",response.data);
                },
                error => {
                    console.log("请求失败了",error.message);
                }
            );
        },
        getCars(){
            //读取到public中的stu文件了 'http://localhost:8080/stu'
            axios.get('http://localhost:8080/demo2/cars').then(
                response => {
                    console.log("请求成功了",response.data);
                },
                error => {
                    console.log("请求失败了",error.message);
                }
            );
        }
    }

    
}
</script>
