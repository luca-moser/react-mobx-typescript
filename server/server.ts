var path = require('path');
var express = require('express');
var app = express();

const static_files_dir = path.join(__dirname, '../client');

app.get('/', function (req, res) {
    res.sendFile(path.join(static_files_dir, "/html/index.html"));
});

app.use(express.static(static_files_dir));

const listen_port= 9000;

app.listen(listen_port, function () {
    console.log(`Example app listening on port ${listen_port}!`);
});