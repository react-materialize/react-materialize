import React from 'react';
import { render, screen } from '@testing-library/react';
import Slider from '../src/Slider';
import Slide from '../src/Slide';
import mocker from './helper/new-mocker';

describe('<Slider />', () => {
  const destroyMock = vi.fn();
  const initMock = vi.fn();
  let restore;

  const defaultOptions = {
    indicators: true,
    interval: 6000,
    duration: 500,
    height: 400
  };

  beforeEach(() => {
    destroyMock.mockReset();
    initMock.mockReset();
    initMock.mockImplementation(() => ({
      destroy: destroyMock,
      activeIndex: 0,
      $indicators: []
    }));
    restore = mocker('Slider', { init: initMock });
  });

  afterEach(() => {
    restore();
  });

  test('initializes Slider with default options', () => {
    const { container } = render(<Slider />);

    expect(initMock).toHaveBeenCalledTimes(1);
    expect(initMock).toHaveBeenCalledWith(container.firstChild, defaultOptions);
  });

  test('does not re-initialise when re-rendered with the same props', () => {
    const { rerender } = render(<Slider />);
    rerender(<Slider />);

    expect(initMock).toHaveBeenCalledTimes(1);
  });

  test('Destroyed when unmounted', () => {
    const { unmount } = render(<Slider />);
    expect(destroyMock).not.toHaveBeenCalled();

    unmount();

    expect(destroyMock).toHaveBeenCalledTimes(1);
  });

  test('should render a Slider', () => {
    const { container } = render(
      <Slider className="custom" data-testid="slider">
        <Slide image={<img src="one.jpg" alt="one" />} />
        <Slide image={<img src="two.jpg" alt="two" />} />
      </Slider>
    );
    const slider = screen.getByTestId('slider');

    expect(container.firstChild).toBe(slider);
    expect(slider).toHaveClass('slider', 'custom');
    expect(slider).not.toHaveClass('fullscreen');

    const slides = slider.firstChild;
    expect(slides.tagName).toBe('UL');
    expect(slides).toHaveClass('slides', { exact: true });
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByAltText('one').parentElement.parentElement).toBe(slides);
    expect(screen.getByAltText('two')).toHaveAttribute('src', 'two.jpg');
  });

  test('should render a fullscreen Slider', () => {
    const { container } = render(<Slider fullscreen />);

    expect(container.firstChild).toHaveClass('slider', 'fullscreen');
  });

  test('fullscreen removes the inline height styles set by Materialize', () => {
    initMock.mockImplementation(el => {
      el.style.height = '440px';
      el.firstChild.style.height = '400px';
      return { destroy: destroyMock, activeIndex: 0, $indicators: [] };
    });
    const { container } = render(<Slider fullscreen />);
    const slider = container.firstChild;

    expect(slider).not.toHaveAttribute('style');
    expect(slider.firstChild).not.toHaveAttribute('style');
  });

  test('update should destroy and re-initialize with new options', () => {
    const { container, rerender } = render(<Slider />);
    expect(initMock).toHaveBeenCalledWith(container.firstChild, defaultOptions);

    const options = {
      indicators: false,
      interval: 500,
      duration: 1000,
      height: 500
    };
    rerender(<Slider options={options} />);

    expect(destroyMock).toHaveBeenCalledTimes(1);
    expect(initMock).toHaveBeenCalledTimes(2);
    expect(initMock).toHaveBeenLastCalledWith(container.firstChild, options);
  });
});

describe('<Slider /> with Materialize', () => {
  const options = {
    indicators: true,
    interval: 6000,
    duration: 500,
    height: 400
  };
  const slides = [1, 2, 3].map(n => (
    <Slide key={n} image={<img src={`${n}.jpg`} alt={`slide ${n}`} />} />
  ));
  const instanceOf = container =>
    M.Slider.getInstance(container.querySelector('.slider'));
  const activeIndicators = container =>
    [...container.querySelectorAll('.indicators .indicator-item')].map(li =>
      li.classList.contains('active')
    );

  test('keeps the active slide and indicator after re-initialisation', () => {
    const { container, rerender } = render(
      <Slider options={options}>{slides}</Slider>
    );
    instanceOf(container).set(2);

    rerender(
      <Slider options={{ ...options, interval: 5000 }}>{slides}</Slider>
    );

    expect(instanceOf(container).activeIndex).toBe(2);
    expect(activeIndicators(container)).toEqual([false, false, true]);
  });

  test('marks the first indicator after re-initialisation on the first slide', () => {
    const { container, rerender } = render(
      <Slider options={options}>{slides}</Slider>
    );

    rerender(
      <Slider options={{ ...options, interval: 5000 }}>{slides}</Slider>
    );

    expect(activeIndicators(container)).toEqual([true, false, false]);
  });

  test('re-initialises without indicators', () => {
    const noIndicators = { ...options, indicators: false };
    const { container, rerender } = render(
      <Slider options={noIndicators}>{slides}</Slider>
    );
    instanceOf(container).set(2);

    rerender(
      <Slider options={{ ...noIndicators, interval: 5000 }}>{slides}</Slider>
    );

    expect(instanceOf(container).activeIndex).toBe(2);
    expect(container.querySelector('.indicators')).toBeNull();
  });
});
