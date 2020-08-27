#! /bin/bash

set -e

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

if [[ `git status --porcelain` ]]; then
  git add .
  git commit -a -n -m "chore: update visual regression images [CI SKIP]"
  git push "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" HEAD:"$TRAVIS_BRANCH"
  if [ "$TRAVIS_PULL_REQUEST" != "false" ] ; then
   curl -H "Authorization: token ${GITHUB_TOKEN}" -X POST \
    -d "{\"body\": \"fundamental-bot updated visual test files in this pull request. Please review these changes and trigger a rebuild.\"}" \
    "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
  fi
  exit 1
fi
