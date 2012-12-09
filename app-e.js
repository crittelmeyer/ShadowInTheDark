//Module dependencies:
//  express server
var express = require('express'),
//  local routes file
    routes = require('./routes'),
//  standard node.js http & path
    http = require('http'),
    path = require('path')

//Set up express
var app = express();
app.configure(function(){
  app.set('port', process.env.PORT || 1337);
  app.set('views', __dirname + '/views');
  app.engine('.html', require('ejs').renderFile);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//set up routes - so far just one
app.get('/', routes.index);

//start listening with server
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});