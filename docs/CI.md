# Fundamental-styles - Continuous Integration

At Fundamental-styles we have two main CI workflows:

- Create Release - Responsible for creating stable releases, and publishing them to npm, as well as creating
  RC and hotfix releases and publishing them to npm.
- Pull Request Checks - Responsible for running all the checks on pull requests,
  such as linting, unit tests, and e2e tests.

## Create Release

Create release is triggered when a new commit is pushed to the `main` branch or `tmp_hotfix_branch` branch.
Commit message is very important, because on it might depend on the versioning of the release.
In General, we use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to determine the versioning
of the release, and pipeline determines what should be the next version, but manually defining the version
through CLI is also possible.
For more information about the versioning, see [Versioning](README.md#versioning).

For detailed information about the usage of the pipeline, see [Create Release](README.md#creation-of-the-release).

Create release workflow consists of multiple jobs:

- Release Creation - Runs always
- Github Pages Deployment - Runs only when the release is meant to be `latest`

### Release Creation

So, `Release Creation` job consists of multiple tasks:

- Checkout - Checks out the code from the repository.
- Setup - Sets up the environment for the pipeline, such as installing dependencies, and setting up the cache.
- Version bump - Determines the version of the release, based on the release type and the commit message.
  It is triggered conditionally, only if the commit message is not `chore(release): publish`, in which case,
  the version is not bumped, and the release is published with the current version. This is done to support
  manual releases, which are sometimes necessary. Bump outputs `newVersion`(the semantic version),
  `isPrerelease`(boolean, whether the release is prerelease or not), and `releaseTag`(the tag which should be used
  for the npm, it is one of `latest`, `prerelease` or `hotfix`).
- Get Release Tags - Depending on the `releaseTag` from the previous step, it gets the tags which should be used
  for the npm and github releases. For example
    - if the `releaseTag` is `latest`, then the tags will be `@latest` for npm and `isPrerelease` for github will be
      false, since it is not a prerelease.
    - If the `releaseTag` is `hotfix`
        - if the given version is higher than the one on `main` branch, then the tags will be `@latest` for the npm and
          `isPrerelease` for github will be false, since it is not a prerelease.
        - if the given version is lower than latest release, then the tags will be `@hotfix` for the npm
          and `isPrerelease`
          for github will be false, since the release is a hotfix and technically it is a release, but not the latest
          one,
          just the downport to the release, which is before the `latest`, but after the last build of the previous
          Angular build.
    - if the `releaseTag` is `prerelease`, then the tags will be `@prerelease` for the npm and `isPrerelease` for github
      will be true, since the release is a
      prerelease.
- Update using Lerna - If commit message does not contain the `chore(release): publish` message, then the version
  is not bumped yet on the repository, and it is done in this step. It uses [Lerna](https://lerna.js.org/) to update
  the version of the packages, and to update the dependencies between the packages. It also updates the changelog
  of the packages. It uses the `newVersion` from the `Version bump` step.
- Lint - The lint job executes linting of the project files, including scss and ts/js files.
- Build and bundlesize - The build job executes the build of the project and the bundlesize job checks the size of the
  output bundles.
- Publish - Publishes the packages to npm. It uses the `npm` output from the `Get Release Tags` step for the tags.
- Push changes - Pushes the changes to the repository, if the update happened on the CI and not on the user's machine,
  before the pipeline was triggered.
- Generate Release Body - Generates the release body, which will be used for the github release. It uses the
  [Conventional-changelog](https://www.npmjs.com/package/conventional-changelog) to generate the release body.
  What this action does is that from the last release tag(`vX.Y.Z`), it gets the first previous release, which is
  the same type of the release and generates the changelog from the commits between the two releases. This means that
  if the last release tag was `v0.40.0-rc-9`, it will find the first previous release, which is also a prerelease,
  which would be `v0.40.0-rc-8`, and will generate the changelog from the commits between the two releases. If the
  last release tag was `v0.40.0`, it will find the first previous release, which is not a prerelease, which would be
  `v0.39.*`, and will generate the changelog from the commits between the two releases. This ensures that when the
  `stable` release is released, release notes contain all the changes from the previous `prereleases`, and when the
  `prerelease` is released, it contains only the things that went into the `prerelease`.
- Create Release - Creates the github release. It uses the `gh` output from the `Get Release Tags` step for determining
  if the release is a prerelease or not, and for the tag which should be used for the github release. The release body
  will be taken from the `Generate Release Body` step.

### Github Pages Deployment

`Github Pages Deployment` job is triggered only when the release is meant to be `latest`, it just checks out the code
which will be deployed to the github pages, and deploys it to the github pages.

## Pull Request checks

Pull request checks are run on every pull request, and they are run on the `pull_request` event. They ensure that the
introduced changes are valid, and that they do not break anything. It runs build, lint and bundle size checks. The
visual testing is handled by the [chromatic workflow](../.github/workflows/chromatic.yml) and it is not run on the pull request checks.

## Chromatic

[Chromatic](https://www.chromatic.com/) is a visual testing tool, which is used to ensure that the changes do not break the visual appearance of the
components. It is triggered on a push to the PR branches if the commit contains `[ci visual]` at the end of the commit
subject.
