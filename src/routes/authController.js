const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/signup',(req, res) =>{
    res.render('auth/signup');
});
router.post('/signup',passport.authenticate('local.signup', {
    successRedirect: '/polls',
    failureRedirect: '/signup',
    failureFlash: true
}));
module.exports = router;