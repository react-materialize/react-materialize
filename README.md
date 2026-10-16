<img alt="React Materialize" src="https://cloud.githubusercontent.com/assets/4152819/12703340/23b90e56-c841-11e5-933a-99bfa107db07.jpg" width="890">

[![npm version](https://img.shields.io/npm/v/react-materialize.svg?style=flat)](https://www.npmjs.com/package/react-materialize)
[![CI](https://github.com/react-materialize/react-materialize/actions/workflows/ci.yml/badge.svg)](https://github.com/react-materialize/react-materialize/actions/workflows/ci.yml)
[![license: MIT](https://img.shields.io/npm/l/react-materialize.svg?style=flat)](LICENSE)

# React Materialize

React components for [Materialize](https://materializecss.com/), a CSS framework based on Material Design.

**[Documentation and live examples](https://react-materialize.github.io/react-materialize/)**

## Requirements

- `react` and `react-dom` 18 or 19 (react-materialize 4.x supports React 17)
- [`materialize-css`](https://www.npmjs.com/package/materialize-css) 1.0, loaded by your app (CSS and JavaScript)
- The [Material Icons](https://fonts.google.com/icons) font, for components that show icons

## Install

```sh
npm install react-materialize materialize-css
```

## Setup

Load Materialize once, at your app's entry point. Importing `materialize-css` defines the global `M` that the components use to initialise Materialize's JavaScript.

```js
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
```

Add the Material Icons font to your HTML:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

Loading Materialize from a CDN (`<link>` and `<script>` tags) works too, as long as it loads before your app renders.

## Usage

```jsx
import { Button, Modal } from 'react-materialize';

export default function App() {
  return (
    <Modal header="Hello" trigger={<Button>Open modal</Button>}>
      Lorem ipsum dolor sit amet.
    </Modal>
  );
}
```

The package ships ES modules, so bundlers only include the components you import. Each component is also available on its own, e.g. `import Button from 'react-materialize/lib/Button'`.

TypeScript definitions are included.

See the [documentation](https://react-materialize.github.io/react-materialize/) for every component, its props and examples.

## Contributing

Found a bug or missing a Materialize component? [Open an issue](https://github.com/react-materialize/react-materialize/issues). Pull requests are welcome; issues labelled [`help wanted`](https://github.com/react-materialize/react-materialize/labels/help%20wanted) are a good place to start.

### Development

Requires Node 22+ (`nvm use` picks up `.nvmrc`).

```sh
npm ci
npm run storybook   # docs and examples at http://localhost:9001
npm test            # Vitest + Testing Library (npm run test:watch to watch)
npm run lint        # Biome lint + format check (npm run format to fix)
npm run typecheck   # type definitions in types/
npm run build       # library build into lib/ (ESM + CommonJS)
```

### Releasing

CI runs lint, typecheck, tests and build on Node 22, 24 and 26 for every pull request.

Versions and the changelog are managed with [Changesets](https://changesets.dev):

1. In a PR that changes the published package, run `npm run changeset`, pick the bump (patch/minor/major) and describe the change for users. Commit the generated `.changeset/*.md` file with the PR. Docs, tests and tooling-only PRs don't need one.
2. When changesets land on `master`, a **Version Packages** PR is opened (or updated) with the version bump and `CHANGELOG.md` entries.
3. Merging that PR publishes the package to npm (trusted publishing with provenance), creates the git tag and GitHub release, and deploys the Storybook docs to GitHub Pages.

## Support

React Materialize is a React wrapper around [Materialize](https://materializecss.com/). If you or your company use it, please consider supporting the Materialize project too.
