着手开始做了，希望能完成一二

数据库建立参考
User(--用户表
              
字段    字段类型    字段描述    备注
U_ID    Int        主键、自增
U_LoginID    Varchar（20）    (登陆账号)    
U_NickName    Varchar（20）    (昵称)    
U_PassWord    Varchar（20）    (密码)    
U_SignaTure    Varchar（150）    (个性签名)    Null
U_Sex    Bit    (性别)    Null
U_Birthday    Datetime    (生日)    Null
U_Telephone    Varchar（30）    (电话)    Null
U_Name    Varchar（30）    (真实姓名)    Null
U_Email    Varchar（50）    (邮箱)    Null
U_Intro    Varchar（300）    (简介)    Null
U_HeadPortrait     Varchar（100）    (头像)    
U_ShengXiao    Char（2）    生肖    Null
U_Age    Int    年龄    Null
U_Constellation    Char(6)    星座    Null
U_BloodType    Varchar（10）    血型    Null
U_SchoolTag    Varchar（50）    毕业学校    Null
U_Vocation    Varchar（30）    (职业)    Null
U_NationID    Int    (国家ID)    外键
U_ProvinceID    Int    （省份ID）    外键
U_CityID    Int    （城市ID）    外键
U_FriendshipPolicyID    Int    好友策略ID    外键
U_UserStateID    Int    (用户状态ID)    外键
U_FriendPolicyQuestion    Varchar(30)    好友策略问题    Null
U_FriendPolicyAnswer    Varchar（30）    好友策略答案    Null
U_FriendPolicyPassword    Varchar（30）    好友策略密码    Null
)
UserState(--用户状态表
字段    字段类型    字段描述    备注
US_ID    Int    (ID)    主键
US _Name    Varchar（10）    (状态名字)    
            
)

Friends(--好友表
字段    字段类型    字段描述    备注
F_ID    Int    主键ID    主键
F_FirendID    Int    朋友的ID    外键
F_UserID    Int    自己的ID    外键
F_Name    Varchar（30）    备注昵称    Null
F_FriendTypeID    Int    (好友类型)    外键
F_FriendGroupsID    Int    (所属分组ID)    外键
            
) 
User_FriendshipPolicy(--添加好友策略
字段    字段类型    字段描述    备注
U_FP_ID主键    Int    策略ID    主键
U_FriendshipPolicy    varchar    好友添加方式    
)
FriendGroups(--好友分组表
字段    字段类型    字段描述    备注
FG_ID    Int    (分组ID)    主键
FG_Name    Varchar    (分组名字)    
FG_UserID    Int    用户ID    外键
)
FriendType (--好友类型
字段    字段类型    字段描述    备注
FT_ID    Int    （类型ID）    主键
FT_Name    Varchar（20）    (类型名称)    
)

Messages(--聊天记录表
字段    字段类型    字段描述    备注
M_ID    Int    (消息ID)    主键，自增
M_PostMessages    Text    (消息内容)    
M_ status    Bit    (接收状态)    
M_Time    Datetime    (发送时间)    默认值
M_MessagesTypeID    Int    (消息类型ID)    外键
M_ FromUserID     Int    (发送者ID)指向用户表    外键
M_ToUserID     Int    (接收者ID)指向用户表    外键
)

MessagesType（--消息类型

字段    字段类型    字段描述    备注
MT_ID    Int    (类型ID)    主键
MT_Name    Varchar（20）    类型名称    

） 


Nation (--国家
字段    字段类型    字段描述    备注
N_ID    Int    (国家ID)    主键
N_Name    Varchar（30）    (名字)    
)
Province (--省份
字段    字段类型    字段描述    备注
P_ID    Int    （省份ID）    
P_Name    Varchar（30）    (名字)    
P_NationID    Int    所属国家ID    外键
)

City (--城市
字段    字段类型    字段描述    备注
C_ID    Int    （城市ID）    
C_Name    Varchar（30）    (名字)    
C_ProvinceID    Int    所属省份ID    外键
)

User_Groups(--用户群表
字段    字段类型    字段描述    备注
UG_ID    Int    群ID    主键
UG_Name    Varchar（30）    群名称    
UG_CreateTime    Datetime    创建时间    默认值
UG_AdminID    Int    群主ID（指向用户表）    
UG_ICon    Varchar（30）    群图标    
UG_Notice    Varchar（200）    群公告    
UG_Intro    Varchar（200）    群简介    
）

User_GroupsToUser(--群用户关联表
字段    字段类型    字段描述    备注
UG_ID    Int    ID    主键
UG _UserID    Int    用户ID    外键
UG _GroupID    Int    群ID    外键
UG _CreateTime    Datetime    发送时间    Null
UG _GroupNick    Varchar(15)    群内用户昵称    Null
）

 

User_GroupsMSGContent(--群消息内容表
字段    字段类型    字段描述    备注
GM _ID    Int    群消息ID    主键
GM _Content    Text    消息内容    
GM _FromID    Int    发送者ID    
GM _FromUName    Varchar（30）    发送者昵称    
GM _CreateTime    Datetime    发送时间    
            
）
User_GroupsMSGToUser(--群消息关联表
字段    字段类型    字段描述    备注
GM_ID    Int    ID    主键
GM _UserID    Int    接收者ID    
GM _GroupMessageID    Int    群消息ID    外键
GM _State    Bit    接收状态    
GM _CreateTime    Datetime    发送时间    
            
）
User_GroupsMSGUserToUser(--群内私聊消息关联表
字段    字段类型    字段描述    备注
GM _ID    Int    ID    主键
GM _FromUserID    Int    发送者ID    
GM _FromUserName    Varchar（30）    发送者昵称    
GM _ToUserID    Int    接收者ID    
GM _MSGContent    Varchar（300）    消息内容    
GM _State    Bit    接收状态    
GM _CreateTime    Datetime    发送时间    
GM_ UserGroupID    Int    所属群ID    
）


mogoose语句

MyModel.find({}).sort({'_id':-1}).limit(6).exec(function(err,docs){})


jquery
//刷新当前页
window.location.reload();
//跳转页面
$(location).attr('href', 'http://www.jb51.net');
$(window).attr('location','http://www.jb51.net');
$(location).prop('href', 'http://www.jb51.net')

 //返回上一页
window.history.back(-1); 
 //返回上一页并刷新
window.location.href=document.referrer;

//调整rem换算值
Sublime Text -> Preferences -> Package Settings -> cssrem->Settings-user中设置，输入以下参数配置，