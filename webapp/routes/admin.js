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

router.get('/temp', function(req, res, next)
{

    var SQL = "SELECT shi.* , h.HallName , ad.Username FROM showinfo shi JOIN hall h ON(shi.Hallnumber = h.Hall_ID) INNER JOIN admin ad ON(ad.Admin_ID = shi.AdminID) " ;
    connection.query(SQL , function(err,result)
    {
        res.render('admin',{ data : result }) ;
    });
    
});

router.get('/delete/:id', function(req, res, next)
{
    var sql = 'DELETE FROM showinfo WHERE Show_ID = ?' ;
    var id = req.params.id ;
    connection.query(sql , id , function(err,result)
    {  
        res.redirect('/temp');
    });
    
});

router.get('/editdata/:id', function(req, res, next)
{
    var temp = req.params.id;
    console.log("TEMP : " + temp) ;
    var SQL = "SELECT shi.* , h.HallName , ad.Username FROM showinfo shi JOIN hall h ON(shi.Hallnumber = h.Hall_ID) INNER JOIN admin ad ON(ad.Admin_ID = shi.AdminID) WHERE shi.Show_ID = "+ temp  ;
    console.log("SQL : " + SQL) ;
    connection.query(SQL , function(err,result)
    {
        console.log(result) ;
        res.render('edit',{ data:result}) ;
    });
});

module.exports = router;