var express = require('express');
var router = express.Router();
var connection = require('../connect')
var mysql = require('mysql2');
const { response } = require('express');

router.get('/BuyTicket', function(req , res )
{
    connection.query(`SELECT shd.DateTime , shi.*, z.ZoneName , z.ZonePrice , z.Capacity FROM showinfo shi JOIN zone z ON(shi.Hallnumber=z.HallID) INNER JOIN showdatetime shd ON (shd.ShowID = shi.Show_ID) WHERE shi.Show_ID = ${req.params.id}`, function(err,result)
    {  
        console.log(req.params.id) ;
        console.log(result) ;
        res.render('show1', { name:result });
    });
});

router.post('/BuyTicket1:Show_ID', function(req, res, next)
{
    console.log(req.params.id) ;

    connection.query(`SELECT shd.DateTime , shi.*, z.ZoneName , z.ZonePrice , z.Capacity FROM showinfo shi JOIN zone z ON(shi.Hallnumber=z.HallID) INNER JOIN showdatetime shd ON (shd.ShowID = shi.Show_ID) WHERE shi.Show_ID = ${req.params.id}`, function(err,result)
    {  
        console.log(req.params.id) ;
        
        res.redirect('/payment');
    });
});

module.exports = router;