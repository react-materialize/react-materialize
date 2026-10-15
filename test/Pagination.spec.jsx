import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '../src/Pagination';

const getItems = () => screen.getAllByRole('listitem');
const getPage = label => screen.getByText(String(label)).closest('li');
const pageLabels = () => getItems().map(item => item.textContent);

describe('<Pagination />', () => {
  const onSelect = vi.fn();

  beforeEach(() => {
    onSelect.mockClear();
  });

  test('renders previous, page and next buttons in a pagination list', () => {
    render(
      <Pagination items={10} activePage={2} maxButtons={6} className="custom" />
    );

    const list = screen.getByRole('list');
    expect(list).toHaveClass('pagination', 'custom');
    expect(pageLabels()).toEqual([
      'chevron_left',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      'chevron_right'
    ]);

    const items = getItems();
    expect(within(items[0]).getByText('chevron_left')).toHaveClass(
      'material-icons'
    );
    expect(within(items[7]).getByText('chevron_right')).toHaveClass(
      'material-icons'
    );
  });

  test('marks the active page', () => {
    render(<Pagination items={10} activePage={2} maxButtons={6} />);

    const items = getItems();
    expect(items[2]).toHaveTextContent('2');
    expect(items[2]).toHaveClass('active', 'waves-effect');
    for (const item of items.filter((_, i) => i !== 2)) {
      expect(item).not.toHaveClass('active');
    }
  });

  test('disables the previous button on the first page', () => {
    render(<Pagination items={10} activePage={1} />);

    const items = getItems();
    expect(items[0]).toHaveClass('disabled');
    expect(items[0]).not.toHaveClass('waves-effect');
    expect(items.at(-1)).not.toHaveClass('disabled');
    expect(items.at(-1)).toHaveClass('waves-effect');
  });

  test('disables the next button on the last page', () => {
    render(<Pagination items={10} activePage={10} />);

    const items = getItems();
    expect(items.at(-1)).toHaveClass('disabled');
    expect(items[0]).not.toHaveClass('disabled');
  });

  test('renders all pages when maxButtons is not given', () => {
    render(<Pagination items={4} />);

    expect(pageLabels()).toEqual([
      'chevron_left',
      '1',
      '2',
      '3',
      '4',
      'chevron_right'
    ]);
    expect(getPage(1)).toHaveClass('active');
  });

  test('centers the visible page window around the active page', () => {
    render(<Pagination items={10} activePage={5} maxButtons={5} />);

    expect(pageLabels().slice(1, -1)).toEqual(['3', '4', '5', '6', '7']);
  });

  test('clamps the visible page window to the last pages', () => {
    render(<Pagination items={10} activePage={9} maxButtons={5} />);

    expect(pageLabels().slice(1, -1)).toEqual(['6', '7', '8', '9', '10']);
  });

  test('calls onSelect and activates the clicked page', async () => {
    const user = userEvent.setup();
    render(
      <Pagination
        items={10}
        activePage={2}
        maxButtons={6}
        onSelect={onSelect}
      />
    );

    await user.click(screen.getByText('5'));

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(5);
    expect(getPage(5)).toHaveClass('active');
    expect(getPage(2)).not.toHaveClass('active');
  });

  test('previous and next buttons select the adjacent page', async () => {
    const user = userEvent.setup();
    render(<Pagination items={10} activePage={2} onSelect={onSelect} />);

    await user.click(screen.getByText('chevron_right'));
    expect(onSelect).toHaveBeenLastCalledWith(3);
    expect(getPage(3)).toHaveClass('active');

    await user.click(screen.getByText('chevron_left'));
    await user.click(screen.getByText('chevron_left'));
    expect(onSelect).toHaveBeenCalledTimes(3);
    expect(onSelect).toHaveBeenLastCalledWith(1);
    expect(getPage(1)).toHaveClass('active');
  });

  test('does not select a page outside of the range', async () => {
    const user = userEvent.setup();
    render(<Pagination items={3} activePage={1} onSelect={onSelect} />);

    await user.click(screen.getByText('chevron_left'));

    expect(onSelect).not.toHaveBeenCalled();
    expect(getPage(1)).toHaveClass('active');
  });

  test('works without an onSelect handler', async () => {
    const user = userEvent.setup();
    render(<Pagination items={3} activePage={1} />);

    await user.click(screen.getByText('3'));

    expect(getPage(3)).toHaveClass('active');
  });

  test('follows activePage prop changes', () => {
    const { rerender } = render(<Pagination items={10} activePage={2} />);
    rerender(<Pagination items={10} activePage={4} />);

    expect(getPage(4)).toHaveClass('active');
    expect(getPage(2)).not.toHaveClass('active');
  });

  test('renders custom previous and next buttons', () => {
    render(
      <Pagination
        items={3}
        leftBtn={<span>Prev</span>}
        rightBtn={<span>Next</span>}
      />
    );

    expect(pageLabels()).toEqual(['Prev', '1', '2', '3', 'Next']);
  });

  test('renders children instead of generated buttons', () => {
    render(
      <Pagination items={10}>
        <li className="custom-page">custom</li>
      </Pagination>
    );

    const items = getItems();
    expect(items).toHaveLength(1);
    expect(items[0]).toHaveClass('custom-page');
  });
});
