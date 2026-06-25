let libri = [
  {id: 1, titolo: 'Il cacciatore di aquiloni', autore: 'Khaled Hosseini', anno: 2003},
  {id: 2, titolo: 'La strada', autore: 'Cormac McCarthy', anno: 2006},
  {id: 3, titolo: 'Le correzioni', autore: 'Jonathan Franzen', anno: 2001},
  {id: 4, titolo: 'Espiazione', autore: 'Ian McEwan', anno: 2001},
  {id: 5, titolo: 'La solitudine dei numeri primi', autore: 'Paolo Giordano', anno: 2008},
  {id: 6, titolo: 'Americanah', autore: 'Chimamanda Ngozi Adichie', anno: 2013},
  {id: 7, titolo: 'Il cardellino', autore: 'Donna Tartt', anno: 2013},
  {id: 8, titolo: 'Normal People', autore: 'Sally Rooney', anno: 2018},
  {id: 9, titolo: 'Shuggie Bain', autore: 'Douglas Stuart', anno: 2020},
  {id: 10, titolo: 'Dove canta il gambero', autore: 'Delia Owens', anno: 2018}
];

let prossimoId = libri.length + 1;

function getLibri(req, res) {
  let risultati = libri;

  if (req.query.anno) {
    risultati = risultati.filter(libro => libro.anno === +req.query.anno);
  }

  if (req.query.autore) {
    risultati = risultati.filter(libro => libro.autore.trim().toLowerCase().includes(req.query.autore.toLowerCase()));
  }

  if (req.query.titolo) {
    risultati = risultati.filter(libro => libro.titolo.trim().toLowerCase().includes(req.query.titolo.toLowerCase()));
  }
  res.json(risultati);
}

function getLibriById(req, res) {
  const libro = libri.find(libro => libro.id == +req.params.id);
  if (!libro) {
    return res.status(404).json({errore: `Libro (id: ${req.params.id}) non trovato`});
  }
  res.json(libro);
}

function getAutoreById(req, res) {
  const libro = libri.find(libro => libro.id == +req.params.id);
  if (!libro) {
    return res.status(404).json({errore: `Libro (id: ${req.params.id}) non trovato`});
  }
  res.json({autore: libro.autore});
}

module.exports = {getLibri, getLibriById, getAutoreById};
