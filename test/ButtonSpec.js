/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
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

  it('should apply disable styles', () => {
    wrapper = shallow(<Button disabled>Stuff</Button>);
    expect(wrapper.find('.disabled')).to.have.length(1);
  });
});
