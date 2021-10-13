const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../lib/auth');

router.get('/listPoll',isLoggedIn, async (req, res) => {

    res.render('poll/listPoll');//mi ruta de la vista en views
});
module.exports = router;