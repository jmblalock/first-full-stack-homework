const router = require('express').Router();

// Pwds Model
const db = require('../models');

// INDEX Pwds
router.get('/', (req, res) => {
    db.Pwd.find({}, (err, allPwds) => {
        console.log(allPwds);
        if (err) return  console.log(err);
        res.render('pwds/indexPwd', {
            pwds: allPwds,
        });
    });
});



module.exports = router;