import { render, screen } from '@testing-library/react';
import MediaBox from '../src/MediaBox';
import idgen from '../src/idgen';
import mocker from './helper/new-mocker';

describe('<MediaBox />', () => {
  const image = <img src="image.jpg" alt="demo" />;
  const destroyMock = vi.fn();
  const initMock = vi.fn(() => ({ destroy: destroyMock }));
  let restore;

  const renderMediaBox = props =>
    render(
      <MediaBox
        className="more"
        caption="A demo media box1"
        width="650"
        {...props}
      >
        <img src="image.jpg" alt="demo" />
      </MediaBox>
    );

  beforeEach(() => {
    initMock.mockClear();
    destroyMock.mockClear();
    restore = mocker('Materialbox', { init: initMock });
  });

  afterEach(() => {
    restore();
  });

  test('renders the child image as a materialboxed element', () => {
    const { container } = renderMediaBox();
    const img = screen.getByRole('img', { name: 'demo' });

    expect(container.firstChild).toBe(img);
    expect(img).toHaveAttribute('src', 'image.jpg');
    expect(img).toHaveClass('materialboxed', 'more');
    expect(img).toHaveAttribute('data-caption', 'A demo media box1');
    expect(img).toHaveAttribute('width', '650');
    expect(img).toHaveAttribute('id', 'MediaBox_mockId');
  });

  test('accepts an external `id`', () => {
    renderMediaBox({ id: 'custom' });

    expect(screen.getByRole('img')).toHaveAttribute('id', 'custom');
  });

  describe('initialises', () => {
    test('calls Materialbox on the child element', () => {
      renderMediaBox();

      expect(initMock.mock.lastCall[0]).toBe(screen.getByRole('img'));
    });

    test('uses default options if none are given', () => {
      renderMediaBox();

      expect(initMock).toHaveBeenCalledWith(screen.getByRole('img'), {
        inDuration: 275,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null
      });
    });

    test('calls Materialbox with options', () => {
      const options = {
        inDuration: 325,
        outDuration: 250
      };
      renderMediaBox({ options });

      expect(initMock).toHaveBeenCalledWith(screen.getByRole('img'), options);
    });

    test('destroys the instance on unmount', () => {
      const { unmount } = renderMediaBox();
      destroyMock.mockClear();

      unmount();

      expect(destroyMock).toHaveBeenCalledTimes(1);
    });
  });

  test('keeps its generated id across re-renders', () => {
    let n = 0;
    idgen.mockImplementation(() => n++);
    try {
      const { rerender } = render(<MediaBox>{image}</MediaBox>);
      const before = screen.getByRole('img').id;
      rerender(<MediaBox>{image}</MediaBox>);
      expect(screen.getByRole('img').id).toBe(before);
    } finally {
      idgen.mockImplementation(() => 'mockId');
    }
  });

  test('does not re-initialise when re-rendered with the same props', () => {
    const { rerender } = render(<MediaBox>{image}</MediaBox>);
    initMock.mockClear();
    rerender(<MediaBox>{image}</MediaBox>);

    expect(initMock).not.toHaveBeenCalled();
  });
});

describe('<MediaBox /> with the Materialize plugin', () => {
  test('unwraps the image before React removes it on unmount', () => {
    const { container, unmount } = render(
      <MediaBox>
        <img src="image.jpg" alt="demo" />
      </MediaBox>
    );
    expect(screen.getByRole('img').parentElement).toHaveClass(
      'material-placeholder'
    );

    unmount();

    expect(container).toBeEmptyDOMElement();
  });
});
