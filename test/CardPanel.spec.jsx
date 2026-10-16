import { render, screen } from '@testing-library/react';
import CardPanel from '../src/CardPanel';

describe('<CardPanel />', () => {
  test('renders children inside a card-panel', () => {
    const { container } = render(
      <CardPanel className="blue-grey" data-testid="panel">
        I am a very simple card
      </CardPanel>
    );
    const panel = screen.getByTestId('panel');

    expect(container.firstChild).toBe(panel);
    expect(panel.tagName).toBe('DIV');
    expect(panel).toHaveClass('card-panel', 'blue-grey');
    expect(panel).toHaveTextContent('I am a very simple card');
  });

  test('renders only the card-panel class by default', () => {
    const { container } = render(<CardPanel>Body</CardPanel>);

    expect(container.firstChild).toHaveClass('card-panel', { exact: true });
  });
});
