import React from 'react';
import { render } from '@testing-library/react';
import Table from '../src/Table';

describe('<Table />', () => {
  test('renders', () => {
    const { container } = render(
      <Table centered hoverable responsive striped>
        <tbody>
          <tr>
            <td>foo</td>
            <td>bar</td>
          </tr>
        </tbody>
      </Table>
    );

    expect(container).toMatchSnapshot();
  });
});
