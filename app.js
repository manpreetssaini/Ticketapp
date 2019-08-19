const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
// const ejsLint = require('ejs-lint');
const app = express();

const {getHomePage} = require('./routes/index');
const {tickets} = require('./routes/tickets');
const {users} = require('./routes/users');
const {deleteTicket} = require('./routes/delete')
const {addTicketPage, createTicket,editTicket, editTicketPage} = require ('./routes/ticket');
const port = 5000;

//creating db connection
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'Thegreatone12',
    database: 'ticketingsupport'
});

//connecting to db
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log ('Connected to database');
});
global.db = db;

//configuring middleware
app.set('port', process.env.port || port);
app.set('views', __dirname + '/views'); //set express to look in this folder to render our view
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //parse form data 
app.use(express.static(path.join(__dirname, 'public'))); // configuring to use public folder
app.use(session ({
    name: "fs1030",
    resave: false,
    saveUnitialized: false,
    secret: "abcde",
    cookie: {
        maxAge: 7200000,
        httpOnly: true,
    }
}));

// routes for app

app.get('/', getHomePage);
app.get('/users', users);
app.get('/tickets', tickets);
app.get('/add', addTicketPage);
app.get('/edit/:id', editTicketPage);
app.get('/delete/:id', deleteTicket);
app.post('/add', createTicket);
app.post('/edit/:id', editTicket);

// set app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})