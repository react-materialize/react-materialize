import React from 'react';
import { render } from '@testing-library/react';
import Preloader from '../src/Preloader';

const spinnerLayers = container =>
  container.querySelectorAll('.preloader-wrapper > .spinner-layer');

describe('<Preloader />', () => {
  test('should render a Preloader with default properties', () => {
    const { container } = render(<Preloader />);
    const wrapper = container.firstChild;
    expect(wrapper.className).toBe('preloader-wrapper active');

    const layers = spinnerLayers(container);
    expect(layers).toHaveLength(1);
    expect(layers[0].className).toBe('spinner-layer spinner-blue-only');
  });

  test('renders spinner circle structure', () => {
    const { container } = render(<Preloader />);
    const layer = spinnerLayers(container)[0];
    const parts = Array.from(layer.children);
    expect(parts.map(part => part.className)).toEqual([
      'circle-clipper left',
      'gap-patch',
      'circle-clipper right'
    ]);
    parts.forEach(part => {
      expect(part.children).toHaveLength(1);
      expect(part.firstChild).toHaveClass('circle');
    });
  });

  test('should render a flashing, inactive Preloader with size and className', () => {
    const { container } = render(
      <Preloader
        className="find"
        size="big"
        active={false}
        color="red"
        flashing
      />
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('find', 'preloader-wrapper', 'big');
    expect(wrapper).not.toHaveClass('active');

    const layers = Array.from(spinnerLayers(container));
    expect(layers.map(layer => layer.className)).toEqual([
      'spinner-layer spinner-blue',
      'spinner-layer spinner-red',
      'spinner-layer spinner-yellow',
      'spinner-layer spinner-green'
    ]);
  });

  test.each(['small', 'medium'])('applies size %s', size => {
    const { container } = render(<Preloader size={size} />);
    expect(container.firstChild).toHaveClass('preloader-wrapper', size);
  });

  test('applies the single color when not flashing', () => {
    const { container } = render(<Preloader color="green" />);
    const layers = spinnerLayers(container);
    expect(layers).toHaveLength(1);
    expect(layers[0]).toHaveClass('spinner-layer', 'spinner-green-only');
  });
});
