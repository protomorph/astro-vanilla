# Astro Vanilla

A simple, minimal style, framework free Astro blog starter template.

## Getting Started

Clone this Repository.

```sh
# with git
git clone https://github.com/protomorph/astro-vanilla.git
# or with GitHub CLI
gh repo clone protomorph/astro-vanilla
```

then run:

```sh
# install dependencies
npm install
# run dev server
npm run dev
# preview production build
npm run preview
# build production site
npm run build
```

or create a new astro project with

```sh
npm create astro@latest -- --template protomorph/astro-vanilla
```

or use one of these:

https://github.com/protomorph/astro-vanilla
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github.com/protomorph/astro-vanilla)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github.com/protomorph/astro-vanilla)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/protomorph/astro-vanilla)

## Intergrations

This project comes with some intergration pre installed:

 - MDX
 - RSS
 - Sitemap
 - AutoImport

Review `src/consts.ts` to change the site settings to your liking.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
