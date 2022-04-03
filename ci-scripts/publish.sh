#! /bin/bash

set -e

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

PACKAGE_THEMING_PREVIEW=theming-preview
PACKAGE_PREFIX=@fundamental-styles
DIST_THEMING_PREVIEW=dist-theming
DIST_COMMON_CSS=dist-common-css
PACKAGE_FN=fn
DIST_FN=dist-fn
PACKAGE_FN_ICONS=fn-icons
PACKAGE_COMMON_CSS=common-css
DIST_FN_ICONS=dist-fn-icons

# delete temp branch
git push "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" ":$TRAVIS_BRANCH" > /dev/null 2>&1;

std_ver=$(npm run std-version)
release_tag=$(echo "$std_ver" | grep "tagging release" | awk '{print $4}')


if  [[ $release_tag == v* ]]; then
  echo ""
else
  release_tag="v$release_tag"
fi

echo "$std_ver"
echo "$release_tag"

git push --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" main > /dev/null 2>&1;

# build dist and component folders
npm run build:prod

npm publish

# publish fn package
echo publish "${PACKAGE_PREFIX}/${PACKAGE_FN}"

cd ${DIST_FN}
npm publish
cd ..

# publish fn-icons package
echo publish "${PACKAGE_PREFIX}/${PACKAGE_FN_ICONS}"

cd ${DIST_FN_ICONS}
npm publish
cd ..

# publish common-css package
echo publish "${PACKAGE_PREFIX}/${PACKAGE_COMMON_CSS}"

cd ${DIST_COMMON_CSS}
npm publish
cd ..

# build dist-theming package
npm run build:theming-preview
npm run sync-versions

echo publish "${PACKAGE_PREFIX}/${PACKAGE_THEMING_PREVIEW}"
cd ${DIST_THEMING_PREVIEW}
npm publish
cd ..

# run this after publish to make sure GitHub finishes updating from the push
npm run release:create -- --repo $TRAVIS_REPO_SLUG --tag $release_tag --branch main

npm run storybook:static

npm run deploy -- --repo "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG"
