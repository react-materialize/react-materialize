import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Footer from '../src/Footer';

const moreLinks = (
  <a className="grey-text text-lighten-4 right" href="#!">
    More Links
  </a>
);
const links = (
  <ul>
    <li>
      <a className="grey-text text-lighten-3" href="#!">
        Link 1
      </a>
    </li>
  </ul>
);

describe('<Footer />', () => {
  const renderFooter = (props = {}) =>
    render(
      <Footer
        moreLinks={moreLinks}
        copyrights="&copy; 2015 Copyright Text"
        links={links}
        {...props}
      >
        <p>Footer Content</p>
      </Footer>
    );

  test('renders a page footer', () => {
    renderFooter({ className: 'blue', id: 'footer' });
    const footer = screen.getByRole('contentinfo');
    expect(footer.tagName).toBe('FOOTER');
    expect(footer).toHaveClass('page-footer', 'blue');
    expect(footer).toHaveAttribute('id', 'footer');
  });

  test('renders children and links in grid columns', () => {
    const { container } = renderFooter();
    const row = container.querySelector('footer > .container > .row');
    expect(row).toBeInTheDocument();

    const [contentCol, linksCol] = row.children;
    expect(contentCol).toHaveClass('col', 'l6', 's12');
    expect(within(contentCol).getByText('Footer Content').tagName).toBe('P');

    expect(linksCol).toHaveClass('col', 'l4', 's12', 'offset-l2');
    expect(
      within(linksCol).getByRole('link', { name: 'Link 1' })
    ).toHaveAttribute('href', '#!');
  });

  test('renders copyrights and more links in the copyright bar', () => {
    const { container } = renderFooter();
    const copyright = container.querySelector(
      'footer > .footer-copyright > .container'
    );
    expect(copyright).toHaveTextContent('© 2015 Copyright Text');
    expect(
      within(copyright).getByRole('link', { name: 'More Links' })
    ).toHaveClass('right');
  });
});
