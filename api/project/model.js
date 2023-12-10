

const db = require('../../data/dbConfig');

function getProjects() {
  return db('projects');
}

function addProject(project) {
  return db('projects').insert(project).returning('*');
}

module.exports = {
  getProjects,
  addProject,
};
