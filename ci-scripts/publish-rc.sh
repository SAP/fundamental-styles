#! /bin/bash

set -e

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

git status

npm run std-version -- --prerelease rc --no-verify --debug

git status

git push --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" "$TRAVIS_BRANCH"

#build dist and component folders
npm run storybook:static

npm publish --tag prerelease
