import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Tooltip extends Component {
  componentDidMount () {
    $('.tooltipped').tooltip();
  }

  componentWillUnmount () {
    $('.tooltipped').tooltip('remove');
  }

  render () {
    const {
      children,
      tooltip,
      delay,
      position,
      html
    } = this.props;

    return React.cloneElement(children, {
      'data-tooltip': tooltip,
      'data-delay': delay,
      'data-position': position,
      'data-html': html,
      className: cx(children.props.className, 'tooltipped')
    });
  }
}

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  tooltip: PropTypes.string.isRequired,
  delay: PropTypes.number,
  html: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};

Tooltip.defaultProps = {
  delay: 350,
  position: 'bottom',
  html: false
};

export default Tooltip;
