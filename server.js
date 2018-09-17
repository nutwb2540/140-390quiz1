var express = require('express');
var mysql = require('mysql')
var app = express();

var connection = mysql.createConnection({
    host: 'www.db4free.net',
    user: 's140390',
    password: 'abc123**',
    database: 'db140390'
});
connection.connect()
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('pages/home');
});

app.get('/about', function (req, res) {
    var name = 'Wachirawit Bumrungchua'
    res.render('pages/about', { fullname: name });
});

app.get('/students', function (req, res) {



    connection.query('select * from students', function (err, rows, fields) {
        if (err) throw err
        console.log('DATA : ' + rows);
        res.render('pages/students', { students: rows })

    })


});

app.get('/subjects', function (req, res) {



    connection.query('select * from subjects', function (err, rows, fields) {
        if (err) throw err
        console.log('DATA : ' + rows);
        res.render('pages/subjects', { subjects: rows })

    })



});


console.log('App is running at http://localhost:8080');
app.listen(8080);