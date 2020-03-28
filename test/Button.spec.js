import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../src/Button';
import mocker from './helper/new-mocker';

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button waves="light">Stuff</Button>);
  });

  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should output a button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });

  test('should output a component with btn class', () => {
    expect(wrapper.find('.btn')).toHaveLength(1);
  });

  test('should apply waves', () => {
    expect(wrapper.find('.waves-effect')).toHaveLength(1);
  });

  test('should apply large styles', () => {
    wrapper = shallow(<Button large>Stuff</Button>);
    expect(wrapper.find('.btn-large')).toHaveLength(1);
  });

  test('should apply small styles', () => {
    wrapper = shallow(<Button small>Stuff</Button>);
    expect(wrapper.find('.btn-small')).toHaveLength(1);
  });

  test('should apply floating styles', () => {
    wrapper = shallow(<Button floating>Stuff</Button>);
    expect(wrapper.find('.btn-floating')).toHaveLength(1);
  });

  test('should apply flat styles', () => {
    wrapper = shallow(<Button flat>Stuff</Button>);
    expect(wrapper.find('.btn-flat')).toHaveLength(1);
  });

  test('should apply FAB hover', () => {
    wrapper = shallow(<Button fab>Stuff</Button>);
    wrapper.simulate('hover');
    expect(wrapper.find('.fixed-action-btn active'));
  });

  test('should apply FAB click-only', () => {
    wrapper = shallow(
      <Button fab fabOptions={{ hoverEnabled: false }}>
        Stuff
      </Button>
    );
    wrapper.simulate('click');
    expect(wrapper.find('.fixed-action-btn active'));
  });

  describe('with a disabled prop', () => {
    let wrapper = mount(<Button disabled>Stuff</Button>);
    test('should have a disabled class', () => {
      expect(wrapper.find('.disabled')).toHaveLength(1);
    });

    test('should have a disabled attribute', () => {
      expect(wrapper.prop('disabled')).toEqual(true);
    });
  });

  describe('with a tooltip', () => {
    const tooltipInitMock = jest.fn();
    const tooltipInstanceDestroyMock = jest.fn();
    const tooltipMock = {
      init: (el, options) => {
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
    });

    afterAll(() => {
      restore();
    });

    test('initializes Button with tooltip', () => {
      wrapper = mount(<Button tooltip={tooltip}>Stuff</Button>);
      expect(tooltipInitMock).toHaveBeenCalled();
    });

    test('initializes Button with tooltip options', () => {
      wrapper = mount(
        <Button tooltip={tooltip} tooltipOptions={tooltipOptions}>
          Stuff
        </Button>
      );
      expect(tooltipInitMock).toHaveBeenCalledWith(tooltipOptions);
    });

    test('destroyed when unmounted', () => {
      wrapper = mount(<Button tooltip={tooltip}>Stuff</Button>);
      wrapper.unmount();
      expect(tooltipInstanceDestroyMock).toHaveBeenCalled();
    });
  });

  describe('with fixed action button', () => {
    const fabInitMock = jest.fn();
    const fabInstanceDestroyMock = jest.fn();
    const fabMock = {
      init: (el, options) => {
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
    let wrapper;
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
      wrapper = mount(FabButton());
      expect(fabInitMock).toHaveBeenCalled();
    });
    test('initializes FloatingActionButton with fab options', () => {
      wrapper = mount(FabButton(fabOptions));
      expect(fabInitMock).toHaveBeenCalledWith(fabOptions);
    });
    test('destroys FloatingActionButton instance when unmounted', () => {
      wrapper = mount(FabButton());
      wrapper.unmount();
      expect(fabInstanceDestroyMock).toHaveBeenCalled();
    });
    test('renders FloatingActionButton with passed styles', () => {
      const style = { bottom: '45px', right: '24px' };
      wrapper = shallow(FabButton(true, style));
      expect(Object.keys(wrapper.props().style).length).toBeGreaterThan(0);
    });
  });
});
