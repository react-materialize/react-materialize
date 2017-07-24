import React from 'react';
import Modal from '../src/Modal';
import Button from '../src/Button';

export default
<div>
  <Button onClick={() => {
    $('#foo').modal('open');
  }}>Show Modal</Button>
  <Modal
    id='foo'
    header='Modal Header'>
    Lorem ipsum dolor sit amet
  </Modal>
</div>;
