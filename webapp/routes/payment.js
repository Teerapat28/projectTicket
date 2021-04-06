var express = require('express');
var router = express.Router();
var connection = require('../connect')
var mysql = require('mysql2');
const { response } = require('express');

// router.get('/BuyTicket', function(req , res )
// {
//     connection.query(`SELECT shd.DateTime , shi.*, z.ZoneName , z.ZonePrice , z.Capacity FROM showinfo shi JOIN zone z ON(shi.Hallnumber=z.HallID) INNER JOIN showdatetime shd ON (shd.ShowID = shi.Show_ID) WHERE shi.Show_ID = ${req.params.id}`, function(err,result)
//     {  
//         // console.log(req.params.id) ;
//         // console.log(result) ;
//         // res.render('show1', { name:result });
//     });
// });
router.get('completepayment',function(req,res){

});
router.get('/BuyTicket1', function (req, res, next) {
    // console.log(req.query.ZoneName);


    connection.query(`SELECT shd.DateTime , shi.*, z.HallID , z.ZoneName , z.ZonePrice , z.Capacity FROM showinfo shi JOIN zone z ON(shi.Hallnumber=z.HallID) INNER JOIN showdatetime shd ON (shd.ShowID = shi.Show_ID) WHERE shi.Show_ID = ${req.query.ZoneNumber}`, function (err, result) {
        req.session.ticket = result
        req.session.ZoneName = req.query.ZoneName
        req.session.Capacity = req.query.ZoneNumber
        // console.log(req.session.ticket[0].HallID)
        req.session.ZonePrice = req.query.ZonePrice
     
        let date = new Date(req.query.DateTime);
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        req.session.DateTime = `${date.getDate()}-${monthNames[date.getMonth() - 1]}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`


        // connection.query(`SELECT H.HallName , z.ZoneName , Z.ZonePrice FROM Zone Z JOIN Hall H ON(H.Hall_ID = Z.Zone_ID) Where Hall_ID = ${req.session.ticket[0].HallID} AND ZoneName = '${req.session.ticket[0].ZoneName}' `, function (err, result) {
        // req.session.result = req.query.ZonePrice
        // console.log(`SELECT H.HallName , z.ZoneName , Z.ZonePrice FROM Zone Z JOIN Hall H ON(H.Hall_ID = Z.Zone_ID) Where Hall_ID = ${req.session.ticket[0].HallID} AND ZoneName = '${req.session.ticket[0].ZoneName}' `)
        res.redirect('/payment');
        // });

    });
});

module.exports = router;