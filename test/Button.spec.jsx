import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../src/Button';
import mocker from './helper/new-mocker';

describe('Button', () => {
  test('renders', () => {
    const { container } = render(<Button waves="light">Stuff</Button>);
    expect(
      container.querySelector('button.btn.waves-effect.waves-light')
    ).toBeTruthy();
  });

  test('should apply large styles', () => {
    const { container } = render(<Button large>Stuff</Button>);
    expect(container.querySelector('button.btn-large')).toBeTruthy();
  });

  test('should apply small styles', () => {
    const { container } = render(<Button small>Stuff</Button>);
    expect(container.querySelector('button.btn-small')).toBeTruthy();
  });

  test('should apply floating styles', () => {
    const { container } = render(<Button floating>Stuff</Button>);
    expect(container.querySelector('button.btn-floating')).toBeTruthy();
  });

  test('should apply flat styles', () => {
    const { container } = render(<Button flat>Stuff</Button>);
    expect(container.querySelector('button.btn-flat')).toBeTruthy();
  });

  test('should apply FAB hover', () => {
    const baseClass = '.fixed-action-btn';
    const { container } = render(<Button fab>Stuff</Button>);

    const selector = container.querySelector(baseClass);
    expect(selector).toBeTruthy();

    fireEvent.mouseEnter(selector);
    expect(`${baseClass}.active`).toBeTruthy();
  });

  test('accepts FAB as object', () => {
    const baseClass = '.fixed-action-btn';
    const { container } = render(
      <Button fab={{ hoverEnabled: false }}>Stuff</Button>
    );

    const selector = container.querySelector(baseClass);
    expect(selector).toBeTruthy();

    fireEvent.click(selector);
    expect(`${baseClass}.active`).toBeTruthy();
  });

  describe('with a disabled prop', () => {
    test('should have a disabled class', () => {
      const { container } = render(<Button disabled>Stuff</Button>);
      expect(container.querySelector('.btn.disabled')).toBeTruthy();
    });

    test('should have a disabled attribute', () => {
      const { getByText } = render(<Button disabled>Stuff</Button>);
      expect(getByText('Stuff').closest('button').disabled).toBeTruthy();
    });
  });

  describe('with a tooltip', () => {
    const tooltipInitMock = jest.fn();
    const tooltipInstanceDestroyMock = jest.fn();
    const tooltipMock = {
      init: (_, options) => {
        tooltipInitMock(options);
        return {
          destroy: tooltipInstanceDestroyMock
        };
      }
    };
    const restore = mocker('Tooltip', tooltipMock);
    const tooltip = 'Hello';
    const tooltipOptions = {
      position: 'top',
      delay: 50
    };

    beforeEach(() => {
      tooltipInitMock.mockClear();
      tooltipInstanceDestroyMock.mockClear();
    });

    afterAll(() => {
      restore();
    });

    test('initializes Button with tooltip', () => {
      render(<Button tooltip={tooltip}>Stuff</Button>);
      expect(tooltipInitMock).toBeCalled();
    });

    test('initializes Button with tooltip options', () => {
      render(
        <Button tooltip={tooltip} tooltipOptions={tooltipOptions}>
          Stuff
        </Button>
      );

      expect(tooltipInitMock).toHaveBeenCalledWith(tooltipOptions);
    });

    test('destroyed when unmounted', () => {
      const { unmount } = render(<Button tooltip={tooltip}>Stuff</Button>);
      unmount();

      expect(tooltipInstanceDestroyMock).toHaveBeenCalled();
    });
  });

  describe('with fixed action button', () => {
    const fabInitMock = jest.fn();
    const fabInstanceDestroyMock = jest.fn();
    const fabMock = {
      init: (_, options) => {
        fabInitMock(options);
        return {
          destroy: fabInstanceDestroyMock
        };
      }
    };
    const restore = mocker('FloatingActionButton', fabMock);
    const fabOptions = {
      direction: 'left',
      hoverEnabled: false,
      toolbarEnabled: true
    };
    const FabButton = (fabOptions = true, style = {}) => (
      <Button floating fab={fabOptions} className="red" large style={style}>
        <Button floating icon="insert_chart" className="red" />
        <Button floating icon="format_quote" className="yellow darken-1" />
        <Button floating icon="publish" className="green" />
        <Button floating icon="attach_file" className="blue" />
      </Button>
    );

    beforeEach(() => {
      fabInitMock.mockClear();
    });

    afterAll(() => {
      restore();
    });

    test('initializes FloatingActionButton instance', () => {
      render(FabButton());
      expect(fabInitMock).toBeCalled();
    });

    test('initializes FloatingActionButton with fab options', () => {
      render(FabButton(fabOptions));
      expect(fabInitMock).toHaveBeenCalledWith(fabOptions);
    });

    test('destroys FloatingActionButton instance when unmounted', () => {
      const { unmount } = render(FabButton());
      unmount();

      expect(fabInstanceDestroyMock).toHaveBeenCalled();
    });
  });
});
