import React from 'react';

import Carousel from '../src/Carousel';

export default
<Carousel options={{ fullWidth: true }}>
  <div className='red'>
    <h2>First Panel</h2>
    <p className='white-text'>This is your first panel</p>
  </div>
  <div className='amber'>
    <h2>Second Panel</h2>
    <p className='white-text'>This is your second panel</p>
  </div>
  <div className='green'>
    <h2>Third Panel</h2>
    <p className='white-text'>This is your third panel</p>
  </div>
  <div className='blue'>
    <h2>Fourth Panel</h2>
    <p className='white-text'>This is your fourth panel</p>
  </div>
</Carousel>;
