import React from 'react';
import { render, screen } from '@testing-library/react';
import CollectionItem from '../src/CollectionItem';

describe('<CollectionItem />', () => {
  test('can render as a list item', () => {
    render(<CollectionItem id="alvin">Alvin</CollectionItem>);

    const item = screen.getByRole('listitem');
    expect(item).toHaveClass('collection-item');
    expect(item).toHaveTextContent('Alvin');
    expect(item).toHaveAttribute('id', 'alvin');
    expect(screen.queryByRole('link')).toBeNull();
  });

  test('can render as a link', () => {
    render(<CollectionItem href="#alvin">Alvin</CollectionItem>);

    const link = screen.getByRole('link', { name: 'Alvin' });
    expect(link).toHaveAttribute('href', '#alvin');
    expect(link).toHaveClass('collection-item');
    expect(link).not.toHaveClass('active');
    expect(screen.queryByRole('listitem')).toBeNull();
  });

  test('should render children when passed in', () => {
    render(
      <CollectionItem>
        <p>child</p>
      </CollectionItem>
    );

    const child = screen.getByText('child');
    expect(child.tagName).toBe('P');
    expect(child.parentElement).toBe(screen.getByRole('listitem'));
  });

  test('can have an active state via className', () => {
    render(<CollectionItem className="active">Alvin</CollectionItem>);
    expect(screen.getByRole('listitem')).toHaveClass(
      'collection-item',
      'active'
    );
  });

  test('link can have an active state via the active prop', () => {
    render(
      <CollectionItem href="#" active>
        Alvin
      </CollectionItem>
    );
    expect(screen.getByRole('link')).toHaveClass('collection-item', 'active');
  });
});
