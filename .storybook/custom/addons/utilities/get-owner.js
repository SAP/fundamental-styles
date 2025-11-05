import { sortedProjects } from './projects.js';

const ownersCache = new Map();


/**
 * Function to get the owner package of a story.
 * Owner is a package that contains the story file. It could be styles, cx, common-css, etc.
 *
 * if file path is defined, it will be used to understand under which package directory the story is located
 * and then the package will be returned
 *
 * the execution is cached to avoid multiple calls from multiple places, because these calls are common
 * @param story
 * @returns {undefined|any}
 */
export function getOwner(story) {
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
}
