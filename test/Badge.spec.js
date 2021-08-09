import React from 'react';
import { render } from '@testing-library/react';
import Badge from '../src/Badge';

describe('<Badge />', () => {
  test('renders', () => {
    const { container } = render(<Badge>4</Badge>);
    expect(container).toMatchSnapshot();
  });

  test('should output a badge with the className of `badge new` and', () => {
    const { container } = render(<Badge newIcon>3</Badge>);
    expect(container.querySelector('span.badge.new')).toBeTruthy();
  });

  test('should output a custom caption if provided', () => {
    const { container } = render(<Badge caption="custom caption">4</Badge>);
    expect(
      container.querySelector('span[data-badge-caption="custom caption"]')
    ).toBeTruthy();
  });
});
