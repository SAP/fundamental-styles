const conventionalChangelog = require('conventional-changelog');
const core = require('@actions/core');
const through = require('through2');
const closestVersion = require('./closest-version');
const childProcess = require('child_process');

const deleteTags = (tags) => {
    childProcess.execSync(`git tag -d ${tags.join(' ')}`);
}

const generateChangelog = (fromVersion) => {
    return new Promise((resolve, reject) => {
        let generatedReleaseNotes = '';
        conventionalChangelog({
            preset: 'angular',
            releaseCount: 1
        }, null, { from: fromVersion }, null, { headerPartial: '' })
            .pipe(through(function(chunk, _enc, callback) {
                this.push(chunk);
                generatedReleaseNotes += chunk.toString();
                callback();
            }))
            .on('finish', () => resolve(generatedReleaseNotes))
            .on('error', reject);
    });
}

const run = async() => {
    const { closest, tagsTillClosest } = await closestVersion();
    deleteTags(tagsTillClosest);
    const generatedReleaseNotes = await generateChangelog(closest);
    core.setOutput('generatedReleaseNotes', generatedReleaseNotes);
};

run();