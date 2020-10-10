// -------------------------- CONFIG
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Set View Engine
app.set('view engine', 'ejs');

// Controllers
const passwordsCtrl = require('./controllers/passwordsController');

// -------------------------- MIDDLEWARE
// BodyParser
app.use(bodyParser.urlencoded({extended: false}));

// Logging middleware
app.use(morgan(':method :url'));

// Method Override
app.use(methodOverride('_method'));

// ---------------------------- ROUTES

// Home Route
app.get('/', (req, res) => {
    res.render('index');
});

// Passwords Routes
app.use('/passwords', passwordsCtrl);

// 404 Routes
app.use('*', (req, res) => {
  res.render('404');
});

// -------------------------- LISTENER
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
