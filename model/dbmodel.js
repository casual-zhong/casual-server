var mongoose = require('mongoose');
var db = require('../config/db');
var Schema = mongoose.Schema;

// 用户表
var SchemaUser = new Schema();

module.exports = db.model('User',SchemaUser)