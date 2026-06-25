require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Benvenut* in gestione libri');
});

//IMPORT E COLLEGAMENTO DEI ROUTER
const libriRouter = require('./routes/libri');
const authRouter = require('./routes/auth');
app.use('/libri', libriRouter);
app.use('/utente', authRouter);

const PORTA = process.env.PORT;
app.listen(PORTA, () => console.log('Server avviato su http/localhost:' + PORTA));
