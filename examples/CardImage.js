import React from 'react';
import Card from '../src/Card';
import CardTitle from '../src/CardTitle';

export default
<Card className='small'
  header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
  actions={[<a href='#'>This is a Link</a>]}>
  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card>;
