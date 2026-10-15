import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchForm from '../src/SearchForm';
import Icon from '../src/Icon';

const h = React.createElement;

describe('<SearchForm />', () => {
  test('should render a search input labelled by the search icon', () => {
    const { container } = render(h(SearchForm));

    const form = container.querySelector('form');
    const input = screen.getByRole('searchbox');
    expect(form).toContainElement(input);
    expect(input).toHaveAttribute('type', 'search');
    expect(input).toHaveAttribute('id', 'TextInput-mockId');

    const searchIcon = screen.getByText('search');
    expect(searchIcon).toHaveClass('material-icons');
    // TextInput renders a non-string label with Materialize's label-icon class
    expect(searchIcon.parentElement.tagName).toBe('LABEL');
    expect(searchIcon.parentElement).toHaveClass('label-icon');
    expect(searchIcon.parentElement).toHaveAttribute('for', 'TextInput-mockId');
    expect(screen.getByLabelText('search')).toBe(input);
  });

  test('renders the close icon after the input', () => {
    render(h(SearchForm));

    const closeIcon = screen.getByText('close');
    expect(closeIcon).toHaveClass('material-icons');
    expect(closeIcon.parentElement).toHaveClass('input-field');
    expect(screen.getByRole('searchbox').parentElement).toBe(
      closeIcon.parentElement
    );
    expect(closeIcon.previousElementSibling.tagName).toBe('LABEL');
  });

  test('renders custom icons', () => {
    render(
      h(SearchForm, {
        searchIcon: h(Icon, null, 'zoom_in'),
        closeIcon: h(Icon, null, 'cancel')
      })
    );

    expect(screen.getByLabelText('zoom_in')).toBe(
      screen.getByRole('searchbox')
    );
    expect(screen.getByText('cancel')).toHaveClass('material-icons');
    expect(screen.queryByText('search')).not.toBeInTheDocument();
    expect(screen.queryByText('close')).not.toBeInTheDocument();
  });
});
