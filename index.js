const express = require('express');

const app = new express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('👋 🌎'));

app.get('/hello/:name', (req, res) =>
  res.send(`wow it worked... ${req.params.name}`)
);
const server = app.listen(port);

module.exports = server;
