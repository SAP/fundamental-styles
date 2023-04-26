const {sortedProjects} = require('./projects');

const ownersCache = new Map();

module.exports.getOwner = (story) => {
    if (!story) {
        return undefined;
    }
    let storyFilePath;
    if (story.importPath) {
        storyFilePath = story.importPath;
    } else if (story.parameters?.fileName) {
        storyFilePath = story.parameters.fileName;
    }

    if (!storyFilePath) {
        return undefined;
    }
    if (!ownersCache.has(storyFilePath)) {
        ownersCache.set(
            storyFilePath,
            sortedProjects.find((project) => storyFilePath.startsWith(project.pathToPackage))
        );
    }
    return ownersCache.get(storyFilePath);
};
