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

      assert.strictEqual(wrapper.find('a.collapsible-header').length, 3);
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
