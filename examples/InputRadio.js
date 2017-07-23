import React from 'react';
import Input from '../src/Input';
import Row from '../src/Row';

export default
<Row>
    <Input name='group1' type='radio' value='red' label='Red' />
    <Input name='group1' type='radio' value='yellow' label='Yellow' />
    <Input name='group1' type='radio' value='green' label='Green' className='with-gap' />
    <Input name='group1' type='radio' value='brown' label='Brown' disabled='disabled' />
</Row>;
