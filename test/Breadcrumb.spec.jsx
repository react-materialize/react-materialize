import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumb from '../src/Breadcrumb';

describe('<Breadcrumb />', () => {
  test('renders children as breadcrumbs inside a column', () => {
    render(
      <Breadcrumb cols={6} className="blue">
        <a href="#home">Home</a>
        <a href="#login">Login</a>
      </Breadcrumb>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('row', 'blue');

    const col = nav.querySelector('.nav-wrapper > .col');
    expect(col).toHaveClass('s6');

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveTextContent('Home');
    expect(links[0]).toHaveAttribute('href', '#home');
    expect(links[1]).toHaveTextContent('Login');
    expect(links[1]).toHaveAttribute('href', '#login');
    for (const link of links) {
      expect(link).toHaveClass('breadcrumb');
      expect(link.parentElement).toBe(col);
    }
  });

  test('spans 12 columns by default', () => {
    render(
      <Breadcrumb>
        <a href="#home">Home</a>
      </Breadcrumb>
    );

    expect(
      screen.getByRole('navigation').querySelector('.nav-wrapper > .col')
    ).toHaveClass('s12');
  });
});
