import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../src/Button';

describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button waves="light">Stuff</Button>);
  });

  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should output a button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });

  test('should output a component with btn class', () => {
    expect(wrapper.find('.btn')).toHaveLength(1);
  });

  test('should apply waves', () => {
    expect(wrapper.find('.waves-effect')).toHaveLength(1);
  });

  test('should apply large styles', () => {
    wrapper = shallow(<Button large>Stuff</Button>);
    expect(wrapper.find('.btn-large')).toHaveLength(1);
  });

  test('should apply floating styles', () => {
    wrapper = shallow(<Button floating>Stuff</Button>);
    expect(wrapper.find('.btn-floating')).toHaveLength(1);
  });

  test('should apply flat styles', () => {
    wrapper = shallow(<Button flat>Stuff</Button>);
    expect(wrapper.find('.btn-flat')).toHaveLength(1);
  });

  test('should apply FAB hover', () => {
    wrapper = shallow(<Button fab="vertical">Stuff</Button>);
    wrapper.simulate('hover');
    expect(wrapper.find('.fixed-action-btn active'));
  });

  test('should apply FAB click-only', () => {
    wrapper = shallow(
      <Button fab="horizontal" fabClickOnly>
        Stuff
      </Button>
    );
    wrapper.simulate('click');
    expect(wrapper.find('.fixed-action-btn active'));
  });

  describe('with a disabled prop', () => {
    let wrapper = mount(<Button disabled>Stuff</Button>);
    test('should have a disabled class', () => {
      expect(wrapper.find('.disabled')).toHaveLength(1);
    });

    test('should have a disabled attribute', () => {
      expect(wrapper.prop('disabled')).toEqual(true);
    });
  });
});
