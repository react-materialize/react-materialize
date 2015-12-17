import React from 'react';
import idgen from './idgen';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.renderTrigger = this.renderTrigger.bind(this);
  }

  render() {
    let {trigger, children, ...props} = this.props;
    let idx = 'dropdown_' + idgen();
    return (
      <span>
        {this.renderTrigger(idx)}
        <ul className='dropdown-content' id={idx}>
          {children}
        </ul>
      </span>
    )
  }

  renderTrigger(idx) {
    let trigger = this.props.trigger;
    return React.cloneElement(trigger,
      {
        className: 'dropdown-button',
        'data-beloworigin': true,
        'data-activates': idx
      }
    );
  }
}

Dropdown.propTypes = {
  /**
   * The button to trigger the dropdown
   */
  trigger: React.PropTypes.node.isRequired,
  /**
   * 	If true, the dropdown will show over the activator. Default: false
   */
  overorigin: React.PropTypes.bool,
};

Dropdown.defaultProps = {
  overorigin: false,
}

export default Dropdown;
