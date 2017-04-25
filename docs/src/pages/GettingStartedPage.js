import React from 'react';
import Row from '../../../src/Row';
import Col from '../../../src/Col';
import store from './store';

import ReactPlayground from './ReactPlayground';

class GettingStartedPage extends React.Component {
  componentDidMount () {
    store.emit('component', 'Getting Started');
    // hljs.initHighlighting.called = false;
    // hljs.initHighlightingOnLoad();
    // hljs.highlightBlock(this.refs.code)
  }

  render () {
    var htmlSetup = `<!DOCTYPE html>
<html>
  <head>
    <!--Import Google Icon Font-->
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>

  <body>
    <!--Import jQuery before materialize.js-->
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>
  </body>
</html>`;

    var codeSample = `import {Button, Icon} from 'react-materialize';
<Button node='a' waves='light'><Icon right>file_cloud</Icon>button</Button>`;

    return (
      <Row>
        <Col s={12}>
          <h4>Installation</h4>
          <ReactPlayground code='npm install react-materialize' trim={false} />
        </Col>
        <Col s={12}>
          <ReactPlayground code={codeSample} trim={false} />
        </Col>
        <Col s={12}>
          <h4>HTML Setup</h4>
          <ReactPlayground code={htmlSetup} trim={false} />
        </Col>
      </Row>
    );
  }
}

export default GettingStartedPage;
