const core = require('@actions/core');
const npmPublish = require('@jsdevtools/npm-publish');

const packagePaths = core.getInput('packagePaths').split(',').map(path => `./${path}/package.json`);
const isPrerelease = core.getInput('isPrerelease') !== 'false';
const isHotfix = core.getInput('isHotfix') !== 'false';
const npmToken = core.getInput('token');

async function publish({ currentTryNumber = 1, packageJsonPath, tag, token, access, retryCount }) {
    try {
        const result = await npmPublish({
            package: packageJsonPath,
            token,
            tag,
            access
        });
        core.info(`Published ${result.package}@${result.version}`);
    } catch (e) {
        if (currentTryNumber < retryCount) {
            await publish({
                currentTryNumber: currentTryNumber + 1,
                packageJsonPath,
                tag,
                token,
                access
            });
        } else {
            throw e;
        }
    }
}

let tag = 'latest';

if (isPrerelease) {
    tag = 'prerelease';
}
if (isHotfix) {
    tag = 'archive';
}

const run = async () => {
    for (const packageJsonPath of packagePaths) {
        await publish({
            packageJsonPath,
            tag,
            token: npmToken,
            access: 'public',
            retryCount: 3
        });
    }
};

run();
