
var express = require('express');
var router = express.Router();
var mysql=require('../connect');
let ejs = require("ejs");
var pdf = require("html-pdf");
var path = require("path");

router.get("/generateReport", (req, res) => {
    var sql = 'SELECT shi.* , h.HallName , ad.Username FROM showinfo shi JOIN hall h ON(shi.Hallnumber = h.Hall_ID) INNER JOIN admin ad ON(ad.Admin_ID = shi.AdminID)';
    mysql.query(sql,(err, result)=>{
      if(err){
        res.send(err);
      }else{
       
        ejs.renderFile(path.join(__dirname, '../views/', "report-template.ejs"), {items: result}, (err, data) => {
            if (err) {
                  res.send(err);
            } else {
                let options = {
                  
                    "height": "11.25in",
                    "width": "8.5in",
                    "header": {
                        "height": "20mm"
                    },
                    "footer": {
                        "height": "20mm",
                    },
                };
                pdf.create(data, options).toFile("performance-report.pdf", function (err, data) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.redirect("/temp");
                    }
                });
            }
        });
        
      }
    })

})

module.exports = router;