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
    const { trigger, beloworigin } = this.props;

    return React.cloneElement( trigger, {
      ref: (t) => this._trigger = t,
      className: 'dropdown-button',
      'data-beloworigin': beloworigin,
      'data-activates': this.idx
    });
  }
}

Dropdown.propTypes = {
  /**
   * The button to trigger the dropdown
   */
  trigger: PropTypes.node.isRequired,
  /**
   * 	If true, the dropdown will show below the activator. Default: true
   */
  beloworigin: PropTypes.bool,
  children: PropTypes.node,
  /**
   * Options hash for the dropdown
   */
  options: PropTypes.object
};

Dropdown.defaultProps = {
  beloworigin: true
};

export default Dropdown;
