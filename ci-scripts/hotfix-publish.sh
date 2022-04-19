#!/usr/bin/env bash

set -u -e

source .ci-env/flags.sh

#PACKAGES=(core platform moment-adapter)
HOTFIX_BRANCH=hotfix_tmp_branch_for_automated_release_do_not_use
MASTER_BRANCH=refs/heads/main
PACKAGE_PREFIX=@fundamental-styles
PACKAGES=("theming-preview" "common-css" "fn" "fn-icons")
DISTFOLDERS=( "dist-theming" "dist-common-css" "dist-fn" "dist-fn-icons")
OLD_TAG=$(git describe --tags --abbrev=0)

git config --global user.email $GH_EMAIL
git config --global user.name $GH_NAME
git remote set-url origin "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG.git"

if [[ $TRAVIS_BUILD_STAGE_NAME =~ "Hotfix-release" ]]; then
  echo "################ Running Hot Fix deploy tasks ################"

  # delete temp branch
  git push "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" ":$HOTFIX_BRANCH" > /dev/null 2>&1;

  std_ver=$(npm run std-version)

  release_tag=$(echo "$std_ver" | grep "tagging release" | awk '{print $4}')

  if  [[ $release_tag == v* ]]; then
    echo ""
  else
    release_tag="v$release_tag"
  fi

  echo "New version: $std_ver"

else
   echo  "${TRAVIS_BUILD_STAGE_NAME}"
   echo "Missing required stage name"
   exit 1
fi

git push "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG.git" $release_tag > /dev/null;
npm run storybook:static


if [[ $TRAVIS_BUILD_STAGE_NAME =~ "Hotfix-release" ]]; then
    npm run release:create -- --repo $TRAVIS_REPO_SLUG --tag $release_tag --branch $OLD_TAG
fi


# Increment version on main
if [[ $latest == "true" ]]; then
  git stash
  git checkout $MASTER_BRANCH
  npm run std-version
  git push "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG.git" $MASTER_BRANCH > /dev/null;
fi
``

# build dist and component folders
npm run build:prod

npm publish

for p in "${!DISTFOLDERS[@]}"
do
  :
      echo "publish ${PACKAGE_PREFIX}/${PACKAGES[p]}"
      echo "directory: ${DISTFOLDERS[p]}"

      cd ${DISTFOLDERS[p]}
      npm publish
      cd ..
done
