#!/bin/sh
# ideas used from https://gist.github.com/motemen/8595451

# abort the script if there is a non-zero error
set -e

# show where we are on the machine
pwd

# now lets setup a new repo so we can update the gh-pages branch
git config --global user.email "$GH_EMAIL"
git config --global user.name "$GH_NAME"

# Push, but send any output to /dev/null to hide anything sensitive
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
git subtree push --prefix dist origin gh-pages

echo "Finished Deployment!"
