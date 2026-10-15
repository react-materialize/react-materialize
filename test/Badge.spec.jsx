import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../src/Badge';

describe('<Badge />', () => {
  test('renders a badge span with its children', () => {
    render(<Badge>4</Badge>);
    const badge = screen.getByText('4');
    expect(badge.tagName).toBe('SPAN');
    expect(badge).toHaveClass('badge');
    expect(badge).not.toHaveClass('new');
    expect(badge).not.toHaveAttribute('data-badge-caption');
  });

  test('should output a badge with the className of `badge new`', () => {
    render(<Badge newIcon>3</Badge>);
    expect(screen.getByText('3')).toHaveClass('badge', 'new');
  });

  test('should output a custom caption if provided', () => {
    render(<Badge caption="custom caption">4</Badge>);
    expect(screen.getByText('4')).toHaveAttribute(
      'data-badge-caption',
      'custom caption'
    );
  });

  test('passes className and other props through', () => {
    render(
      <Badge className="blue" data-testid="badge">
        5
      </Badge>
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge', 'blue');
    expect(badge).toHaveTextContent('5');
  });
});
