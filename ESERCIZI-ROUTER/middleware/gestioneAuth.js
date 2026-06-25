const bcrypt = require('bcryptjs');
//pwd 1234 per tutti
let utenti = [
  {id: 1, username: 'fulvia', password: '$2b$10$dnQQafw0CL5A.dVKT5E1nO2EopT9eV3bknPGiROM//nlMx.rEB3ra'},
  {id: 2, username: 'filippo', password: '$2b$10$dnQQafw0CL5A.dVKT5E1nO2EopT9eV3bknPGiROM//nlMx.rEB3ra'},
  {id: 3, username: 'cecilia', password: '$2b$10$dnQQafw0CL5A.dVKT5E1nO2EopT9eV3bknPGiROM//nlMx.rEB3ra'}
];
let prossimoId = utenti.length + 1;
async function registrazione(req, res) {
  try {
    if (!req.body) {
      res.status(400).json({errore: 'Body non valorizzato'});
    }
    const {username, password} = req.body;
    //verifica che username e pwd siano valorizzati
    if (!username?.trim() || !password?.trim()) {
      res.status(400).json({errore: 'Username e password obbligatori'});
    }

    //verifica che non esista già un utente registrato con lo stesso username
    const isEsistente = utenti.some(u => u.username.toLocaleLowerCase() == username.trim().toLocaleLowerCase());
    if (isEsistente) {
      res.status(400).json({errore: 'Username già registrato'});
    }
    //cifriamo la pwd
    const hash = await bcrypt.hash(password.trim(), 10);
    const nuovoUtente = {
      id: prossimoId++,
      username: username.trim(),
      pwd: hash
    };
    utenti.push(nuovoUtente);
    res.status(201).json({messaggio: 'Utente registrato con successo'});
  } catch (err) {
    res.status(500).json({errore: 'Errore interno del server'});
  }
}

async function login(req, res) {}

module.exports = {registrazione, login};
