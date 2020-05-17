var crypto = require("crypto");

const express = require('express');

const PORT = 3000;
const TIMEOUT = 1000;
const ID = crypto.randomBytes(4).toString('hex');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send(`node - ping - ${ID}\n`);
});

app.get('/timeout', (req, res) => {
  setTimeout(() => {
    res.status(200).send(`node - timeout - ${ID}\n`);
  }, TIMEOUT);
});

app.get('/heavy', (req, res) => {
  let start = new Date();

  for (;;) {
    let now = new Date();

    if (now - start >= TIMEOUT) {
      break;
    }
  }

  res.status(200).send(`node - heavy - ${ID}\n`);
});

app.listen(PORT, () => {
  console.log('Escuchando en el puerto', PORT);
});