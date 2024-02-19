import { projects } from '../../../../projects';

const sortedProjects = Object.entries(projects).map(([id, data]) => ({ id, ...data })).sort((a, b) => b.pathToPackage.length - a.pathToPackage.length);

export {
    projects,
    sortedProjects,
};
