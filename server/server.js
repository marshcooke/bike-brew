var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var passport = require('./strategies/sql.localstrategy');
var sessionConfig = require('./modules/session.config');

// Route includes
var indexRouter = require('./routes/index.router');
var favoritesRouter = require('./routes/favorites.router');
var registerRouter = require('./routes/register.router');
var mapRouter = require('./routes/map.router');
var breweryRouter = require('./routes/breweries.router');

var port = process.env.PORT || 6172;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Serve back static files
app.use(express.static('./server/public'));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', registerRouter);
app.use('/favorites', favoritesRouter);
app.use('/map', mapRouter);
app.use('/breweries', breweryRouter);

// Catch all bucket, must be last!
app.use('/', indexRouter);

// Listen //
app.listen(port, function () {
    console.log('Listening on port:', port);
});