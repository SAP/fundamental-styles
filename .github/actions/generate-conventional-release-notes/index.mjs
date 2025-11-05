import conventionalChangelog from 'conventional-changelog';
import * as core from '@actions/core';
import through from 'through2';
import closestVersion from './closest-version.mjs';
import { execSync } from 'child_process';

const deleteTags = (tags) => {
    execSync(`git tag -d ${tags.join(' ')}`);
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