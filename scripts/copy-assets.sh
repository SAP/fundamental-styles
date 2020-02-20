#! /bin/bash
set -o errexit

mkdir -p -- dist/images

for file in public/images/*; do cp "$file" dist/images; done
