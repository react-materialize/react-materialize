import React from 'react';
import { shallow, mount } from 'enzyme';
import Navbar from '../src/Navbar';
import mocker from './helper/new-mocker';

describe('<Navbar />', () => {
  let wrapper;
  const sidenavInitMock = jest.fn();
  const sidenavInstanceDestroyMock = jest.fn();
  const sidenavMock = {
    init: (el, options) => {
      sidenavInitMock(options);
      return {
        destroy: sidenavInstanceDestroyMock
      };
    }
  };
  const restore = mocker('Sidenav', sidenavMock);

  beforeEach(() => {
    sidenavInitMock.mockClear();
    sidenavInstanceDestroyMock.mockClear();
  });

  afterAll(() => {
    restore();
  });

  test('renders', () => {
    wrapper = shallow(
      <Navbar brand={<a href="/">Logo</a>} alignLinks="right">
        <a href="get-started.html">Getting started</a>
        <a href="components.html">Components</a>
      </Navbar>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('nav')).toHaveLength(1);
  });

  test('sidenav get initialized with default options if none are given', () => {
    mount(<Navbar />);
    expect(sidenavInitMock).toHaveBeenCalledWith({
      edge: 'left',
      draggable: true,
      inDuration: 250,
      outDuration: 200,
      onOpenStart: null,
      onOpenEnd: null,
      onCloseStart: null,
      onCloseEnd: null,
      preventScrolling: true
    });
  });

  test('can center the brand logo', () => {
    wrapper = shallow(<Navbar brand={<a href="/">Logo</a>} centerLogo />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('a.brand-logo').hasClass('center'));
  });

  test('places brand on right if navbar is left aligned', () => {
    wrapper = shallow(
      <Navbar brand={<a href="/">Logo</a>} alignLinks="left" />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('a.brand-logo').hasClass('right')).toBe(true);
  });

  test('adds a brand node', () => {
    const brandNode = <span className="brando">I AM BRAND</span>;

    wrapper = mount(<Navbar brand={brandNode} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('span.brand-logo.brandp')).toBeTruthy();
  });

  test('can be fixed', () => {
    wrapper = shallow(<Navbar fixed />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar-fixed')).toHaveLength(1);
  });

  test('can be extended with custom elements', () => {
    wrapper = shallow(
      <Navbar
        extendWith={
          <div className="col s12">
            <a href="#!" className="breadcrumb">
              First
            </a>
            <a href="#!" className="breadcrumb">
              Second
            </a>
            <a href="#!" className="breadcrumb">
              Third
            </a>
          </div>
        }
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.breadcrumb')).toHaveLength(3);
  });

  test('can have children with custom ids', () => {
    wrapper = shallow(
      <Navbar>
        <span id="custom-1">Custom 1</span>
        <span id="custom-2">Custom 2</span>
      </Navbar>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('can have custom sidenav', () => {
    wrapper = shallow(
      <Navbar
        brand={<a href="/">Logo</a>}
        alignLinks="left"
        sidenav={<li className="custom-node">Custom node!</li>}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('li').hasClass('custom-node'));
  });
});
