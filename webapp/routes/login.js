var mysql = require('mysql2');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
var md5 = require('md5');

router.get('/login', function(req, res, next) {
    // res.render('login', { title: 'Express',LoginErr:"Errororororororoo" });
    });  
	
var mysql=require('../connect');
var connection = require('../connect');
//const { Script } = require('vm');

/*ar connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'da_mydatabase'
});*/

var router = express();
router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


router.get('/login', function(request, response) {
	// response.sendFile(path.join(__dirname + '/login.ejs'));
});

router.post('/auth', function(request, response) {

	var username = request.body.username;
	var temp = request.body.password ;
	var password = md5(temp) ;

	if(username && password)
	{
		connection.query("SELECT * FROM user WHERE username = ? AND password = ?", [ username , password ] , function(err,result)
		{
			if(result.length >0)
			{
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/index');
			}
			else
			{
				connection.query("SELECT * FROM admin WHERE username = ? AND password = ?", [ username , password ] , function(err,result)
				{
					if(result.length >0)
					{
						request.session.loggedin = true;
						request.session.username = username;
						response.redirect('/index');
						
					}
					else
					{
						// response.render("/login", { LoginErr : "Incorrect username or password"}); 
						request.session.error = "Incorrect username or password";
						response.redirect('/login');
					}
				}) ;
			}
		});
	}
	else
	{
		response.send("Please enter username and password") ;
	}
});

router.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

module.exports = router;