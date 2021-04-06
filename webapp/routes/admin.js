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
    //console.log("TEMP  : " + temp) ;
    var SQL = "SELECT shi.* , h.HallName , ad.Username FROM showinfo shi JOIN hall h ON(shi.Hallnumber = h.Hall_ID) INNER JOIN admin ad ON(ad.Admin_ID = shi.AdminID) WHERE shi.ShowName LIKE '%"+ temp + "%'" ;
    //console.log("SQL  : " + SQL) ;
    connection.query(SQL , function(err,result)
    {
        //console.log("RESULT : " + result) ;
        //console.log(result) ;
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

router.get('/editdata/:id', function(req, res)
{
    var temp = req.params.id;
    //console.log("TEMP : " + temp) ;
    var SQL = "SELECT shi.* , h.HallName , ad.Username FROM showinfo shi JOIN hall h ON(shi.Hallnumber = h.Hall_ID) INNER JOIN admin ad ON(ad.Admin_ID = shi.AdminID) WHERE shi.Show_ID = "+ temp  ;
    //console.log("SQL : " + SQL) ;
    connection.query(SQL , function(err,result)
    {
        if (err) throw err ;
        //console.log(result) ;
        res.render('edit',{ data : result}) ;
    });
});

router.post('/PrepareData', function(req, res)
{
    var ShowID = req.body.Show ;
    console.log("Show ID : "+ShowID) ;
    var ShowName = req.body.ShowName ;
    var Desc = req.body.Desc ;
    var BookingDate = req.body.BookingDate ;
    var Endate = req.body.Endate ;
    var HallName = req.body.HallName ;
    //ar ShowID = req.body.ShowID ;
    //var Photo = req.body.Photo ;

    //console.log(ShowName);
    //console.log(Desc);
    //console.log(BookingDate);
    //console.log(Endate);
    //console.log(ShowID);
    //var sql = "UPDATE showinfo SET `ShowName= ? ,BookingDate= ? ,Endate= ? ,Desc= ? WHERE Show_ID = ?" ;
    //console.log(sql) ;
    
    var sqlName = "SELECT Hall_ID from Hall WHERE HallName = '?'" ;
    console.log("Hall Name : "+HallName) ;
    console.log("SQLname : "+sqlName);
    
    connection.query(sqlName, HallName, function(req , res)
    {
        console.log("Hall ID : "+res) ; 
    });

    connection.query("UPDATE `showinfo` SET `ShowName`= ? , `BookingDate` = ? ,`Endate` = ? , `Hallnumber` = ? , `Desc` = ? WHERE Show_ID = ? ",[ShowName , BookingDate , Endate ,HallName, Desc , ShowID ], function(req , res )
    {
        console.log(res) ;
    });

    res.redirect('/temp');
});



router.get('/insert', function(req, res)
{
    res.render('insertForm') ;
});

router.post('/insertData', function(req, res)
{
    //console.log("Found!") ;
    var ShowName = req.body.ShowName ;
    var Desc = req.body.Desc;
    var BookingDate = req.body.BookingDate ;
    var Endate = req.body.Endate ;
    var HallID = req.body.HallName ;
    var AdminID =req.body.AdminID ;

    var sql = "INSERT INTO showinfo (`ShowName`, `BookingDate`, `Endate`, `Hallnumber`, `AdminID`, `Desc`) VALUES (?,?,?,?,?,?)" ;
    connection.query(sql,[ShowName , BookingDate , Endate , HallID , AdminID, Desc ] , (err,result)=>
    {
        if(err)
        {
          res.send(err);
        } 
        else
        {
        //res.send('Database is inserted successfully');
        res.redirect('/temp');
        }
    });
});

module.exports = router;