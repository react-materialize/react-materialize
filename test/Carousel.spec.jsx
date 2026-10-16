import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from '../src/Carousel';
import idgen from '../src/idgen';
import mocker from './helper/new-mocker';

describe('<Carousel />', () => {
  const images = [
    'https://lorempixel.com/250/250/nature/1',
    'https://lorempixel.com/250/250/nature/2',
    'https://lorempixel.com/250/250/nature/3',
    'https://lorempixel.com/250/250/nature/4'
  ];
  const destroyMock = vi.fn();
  const initMock = vi.fn(() => ({ destroy: destroyMock }));
  let restore;

  beforeEach(() => {
    initMock.mockClear();
    destroyMock.mockClear();
    restore = mocker('Carousel', { init: initMock });
  });

  afterEach(() => {
    restore();
  });

  const items = container => container.querySelectorAll('.carousel-item');

  test('renders each image as a carousel item', () => {
    const { container } = render(<Carousel images={images} />);
    const carousel = container.firstChild;

    expect(carousel).toHaveClass('carousel', { exact: true });
    expect(carousel).toHaveAttribute('id', 'Carousel-mockId');

    const imgs = screen.getAllByRole('img');
    expect(imgs).toHaveLength(images.length);
    imgs.forEach((img, i) => {
      expect(img).toHaveAttribute('src', images[i]);
      expect(img).toHaveAttribute('alt', images[i]);
      expect(img.parentElement.tagName).toBe('A');
      expect(img.parentElement).toHaveClass('carousel-item', { exact: true });
      expect(img.parentElement.parentElement).toBe(carousel);
    });
  });

  test('renders children as carousel items, keeping their className', () => {
    const { container } = render(
      <Carousel>
        <div className="red">First</div>
        <div>Second</div>
      </Carousel>
    );

    expect(items(container)).toHaveLength(2);
    expect(screen.getByText('First')).toHaveClass('carousel-item', 'red');
    expect(screen.getByText('Second')).toHaveClass('carousel-item');
  });

  test('renders fixed items', () => {
    const { container } = render(
      <Carousel images={images} fixedItem={<span>Do you rock!?</span>} />
    );
    const fixed = screen.getByText('Do you rock!?').parentElement;

    expect(fixed).toHaveClass('carousel-fixed-item', 'center');
    expect(container.firstChild.firstChild).toBe(fixed);
    expect(items(container)).toHaveLength(images.length);
  });

  test('does not render a fixed item container by default', () => {
    const { container } = render(<Carousel images={images} />);

    expect(container.querySelector('.carousel-fixed-item')).toBeNull();
  });

  test('renders centered images', () => {
    const { container } = render(<Carousel images={images} centerImages />);

    expect(items(container)).toHaveLength(images.length);
    items(container).forEach(item => {
      expect(item).toHaveClass('carousel-item', 'valign-wrapper');
    });
  });

  test('does not center images by default', () => {
    const { container } = render(<Carousel images={images} />);

    expect(container.querySelector('.valign-wrapper')).toBeNull();
  });

  test('accepts className props', () => {
    const { container } = render(
      <Carousel images={images} className="center" />
    );

    expect(container.firstChild).toHaveClass('carousel', 'center');
  });

  test('accepts external `id` value', () => {
    const { container } = render(<Carousel images={images} carouselId="ID" />);

    expect(container.firstChild).toHaveAttribute('id', 'ID');
  });

  test('adds `carousel-slider` class for full width sliders', () => {
    const { container } = render(
      <Carousel images={images} options={{ fullWidth: true }} />
    );

    expect(container.firstChild).toHaveClass('carousel', 'carousel-slider');
  });

  describe('initialises', () => {
    test('uses default options if none are given', () => {
      const { container } = render(<Carousel />);

      expect(initMock).toHaveBeenCalledTimes(1);
      expect(initMock).toHaveBeenCalledWith(container.firstChild, {
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
      const { container } = render(
        <Carousel images={images} options={{ fullWidth: true }} />
      );

      expect(initMock).toHaveBeenCalledWith(container.firstChild, {
        fullWidth: true
      });
    });

    test('more options', () => {
      const options = { padding: 12, fullWidth: true, indicators: false };
      const { container } = render(
        <Carousel images={images} options={options} />
      );

      expect(initMock).toHaveBeenCalledWith(container.firstChild, options);
    });

    test('destroys the instance on unmount', () => {
      const { unmount } = render(<Carousel images={images} />);
      expect(destroyMock).not.toHaveBeenCalled();

      unmount();

      expect(destroyMock).toHaveBeenCalledTimes(1);
    });

    test('re-initialises when options change', () => {
      const { container, rerender } = render(
        <Carousel images={images} options={{ dist: 0 }} />
      );
      rerender(<Carousel images={images} options={{ dist: 10 }} />);

      expect(destroyMock).toHaveBeenCalledTimes(1);
      expect(initMock).toHaveBeenCalledTimes(2);
      expect(initMock).toHaveBeenLastCalledWith(container.firstChild, {
        dist: 10
      });
    });

    test('does not re-initialise when re-rendered with the same props', () => {
      const { rerender } = render(<Carousel images={images} />);
      rerender(<Carousel images={images} />);

      expect(initMock).toHaveBeenCalledTimes(1);
    });
  });

  test('keeps its generated id across re-renders', () => {
    let n = 0;
    idgen.mockImplementation(() => n++);
    try {
      const { container, rerender } = render(<Carousel images={images} />);
      const before = container.firstChild.id;
      rerender(<Carousel images={images} />);

      expect(container.firstChild.id).toBe(before);
    } finally {
      idgen.mockImplementation(() => 'mockId');
    }
  });
});
