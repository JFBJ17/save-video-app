const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');

const { database } = require('./keys');

// Initializations
const app = express();
require('./lib/passport');

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(session({
    secret: 'linksApp',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(morgan('dev'));
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session({ cookie: { maxAge: 3600 } }));

// Global Variables
app.use((req, res, next) => {
    app.locals.user = req.user;
    next();
});

// Routes
app.use('/api/v0/links', require('./routes/links.routes'));
app.use(require('./routes/authentication.routes'));
app.use(require('./routes/index.routes'));

// Public
/* app.use(express.static(path.join(__dirname, '/build'))); */

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});