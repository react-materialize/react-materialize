import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';

const GettingStartedPage = () => {
  const htmlSetup = `<head>
  <!-- Import Google Icon Font -->
  <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- Import materialize.css -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet">
</head>
<body>
  <!-- Import jQuery before materialize.js -->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
  <!-- And then your bundled js -->
  <script src="path/to/your/bundle.js"></script>
</body>
`;

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
        <ReactPlayground code={`<Button waves='light'>EDIT ME<Icon left>save</Icon></Button>`} trim={false} />
        <ReactPlayground code={`<Modal
	header='Modal Header'
	trigger={<Button waves='light'>OR ME!<Icon right>insert_chart</Icon></Button>}>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.</p>
</Modal>`} trim={false} />
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
      <Col s={12}>
        <p className='caption'>
          If you would like to contribute please,
          {' '}
          <a target='_blank' href='https://github.com/react-materialize/react-materialize/issues'>
            check out our issues page.
          </a>
        </p>
      </Col>
    </Row>
  );
};

export default GettingStartedPage;
