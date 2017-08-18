import React from 'react';
import Card from '../src/Card';
import Col from '../src/Col';
import CardTitle from '../src/CardTitle';

export default
<Col m={7} s={12}>
  <Card horizontal header={<CardTitle image="./img/card-horizontal.jpeg"></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
      <p>I am a very simple card. I am good at containing small bits of information</p>
    </Card>
</Col>;
