#! /bin/bash

set -e

PACKAGE_THEMING_PREVIEW=theming-preview
PACKAGE_FN=fn
PACKAGE_FN_ICONS=fn-icons
PACKAGE_COMMON_CSS=common-css
PACKAGE_PREFIX=@fundamental-styles
DIST_THEMING_PREVIEW=dist-theming
DIST_FN=dist-fn
DIST_FN_ICONS=dist-fn-icons
DIST_COMMON_CSS=dist-common-css

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

git status

npm run std-version -- --prerelease rc --no-verify --debug

git status

git push --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" "$TRAVIS_BRANCH"

#build dist and component folders
npm run storybook:static

npm publish --tag prerelease

#publish dist-fn package
echo publish "${PACKAGE_PREFIX}/${PACKAGE_FN}"

cd ${DIST_FN}
ls
npm publish --tag prerelease
cd ..

#publish dist-fn-icons package
echo publish "${PACKAGE_PREFIX}/${PACKAGE_FN_ICONS}"

cd ${DIST_FN_ICONS}
ls
npm publish --tag prerelease
cd ..

#publish dist-common-css package
echo publish "${PACKAGE_PREFIX}/${PACKAGE_COMMON_CSS}"

cd ${DIST_COMMON_CSS}
ls
npm publish --tag prerelease
cd ..

#build dist-theming package
npm run build:theming-preview
npm run sync-versions
echo publish "${PACKAGE_PREFIX}/${PACKAGE_THEMING_PREVIEW}"

cd ${DIST_THEMING_PREVIEW}
npm publish --tag prerelease
cd ..

