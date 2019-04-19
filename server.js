var express=require('express');
//let fs = require('fs'),
let path = require('path');
var app=express();

app.use('/pong_files',express.static(__dirname+'/pong_files'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'pong.html'));
 })


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
});