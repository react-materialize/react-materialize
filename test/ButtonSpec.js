/* global describe, it, expect, context */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../src/Button';

let wrapper = shallow(<Button waves='light'>Stuff</Button>);

describe('Button', () => {
  it('should output a button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should output a component with btn class', () => {
    expect(wrapper.find('.btn')).to.have.length(1);
  });

  it('should apply waves', () => {
    expect(wrapper.find('.waves-effect')).to.have.length(1);
  });

  it('should apply large styles', () => {
    wrapper = shallow(<Button large>Stuff</Button>);
    expect(wrapper.find('.btn-large')).to.have.length(1);
  });

  it('should apply floating styles', () => {
    wrapper = shallow(<Button floating>Stuff</Button>);
    expect(wrapper.find('.btn-floating')).to.have.length(1);
  });

  it('should apply flat styles', () => {
    wrapper = shallow(<Button flat>Stuff</Button>);
    expect(wrapper.find('.btn-flat')).to.have.length(1);
  });

  it('should apply FAB hover', () => {
    wrapper = shallow(<Button fab='vertical'>Stuff</Button>);
    wrapper.simulate('hover');
    expect(wrapper.find('.fixed-action-btn active'));
  });

  it('should apply FAB click-only', () => {
    wrapper = shallow(<Button fab='horizontal' fabClickOnly>Stuff</Button>);
    wrapper.simulate('click');
    expect(wrapper.find('.fixed-action-btn active'));
  });

  context('with a disabled prop', () => {
    let wrapper = mount(<Button disabled>Stuff</Button>);
    it('should have a disabled class', () => {
      expect(wrapper.find('.disabled')).to.have.length(1);
    });

    it('should have a disabled attribute', () => {
      expect(wrapper.prop('disabled')).to.equal(true);
    });
  });
});
