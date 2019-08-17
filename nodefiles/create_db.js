var mysql = require('mysql');

var mycon = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "Thegreateone12"
});

mycon.connect(function (err){
    if(err) throw err;
    console.log("Connected!");
    mycon.query("CREATE DATABASE testdb", function (err, result) {
        if(err) throw err;
        console.log("Database Created");
    });
});