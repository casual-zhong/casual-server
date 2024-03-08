// 引用发送邮件插件
var nodemailer = require('nodemailer');
// 引入证书文件
// var credentials = require('../config/credentials');

// 创建传输方式
// var transporter = nodemailer.createTransport({
//     service:'gmail',
//     secure: true,
//     auth:{
//         user:credentials.gmail.user,
//         pass:credentials.gmail.pass
//     }
// })

//     type: "gmail",
//     authName:"",
//     authVal:"",
//     mailList: "",
//     subject:"",
//     imgUrl:"",
//     content:""

// 注册发送邮件给用户
exports.emailSignUp = function(obj,res){
    // 发送信息内容
    let options = {
        from:obj.authName,
        to:obj.mailList,
        subject:obj.subject,
        html:obj.content,
        attachments: [{
            filename: 'hello.png',
            // path: './aaa.png'
            path: obj.imgUrl
        }]
    }

    let transporter = nodemailer.createTransport({
        service:obj.type,
        secure: true,
        auth:{
            user:obj.authName,
            pass:obj.authVal
        }
    })

    // 发送邮件
    transporter.sendMail(options,function(err,msg){
        if(err){
            res.send(err)
        }else{
            res.send('邮件发送成功！')
        }
    })
}