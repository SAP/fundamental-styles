#! /bin/bash

set -e

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

if [ "$TRAVIS_PULL_REQUEST" != "false" ] ; then

echo "$TRAVIS_BRANCH"
echo "$TRAVIS_SECURE_ENV_VARS"
  npm run test:update

  if [[ `git status --porcelain` ]]; then
    git checkout $TRAVIS_PULL_REQUEST_BRANCH
    git add .
    git commit -a -n -m "chore: update visual regression images [CI SKIP]"
    git push "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" HEAD:"$TRAVIS_PULL_REQUEST_BRANCH" > /dev/null 2>&1;

    curl -H "Authorization: token ${GH_TOKEN}" -X POST \
    -d "{\"body\": \"fundamental-bot updated visual test files in this pull request. Please review these changes for accuracy and trigger a rebuild.\" }" \
    "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"

    exit 1
  fi
fi  

