const router = require('express').Router();

// Passwords Model
const db = require('../models');

// Current Path = '/passwords'

// GET index
router.get('/', (req, res) => {
    // Query DB for all passwords
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
    .exec((err, foundPassword) => {
        if (err) return console.log(err);

        const context = {
            password: foundPassword,
        };

        res.render('passwords/show', context);
    });
});

// GET Edit
router.get('/:passwordId/edit', (req, res) => {
    // Query DB for password By ID to populate edit form
    db.Password.findById(req.params.passwordId, (err, foundPassword) => {
        if (err) return console.log(err);

        const context = {
        password: foundPassword,
        };

        res.render('passwords/edit', context);
    });
});

// PUT Update
router.put('/:passwordId', (req, res) => {
    // Data validation possible here
    // Query DB to update record by ID
    db.Password.findByIdAndUpdate(
        req.params.passwordId,
        req.body,
        {new: true},
        (err, updatedPassword) => {
        if (err) return console.log(err);

        res.redirect(`/passwords/${updatedPassword._id}`);
    });
});

// DELETE Destroy
router.delete('/:passwordId', (req, res) => {
    // Query DB to delete record by ID
    db.Password.findByIdAndDelete(req.params.passwordId, (err, deletedPassword) => {
        if (err) return console.log(err);

        // Redirect to index route
        res.redirect('/passwords');
    });
});



module.exports = router;