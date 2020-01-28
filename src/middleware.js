import projects from './utils/Projects';

export default (req, res, next) => {
  const { id } = req.params;

  const index = projects.findIndex((project) => project.id == id);

  if(index === -1)
    return res.status(400).send('Project is not exists');
  
  return next();
}