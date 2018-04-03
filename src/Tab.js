import React from 'react';
import PropTypes from 'prop-types';

// This is just a holder for the props and children for tab, thus
// there is no logic here.
class Tab extends React.Component {
  render() {
    return null;
  }
}

Tab.propTypes = {
  /**
   * The title shown in the tabs list
   */
  title: PropTypes.node.isRequired,
  /**
   * The width of the Tab
   */
  tabWidth: PropTypes.number,
  /**
   * Pre-select the tab
   * @default false
   */
  active: PropTypes.bool,
  /**
   * Disable the tab
   * @default false
   */
  disabled: PropTypes.bool
};

Tab.defaultProps = {
  active: false,
  disabled: false
};

export default Tab;
