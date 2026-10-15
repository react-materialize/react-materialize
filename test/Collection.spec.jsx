import React from 'react';
import { render, screen } from '@testing-library/react';
import Collection from '../src/Collection';
import CollectionItem from '../src/CollectionItem';

describe('<Collection />', () => {
  test('renders a list of items', () => {
    render(
      <Collection>
        <CollectionItem>Alvin</CollectionItem>
        <CollectionItem>Simon</CollectionItem>
      </Collection>
    );

    const list = screen.getByRole('list');
    expect(list.tagName).toBe('UL');
    expect(list).toHaveClass('collection');
    expect(list).not.toHaveClass('with-header');

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveClass('collection-item');
    expect(items[0]).toHaveTextContent('Alvin');
    expect(items[1]).toHaveTextContent('Simon');
  });

  test('passes className and other props', () => {
    render(
      <Collection className="find" id="people">
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    );

    const list = screen.getByRole('list');
    expect(list).toHaveClass('collection', 'find');
    expect(list).toHaveAttribute('id', 'people');
  });

  describe('with header prop', () => {
    test('should support "header" prop', () => {
      render(
        <Collection header="names">
          <CollectionItem>Alvin</CollectionItem>
        </Collection>
      );

      expect(screen.getByRole('list')).toHaveClass('collection', 'with-header');
    });

    test('should render a header text', () => {
      render(
        <Collection header="names">
          <CollectionItem>Alvin</CollectionItem>
        </Collection>
      );

      const heading = screen.getByRole('heading', { level: 4, name: 'names' });
      expect(heading.parentElement.tagName).toBe('LI');
      expect(heading.parentElement).toHaveClass('collection-header');
      expect(screen.getByRole('list').firstElementChild).toBe(
        heading.parentElement
      );
    });

    test('should render a header component', () => {
      render(
        <Collection header={<h2>ages</h2>}>
          <CollectionItem>Alvin</CollectionItem>
        </Collection>
      );

      const heading = screen.getByRole('heading', { level: 2, name: 'ages' });
      expect(heading.parentElement).toHaveClass('collection-header');
      expect(screen.queryByRole('heading', { level: 4 })).toBeNull();
    });
  });

  test('should render anchors if present', () => {
    const { container } = render(
      <Collection>
        <CollectionItem href="#">Alvin</CollectionItem>
        <CollectionItem href="#" className="active">
          Simon
        </CollectionItem>
        <CollectionItem href="#">Theodore</CollectionItem>
      </Collection>
    );

    expect(screen.queryByRole('list')).toBeNull();
    const collection = container.firstElementChild;
    expect(collection.tagName).toBe('DIV');
    expect(collection).toHaveClass('collection');

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    links.forEach(link => {
      expect(link).toHaveClass('collection-item');
      expect(link.parentElement).toBe(collection);
    });
    expect(screen.getByRole('link', { name: 'Simon' })).toHaveClass('active');
  });
});
