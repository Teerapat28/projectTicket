var express = require('express');
var router = express.Router();
var connection = require('../connect')
var mysql = require('mysql2');
const { response } = require('express');

router.get('/event', function(req, res, next)
{
    connection.query('SELECT * FROM `showinfo`', function(err,result)
    {
        console.log("Result : ")  ;
        // console.log(result) ;
        result.forEach(res=>{
            console.log(res)
        })
        res.render('event', { items:result });
    });
});

router.get('/show1/:id', function(req, res, next)
{
    connection.query(`SELECT * FROM \`showinfo\` where Show_ID = ${req.params.id}`, function(err,result)
    {  
        res.render('show1', { items:result[0] });
    });
});
module.exports = router;