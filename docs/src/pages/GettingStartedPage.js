import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';

const GettingStartedPage = () => {
  const htmlSetup = `<!DOCTYPE html>
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

  const codeSample = `import {Button, Icon} from 'react-materialize'

export default () => (
  <Button waves='light'>
    <Icon>thumb_up</Icon>
  </Button>
)`;

  return (
    <Row>
      <Col s={12}>
        <p className='caption'>
          Welcome to the <strong>React Materialize</strong> docs, all the code in the docs is <strong>editable</strong>.
          {' '}
          Go ahead and play around with the components and see what you can do.
        </p>
        <h4>Try it out</h4>
        <Col s={6}>
          <ReactPlayground code='<Button>EDIT ME</Button>' trim={false} />
        </Col>
        <Col s={6}>
          <ReactPlayground code={
`<Button waves='light'>
  OR ME!
  <Icon left>cloud</Icon>
</Button>`
        } trim={false} />
        </Col>
      </Col>
      <Col s={12}>
        <h4>Installation</h4>
        <ReactPlayground code='npm install react-materialize' trim={false} editable={false} />
      </Col>
      <Col s={12}>
        <ReactPlayground code={codeSample} trim={false} editable={false} />
      </Col>
      <Col s={12}>
        <h4>HTML Setup</h4>
        <ReactPlayground code={htmlSetup} trim={false} editable={false} />
      </Col>
    </Row>
  );
};

export default GettingStartedPage;
