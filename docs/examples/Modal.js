import React from 'react';
import ModalTrigger from '../../src/ModalTrigger';
import Modal from '../../src/Modal';
import Button from '../../src/Button';

export default
<ModalTrigger modal={
  <Modal header='Modal Header'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  </Modal>
}>
  <Button waves='light'>Modal</Button>
</ModalTrigger>;
