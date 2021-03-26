var express = require('express');
var router = express.Router();
var connection = require('../connect')
var mysql = require('mysql2');
/* GET home page. */

/*
router.post('/register', function(request,response)
{
    var Fname = request.body.Fname ;
    var Lname = request.body.Lname ;
    var email = request.body.email ;
    var password = request.body.password ;
    var CiitID = request.body.CiitID ;
    var PhoneNum = request.body.PhoneNum ;

    var sql = "INSERT INTO `user`( `Fname`, `Lname`, `email`, `password`, `CiitID`, `PhoneNum`) VALUES (?,?,?,?,?,?)" ;
  connection.query(sql,[Fname , Lname , email , password , CiitID , PhoneNum ],function(err,result) 
  {
    if (err) throw err ;
    console.log("Complete") ;
    response.redirect('/index');
  });
});
*/


var sql = "SELECT showname , BookingDate , Owner  FROM `show` WHERE 1" ;
  connection.query(sql,function(err,result) 
  {
    if (err) throw err ;
    console.log("Show name : ") ;
  });

module.exports = router;
