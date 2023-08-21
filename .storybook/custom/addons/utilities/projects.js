const { projects } = require('../../../../projects');
const sortedProjects = Object.entries(projects).map(([id, data]) => ({ id, ...data })).sort((a, b) => b.pathToPackage.length - a.pathToPackage.length);

module.exports = {
    projects,
    sortedProjects,
};
