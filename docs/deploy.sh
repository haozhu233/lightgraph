#!/bin/bash

# Script to build and deploy documentation to gh-pages branch

set -e

echo "Building documentation..."

# Install dependencies
cd docs
pip install -r requirements.txt

# Build the documentation
make html

echo "Documentation built successfully!"

# Go back to project root
cd ..

# Check if gh-pages branch exists
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "gh-pages branch exists, switching to it..."
    git checkout gh-pages
else
    echo "Creating gh-pages branch..."
    git checkout --orphan gh-pages
    git rm -rf .
fi

# Copy the built documentation
cp -r docs/_build/html/* .

# Add all files
git add .

# Commit the changes
git commit -m "Update documentation $(date)"

echo "Documentation deployed to gh-pages branch!"
echo "You can now push the gh-pages branch to GitHub:"
echo "git push origin gh-pages"

# Switch back to main branch
git checkout main
