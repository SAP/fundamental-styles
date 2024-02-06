const semver = require('semver');
const recommendedVersion = require('conventional-recommended-bump');

const run = async() => {

    const release = await recommendedVersion({
        preset: 'conventionalcommits',
        tagPrefix: 'v'
    });

    console.log(release);
    console.log(semver.inc('0.33.3-rc.1', 'premajor', true, 'rc'));
    console.log(semver.inc('0.33.3-rc.1', 'preminor', true, 'rc'));
    console.log(semver.inc('0.33.3-rc.1', 'prepatch', true, 'rc'));
    console.log(semver.inc('0.33.3-rc.1', 'prerelease', true, 'rc'));
    console.log(Array.isArray(semver.prerelease('0.33.3-rc.1')));
};

run();
