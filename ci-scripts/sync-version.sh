#!/usr/bin/env bash

set -u -e

#
# Update Package version in the library package.json from root package.json
#

NEW_VERSION=$(node -p "require('./package.json').version")
echo "Updating packages.json under dist-theming/libs with version ${NEW_VERSION}"
cd ./dist-theming

grep -rl 'VERSION_PLACEHOLDER' . | xargs  perl -X -p -i -e "s/VERSION_PLACEHOLDER/${NEW_VERSION}/g"

echo "Updating packages.json under fn/libs with version ${NEW_VERSION}"
cd ../dist-fn

grep -rl 'VERSION_PLACEHOLDER' . | xargs  perl -X -p -i -e "s/VERSION_PLACEHOLDER/${NEW_VERSION}/g"

cd ..
