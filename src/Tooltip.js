/**
 * Created by madmax on 10.01.17.
 */
import React from 'react';

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

    const tooltipProps = {
      'data-tooltip': tooltip,
      'data-delay': delay,
      'data-position': position
    };

    return React.createElement(
          children.type,
          {...newProps, ...tooltipProps, 'ref': (obj) => { this._tooltipped = obj; }},
          children
        );
  }
}

Tooltip.propTypes = {
  'children': React.PropTypes.element.isRequired,

  'tooltip': React.PropTypes.string,
  'delay': React.PropTypes.number,
  'position': React.PropTypes.string
};

Tooltip.defaultProps = {
  'delay': 2000,
  'position': 'bottom'
};

export default Tooltip;
