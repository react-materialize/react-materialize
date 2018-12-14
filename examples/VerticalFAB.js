import React from 'react';
import Button from '../src/Button';

export default
<Button floating fab='vertical' className='red' large style={{bottom: '45px', right: '24px'}} icon='mode_edit'>
  <Button floating icon='insert_chart' className='red'/>
  <Button floating icon='format_quote' className='yellow darken-1'/>
  <Button floating icon='publish' className='green'/>
  <Button floating icon='attach_file' className='blue'/>
</Button>;
