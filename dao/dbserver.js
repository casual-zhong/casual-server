var dbmodel = require('../model/dbmodel');
var User = dbmodel.model('User')
var Friend = dbmodel.model('Friend')
var Message = dbmodel.model('Message')
var Group = dbmodel.model('Group')
var GroupUser = dbmodel.model('GroupUser')
var GroupMsg = dbmodel.model('GroupMsg')

exports.findUser = function(res){
    User.find(function(err,val){
        if(err){
            console.log('用户数据查询失败！'+ err);
        }else{
            res.send(val);
        }
    })
}

exports.findFriend = function(res){
    Friend.find(function(err,val){
        if(err){
            console.log('用户数据查询失败！'+ err);
        }else{
            res.send(val);
        }
    })
}
