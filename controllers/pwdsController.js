const router = require('express').Router();

// Pwds Model
const db = require('../models');

// INDEX Pwds
router.get('/', (req, res) => {
    db.Pwd.find({}, (err, allPwds) => {
        if (err) return  console.log(err);

        const context = {
            pwds: allPwds,
        };

        res.render('pwds/indexPwd', context);
    });
});



module.exports = router;