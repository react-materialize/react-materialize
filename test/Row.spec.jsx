import React from 'react';
import { render, screen } from '@testing-library/react';
import Row from '../src/Row';

describe('<Row />', () => {
  test('renders a div with the row class', () => {
    const { container } = render(<Row className="extra" />);
    const el = container.firstElementChild;

    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('row', 'extra');
  });

  test('renders children', () => {
    const { container } = render(
      <Row>
        <p>cell</p>
      </Row>
    );

    expect(screen.getByText('cell').parentElement).toBe(
      container.querySelector('.row')
    );
  });

  test('accepts a node prop', () => {
    const { container } = render(<Row node="section" />);
    const el = container.firstElementChild;

    expect(el.tagName).toBe('SECTION');
    expect(el).toHaveClass('row');
  });

  test('passes other props to node', () => {
    const { container } = render(
      <Row style={{ color: 'red' }} id="row-1" data-test="x" />
    );
    const el = container.firstElementChild;

    expect(el).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    expect(el).toHaveAttribute('id', 'row-1');
    expect(el).toHaveAttribute('data-test', 'x');
  });
});
