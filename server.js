const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({type: 'application/json'}));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

var conn = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: 'root',
    database: 'db_tp_java'
});

const server = app.listen(5000, function(){
    console.log("Server on port: ",5000);
    var host = server.address().address;
    var port = server.address().port;
});

conn.connect(function (error) {
    if (!error) {
        console.log('connected!');
    } else {
        console.log('Error: ' + error);
    }
});

var Users = require('./routes/Users');
app.use('/users',Users);

