import React from 'react';
import { render } from '@testing-library/react';
import Carousel from '../src/Carousel';
import mocker from './helper/new-mocker';

describe('<Carousel />', () => {
  const images = [
    'https://lorempixel.com/250/250/nature/1',
    'https://lorempixel.com/250/250/nature/2',
    'https://lorempixel.com/250/250/nature/3',
    'https://lorempixel.com/250/250/nature/4'
  ];

  test('renders', () => {
    const { container } = render(<Carousel images={images} />);

    expect(container).toMatchSnapshot();
  });

  test('renders fixed items', () => {
    const fixedItem = <span>Do you rock!?</span>;
    const { container } = render(
      <Carousel images={images} fixedItem={fixedItem} />
    );

    expect(container).toMatchSnapshot();
  });

  test('renders centered images', () => {
    const { container } = render(<Carousel images={images} centerImages />);

    expect(container).toMatchSnapshot();
  });

  test('accepts className props', () => {
    const { container } = render(
      <Carousel images={images} className="center" />
    );

    expect(container).toMatchSnapshot();
  });

  test('accepts external `id` value', () => {
    const { container } = render(<Carousel images={images} carouselId="ID" />);

    expect(container).toMatchSnapshot();
  });

  describe('initialises', () => {
    const carouselInitMock = jest.fn();
    const carouselInstanceDestroyMock = jest.fn();
    const carouselMock = {
      init: (_, options) => {
        carouselInitMock(options);
        return {
          destroy: carouselInstanceDestroyMock
        };
      }
    };

    const restore = mocker('Carousel', carouselMock);

    beforeEach(() => {
      carouselInitMock.mockClear();
      carouselInstanceDestroyMock.mockClear();
    });

    afterAll(() => {
      restore();
    });

    test('uses default options if none are given', () => {
      render(<Carousel />);

      expect(carouselInitMock).toHaveBeenCalledWith({
        duration: 200,
        dist: -100,
        shift: 0,
        padding: 0,
        numVisible: 5,
        fullWidth: false,
        indicators: false,
        noWrap: false,
        onCycleTo: null
      });
    });

    test('handles full width sliders', () => {
      render(<Carousel images={images} options={{ fullWidth: true }} />);

      expect(carouselInitMock).toHaveBeenCalledWith({ fullWidth: true });
    });

    test('more options', () => {
      const options = { padding: 12, fullWidth: true, indicators: false };
      render(<Carousel images={images} options={options} />);
      expect(carouselInitMock).toHaveBeenCalledWith(options);
    });
  });
});
