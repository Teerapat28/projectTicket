var express = require('express');
var router = express.Router();
var connection = require('../connect')
var mysql = require('mysql2');

/*router.post('/queryevent', function(req, res, next)
{*/
    connection.query('SELECT * FROM showinfo', function(err,result)
    {
        console.log("Result : ")  ;
        console.log(result) ;
        //res.render('Event', { Data : result }) ;
    });
/*});*/

module.exports = router;