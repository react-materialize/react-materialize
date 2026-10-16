import { render } from '@testing-library/react';
import Divider from '../src/Divider';

describe('<Divider />', () => {
  test('renders a divider', () => {
    const { container } = render(<Divider />);
    expect(container.childNodes).toHaveLength(1);
    const divider = container.firstChild;
    expect(divider.tagName).toBe('DIV');
    expect(divider.className).toBe('divider');
  });

  test('does not contain children', () => {
    const { container } = render(
      <Divider>
        <p>nope</p>
      </Divider>
    );
    expect(container.querySelector('.divider')).toBeEmptyDOMElement();
  });
});
