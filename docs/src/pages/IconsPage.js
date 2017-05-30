import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import iconSimple from '../../../examples/IconSimple';
import iconSizes from '../../../examples/IconSizes';
import Code from '!raw-loader!Icon';

const IconsPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        We have included 740 Material Design Icons courtesy of Google. You can download them directly from the
        {' '}
        <a href='http://google.github.io/material-design-icons/#icon-font-for-the-web' target='_blank'>
          Material Design specs
        </a>.
      </p>
      <h4 className='col s12'>
        Simple
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.iconSimple}>
          {iconSimple}
        </ReactPlayground>
      </Col>
      <h4 className='col s12'>
        Sizes
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.iconSizes}>
          {iconSizes}
        </ReactPlayground>
      </Col>
      <h4 className='col s12'>
        Position
      </h4>
      <Col s={12}>
        <a href='#/buttons'>Check out example in Buttons</a>
      </Col>
      <Col s={12}>
        <PropTable header='Icon' component={Code} />
      </Col>
    </Col>
  </Row>
);

export default IconsPage;
