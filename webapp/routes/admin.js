var express = require('express');
var router = express.Router();
var connection = require('../connect')
var mysql = require('mysql2');
const { response } = require('express');
var dayjs = require('dayjs') ;
const { request } = require('../app');
/*
router.get('/edit/:id', function(req, res, next)
{
    connection.query('', function(err,result)
    {
        res.render('admin', { data:result });
    });
});
*/
router.post('/search', function(req, res, next)
{
    var inp = req.body.searchinp ;
    console.log("result : ") ;
    console.log(inp) ;
    connection.query('SELECT shi.Show_ID , shi.ShowName , shi.BookingDate , shi.Endate , h.HallName , ad.Username , shi.Image FROM showinfo shi JOIN showdatetime shd ON(shi.Show_ID = shd.ShowID) INNER JOIN hall h ON(shi.Hallnumber = h.Hall_ID) INNER JOIN admin ad ON(ad.Admin_ID = shi.AdminID) WHERE shi.ShowName LIKE "%?%" ',[ inp ], function(err,result)
    {
        console.log("result : ") ;
        console.log(inp) ;
        console.log(result) ;
        res.render('admin', { data:result });
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