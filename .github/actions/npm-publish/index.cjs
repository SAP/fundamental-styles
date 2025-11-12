const core = require('@actions/core');
const { npmPublish } = require('@jsdevtools/npm-publish');

const packagePaths = core.getInput('packagePaths').split(',').map(path => `./${path}/package.json`);
const isPrerelease = core.getInput('isPrerelease') !== 'false';
const isHotfix = core.getInput('isHotfix') !== 'false';
const fs = require('fs');

const getNpmTag = () => {
    if (isPrerelease) return 'prerelease';
    if (isHotfix) return 'archive';
    return 'latest';
};

const publish = async ({ currentTryNumber = 1, packageJsonPath, tag, access, retryCount }) => {
    try {
        const result = await npmPublish({
            package: packageJsonPath,
            tag,
            access
        });
        core.info(`Published ${result.name}@${result.version} with tag ${result.tag}`);
    } catch (e) {
        if (currentTryNumber < retryCount) {
            await publish({
                currentTryNumber: currentTryNumber + 1,
                packageJsonPath,
                tag,
                access
            });
        } else {
            throw e;
        }
    }
};

const run = async () => {
    const tag = getNpmTag();
    for (const packageJsonPath of packagePaths) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        await publish({
            packageJsonPath,
            tag,
            access: 'public',
            retryCount: 3
        });
    }
};

run();
