import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import dropdown from '../../../examples/DropdownBasic';
import DropdownCode from '!raw-loader!Dropdown';

const DropdownPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Add a dropdown list to any button.
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.dropdown}>
          {dropdown}
        </ReactPlayground>
      </Col>
      <Col s={12}>
        <PropTable header='Dropdown' component={DropdownCode} />
      </Col>
    </Col>
  </Row>
);

export default DropdownPage;
