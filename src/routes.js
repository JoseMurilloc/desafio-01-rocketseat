import { Router } from'express';

import ProjectController from './controllers/ProjectController';
import TasksController from './controllers/TasksController';

const routes = new Router();
import projects from './utils/Projects';

function checkProjectsId(req, res, next) {
  const { id } = req.params;

  const index = projects.findIndex((project) => project.id == id);

  if(index === -1)
    return res.status(400).send('Project is not exists');
  
  return next();
}


routes.post('/projects', ProjectController.store);

routes.get('/projects', ProjectController.index);

routes.put('/projects/:id', checkProjectsId, ProjectController.update);

routes.delete('/projects/:id', checkProjectsId, ProjectController.destroy);

routes.post('/projects/:id/talks', checkProjectsId, TasksController.store);


export default routes;