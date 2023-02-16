// 引用发送邮件插件
var nodemailer = require('nodemailer');
// 引入证书文件
var credentials = require('../config/credentials');

// 创建传输方式
var transporter = nodemailer.createTransport({
    service:'qq',
    auth:{
        user:credentials.qq.user,
        pass:credentials.qq.pass
    }
})

// 注册发送邮件给用户
exports.emailSignUp = function(email,res){
    // 发送信息内容
    let options = {
        from:credentials.qq.user,
        to:email,
        subject:'感谢您的注册',
        html:`<span>测试</span>`,
        attachments: [{
            filename: 'aaa.png',
            path: './aaa.png',
            cid: ''
        }]
    }

    // 发送邮件
    transporter.sendMail(options,function(err,msg){
        if(err){
            res.send(err)
        }else{
            res.send('邮件发送成功！')
        }
    })
}