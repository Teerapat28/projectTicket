var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
  }); 

router.get('/event', function(req, res, next) {
  res.render('event', { title: 'Express' });
  });   

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
  });
  
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
  });

router.get('/show1', function(req, res, next) {
  res.render('show1', { title: 'Express' });
  });

router.get('/show2', function(req, res, next) {
  res.render('show2', { title: 'Express' });
  });

router.get('/show3', function(req, res, next) {
  res.render('show3', { title: 'Express' });
  }); 
  
router.get('/show4', function(req, res, next) {
  res.render('show4', { title: 'Express' });
  });  

router.get('/show5', function(req, res, next) {
  res.render('show5', { title: 'Express' });
  });  
module.exports = router;
