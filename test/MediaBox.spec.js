import React from 'react';
import { shallow, mount } from 'enzyme';
import MediaBox from '../src/MediaBox';
import mocker from './helper/new-mocker';

describe('<MediaBox />', () => {
  let wrapper;
  const materialboxInitMock = jest.fn();
  const materialboxInstanceDestroyMock = jest.fn();
  const materialboxMock = {
    init: (el, options) => {
      materialboxInitMock(options);
      return {
        destroy: materialboxInstanceDestroyMock
      };
    }
  };
  const restore = mocker('Materialbox', materialboxMock);

  afterAll(() => {
    restore();
  });

  test('renders', () => {
    wrapper = shallow(
      <MediaBox
        className="more"
        image={<img src="image.jpg" alt="" />}
        caption="A demo media box1"
        width="650"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('initialises', () => {
    beforeEach(() => {
      materialboxInitMock.mockClear();
      materialboxInstanceDestroyMock.mockClear();
    });

    test('calls Materialbox', () => {
      mount(<MediaBox image={<img src="image.jpg" alt="" />} />);

      expect(materialboxInitMock).toHaveBeenCalledTimes(1);
    });

    test('calls Materialbox with options', () => {
      const options = {
        inDuration: 325,
        outDuration: 250
      };

      mount(
        <MediaBox image={<img src="image.jpg" alt="" />} options={options} />
      );

      expect(materialboxInitMock).toHaveBeenCalledWith(options);
    });
  });
});
