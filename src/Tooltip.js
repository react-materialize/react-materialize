/**
 * Created by madmax on 10.01.17.
 */
import React from 'react';
import cx from 'classnames';

class Tooltip extends React.Component {
  componentDidMount () {
    if (jQuery !== undefined) {
      jQuery(React.findDOMNode(this._tooltipped)).tooltip();
    }
  }

  render () {
    const {
          tooltip,
          delay,
          position,
          children,
          ...newProps
        } = this.props;

    const childClassName = children.props.className;

    return React.cloneElement(
      children,
      {
        'className': cx(childClassName, {'tooltipped': true}),
        'data-position': position,
        'data-delay': delay,
        'data-tooltip': tooltip,
        'ref': (obj) => { this._tooltipped = obj; },
        ...newProps
      }
    );
  }
}

Tooltip.propTypes = {
  'children': React.PropTypes.element.isRequired,

  'tooltip': React.PropTypes.string,
  'delay': React.PropTypes.number,
  'position': React.PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};

Tooltip.defaultProps = {
  'delay': 2000,
  'position': 'bottom'
};

export default Tooltip;
