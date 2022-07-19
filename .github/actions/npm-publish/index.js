const core = require('@actions/core');
const npmPublish = require('@jsdevtools/npm-publish');

const packagePaths = core.getInput('packagePaths').split(',').map(path => `./${path}/package.json`);
const isPrerelease = core.getInput('isPrerelease') !== 'false';
const isHotfix = core.getInput('isHotfix') !== 'false';
const npmToken = core.getInput('token');

let tag = 'latest';

if (isPrerelease) {
    tag = 'prerelease';
}
if (isHotfix) {
    tag = 'archive';
}

const run = async () => {
    for (const packagePath of packagePaths) {
        const result = await npmPublish({
            package: packagePath,
            token: npmToken,
            tag
        });
        core.info(`Published ${result.package}@${result.version}`);
    }
};

run();
