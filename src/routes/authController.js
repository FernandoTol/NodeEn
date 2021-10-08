const express = require('express');
const passport = require('passport');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/signup', (req, res) => {
    res.render('auth/signup'); //mi ruta de la vista en views
});
router.post('/signup', [
    check('first_name').not().isEmpty().withMessage('First name is required'),
    check('last_name').not().isEmpty().withMessage('Last name name is required'),
    check('user_name').not().isEmpty().withMessage('User name name is required'),
    check('email').not().isEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid Email'), // El .email es para poder comprebar si es un email valido
    check('password').not().isEmpty().withMessage('password is required'),

], (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.render('auth/signup', {data:req.body, errors: errors.array() });// manda los mensajes de errerores a nuestra vista ademas EL {data:req.body hace que se mantengan los datos en la vista y no se borren
    } else {
        next();
    }
}, passport.authenticate('local.signup', {
    successRedirect: '/listPoll',
    failureRedirect: '/signup',
    //failureFlash: true //
}));
router.get('/login', (req, res) => {
    res.render('auth/signup'); //mi ruta de la vista en views
});


module.exports = router;