var express = require('express');
var app = express();
var erc = require('express-route-controller');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');
var logger = require('morgan');
var compression = require("compression");
var helmet = require('helmet')
var cors = require("cors");
mongoose.connect('mongodb://localhost:27017/mean');

module.exports = mongoose.connection;

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true },{limit: '115mb'}));
app.use(compression());

app.listen(3000, function() {
  console.log('Express server listening on port ' + 3000);
});

erc(app, {
    controllers: __dirname + '/routes',
    routes: {
    	'/shoturl': {action: 'blog#shoturl',method:'get'},
    	'/getEntity': {action: 'blog#getEntity',method:'get'},
        '/saveEntity': { action: 'blog#saveEntity', method: 'post'},
        '/updateEntity': { action: 'blog#updateEntity', method: 'post'},
        '/removeEntity': { action: 'blog#removeEntity', method: 'delete'}
    }
});
