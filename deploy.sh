#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

echo 'xn--3l8hze.ws' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

git push -f git@github.com:mashurex/chickenslappers.git main:gh-pages

cd -