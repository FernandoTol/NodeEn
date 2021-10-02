//import { Router } from 'express'; esta en la forma ES6
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {  /* Esta zona es la que cunado no se pase nada por la barra de navegacion en el navegador se imprima el "Hola Ferenando" ya que esto se hace con el metodo res */
    //res.send("Hola Fernando")
    res.render('index/index');
});

module.exports =  router;

