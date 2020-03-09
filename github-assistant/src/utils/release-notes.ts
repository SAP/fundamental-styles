import { Message, Hash, FilteredCommit, Pr, GithubCommit } from './data.types';

function buildCommitMessage(commit: FilteredCommit, pullRequests: Hash): string {
    const template = (msg, sha, url, prNumber, prUrl): string => {
        return `${msg}${prNumber ? ` ([#${prNumber}](${prUrl}))` : ''} ([${sha}](${url}))`;
    };

    let message = commit.message;
    let pos = message.indexOf(':');
    if (pos !== -1) {
        message = message.substring(pos + 1).trim();
    }

    if (message.match(/BREAKING CHANGE:/)) {
        message = `**BREAKING CHANGE:** ${message}`;
    }

    pos = message.indexOf(commit.prNumber ? '(#' : '\n\n');
    if (pos !== -1) {
        message = message.substring(0, pos).trim();
    }

    return template(
        message,
        commit.sha.substring(0, 7),
        commit.url,
        commit.prNumber,
        pullRequests[`pr_${commit.prNumber}`]
    );
}

function buildMessages(commits: FilteredCommit[], pr: Hash, hideDocs: boolean): Message {
    return new Message({
        fixes: commits.filter(x => x.message.match(/^fix/)).map(x => buildCommitMessage(x, pr)),
        features: commits.filter(x => x.message.match(/^feat/)).map(x => buildCommitMessage(x, pr)),
        docs: !hideDocs ? commits.filter(x => x.message.match(/^docs/)).map(x => buildCommitMessage(x, pr)) : [],
    });
}

function buildReleaseNotes(messages: Message): string {
    let notes: string[] = [];

    if (messages.features.length > 0) {
        notes.push('\n### Features\n');
        notes = notes.concat(messages.features.map(msg => `* ${msg}`));
    }

    if (messages.fixes.length > 0) {
        notes.push('\n### Bug Fixes\n');
        notes = notes.concat(messages.fixes.map(msg => `* ${msg}`));
    }

    if (messages.docs.length > 0) {
        notes.push('\n### Documentation\n');
        notes = notes.concat(messages.docs.map(msg => `* ${msg}`));
    }

    return notes.join('\n');
}

function getVersionCommitRegEx(prerelease): RegExp {
    return (
        prerelease
            ? /^chore\(release\):\sversion\s\d+\.\d+\.\d+(\s|-\w+\.\d+)/
            : /^chore\(release\):\sversion\s\d+\.\d+\.\d+\s/
    );
}
async function getCommitsFromGithub(repo, tag: string, prerelease: boolean): Promise<FilteredCommit[]> {
    const resp: { data: GithubCommit[] } = (await repo.listCommits({ sha: tag }))
    const commits = resp.data;
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return await filterCommits(commits, repo, prerelease);
}

async function filterCommits(commits: GithubCommit[], repo: {}, prerelease: boolean): Promise<FilteredCommit[]> {

    const FilteredCommit: FilteredCommit[] = [];

    let foundPreviousVersionCommit = false;
    let sha;

    // the list of commits started with the commit for this tag so let's start at index 1
    for (let i = 1; i < commits.length; i++) {
        sha = commits[i].sha;
        const message = commits[i].commit.message;

        // continue gathering commit messages until the previous version commit is found
        if (message.match(getVersionCommitRegEx(prerelease))) {
            foundPreviousVersionCommit = true;
            break;
        }

        // skip over system-generated commits
        if (message.match(/\[ci skip\]$/)) {
            continue;
        }

        let prMatch = message.match(/\(#\d+\)/);
        if (prMatch) {
            prMatch = prMatch[0].match(/\d+/);
        }

        FilteredCommit.push({
            sha: sha,
            url: commits[i].html_url,
            message: message,
            prNumber: (prMatch ? parseInt(prMatch[0], 10) : null)
        });
    }

    // if the number of commits is 0 or 1, we have exhausted ALL commits
    // so it's time to return regardless of whether we found a match or not
    if (!foundPreviousVersionCommit && commits.length > 1) {
        const moreCommits = await getCommitsFromGithub(repo, sha, prerelease)
        return FilteredCommit.concat(moreCommits)
    }

    return FilteredCommit;
}

async function getPullRequest(repo, prNumber): Promise<Hash> {
    const pr: { data: Pr } = await repo.getPullRequest(prNumber)
    return { [`pr_${pr.data.number}`]: pr.data.html_url }
}

async function getPrsInHash(repo, commits: FilteredCommit[]): Promise<Hash> {
    return (await Promise
        .all(commits.filter(commit => !!commit.prNumber)
            .map(commit =>
                getPullRequest(repo, commit.prNumber)
            )))
        .reduce((hash, current) => Object.assign(hash, current), {});
}

export default async function releaseNotes(repo, { tag = '', prerelease = false, hideDocs = false }): Promise<string> {
    const commits: FilteredCommit[] = await getCommitsFromGithub(repo, tag, prerelease);
    const prs = await getPrsInHash(repo, commits);
    const messages = buildMessages(commits, prs, hideDocs);
    return buildReleaseNotes(messages);
}
