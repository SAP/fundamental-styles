#! /bin/bash
set -o errexit

mkdir -p -- dist/{fonts,images,icons} dist/fonts/72
 
for file in src/icons/*.{eot,svg,ttf,woff}; do cp "$file" dist/icons; done

for file in src/fonts/72/*.{eot,svg,ttf,woff,woff2}; do cp "$file" dist/fonts/72/; done

for file in public/images/*; do cp "$file" dist/images; done