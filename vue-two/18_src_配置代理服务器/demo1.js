// 使用node demo1 命令启动
const express = require('express');
const app = express();


app.use((request,response,next) => {
    console.log('有人请求服务器1了');
    console.log("请求的资源是：",request.url);
    console.log("请求来自于：",request.get('Host'));
    next()
});

app.get('/stus',(request,response)=>{
    const stus = [
                {id:'001',title:'张三',age:19},
                {id:'002',title:'李四',age:20},
                {id:'003',title:'王五',age:21},
    ]
    response.send(stus);
});

app.listen(5000,(err)=>{
    if(!err) console.log('服务器启动成功了，请求学生信息地址是：http://localhost:5000/stus');
});

