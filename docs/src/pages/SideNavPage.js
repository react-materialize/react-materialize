
import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import sideNav from '../../../examples/SideNavBasic';
import Code from '!raw-loader!SideNav';

const header = 'SideNav';

const SideNavPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        This is a slide out menu.
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.sideNav}>
          {sideNav}
        </ReactPlayground>
      </Col>

      <Col s={12}>
        <PropTable header={header} component={Code} />
      </Col>
    </Col>
  </Row>
);

export default SideNavPage;
