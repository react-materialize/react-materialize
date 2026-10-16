import { render, screen } from '@testing-library/react';
import Table from '../src/Table';

const renderTable = props =>
  render(
    <Table {...props}>
      <tbody>
        <tr>
          <td>foo</td>
          <td>bar</td>
        </tr>
      </tbody>
    </Table>
  );

describe('<Table />', () => {
  test('renders a table with its children', () => {
    renderTable();
    const table = screen.getByRole('table');
    expect(table.className).toBe('');
    const cells = screen.getAllByRole('cell');
    expect(cells.map(cell => cell.textContent)).toEqual(['foo', 'bar']);
    for (const cell of cells) {
      expect(table).toContainElement(cell);
    }
  });

  test('applies style classes', () => {
    renderTable({
      centered: true,
      hoverable: true,
      responsive: true,
      striped: true
    });
    expect(screen.getByRole('table')).toHaveClass(
      'centered',
      'highlight',
      'responsive-table',
      'striped'
    );
  });

  test('applies only the requested style class', () => {
    renderTable({ hoverable: true });
    const table = screen.getByRole('table');
    expect(table.className).toBe('highlight');
  });

  test('passes className and other props through', () => {
    renderTable({ className: 'custom', id: 'my-table' });
    const table = screen.getByRole('table');
    expect(table).toHaveClass('custom');
    expect(table).toHaveAttribute('id', 'my-table');
  });
});
