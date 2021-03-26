var express = require('express');
var router = express.Router();
var connection = require('../connect')
var mysql = require('mysql2');
var md5 = require('md5');

/* GET home page. */

router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Express' });
    });  

router.post('/register', function(request,response)
{
    var username = request.body.username ;
    var Fname = request.body.Fname ;
    var Lname = request.body.Lname ;
    var email = request.body.email ;
    var password = request.body.password ;
    var CiitID = request.body.CiitID ;
    var PhoneNum = request.body.PhoneNum ;

    var hash = md5(password) ;

    var sql = "INSERT INTO `user`( `username` , `Fname`, `Lname`, `email`, `password`, `CiitID`, `PhoneNum`) VALUES (?,?,?,?,?,?,?)" ;
  connection.query(sql,[username , Fname , Lname , email , hash , CiitID , PhoneNum ],function(err,result) 
  {
    if (err) throw err ;
    console.log("Complete") ;
    response.redirect('/index');
  });
});

/*
var Fname =  "Matichai" ;
var Lname = "Suksombut" ;
var email = "notnoth43@gmail.com" ;
var password = "unlock0000" ;
var CiitID = "1100600416370" ;
var PhoneNum = "0958723577" ;
var sql = "INSERT INTO `user`( `Fname`, `Lname`, `email`, `password`, `CiitID`, `PhoneNum`) VALUES (?,?,?,?,?,?)" ;
  connection.query(sql,[Fname , Lname , email , password , CiitID , PhoneNum ],function(err,result) 
  {
    if (err) throw err ;
    console.log("Complete") ;
  });
*/
module.exports = router;