import React from 'react';
import Row from '../../src/Row';
import Col from '../../src/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';

var path = require('path');
var fs = require('fs');

import breadcrumbs from '../../examples/Breadcrumbs';

const Breadcrumbs = React.createClass({
  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            Breadcrumbs are a good way to display your current location. This is usually used when you have multiple layers of content.
          </p>
            <h4 className='col s12'>
              Breadcrumbs
            </h4>
            <Col s={12} m={9}>
              <ReactPlayground code={fs.readFileSync(path.join(__dirname, '../../examples/Breadcrumbs.js'), 'utf8')}>
                {breadcrumbs}
              </ReactPlayground>
              <PropTable component="Breadcrumb"/>
            </Col>
        </Col>
      </Row>
    );
  }
});

export default Breadcrumbs;
