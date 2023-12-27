// 使用node demo2 命令启动
const express = require("express");
const app = express();


app.use((request,response,next) => {
    console.log('有人请求服务器2了');
    console.log("请求的资源是：",request.url);
    console.log("请求来自于：",request.get('Host'));
    next();
})

app.get('/cars',(request,response)=>{
    const stus = [
                {id:'001',title:'奔驰',price:19},
                {id:'002',title:'宝马',price:20},
                {id:'003',title:'byd',price:21},
    ]
    response.send(stus);
})

app.listen(5001,(err)=>{
    if(!err) console.log('服务器启动成功了，请求汽车信息地址是：http://localhost:5001/cars');
})