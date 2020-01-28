import projects from '../utils/Projects';

class ProjectController {
  async index(req, res) {
    return res.json(projects);
  }

  async store(req, res) {
    const { id, title } = req.body;

    projects.push({ id, title, tasks: []});

    return res.send();
  }

  async update (req, res) {
    const { id } = req.params;
    const { title } = req.body;
    
    projects.map(project => {
      if(project.id === id) {
        project.title = title;
      }
    });
  
    return res.send();
  }

  async destroy(req, res) {
    const { id } = req.params;
  
    const index = projects.findIndex((project) => project.id === id);
  
    projects.splice(index, 1);
  
    return res.send();
  }

}

export default new ProjectController();