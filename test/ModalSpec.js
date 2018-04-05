/* global describe, it, expect, context, beforeEach, afterEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { stub } from 'sinon';
import Modal from '../src/Modal';

describe('<Modal />', () => {
  const trigger = <button>open modal</button>;
  const children = (
    <div>
      <h1>Hello</h1>
    </div>
  );
  const header = 'Modal header';
  const modalOptions = {
    dismissible: true,
    opacity: 0.4
  };

  let wrapper;
  let renderedWrapper;
  let modalStub;

  describe('renders a modal', () => {
    beforeEach(() => {
      wrapper = mount(
        <Modal trigger={trigger} modalOptions={modalOptions} header={header}>
          {children}
        </Modal>
      );

      renderedWrapper = document.body.lastElementChild.innerHTML;
    });

    afterEach(() => {
      document.body.removeChild(document.body.lastElementChild);
    });

    test('has children', () => {
      expect(renderedWrapper).toContain(header);
    });

    test('has a footer', () => {
      expect(renderedWrapper).toContain('modal-footer');
    });
  });

  describe('without a trigger', () => {
    beforeEach(() => {
      wrapper = mount(<Modal modalOptions={modalOptions}>{children}</Modal>);
    });

    afterEach(() => {
      document.body.removeChild(document.body.lastElementChild);
    });

    test('renders', () => {
      expect(wrapper.find(Modal).length).toBe(1);
    });
  });

  describe('controlled modal with `open` prop', () => {
    let testModal;
    beforeEach(() => {
      modalStub = stub($.fn, 'modal');
      testModal = mount(
        <Modal modalOptions={{ one: 1 }} open>
          {children}
        </Modal>
      );
    });

    afterEach(() => {
      document.body.removeChild(document.body.lastElementChild);
      modalStub.restore();
    });

    test('mounts opened', () => {
      // once in mount and twice in #showModal
      expect(modalStub).to.have.been.calledThrice;
    });

    test('open on prop change', () => {
      testModal.setProps({ open: true });
      expect(modalStub).to.have.been.calledThrice;
      // no trigger is defined, modal should be configured in constructor
      expect(modalStub.firstCall.args[0]).toEqual({ one: 1 });
      // showModal initializes the modal again
      expect(modalStub.secondCall.args[0]).toEqual({ one: 1 });
      expect(modalStub.lastCall.args).toEqual(['open']);
    });

    test('closes on prop change', () => {
      testModal.setProps({ open: false });
      expect(modalStub).to.have.callCount(4);
      // no trigger is defined, modal should be configured in constructor
      expect(modalStub.firstCall.args[0]).toEqual({ one: 1 });
      // open prop is set, so showModal is called
      expect(modalStub.secondCall.args[0]).toEqual({ one: 1 });
      expect(modalStub.thirdCall.args).toEqual(['open']);

      expect(modalStub.lastCall.args).toEqual(['close']);
    });
  });

  describe('renders a trigger', () => {
    beforeEach(() => {
      modalStub = stub($.fn, 'modal');
      wrapper = shallow(
        <Modal trigger={trigger} modalOptions={modalOptions} header={header}>
          {children}
        </Modal>
      );
    });

    afterEach(() => {
      document.body.removeChild(document.body.lastElementChild);
      modalStub.restore();
    });

    test('renders', () => {
      expect(wrapper.find('button').length).toBe(1);
    });

    test('initializes with modalOptions', () => {
      wrapper.find('button').simulate('click');
      expect(modalStub).to.have.been.calledWith(modalOptions);
    });
  });
});
