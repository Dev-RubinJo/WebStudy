var express = require('express'),
    http = require('http');

var app = express();

app.use(function (req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함');

    res.send({name: 'rubin', age: 26});
    // res.status(403).send('Forbidden');
    // next();
});

app.use('/', function (req, res, next) {
    console.log('두 번째 미들웨어에서 요청을 처리함');

    res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
    res.end('<h1>Express 서버에서 응답한 결과: ' + req.user + '</h1>');
});

http.createServer(app).listen(3000, function () {
    console.log('서버가 3000포트에서 시작됨');
});