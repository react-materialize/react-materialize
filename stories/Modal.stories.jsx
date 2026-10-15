import React from 'react';
import Button from '../src/Button';
import Modal from '../src/Modal';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

export default {
  title: 'Javascript/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          'Use a modal for dialog boxes, confirmation messages, or other content that can be called up.'
      }
    }
  },
  args: { header: 'Modal Header' }
};

export const Default = {
  args: {
    trigger: <Button>MODAL</Button>,
    children: <p>{LOREM}</p>
  }
};

export const BottomSheet = {
  args: {
    bottomSheet: true,
    trigger: <Button>MODAL BUTTOM SHEET STYLE</Button>,
    children: LOREM
  }
};

export const FixedFooter = {
  args: {
    fixedFooter: true,
    trigger: <Button>MODAL WITH FIXED FOOTER</Button>,
    children: LOREM
  }
};

export const NoTrigger = {
  args: { id: 'modal1', children: 'Lorem ipsum dolor sit amet' },
  render: args => (
    <div>
      <Button href="#modal1" className="modal-trigger">
        {' '}
        Show Modal{' '}
      </Button>
      <Modal {...args} />
    </div>
  )
};
