var express = require('express');
var session = require('express-session');
var router = express.Router();
router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.get('/login', function(req, res, next) {
  error = req.session.error;
  req.session.error = null;
  res.render('login', { title: 'Express',error:error});
  }); 

// router.get('/event', function(req, res, next) {
//   res.render('event', { title: 'Express' });
//   });   

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
  });
  
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
  });

// router.get('/show1', function(req, res, next) {
//   res.render('show1', { title: 'Express' });
//   });

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

router.get('/show6', function(req, res, next) {
  res.render('show6', { title: 'Express' });
  });    

router.get('/payment', function(req, res, next) {
  res.render('payment', { title: 'Express' });
  });  

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Express' });
  }); 

router.get('/edit', function(req, res, next) {
  res.render('edit', { title: 'Express' });
  }); 
module.exports = router;
