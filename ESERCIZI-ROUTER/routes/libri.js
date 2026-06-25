const express = require('express');
const router = express.Router();
const {getLibri, getLibriById, getAutoreById} = require('../middleware/gestioneLibri');

//ROTTE PUBBLICHE
router.get('/', getLibri);
router.get('/:id', getLibriById);
router.get('/:id/autore', getAutoreById);
//ROTTE PROTETTE

module.exports = router;
