/**
 * Created by pauljones on 12/11/15.
 */
// Dependencies
// -----------------------------------------------------
var express         = require('express');
var mongoose        = require('mongoose');
var port            = process.env.PORT || 3000;
var database        = require('./config/config');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var app             = express();
var User 			= require('./models/user');

// Express Configuration
// -----------------------------------------------------
// Sets the connection to MongoDB
//mongoose.connect(database.aws.url1);
mongoose.connect(database.aws2.url1, function(err){
//mongoose.connect("mongodb://tripstomp:waxnepke@ds031641.mongolab.com:31641/calmapit", function(err){
	if (err) {
		console.log(err);
	} else {
		console.log("connected to database on aws");
	}
});
//mongoose.connect("mongodb://localhost/calmapit");

// Logging and Parsing
app.use(express.static(__dirname + '/../client'));                 // sets the static files location to public
app.use('/bower_components',  express.static(__dirname + '/../bower_components')); // Use BowerComponents

app.use(morgan('dev')); //changed from dev                   // log with Morgan
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
app.use(methodOverride());
// app.use('/', router);
//app.use('/api/bars', require('./api/bar'));
// Routes
// ------------------------------------------------------
require('./routes/routes.js')(app);

// error hndlers
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});
// require('./routes/todo.routes.js')(app);
// Listen
// -------------------------------------------------------
app.listen(port);
console.log('CMI listening on port ' + port);
