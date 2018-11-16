var connect = require('connect');
var serveStatic = require('serve-static');
var favicon = require('serve-favicon');
var express = require('express')
app = express();

app.use(favicon(__dirname + '/img/favicon.ico'));

app.disable('etag');

const port = process.env.PORT || 8080;
connect().use(serveStatic(__dirname)).listen(port, function(){
    console.log(`Server running on... ${port}`);
});
