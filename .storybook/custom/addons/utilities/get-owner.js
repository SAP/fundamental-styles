const {sortedProjects} = require('./projects');

const ownersCache = new Map();

module.exports.getOwner = (story = { parameters: {} }) => {
    const {
        parameters: { fileName: storyFilePath }
    } = story;

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
