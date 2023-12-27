const express = require('express');

const app = express();

// npmjs搜索connect-history-api-fallback安装配置解决history刷新方案
const history = require('connect-history-api-fallback');

app.use(history()); //使用
app.use(express.static(__dirname+'/static/dist1'))//history
// app.use(express.static(__dirname+'/static/dist2'))//hash

app.get('/person',(req,res) =>{
    res.send({
        name:'tom',
        age:12,
    })
})

app.listen(5005,(err) =>{
    if(!err) console.log('服务器启动成功了');
})