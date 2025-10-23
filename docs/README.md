# lightgraph Documentation

This directory contains the Sphinx documentation source for the lightgraph project.

## Building Documentation Locally

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Build the documentation:
   ```bash
   make html
   ```

3. View the documentation:
   Open `_build/html/index.html` in your browser.

## Deploying to GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

The documentation is automatically built and deployed using GitHub Actions when you push to the main branch. The workflow is defined in `.github/workflows/docs.yml`.

### Method 2: Manual Deployment

To manually deploy the documentation to the gh-pages branch:

1. Build the documentation:
   ```bash
   make html
   ```

2. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

3. Push the gh-pages branch:
   ```bash
   git push origin gh-pages
   ```

## Documentation Structure

- `source/` - Sphinx source files
  - `index.rst` - Main documentation page
  - `installation.rst` - Installation instructions
  - `tutorial.rst` - Tutorial and usage examples
  - `api.rst` - API reference
  - `examples.rst` - Various usage examples
  - `contributing.rst` - Contributing guidelines
  - `conf.py` - Sphinx configuration

- `_build/` - Generated documentation (created when building)
- `requirements.txt` - Python dependencies for documentation
- `Makefile` - Build commands
- `deploy.sh` - Deployment script

## Adding New Documentation

1. Create new `.rst` files in the `source/` directory
2. Add them to the table of contents in `index.rst`
3. Build and test locally before committing
4. The changes will be automatically deployed via GitHub Actions
