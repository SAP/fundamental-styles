#!/usr/bin/env node

import releaseNotes from './utils/release-notes';
import { getGithubRepo } from './utils/repo';
import { buildArgvOptions } from './utils/argv-options-builder'
import { release } from './utils/release';

async function releaseWhenNotDry(repo, argv, notes: string): Promise<void> {
    if (!argv['dry-run']) {
        await release(repo, argv, notes)
    }
}

async function run(argv): Promise<void> {
    try {
        const repo = getGithubRepo(argv);

        const notes: string = await releaseNotes(repo, argv);

        await releaseWhenNotDry(repo, argv, notes);
    }
    catch (e) {
        console.error(`❌ ---> Error: ${e}`)
    }
}

run(buildArgvOptions());
