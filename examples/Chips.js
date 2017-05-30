import React from 'react';
import Row from '../src/Row';
import Col from '../src/Col';
import Chip from '../src/Chip';
import Tag from '../src/Tag';

export default
<Row>
  <Col s={12}>
    <Chip>
      <img src='img/yuna.jpg' alt='Contact Person' />
      Jane Doe
    </Chip>
    <Tag>tag</Tag>
  </Col>
</Row>;
