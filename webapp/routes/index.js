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
  
module.exports = router;
