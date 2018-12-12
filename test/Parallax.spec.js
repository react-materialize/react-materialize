import React from 'react';
import { shallow, mount } from 'enzyme';
import Parallax from '../src/Parallax';
import mocker from './helper/new-mocker';

describe('<Parallax />', () => {
  test('should render a Parallax', () => {
    expect(shallow(<Parallax />)).toMatchSnapshot();
  });

  describe('initialises', () => {
    const parallaxInitMock = jest.fn();
    const parallaxInstanceDestroyMock = jest.fn();
    const parallaxMock = {
      init: (el, options) => {
        parallaxInitMock(options);
        return {
          destroy: parallaxInstanceDestroyMock
        };
      }
    };
    const restore = mocker('Parallax', parallaxMock);

    beforeEach(() => {
      parallaxInitMock.mockClear();
      parallaxInstanceDestroyMock.mockClear();
    });

    afterAll(() => {
      restore();
    });

    test('calls Parallax', () => {
      mount(<Parallax />);

      expect(parallaxInitMock).toHaveBeenCalledTimes(1);
    });

    test('should have default options if none are given', () => {
      mount(<Parallax />);
      expect(parallaxInitMock).toHaveBeenCalledWith({
        responsiveThreshold: 0
      });
    });

    test('should call Parallax with the given options', () => {
      const options = { responsiveThreshold: 200 };

      mount(<Parallax options={options} />);
      expect(parallaxInitMock).toHaveBeenCalledWith(options);
    });

    test('can render children element', () => {
      const wrapper = shallow(
        <Parallax imageSrc="image.jpg">
          <h1>Test</h1>
        </Parallax>
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
