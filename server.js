var express = require('express')
var app = express()
var erc = require('express-route-controller');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');
var logger = require('morgan');
mongoose.connect('mongodb://localhost:27017/mean');

module.exports = mongoose.connection;

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(logger('dev')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser({limit: '115mb'}));

app.listen(3000, function() {
  console.log('Express server listening on port ' + 3000);
});

erc(app, {
    controllers: __dirname + '/routes',
    routes: {
    	'/getEntity': {action: 'saveFile#getEntity',method:'get'},
        '/saveEntity': { action: 'saveFile#saveEntity', method: 'post'},
        '/updateEntity': { action: 'saveFile#updateEntity', method: 'post'},
        '/removeEntity': { action: 'saveFile#removeEntity', method: 'delete'}
    }
});
