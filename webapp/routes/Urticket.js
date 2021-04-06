var express = require('express');
var session = require('express-session');
var router = express.Router();
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch')
router.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
/* GET home page. */
router.get('/urticket', function (req, res, next) {
    connection.query('SELECT * FROM receipts', function(req,res,next) 
    {
        res.render('urticket' , { data : res }) ;
    });
  res.render('index', { title: 'Express' });
});
module.exports = router;
