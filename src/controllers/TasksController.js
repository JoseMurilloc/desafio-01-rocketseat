import projects from '../utils/Projects';

class TasksController {
  async store (req, res) {
    const { id } = req.params;
    const { title } = req.body;
  
    // projects.talks.push
    const index = projects.findIndex((project) => project.id == id);
    projects[index].tasks.push(title);
  
    return res.send();
  
  }
}

export default new TasksController();