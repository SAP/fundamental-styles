import * as GitHub from 'github-api';

export function getGithubRepo(argv): unknown {
    const [user, repoName] = argv.repo.split('/');

    return new GitHub({
        token: argv['gh-token-env-var'] || process.env['REPO_TOKEN']
    }, argv['gh-api-base-url']).getRepo(user, repoName);
}
