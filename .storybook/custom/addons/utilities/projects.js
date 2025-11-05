import { projects, themes } from '../../../../projects.js';

const sortedProjects = Object.entries(projects).map(([id, data]) => ({ 
    id, 
    ...data, 
    themes: themes[id] // Add themes data to each project
})).sort((a, b) => b.pathToPackage.length - a.pathToPackage.length);

export {
    projects,
    themes,
    sortedProjects,
};
