var express = require('express');
var router = express.Router();
var connection = require('../connect')
var mysql = require('mysql2');
const { response } = require('express');
var dayjs = require('dayjs') ;

router.get('/event', function(req, res, next)
{
    connection.query('SELECT * FROM `showinfo`', function(err,result)
    {
        console.log("Result : ")  ;
        let date = new Date()
        let when = [] ;
        // console.log(result) ;
        result.forEach(res=>{
            console.log(new Date(res.Endate).getDate());
            console.log(new Date(res.Endate).getMonth());
            console.log(new Date(res.Endate).getFullYear());
            when.push(`${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`) ;
        });
        
        res.render('event', { items:result , date : when });
    });
});

router.get('/show1/:id', function(req, res, next)
{
    connection.query(`SELECT shd.DateTime , shi.*, z.ZoneName , z.ZonePrice , z.Capacity FROM showinfo shi JOIN zone z ON(shi.Hallnumber=z.HallID) INNER JOIN showdatetime shd ON (shd.ShowID = shi.Show_ID) WHERE shi.Show_ID = ${req.params.id}`, function(err,result)
    {  
        console.log(req.params.id) ;
        console.log(result) ;
        res.render('show1', { name:result });
    });
});
module.exports = router;