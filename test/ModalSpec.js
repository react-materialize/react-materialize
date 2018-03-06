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
  let modalStub;

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

    afterEach(() => {
      document.body.removeChild(document.body.lastElementChild);
    });

    it('renders', () => {
      expect(wrapper.find(Modal).length).to.equal(1);
    });
  });

  context('controlled modal with `open` prop', () => {
    let testModal;
    beforeEach(() => {
      modalStub = stub($.fn, 'modal');
      testModal = mount(<Modal modalOptions={{'one': 1}} open>{children}</Modal>);
    });

    afterEach(() => {
      document.body.removeChild(document.body.lastElementChild);
      modalStub.restore();
    });

    it('mounts opened', () => {
      // once in mount and twice in #showModal
      expect(modalStub).to.have.been.calledThrice;
    });

    it('open on prop change', () => {
      testModal.setProps({ open: true });
      expect(modalStub).to.have.callCount(5);
      expect(modalStub.firstCall.args[0]).to.deep.equal({ 'one': 1 });
      expect(modalStub.lastCall.args).to.deep.equal([ 'open' ]);
    });

    it('closes on prop change', () => {
      testModal.setProps({ open: false });
      expect(modalStub).to.have.callCount(5);
      expect(modalStub.firstCall.args[0]).to.deep.equal({ 'one': 1 });
      expect(modalStub.lastCall.args).to.deep.equal([ 'close' ]);
    });
  });

  context('renders a trigger', () => {
    beforeEach(() => {
      modalStub = stub($.fn, 'modal');
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

    afterEach(() => {
      document.body.removeChild(document.body.lastElementChild);
      modalStub.restore();
    });

    it('renders', () => {
      expect(wrapper.find('button').length).to.equal(1);
    });

    it('initializes with modalOptions', () => {
      wrapper.find('button').simulate('click');
      expect(modalStub).to.have.been.calledWith(modalOptions);
    });
  });
});
