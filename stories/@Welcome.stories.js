import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/Button';
import Modal from '../src/Modal';

const stories = storiesOf('@|React Materialize', module);

const reactMaterializeLogo = require('./react-materialize-logo.svg');

stories.add('Welcome', () => (
  <div>
    <img
      style={{ maxWidth: '100%', width: '13rem' }}
      src={reactMaterializeLogo}
    />
    <h1>React Materialize</h1>
    <p>
      Welcome to the <strong>React Materialize</strong> docs.
    </p>
    <h2>Where am I?</h2>
    <a
      href="https://npmjs.org/package/react-materialize"
      title="View this project on npm"
      rel="nofollow"
    >
      <img
        src="https://camo.githubusercontent.com/4533a6b0f2046a75aa9b965477287088b86e3897/687474703a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742d6d6174657269616c697a652e7376673f7374796c653d666c6174"
        alt="npm version"
        dataCanonicalSrc="http://img.shields.io/npm/v/react-materialize.svg?style=flat"
        style={{ maxWidth: '100%' }}
      />
    </a>
    <p>
      You should use <strong>React Materialize</strong> if you want to use{' '}
      <a href="http://materializecss.com" target="_blank">
        materialize-css
      </a>{' '}
      components in your react application. <br /> This is only a wrapper around
      materialize-css for ease of use. <br /> Navigate through these docs to see
      available components. Click on "Show Info" to view each story source.
    </p>
    <pre>
      {`
import { Modal, Button } from 'react-materialize';

const trigger = <Button>Open Modal</Button>;

export default () => (
  <Modal header="Modal Header" trigger={trigger}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Modal>
);
      `}
    </pre>
    <div>
      <Modal header="Modal Header" trigger={<Button>Open Modal</Button>}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Modal>
    </div>

    <h2>Intallation</h2>
    <pre>
      {`
npm install materialize-css
npm install react-materialize
      `}
    </pre>

    <h2>HTML Setup</h2>
    <pre>
      {`
<head>
  <!-- Import Google Icon Font -->
  <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- Import materialize.css -->
  <link href="CDN OR PATH TO NODE_MODULES.css" rel="stylesheet">
</head>
<body>
  <!-- Import materialize.js -->
  <script src="CDN OR PATH TO NODE_MODULES.js"></script>
  <!-- And then your bundled js -->
  <script src="path/to/your/bundle.js"></script>
</body>
      `}
    </pre>
    <p>
      We have a{' '}
      <a href="https://gitter.im/react-materialize/react-materialize">
        Gitter chat room
      </a>{' '}
      set up where you can talk directly with us. Come in and discuss new
      features, future goals, general problems or questions, or anything else
      you can think of.
    </p>
    <p>
      Disclaimer: We updated our docs after version `3.0.0` in which we removed
      `jQuery` dependency. The docs are less pretty but much easier to maintain
      and update. Feel free to propose any changes.
    </p>
    <a href="https://github.com/react-materialize/react-materialize">
      github.com/react-materialize
    </a>
  </div>
));
