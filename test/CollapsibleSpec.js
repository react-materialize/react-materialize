/* global describe, it */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import Collapsible from '../src/Collapsible';
import CollapsibleItem from '../src/CollapsibleItem';

let wrapper = shallow(
  <Collapsible />
);

describe('<Collapsible />', () => {
  it('should render', () => {
    assert(wrapper.find('.collapsible').length, 'with a collapsible classname');
  });

  it('accepts a popout prop', () => {
    let wrapper = shallow(
      <Collapsible popout />
    );

    assert(wrapper.find('[data-collapsible="expandable"]').length, 'with a data attribute');
  });

  it('accepts a accordion prop', () => {
    let wrapper = shallow(
      <Collapsible accordion />
    );

    assert(wrapper.find('[data-collapsible="accordion"]').length, 'with a data attribute');
  });

  it('should work with null dynamic children', () => {
    let wrapper = mount(
      <Collapsible accordion>
        {null}
        <CollapsibleItem header='First'>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
      </Collapsible>
    );

    assert.strictEqual(wrapper.find('li').length, 1);
  });

  it('should pass the key props to its children', () => {
    let collapsibleChildren = mount(
      <Collapsible accordion>
        <li key='testKey'>
          Lorem ipsum dolor sit amet.
        </li>
      </Collapsible>
    ).find('li');

    // .key() returns `.$testKey`. Don't make future assumptions about
    // how React implements keys -> test that the substring testKey is in there
    assert(collapsibleChildren.at(0).key().indexOf('testKey') >= 0);
  });

  describe('<CollapsibleItem />', () => {
    it('renders', () => {
      let wrapper = mount(
        <Collapsible accordion>
          <CollapsibleItem header='First' icon='filter_drama'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='Second' icon='place'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='Third' icon='whatshot'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
        </Collapsible>
      );

      assert.strictEqual(wrapper.find('div.collapsible-header').length, 3);
    });

    describe('each collapsible item', () => {
      const wrapper = mount(
        <CollapsibleItem header='First' icon='filter_drama' iconClassName='right'>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
      );
      it('accepts icon props', () => {
        assert(wrapper.contains(<i className='material-icons right'>filter_drama</i>), 'with rendered icon');
      });

      it('expands on click', () => {
        const header = wrapper.find('.collapsible-header');
        header.simulate('click');

        assert.equal(wrapper.state('expanded'), true);
        assert(wrapper.find('.collapsible-body').length);
      });
    });
  });
});
