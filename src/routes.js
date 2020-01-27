const { Router } = require('express');

const routes = Router();

const projects = [
  {
    id: "1",
    title: 'Aprender Node.js',
    tasks: ['Irei estadar somente a noite', 'Hoje irei estudar os Middlewares']
  },
  {
    id: "2",
    title: 'Aprender React.js',
    tasks: []
  }
];

routes.post('/projects', (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title, talks: []});

  return res.send();
});

module.exports = routes;