const express = require('express');
const router = express.Router();

router.get('/listPoll', async (req, res) => {

    res.render('poll/listPoll');//mi ruta de la vista en views
});
module.exports = router;