import {PackageConfigInterface} from "fundamental-styles/storybook";
import {packages} from 'fundamental-styles/configuration';

const sortedPackages = Object.entries(packages).map(([id, data]) => ({id, ...data})).sort((a, b) => b.pathToPackage.length - a.pathToPackage.length)
const storyIdToOwnerCache = new Map();

function _getPackage(story): PackageConfigInterface | undefined {
    return sortedPackages.find((pkg) => {
        return story.parameters.packageId === pkg.value || story.parameters.fileName.startsWith(pkg.pathToPackage);
    });
}

export function getPackage(story): PackageConfigInterface | undefined {
    if (!storyIdToOwnerCache.get(story.id)) {
        storyIdToOwnerCache.set(story.id, _getPackage(story));
    }
    return storyIdToOwnerCache.get(story.id);
}
