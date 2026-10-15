import React from 'react';
import { render, screen } from '@testing-library/react';
import Caption from '../src/Caption';

describe('<Caption />', () => {
  test('renders children with the placement class', () => {
    const { container } = render(
      <Caption placement="left" className="extra">
        <h3>This is our big Tagline!</h3>
        <h5 className="light grey-text text-lighten-3">
          Here's our small slogan.
        </h5>
      </Caption>
    );
    const caption = container.firstChild;

    expect(caption).toHaveClass('caption', 'left-align', 'extra', {
      exact: true
    });
    expect(caption.children).toHaveLength(2);
    expect(caption.children[0]).toBe(
      screen.getByRole('heading', {
        level: 3,
        name: 'This is our big Tagline!'
      })
    );
    expect(caption.children[1]).toBe(
      screen.getByRole('heading', {
        level: 5,
        name: "Here's our small slogan."
      })
    );
    expect(caption.children[1]).toHaveClass(
      'light',
      'grey-text',
      'text-lighten-3'
    );
  });

  test('is center aligned by default', () => {
    const { container } = render(<Caption>Text</Caption>);

    expect(container.firstChild).toHaveClass('caption', 'center-align', {
      exact: true
    });
  });

  test('supports right placement', () => {
    const { container } = render(<Caption placement="right">Text</Caption>);

    expect(container.firstChild).toHaveClass('right-align');
  });
});
