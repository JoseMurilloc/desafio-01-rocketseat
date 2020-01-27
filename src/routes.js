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

routes.get('/projects', (req, res) => {
  return res.json(projects);
});

routes.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  
  projects.map(project => {
    if(project.id === id) {
      project.title = title;
    }
  });

  return res.send(projects);
})


module.exports = routes;