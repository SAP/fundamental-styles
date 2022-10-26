const projects = require('../../../../projects').default;
const sortedProjects = Object.entries(projects).map(([id, data]) => ({ id, ...data })).sort((a, b) => b.pathToPackage.length - a.pathToPackage.length);

module.exports = {
    projects,
    sortedProjects,
    isValidProject: (projectId) => !!projects[projectId],
};
