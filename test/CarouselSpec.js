/* global describe, it, expect, context, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Carousel from '../src/Carousel';

const renderer = (props, action = 'shallow') => {
  const actions = { 'shallow': shallow, 'mount': mount };
  return actions[action](<Carousel {...props} />);
};

describe('<Carousel />', () => {
  let wrapper;
  const carouselStub = sinon.stub($.fn, 'carousel');
  const images = [
    'https://lorempixel.com/250/250/nature/1',
    'https://lorempixel.com/250/250/nature/2',
    'https://lorempixel.com/250/250/nature/3',
    'https://lorempixel.com/250/250/nature/4'
  ];

  it('renders', () => {
    wrapper = renderer({ images });
    expect(wrapper.find('.carousel').length).to.eq(1);
    expect(wrapper.find('a.carousel-item').length).to.eq(4);
    expect(wrapper.find('a.carousel-item').last().find('img').props().src).to.eq(images[images.length - 1]);
  });

  it('handles full width sliders', () => {
    wrapper = renderer({ images, options: { fullWidth: true } }, 'mount');
    expect(wrapper.find('.carousel.carousel-slider').length).to.eq(1);
    expect(carouselStub).to.have.been.calledWithExactly({ fullWidth: true });
  });

  it('renders fixed items', () => {
    const fixedItem = <span>Do you rock!?</span>;
    wrapper = renderer({ images, fixedItem });
    expect(wrapper.find('.carousel-fixed-item').length).to.eq(1);
    expect(wrapper.find('.carousel-fixed-item').childAt(0).matchesElement(fixedItem)).to.eql(true);
  });

  it('handles content slides', () => {
    const child = <div className='red'><h2>First Panel</h2><p>This is your first panel</p></div>;
    wrapper = renderer({ children: child });
    expect(wrapper.find('.carousel-item.red').length).to.eq(1);
  });

  it('accepts className props', () => {
    wrapper = renderer({ images, className: 'center' });
    expect(wrapper.find('.carousel.center').length).to.eq(1);
  });

  it('accepts external `id` value', () => {
    const id = 'i-am-id';
    wrapper = renderer({ images, carouselId: id });
    expect(wrapper.props().id).to.eq(id);
    expect(typeof $(`#${id}`).carousel).to.eq('function');
  });

  context('on mount', () => {
    const options = { padding: 12, fullWidth: true, indicators: false };

    beforeEach(() => {
      wrapper = renderer({ images, options }, 'mount');
    });

    it('initializes', () => {
      expect(carouselStub).to.have.been.called;
    });

    it('initializes with options', () => {
      expect(carouselStub).to.have.been.calledWithExactly(options);
    });
  });
});
