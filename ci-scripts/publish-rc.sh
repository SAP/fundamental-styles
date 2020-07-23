#! /bin/bash

set -e

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

git status

std_ver=$(npm run std-version -- --prerelease rc --no-verify)
release_tag=$(echo "$std_ver" | grep "tagging release" | awk '{print $4}')

echo "$release_tag"
npx node ci-scripts/bump_package.js $release_tag
cat package.json | grep version

git status

git push --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" "$TRAVIS_BRANCH"

#build dist and component folders
npm run storybook:static

npm publish --tag prerelease
