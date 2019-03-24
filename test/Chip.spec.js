import React from 'react';
import { shallow, mount } from 'enzyme';
import Chip from '../src/Chip';
import Icon from '../src/Icon';
import mocker from './helper/new-mocker';

describe('<Chip />', () => {
  let wrapper;

  test('should render', () => {
    wrapper = shallow(<Chip />);
    expect(wrapper).toMatchSnapshot();
  });

  test('accepts a close prop', () => {
    wrapper = shallow(<Chip close />);
    expect(wrapper.find(Icon)).toHaveLength(1);
  });

  test('accepts children', () => {
    let child = <p className="child">Child</p>;
    wrapper = shallow(<Chip close>{child}</Chip>);
    expect(wrapper).toMatchSnapshot();
  });

  test('accepts className', () => {
    wrapper = shallow(<Chip className="find" />);
    expect(wrapper.hasClass('find')).toBeTruthy();
  });

  describe('initialises', () => {
    const chipInitMock = jest.fn();
    const chipInstanceDestroyMock = jest.fn();
    const chipMock = {
      init: (el, options) => {
        chipInitMock(options);
        return {
          destroy: chipInstanceDestroyMock
        };
      }
    };
    const restore = mocker('Chips', chipMock);

    beforeEach(() => {
      chipInitMock.mockClear();
      chipInstanceDestroyMock.mockClear();
    });

    afterAll(() => {
      restore();
    });

    test('calls Chips', () => {
      const options = {
        data: [
          {
            tag: 'Apple'
          },
          {
            tag: 'Microsoft'
          },
          {
            tag: 'Google'
          }
        ],
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
        autocompleteOptions: {
          data: {
            Apple: null,
            Microsoft: null,
            Google: null
          },
          limit: Infinity
        }
      };

      mount(<Chip options={options} />);

      expect(chipInitMock).toHaveBeenCalledWith(options);
    });
  });
});
