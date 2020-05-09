import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/Button';
import Modal from '../src/Modal';

const stories = storiesOf('Javascript/Modal', module);

stories.addParameters({
  info: {
    text: `Use a modal for dialog boxes, confirmation messages, or other content that can be called up.`
  }
});

stories.add('Default', () => (
  <Modal header="Modal Header" trigger={<Button>MODAL</Button>}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>
  </Modal>
));

stories.add('Bottom Sheet', () => (
  <Modal
    header="Modal Header"
    bottomSheet
    trigger={<Button>MODAL BUTTOM SHEET STYLE</Button>}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  </Modal>
));

stories.add('Fixed Footer', () => (
  <Modal
    header="Modal Header"
    fixedFooter
    trigger={<Button>MODAL WITH FIXED FOOTER</Button>}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  </Modal>
));

stories.add('No Trigger', () => (
  <div>
    <Button href="#modal1" className="modal-trigger">
      {' '}
      Show Modal{' '}
    </Button>
    <Modal id="modal1" header="Modal Header">
      Lorem ipsum dolor sit amet
    </Modal>
  </div>
));
