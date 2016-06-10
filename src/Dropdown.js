import React, { Component, PropTypes } from 'react';
import idgen from './idgen';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.renderTrigger = this.renderTrigger.bind(this);
  }

  componentDidMount() {
    const options = this.props.options || {};

    $(this._trigger).dropdown(options);
  }

  componentWillUnmount() {
    $(this._trigger).off();
  }

  render() {
    const { children, ...props } = this.props;
    this.idx = 'dropdown_' + idgen();

    return (
      <span>
        { this.renderTrigger() }
        <ul {...props} className='dropdown-content' id={ this.idx }>
          { children }
        </ul>
      </span>
    );
  }

  renderTrigger() {
    const { trigger } = this.props;

    return React.cloneElement( trigger, {
      ref: (t) => this._trigger = t,
      className: 'dropdown-button',
      'data-activates': this.idx
    });
  }
}

Dropdown.propTypes = {
  /**
   * The button to trigger the dropdown
   */
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node,
  /**
   * Options hash for the dropdown
   * more info: http://materializecss.com/dropdown.html#options
   */
  options: PropTypes.shape({
    inDuration: PropTypes.number,
    outDuration: PropTypes.number,
    constrain_width: PropTypes.bool,
    hover: PropTypes.bool,
    gutter: PropTypes.number,
    belowOrigin: PropTypes.bool,
    alignment: PropTypes.oneOf(['left', 'right'])
  })
};

export default Dropdown;
