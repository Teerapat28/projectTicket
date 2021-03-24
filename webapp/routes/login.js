var mysql = require('mysql2');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express' });
    });  
	
//	var mysql=require('../connect');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'da_mydatabase'
});

var router = express();
router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


router.get('/login', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.ejs'));
});

router.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/index');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
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