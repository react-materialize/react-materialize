import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import footer from '../../../examples/Footer';
import Code from '!raw-loader!Footer';

const FooterPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Footers are a great way to organize a lot of site navigation and information at the end of a page. This is where the user will look once hes finished scrolling through the current page or is looking for additional information about your website.
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.footer}>
          {footer}
        </ReactPlayground>
      </Col>

      <Col s={12}>
        <PropTable header='Footer' component={Code} />
      </Col>
    </Col>
  </Row>
);

export default FooterPage;
