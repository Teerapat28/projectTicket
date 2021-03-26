const mysql = require('mysql2');
var md5 = require('md5');
// สร้างตัวแปร connection จาก object mysql ให้ทำการเชื่อมต่อ
const connection = mysql.createConnection({
host: 'localhost', 
user:'root',
database:'JSDB',
password:''
});

module.exports = connection;
