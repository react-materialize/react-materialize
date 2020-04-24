import React from 'react';
import { render } from '@testing-library/react';
import Switch from '../src/Switch';

describe('<Switch />', () => {
  test('renders', () => {
    const { container } = render(<Switch offLabel="Off" onLabel="On" />);

    expect(container).toMatchSnapshot();
  });
});
