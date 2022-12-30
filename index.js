
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!') )

// 解决跨域问题
app.all("*",function(req,res,next){
    // 设置允许跨域的域名,*代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type');
    // res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS');
    res.header('Access-Control-Allow-Methods','*');
    res.header('Content-Type','application/json; charset=utf-8');
    next();
    // if(req.method.toLowerCase() == 'options')
    //     res.send(200); // 让options 尝试请求快速结束
    // else
    //     next();
})

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
