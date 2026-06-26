const express = require('express');
const router = express.Router();
const {getLibri, getLibriById, getAutoreById, aggiungiLibro} = require('../middleware/gestioneLibri');
const verificaToken = require('../middleware/verificaToken');

//ROTTE PUBBLICHE
router.get('/', getLibri);
router.get('/:id', getLibriById);
router.get('/:id/autore', getAutoreById);
//ROTTE PROTETTE
router.post('/', verificaToken, aggiungiLibro);

module.exports = router;
