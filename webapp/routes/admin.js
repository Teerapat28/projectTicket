var express = require('express');
var router = express.Router();
var connection = require('../connect')
var mysql = require('mysql2');
//var request = require('request');
const { response } = require('express');
/*
router.get('/edit/:id', function(req, res, next)
{
    connection.query('', function(err,result)
    {
        res.render('admin', { data:result });
    });
});
*/

router.post('/search', function(request, response) 
{
	var temp = request.body.word;
    console.log("TEMP  : " + temp) ;
    var SQL = "SELECT shi.* , h.HallName , ad.Username FROM showinfo shi JOIN hall h ON(shi.Hallnumber = h.Hall_ID) INNER JOIN admin ad ON(ad.Admin_ID = shi.AdminID) WHERE shi.ShowName LIKE '%"+ temp + "%'" ;
    console.log("SQL  : " + SQL) ;
    connection.query(SQL , function(err,result)
    {
        console.log("RESULT : " + result) ;
        console.log(result) ;
        response.render('admin',{ data:result}) ;
    });
});

router.get('/delete', function(req, res, next)
{

});

router.get('/show1/:id', function(req, res, next)
{
    connection.query(`SELECT shi.*, z.ZoneName , z.ZonePrice , z.Capacity FROM showinfo shi JOIN zone z ON(shi.Hallnumber=z.HallID) WHERE shi.Show_ID = ${req.params.id}`, function(err,result)
    {  
        console.log(req.params.id) ;
        console.log(result[0].EndDate) ;
        res.render('show1', { name:result });
    });
});

module.exports = router;