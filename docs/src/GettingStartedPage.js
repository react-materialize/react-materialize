import React from 'react';
import Row from '../../src/Row';
import Col from '../../src/Col';
import store from './store';

class GettingStartedPage extends React.Component {
  componentDidMount() {
    store.emit('component', 'Getting Started');
  }

  render() {
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
          <pre>
            <code className='language-markup'>
              $ npm install react-materialize
            </code>
          </pre>
        </Col>
        <Col s={12}>
          <pre>
            <code className='language-markup'>
                {codeSample}
            </code>
          </pre>
        </Col>
        <Col s={12}>
          <h4>HTML Setup</h4>
          <pre>
            <code className='language-markup'>
              {htmlSetup}
            </code>
          </pre>
        </Col>
      </Row>
    );
  }
}

export default GettingStartedPage;
