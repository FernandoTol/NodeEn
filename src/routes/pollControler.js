const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../lib/auth');
const pool = require('../connection')

router.get('/listPoll',isLoggedIn, async (req, res) => {
    res.render('poll/listPoll');//mi ruta de la vista en views
});

router.get('/createPoll',isLoggedIn, async (req, res) => {
    res.render('poll/createPoll');//mi ruta de la vista en views
});

router.post('/createPoll',isLoggedIn, async (req, res) => {
    //console.log(req.body);
    const {poll, response} = req.body;
    let responses = response.lendth;
    let polls = {
        poll,
        responses,
        user_id: req.user.id,
        date: new Date()
    };
    console.log(polls);
    await pool.beginTransaction((err)=>{
        if (err) { throw err;}
            pool.query('INSERT INTO polls SET ?', polls,(err, result) =>{
                if (err) { 
                    pool.rollback(() => {
                        throw err;
                    });
                }
            });
    });
});

module.exports = router;