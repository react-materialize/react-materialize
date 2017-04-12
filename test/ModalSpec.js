/* global describe, it, expect, context, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../src/Modal';
import OverlayTrigger from '../src/OverlayTrigger';

describe('<Modal />', () => {
  const trigger = <button>open modal</button>;
  const children = <div><p>Hello</p></div>;
  const header = 'Modal header';
  const modalOptions = {
    dismissible: true,
    opacity: 0.4
  };

  let wrapper;
  let renderedWrapper;

  context('renders a modal', () => {
    beforeEach(() => {
      wrapper = mount(
        <Modal
          trigger={trigger}
          modalOptions={modalOptions}
          header={header}
        >
          {children}
        </Modal>
      );
      renderedWrapper = document.body.lastElementChild.innerHTML;
    });

    it('has a header', () => {
      expect(renderedWrapper).to.contain(header);
    });

    it('has children', () => {
      expect(renderedWrapper).to.contain(shallow(children).html());
    });

    it('has a footer', () => {
      expect(renderedWrapper).to.contain('modal-footer');
    });
  });

  context('renders a trigger', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Modal
          trigger={trigger}
          modalOptions={modalOptions}
          header={header}
        >
          {children}
        </Modal>
      );
    });
    it('renders', () => {
      expect(wrapper.contains(trigger)).to.equal(true);
    });
    it('has an overlay', () => {
      expect(wrapper.find(OverlayTrigger).length).to.equal(1);
    });
    it('passes options to overlay', () => {
      expect(wrapper.find(OverlayTrigger).props().modalOptions).to.equal(modalOptions);
    });
  });
});
