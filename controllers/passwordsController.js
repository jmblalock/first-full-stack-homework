const router = require('express').Router();

// Passwords Model
const db = require('../models');

// GET index
router.get('/', (req, res) => {
    db.Password.find({}, (err, allPasswords) => {
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

// POST Create
router.post('/', (req, res) => {
    // Query the DB to create a new author
    db.Password.create(req.body, (err, newPassword) => {
        if (err) return console.log(err);

        res.redirect('/passwords');
    });
});

// GET Show
router.get('/:passwordId', (req, res) => {
    // Query DB for password by ID
    db.Password.findById(req.params.passwordId)
    .populate('password')
    .exec((err, foundPassword) => {
        if (err) return console.log(err);

        const context = {
            password: foundPassword,
        };

        res.render('passwords/show', context);
    });
})



module.exports = router;