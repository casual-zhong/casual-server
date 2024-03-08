// var dbserver = require('../dao/dbserver');
// 引入邮箱发送方法
var emailserver = require('../dao/emailserver');

module.exports = function(app){
   app.get('/test', (req, res) => {
      res.send({
         message:"返回成功"
      })
      // dbserver.findUser(res);      
   });

   // app.get('/test1', (req, res) => {
   //    dbserver.findFriend(res);      
   // });

   // 邮箱测试
   app.post('/mail',(req,res) =>{
      // let mail = req.body.mail;
      // res.send({
      //    message:req.body
      // })
      emailserver.emailSignUp(req.body,res)
      // res.send(mail)
   })
}