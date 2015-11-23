import React from 'react';
import Row from '../src/Row';
import Col from '../src/Col';
import Chip from '../src/Chip';
import Tag from '../src/Tag';

export default
<Row>
  <Col s={12}>
    <Chip>
      <image src='assets/yuna.jpg' alt='Contact Person' />
      Jane Doe
    </Chip>
    <Tag>tag</Tag>
  </Col>
</Row>;
