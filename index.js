
const express = require('express')
const app = express()
const port = 3000

// 引入解析req.body插件
// var bodyParser = require('body-parser');

// 解决跨域问题
app.all("*",function(req,res,next){
    // 设置允许跨域的域名,*代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By',' 3.2.1');
    res.header('Content-Type','application/json; charset=utf-8');
    if(req.method == 'OPTIONS') {
        // 让options请求快速返回
        res.sendStatus(200);
    } else {
        next();
    }
})

// 解析前端数据
// app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./router/index')(app);

// 404页面
app.use(function(req,res,next){
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
})

//出现错误处理
app.use(function(err,req,res,next){
    res.status(err.status || 500);
    res.send(err.message);
})

app.listen(port, () => {
  console.log(`启动成功： ${port}`)
})
