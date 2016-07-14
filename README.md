![React Materialize](https://cloud.githubusercontent.com/assets/4152819/12703340/23b90e56-c841-11e5-933a-99bfa107db07.jpg)

[![Join the chat at https://gitter.im/react-materialize/react-materialize](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/react-materialize/react-materialize?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build
Status](https://travis-ci.org/react-materialize/react-materialize.svg?branch=master)](https://travis-ci.org/react-materialize/react-materialize)
[![npm version](http://img.shields.io/npm/v/react-materialize.svg?style=flat)](https://npmjs.org/package/react-materialize "View this project on npm")


## Introduction

Material design components for react, powered by [materializecss](http://materializecss.com/).

## Get started

```
$ npm install react-materialize
```
Requires [materialize.css] and [materialize.js]. (Links to CDN).

```html
<script src='materialize.js'></script>
<link rel='stylesheet' href='materialize.css'/>
```

Materialize.js requires [jQuery] so you'll need to add that too.

[materialize.css]: https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css
[materialize.js]: https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js
[jQuery]: https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js


## Usage

``` javascript
var Button = require('react-materialize').Button;

// with ES6 modules
import {Button, Card, Row, Col} from 'react-materialize';
```

## Docs && Examples

See [documentation](https://react-materialize.github.io) for live examples. Try out the [boilplate](https://github.com/react-materialize/webpack-boilplate).

#### How does it compare to X.Y.Z?

The main goal of this project is to provide react component for
[materializecss](https://materializecss.com), at the current stage, I am
trying to implement all possible widgets that are supported by materializecss.
Please create an issue on github if you find you desired component is not
available.

There are other material design components for react.js, e.g. [material-ui](http://material-ui.com/),
which is more mature and popular than this one.
The main advantage of this project over e.g. material-ui is that it provides a
grid system similar to react-bootstrap.

## Contributions

> Yes, please!
