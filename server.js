var express = require('express')
var app = express()
var erc = require('express-route-controller');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors')
mongoose.connect('mongodb://MEAN:mean123@ds053439.mlab.com:53439/jitendra');

module.exports = mongoose.connection;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(logger('dev')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser({limit: '115mb'}));
app.use(cors());
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
