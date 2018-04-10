import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../src/ProgressBar';

let wrapper = shallow(<ProgressBar />);

describe('<ProgressBar />', () => {
  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('renders by default with an indeterminate state`', () => {
    expect(
      wrapper
        .find('.progress')
        .childAt(0)
        .find('.indeterminate')
    ).toHaveLength(1);
  });

  test('handles progress prop', () => {
    wrapper = shallow(<ProgressBar progress={50} />);
    expect(
      wrapper.contains(<div className="determinate" style={{ width: '50%' }} />)
    ).toEqual(true);
  });

  test('handles different colors', () => {
    wrapper = shallow(<ProgressBar className="red" progress={0} />);
    expect(wrapper.containsMatchingElement(<div className="red" />)).toEqual(
      true
    );
  });
});
