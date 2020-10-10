const router = require('express').Router();

// Passwords Model
const db = require('../models');

// GET index
router.get('/', (req, res) => {
    db.Pwd.find({}, (err, allPasswords) => {
        if (err) return  console.log(err);

        const context = {
            passwords: allPasswords,
        };

        res.render('passwords/index', context);
    });
});

// GET New
router.get('/new', (req, res) => {
    res.render('passwords/new');
});



module.exports = router;