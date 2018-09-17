var express = require('express');
var mysql = require('mysql')
var app = express();

var connection = mysql.createConnection({
    host: 'www.db4free.net',
    user: 's140390',
    password: 'abc123**',
    database: 'db 140390'
});

app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('pages/home');
});

app.get('/about', function (req, res) {
    var name = 'Wachirawit Bumrungchua'
    res.render('pages/about', { fullname: name});
});

app.get('/students', function (req, res) {

    connection.connect()

    connection.query('select * from students', function (err, rows, fields) {
       
        console.log('DATA : ' + rows);
        res.render('pages/students', { students: rows })

    })

    connection.end()

});

app.get('/subjects', function (req, res) {

    connection.connect()

    connection.query('select * from subjects', function (err, rows, fields) {
       
        console.log('DATA : ' + rows);
        res.render('pages/subjects', { subjects: rows })

    })

    connection.end()

});


console.log('App is running at http://localhost:8080');
app.listen(8080);