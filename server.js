var connect = require('connect')
    , http = require('http')
    , fs = require('fs')
    , app = connect()
  .use(connect.static(__dirname))
  .use(function (req, res) {
  var file = __dirname + (req.originalUrl === '/' ? '/index.html' : req.originalUrl.split('?')[0] + '/index.html');
  fs.readFile(file, function (err, buf) {
    if (!err) res.end(buf.toString());
  });
});

http.createServer(app).listen(3000);
console.log('Server running at http://localhost:3000');