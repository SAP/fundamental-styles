#! /bin/bash

set -e

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

npm run std-version -- --prerelease rc --no-verify

echo $TRAVIS_REPO_SLUG
echo $TRAVIS_BRANCH

git push --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" "$TRAVIS_BRANCH" > /dev/null 2>&1;

#build dist and less folders
npm run build:prod

npm publish --tag prerelease
