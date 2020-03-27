<img alt='React Materialize' src="https://cloud.githubusercontent.com/assets/4152819/12703340/23b90e56-c841-11e5-933a-99bfa107db07.jpg" width="890">

[![Join the chat at https://gitter.im/react-materialize/react-materialize](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/react-materialize/react-materialize?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](http://img.shields.io/npm/v/react-materialize.svg?style=flat)](https://npmjs.org/package/react-materialize "View this project on npm")
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)


# [react-materialize](https://react-materialize.github.io/)

Material design components for react, powered by [materializecss](http://materializecss.com/).

## Install
```
npm install materialize-css@next
npm install react-materialize
```

## Use
#### HTML Setup (from [materializecss](http://materializecss.com/))
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="path/to/materialize.css">
  </head>
  <body>
    <script src="path/to/your/bundle.js"></script>
  </body>
</html>
```

#### Javascript
``` js
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
```

##### Note
`materialize-css` exposes css via `style` field in `package.json`, if you have another tool for CSS that
identifies this field you can remove the import from `index.html`.

## Docs && Examples

See [documentation](https://react-materialize.github.io) for live examples. Try out the [boilerplate](https://github.com/react-materialize/webpack-boilplate).

#### How does it compare to X.Y.Z?

The main goal of this project is to provide react component for
[materializecss](http://materializecss.com), at the current stage, I am
trying to implement all possible widgets that are supported by materializecss.
Please create an issue on github if you find you desired component is not
available.

There are other material design components for react.js, e.g. [material-ui](http://material-ui.com/),
which is more mature and popular than this one.
The main advantage of this project over e.g. material-ui is that it provides a
grid system similar to react-bootstrap. Another advantage over material-ui is that react-materialize does not 
include css in the js - which can be cumbersome to some project's architecture.

## Contributions

> Yes, please!

We have a `help-wanted` label in the issues page for convenience

### Deployment workflow

We are now using github actions. For every push, `test` action will run.

To publish a new version update the package version, update the change log and create a PR.
Once merged to master push tags `git push --tags` and create a new release.

## Support

This library is only a react wrapper around the awesome [materializecss](http://materializecss.com), if you or 
your company uses this library please support them, all this work requires time :) ✌️
