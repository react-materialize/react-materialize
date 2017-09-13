import React from 'react';
import Autocomplete from '../src/Autocomplete';
import Row from '../src/Row';

export default
<Row>
  <Autocomplete
    title='Company'
    data={
      {
        'Apple': null,
        'Microsoft': null,
        'Google': 'http://placehold.it/250x250'
      }
    }
  />
</Row>;
