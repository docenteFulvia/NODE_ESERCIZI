const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const {registrazione, login} = require('../middleware/gestioneAuth');

router.post('/registrazione', registrazione);

router.post('/login', login);

module.exports = router;
