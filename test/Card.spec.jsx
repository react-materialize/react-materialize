import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Card from '../src/Card';
import Icon from '../src/Icon';

describe('<Card />', () => {
  test('renders title, content and classes', () => {
    const { container } = render(
      <Card
        title="card title"
        className="blue-grey darken-1"
        textClassName="white-text"
        data-testid="card"
      >
        I am a very simple card
      </Card>
    );
    const card = screen.getByTestId('card');

    expect(container.firstChild).toBe(card);
    expect(card).toHaveClass('card', 'blue-grey', 'darken-1');
    expect(card).not.toHaveClass('horizontal');

    const content = card.querySelector(':scope > .card-content');
    expect(content).toHaveClass('card-content', 'white-text');

    const title = content.querySelector('.card-title');
    expect(title).toHaveTextContent('card title');
    expect(title).not.toHaveClass('activator');
    expect(within(content).getByText('I am a very simple card')).toBe(
      title.nextElementSibling
    );

    expect(card.querySelector('.card-action')).toBeNull();
    expect(card.querySelector('.card-stacked')).toBeNull();
  });

  test('omits the content title when no title is given', () => {
    const { container } = render(<Card>Body</Card>);

    expect(container.querySelector('.card-content .card-title')).toBeNull();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  test('renders a header before the content', () => {
    const { container } = render(
      <Card header={<div className="card-image">header</div>}>Body</Card>
    );

    expect(container.firstChild.firstChild).toBe(screen.getByText('header'));
  });

  test('renders actions in the card-action area', () => {
    const { container } = render(
      <Card
        actions={[
          <a key="1" href="#one">
            One
          </a>,
          <a key="2" href="#two">
            Two
          </a>
        ]}
      >
        Body
      </Card>
    );
    const action = container.querySelector('.card > .card-action');

    expect(action).toBeInTheDocument();
    const links = within(action).getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '#one');
    expect(links[1]).toHaveAttribute('href', '#two');
  });

  test('renders reveal content with activator and close icons', () => {
    const { container } = render(
      <Card title="card title" reveal={<p>Revealed text</p>}>
        Body
      </Card>
    );
    const contentTitle = container.querySelector('.card-content .card-title');

    expect(contentTitle).toHaveClass('card-title', 'activator');
    const revealIcon = within(contentTitle).getByText('more_vert');
    expect(revealIcon).toHaveClass('material-icons', 'right');

    const reveal = container.querySelector('.card > .card-reveal');
    const revealTitle = reveal.querySelector('.card-title');
    expect(revealTitle).toHaveTextContent('card title');
    expect(within(revealTitle).getByText('close')).toHaveClass(
      'material-icons',
      'right'
    );
    expect(within(reveal).getByText('Revealed text')).toBeInTheDocument();
  });

  test('accepts custom reveal and close icons', () => {
    const { container } = render(
      <Card
        title="card title"
        reveal={<p>Revealed text</p>}
        revealIcon={<Icon>expand_more</Icon>}
        closeIcon={<Icon>clear</Icon>}
      >
        Body
      </Card>
    );

    expect(
      within(container.querySelector('.card-content')).getByText('expand_more')
    ).toHaveClass('right');
    expect(
      within(container.querySelector('.card-reveal')).getByText('clear')
    ).toHaveClass('right');
    expect(screen.queryByText('more_vert')).toBeNull();
    expect(screen.queryByText('close')).toBeNull();
  });

  test('wraps content in card-stacked when horizontal', () => {
    const { container } = render(
      <Card
        horizontal
        title="card title"
        header={<div className="card-image">header</div>}
        actions={[
          <a key="1" href="#one">
            One
          </a>
        ]}
      >
        Body
      </Card>
    );
    const card = container.firstChild;

    expect(card).toHaveClass('card', 'horizontal');
    expect(card.firstChild).toBe(screen.getByText('header'));

    const stacked = card.querySelector(':scope > .card-stacked');
    expect(stacked).toBeInTheDocument();
    expect(stacked.querySelector(':scope > .card-content')).toBeInTheDocument();
    expect(stacked.querySelector(':scope > .card-action')).toBeInTheDocument();
    expect(card.querySelector(':scope > .card-content')).toBeNull();
  });
});
