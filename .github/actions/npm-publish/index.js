const core = require('@actions/core');
// const npmPublish = require('@jsdevtools/npm-publish');
const { npmPublish } = require('@jsdevtools/npm-publish');

const packagePaths = core.getInput('packagePaths').split(',').map(path => `./${path}/package.json`);
const isPrerelease = core.getInput('isPrerelease') !== 'false';
const isHotfix = core.getInput('isHotfix') !== 'false';
const npmToken = core.getInput('token');
const fs = require('fs');

const getNpmTag = () => {
    if (isPrerelease) return 'prerelease';
    if (isHotfix) return 'archive';
    return 'latest';
};

const publish = async ({ currentTryNumber = 1, packageJsonPath, tag, token, access, retryCount }) => {
    try {
        const result = await npmPublish({
            package: packageJsonPath,
            dryRun: true, //TODO remove dryRun
            token,
            tag,
            access
        });
        console.log('result', result);
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
};

const run = async () => {
    console.log('packagePaths',packagePaths);
    const tag = getNpmTag();
    for (const packageJsonPath of packagePaths) {
        console.log('packageJsonPath',packageJsonPath);
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        console.log('packageJson',packageJson.version);
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
