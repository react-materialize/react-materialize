import React from 'react';

import Carousel from '../src/Carousel';

export default
<Carousel
  fixedItem={<button className='btn'>MORE</button>}
  options={{ fullWidth: true }}
  images={[
    'https://lorempixel.com/800/400/food/1',
    'https://lorempixel.com/800/400/food/2',
    'https://lorempixel.com/800/400/food/3',
    'https://lorempixel.com/800/400/food/4',
    'https://lorempixel.com/800/400/food/5'
  ]}
/>;
