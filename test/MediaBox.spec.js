import React, { cloneElement } from 'react';
import { shallow, mount } from 'enzyme';
import MediaBox from '../src/MediaBox';
import mocker from './helper/new-mocker';

describe('<MediaBox />', () => {
  const wrapper = (
    <MediaBox className="more" caption="A demo media box1" width="650">
      <img src="image.jpg" alt="" />
    </MediaBox>
  );
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
    expect(shallow(wrapper)).toMatchSnapshot();
  });

  describe('initialises', () => {
    beforeEach(() => {
      materialboxInitMock.mockClear();
      materialboxInstanceDestroyMock.mockClear();
    });

    test('calls Materialbox', () => {
      mount(wrapper);

      expect(materialboxInitMock).toHaveBeenCalledTimes(1);
    });

    test('calls Materialbox with options', () => {
      const options = {
        inDuration: 325,
        outDuration: 250
      };

      mount(cloneElement(wrapper, { options }));

      expect(materialboxInitMock).toHaveBeenCalledWith(options);
    });
  });
});
