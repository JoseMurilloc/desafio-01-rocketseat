const express = require('express');
const routes = require('./routes');

const server = express();

server.use(express.json());

server.use((req, res, next) => {
  console.count(`Requisições feitas`);
  return next();
});

server.use(routes);

server.listen(3333);