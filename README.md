<img alt='React Materialize' src="https://cloud.githubusercontent.com/assets/4152819/12703340/23b90e56-c841-11e5-933a-99bfa107db07.jpg" width="890">

[![Join the chat at https://gitter.im/react-materialize/react-materialize](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/react-materialize/react-materialize?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build
Status](https://travis-ci.org/react-materialize/react-materialize.svg?branch=master)](https://travis-ci.org/react-materialize/react-materialize)
[![npm version](http://img.shields.io/npm/v/react-materialize.svg?style=flat)](https://npmjs.org/package/react-materialize "View this project on npm")
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)


# [react-materialize](https://react-materialize.github.io/)

Material design components for react, powered by [materializecss](http://materializecss.com/).

##### New materialize-css version and *removal of jquery* is being developed under the branch `3.0.0-beta.0`, please try it out and file any issue under the [3.0.0](https://github.com/react-materialize/react-materialize/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A3.0.0) label. Thanks!
[Join us on discord](https://discordapp.com/invite/H2E65sB)

## Install
```
npm install react-materialize
```
## Use
#### HTML Setup (from [materializecss](http://materializecss.com/))
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
  </head>
  <body>
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
    <script src="path/to/your/bundle.js"></script>
  </body>
</html>
```

#### JS (ES6)
``` javascript
import { Button, Card, Row, Col } from 'react-materialize';
```

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
