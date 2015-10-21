import React from 'react';
import Input from '../src/Input';
import Row from '../src/Row';

export default
<Row>
    <Input placeholder="Placeholder" s={6} label="First Name"></Input>
    <Input s={6} label="Last Name"></Input>
    <Input s={12} label="disabled" value="I am not editable" disabled></Input>
    <Input type="password" label="password" s={12}></Input>
    <Input type="email" label="Email" s={12}></Input>
</Row>;
