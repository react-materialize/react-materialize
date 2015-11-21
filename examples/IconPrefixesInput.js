import React from 'react';
import Input from '../src/Input';
import Row from '../src/Row';
import Icon from '../src/Icon';

export default
<Row>
  <Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
  <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
</Row>;
