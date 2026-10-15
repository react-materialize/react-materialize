import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from '../src/Icon';

describe('<Icon />', () => {
  test('renders an icon', () => {
    render(<Icon>cloud</Icon>);
    const icon = screen.getByText('cloud');
    expect(icon.tagName).toBe('I');
    expect(icon).toHaveClass('material-icons');
    expect(icon.className).toBe('material-icons');
  });

  test.each(['tiny', 'small', 'medium', 'large'])(
    'accepts size %s as a prop',
    size => {
      render(<Icon {...{ [size]: true }}>cloud</Icon>);
      const icon = screen.getByText('cloud');
      expect(icon).toHaveClass('material-icons', size);
      expect(icon).not.toHaveAttribute(size);
    }
  );

  test.each(['left', 'center', 'right'])(
    'accepts placement %s as a prop',
    placement => {
      render(<Icon {...{ [placement]: true }}>cloud</Icon>);
      const icon = screen.getByText('cloud');
      expect(icon).toHaveClass('material-icons', placement);
      expect(icon).not.toHaveAttribute(placement);
    }
  );

  test('accepts style size as a prop', () => {
    render(<Icon style={{ fontSize: '30px' }}>cloud</Icon>);
    expect(screen.getByText('cloud')).toHaveStyle({ fontSize: '30px' });
  });

  test('accepts className', () => {
    render(<Icon className="red-text">cloud</Icon>);
    expect(screen.getByText('cloud')).toHaveClass('material-icons', 'red-text');
  });
});
