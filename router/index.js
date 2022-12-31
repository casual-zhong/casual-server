var dbserver = require('../dao/dbserver');

module.exports = function(app){
    app.get('/test', (req, res) => {
       dbserver.findUser(res);      
    });

    app.get('/test1', (req, res) => {
        dbserver.findFriend(res);      
     });
}