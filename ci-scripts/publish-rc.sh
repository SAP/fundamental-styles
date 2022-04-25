#! /bin/bash

set -e

PACKAGE_PREFIX=@fundamental-styles
PACKAGES=("theming-preview" "common-css" "fn" "fn-icons")
DISTFOLDERS=( "dist-theming" "dist-common-css" "dist-fn" "dist-fn-icons")

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

npm run std-version -- --prerelease rc --no-verify --debug

git push --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" "$TRAVIS_BRANCH"

#build dist and component folders
npm run storybook:static

npm publish --tag prerelease

for p in "${!DISTFOLDERS[@]}"
do
  :
      echo "publish ${PACKAGE_PREFIX}/${PACKAGES[p]}"
      echo "directory: ${DISTFOLDERS[p]}"

      cd ${DISTFOLDERS[p]}
      npm publish --tag prerelease
      cd ..
done

