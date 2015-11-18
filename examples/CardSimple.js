import React from 'react';
import Card from '../src/Card';
import Col from '../src/Col';

export default
<Col m={6} s={12}>
    <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
    I am a very simple card.
    </Card>
</Col>;
