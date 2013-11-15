/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
  // Deal with OPTIONS method
  if (req.method === "OPTIONS") {
    res.send(200)
  } else {
    next();
  }
})
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(function(req, res, next) {
  req.setEncoding('utf8');
  req.rawBody = '';
  req.on('data', function(chunk) {
    req.rawBody += chunk;
  });
  req.on('end', function() {
    next();
  });
})
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// ROUTES
var tagsController = require('./controllers/tags.controller');
app.get('/tags',tagsController.index)
app.post('/tags',tagsController.create)
app.get('/tags/:id',tagsController.show)
app.delete('/tags/:id',tagsController.delete)







http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});