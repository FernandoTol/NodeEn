const express = require('express');
const router = express.Router();

router.get('/signup',(rep, res) =>{
    res.render('auth/signup')
});

module.exports = router;