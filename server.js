// -------------------------- CONFIG
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = 4000;

// Set View Engine
app.set('view engine', 'ejs');

// Pwds Controller
const pwdsCtrl = require('./controllers/pwdsController');

// -------------------------- MIDDLEWARE
// BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Custom Middleware
app.use((req, res, next) => {
    const method = req.method;
    const path = req.url;
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${method} ${path} ${timestamp}`);
  next(); // Allow the request to move on to the next middleware in the chain
});

// ---------------------------- ROUTES

// Home Route
app.get('/', (req, res) => {
    res.render('index');
});

// Pwds Routes
app.use('/pwds', pwdsCtrl);


// -------------------------- LISTENER

// Listener
app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));
