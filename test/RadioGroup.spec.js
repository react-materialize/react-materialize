import React from 'react';
import RadioGroup from '../src/RadioGroup';

describe.skip('<RadioGroup />', () => {
  let wrapper;
  const mockOnChange = jest.fn();

  const defaultProps = {
    name: 'size',
    label: 'T-Shirt Size',
    onChange: mockOnChange,
    options: [
      { label: 'XL', value: 'xl' },
      { label: 'L', value: 'l' },
      { label: 'M', value: 'm' }
    ]
  };

  test('renders', () => {
    wrapper = shallow(<RadioGroup {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with predefined value', () => {
    wrapper = shallow(<RadioGroup value="l" {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with gap', () => {
    wrapper = shallow(<RadioGroup withGap {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('disabled', () => {
    wrapper = shallow(<RadioGroup disabled {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with classnames', () => {
    wrapper = shallow(<RadioGroup radioClassNames="red" {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('onChange callback', () => {
    wrapper = shallow(<RadioGroup {...defaultProps} />);
    wrapper
      .find('input')
      .first()
      .simulate('change');
    expect(mockOnChange).toHaveBeenCalled();
  });
});
