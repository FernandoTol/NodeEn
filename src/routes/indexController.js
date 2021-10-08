//import { Router } from 'express'; esta en la forma ES6
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index/index'); //mi ruta de la vista en views
});

module.exports =  router;

