/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../src/ProgressBar';

let wrapper = shallow(<ProgressBar />);

describe('<ProgressBar />', () => {
  it('renders by default with an indeterminate state`', () => {
    expect(wrapper.find('.progress').childAt(0).find('.indeterminate'))
      .to.have.length(1);
  });

  it('handles progress prop', () => {
    wrapper = shallow(<ProgressBar progress={50} />);
    expect(wrapper.contains(<div className='determinate' style={{width: '50%'}} />))
      .to.equal(true);
  });

  it('handles different colors', () => {
    wrapper = shallow(<ProgressBar className='red' progress={0} />);
    expect(wrapper.containsMatchingElement(<div className='red' />))
      .to.equal(true);
  });
});
