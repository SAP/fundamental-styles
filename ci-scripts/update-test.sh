#! /bin/bash

set -e

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

if [[ `git status --porcelain` ]]; then
  git add .
  git commit -a -n -m "chore: update visual regression images [CI SKIP]"
  git push "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" HEAD:"$TRAVIS_BRANCH"
  exit 1
fi
