#! /bin/bash

set -e

PACKAGE_PREFIX=@fundamental-styles
PACKAGES=( (theming-preview dist-theming) (common-css dist-common-css) (fn dist-fn) (fn-icons dist-fn-icons) )

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

npm run std-version -- --prerelease rc --no-verify --debug

git push --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" "$TRAVIS_BRANCH"

#build dist and component folders
npm run storybook:static

npm publish --tag prerelease

for p in "${!PACKAGES[@]}"
do
  :
      echo "publish ${PACKAGE_PREFIX}/${PACKAGES[p][0]}"
      echo "directory: ${PACKAGES[p][1]}"

      cd ${PACKAGES[p][1]}
      npm publish --tag prerelease
      cd ..
done

