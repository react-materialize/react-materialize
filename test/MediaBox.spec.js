import React from 'react';
import { shallow } from 'enzyme';
import MediaBox from '../src/MediaBox';
import mocker from './helper/mocker';

describe('<MediaBox />', () => {
  let wrapper;
  const materialboxMock = jest.fn();
  const restore = mocker('materialbox', materialboxMock);

  afterAll(() => {
    restore();
  });

  test('renders', () => {
    wrapper = shallow(
      <MediaBox
        className="more"
        src="image.jpg"
        caption="A demo media box1"
        width="650"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
