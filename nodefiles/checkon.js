var mysql = require('mysql');

var mycon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Thegreatone12",
});

mycon.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});