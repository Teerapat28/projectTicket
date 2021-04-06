var md5 = require('md5') ;

var temp = "1234" ; // input password here
var password = md5(temp) ;
var DBcompare = "2919633139abc1cbbedb969c63b994c7" ; //input data md5 here
console.log("INPUT = "+password);
console.log("MD5   = "+DBcompare) ;
