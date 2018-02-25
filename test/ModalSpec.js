/* global describe, it, expect, context, beforeEach, afterEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { stub } from 'sinon';
import Modal from '../src/Modal';

describe('<Modal />', () => {
  const trigger = <button>open modal</button>;
  const children = <div><h1>Hello</h1></div>;
  const header = 'Modal header';
  const modalOptions = {
    dismissible: true,
    opacity: 0.4
  };

  let wrapper;
  let renderedWrapper;
  const modalStub = stub($.fn, 'modal');

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

    afterEach(() => {
      document.body.removeChild(document.body.lastElementChild);
    });

    it('has children', () => {
      expect(renderedWrapper).to.contain(header);
    });

    it('has a footer', () => {
      expect(renderedWrapper).to.contain('modal-footer');
    });
  });

  context('without a trigger', () => {
    beforeEach(() => {
      wrapper = mount(
        <Modal modalOptions={modalOptions}>
          {children}
        </Modal>
      );
    });

    it('renders', () => {
      expect(wrapper.find(Modal).length).to.equal(1);
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
      expect(wrapper.find('button').length).to.equal(1);
    });

    it('initializes with modalOptions', () => {
      expect(modalStub).to.have.been.calledWith(modalOptions);
    });
  });
});
