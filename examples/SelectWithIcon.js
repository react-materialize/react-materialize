import React from 'react';
import Input from '../src/Input';
import Row from '../src/Row';

export default
  <Row>
    <Input s={12} type='select' label='Materialize Select' icon='weekend' defaultValue='2'>
      <option value='1'>Option 1</option>
      <option value='2'>Option 2</option>
      <option value='3'>Option 3</option>
    </Input>
  </Row>;
