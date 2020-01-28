import { Router } from'express';
const routes = new Router();

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

function checkProjectsId(req, res, next) {
  const { id } = req.params;

  const index = projects.findIndex((project) => project.id == id);

  if(index === -1)
    return res.status(400).send('Project is not exists');
  
  return next();
}


routes.post('/projects', (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title, tasks: []});

  return res.send();
});

routes.get('/projects', (req, res) => {
  return res.json(projects);
});

routes.put('/projects/:id', checkProjectsId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  
  projects.map(project => {
    if(project.id === id) {
      project.title = title;
    }
  });

  return res.send();
});


routes.delete('/projects/:id', checkProjectsId, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex((project) => project.id === id);

  projects.splice(index, 1);

  return res.send();
});

routes.post('/projects/:id/talks', checkProjectsId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  // projects.talks.push
  const index = projects.findIndex((project) => project.id == id);
  projects[index].tasks.push(title);

  return res.send();

});


export default routes;