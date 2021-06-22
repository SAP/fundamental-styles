#! /bin/bash

set -e

PACKAGE_THEMING_PREVIEW=theming-preview
PACKAGE_PREFIX=@fundamental-styles
DIST_THEMING_PREVIEW=dist-theming

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

git status

npm run std-version -- --prerelease rc --no-verify --debug

git status

git push --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" "$TRAVIS_BRANCH"

#build dist and component folders
npm run storybook:static

npm publish --tag prerelease

#build dist-theming package
npm run build:theming-preview

echo publish "${PACKAGE_PREFIX}/${PACKAGE_THEMING_PREVIEW}"
cd ${dist-theming}
npm publish --tag prerelease
cd ..