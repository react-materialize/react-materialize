import React from 'react';
import Input from '../src/Input';
import Row from '../src/Row';

export default
<Row>
  <p>
    <Input name='group1' type='radio' value='red' label='Red' />
  </p>
  <p>
    <Input name='group1' type='radio' value='yellow' label='Yellow' />
  </p>
  <p>
    <Input name='group1' type='radio' value='green' label='Green' className='with-gap' />
  </p>
  <p>
    <Input name='group1' type='radio' value='brown' label='Brown' disabled='disabled' />
  </p>
</Row>;
