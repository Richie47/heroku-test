var express = require('express');
var http = require('http');
var app = express();
var path = require('path');
var reload = require('reload'); //npm install -g --save-dev reload


var server = http.createServer(app);
//reload code to refresh browser upon code completion
reload(app).then(function (reloadReturned) {
var server = app.listen(8081, function () {
    var host = server.address().address
    const port = process.env.PORT || 3000

    console.log("Example app listening at http://%s:%s", host, port);

    if (process.send){
        process.send('online');
    }
});
}).catch(function (err) {
    console.error('Reload could not start, could not start server/sample app', err)
});
