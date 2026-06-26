const jwt = require('jsonwebtoken');

function verificaToken(req, res, next) {
  //il token arriva dall'header Authorization nel formato
  //bearer eyJhbGciOiJ......
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(400).json({errore: 'Header authorization non valorizzata'});
  }
  //verifico che header autorization inizi con Bearer
  console.log(authHeader);
  console.log(authHeader.startsWith('Bearer '));
  //ricordiamo che se usiamo thunder client e mettiamo il token nel tab bearer aggiunge automaticamente la parola bearers all'inizio
  if (!authHeader.startsWith('Bearer ')) {
    res.status(400).json({errore: 'Token mancante'});
  }
  //estraiamo il token (nella posizione [0] c'è la scritta Bearer)
  const token = authHeader.split(' ')[1];
  try {
    const datiUtente = jwt.verify(token, process.env.JWT_SECRET);
    req.utente = datiUtente;
    next();
  } catch (err) {
    res.status(400).json({errore: 'Token non valido o scaduto'});
  }
}

module.exports = verificaToken;
