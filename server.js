var connect = require('connect');
var serveStatic = require('serve-static');
var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/img/favicon.ico'));

const port = process.env.PORT || 8080;
connect().use(serveStatic(__dirname)).listen(port, function(){
    console.log(`Server running on... ${port}`);
});