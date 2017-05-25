import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import chips from '../../../examples/Chips';
import Code from '!raw-loader!Chip';

const ChipsPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Chips can be used to represent small blocks of information. They are most commonly used either for contacts or for tags.
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.chips}>
          {chips}
        </ReactPlayground>
      </Col>

      <Col s={12}>
        <PropTable header='Chip' component={Code} />
      </Col>
    </Col>
  </Row>
);

export default ChipsPage;
