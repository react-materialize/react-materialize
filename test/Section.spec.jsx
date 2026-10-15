import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from '../src/Section';

describe('<Section />', () => {
  test('renders a div with the section class', () => {
    const { container } = render(<Section className="extra" id="intro" />);
    const el = container.firstElementChild;

    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('section', 'extra');
    expect(el).toHaveAttribute('id', 'intro');
  });

  test('renders children', () => {
    const { container } = render(
      <Section>
        <p>nope</p>
      </Section>
    );

    expect(screen.getByText('nope').parentElement).toBe(
      container.querySelector('.section')
    );
  });

  test('accepts a node prop', () => {
    const { container } = render(<Section node="article" />);
    const el = container.firstElementChild;

    expect(el.tagName).toBe('ARTICLE');
    expect(el).toHaveClass('section');
  });
});
