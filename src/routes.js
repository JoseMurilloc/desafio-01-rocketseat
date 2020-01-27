const { Router } = require('express');

const routes = Router();

const users = [
  {
    id: 1,
    title: 'Aprender Node.js',
    tasks: ['Irei estadar somente a noite', 'Hoje irei estudar os Middlewares']
  },
  {
    id: 2,
    title: 'Aprender React.js',
    tasks: []
  }
];

routes.get('/', (req, res) => {
  return res.send('Hello');
});

module.exports = routes;