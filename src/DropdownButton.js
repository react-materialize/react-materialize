import React from 'react';
import uuid from 'node-uuid';
import DropdownContent from './DropdownContent';

class DropdownButton extends React.Component {
  componentDidMount() {
    renderDropdown();
  }
  render() {
    let id = uuid.v1();
    return (
      <a className='dropdown-button btn' href='#' data-activates={id}>{this.props.title}</a>

    );
  }

  renderDropdown() {
    return (
      <DropdownContent id={id}>
        {this.props.children}
      </DropdownContent>
    )
  }
}

DropdownButton.propTypes = {
  // The text of the trigger button
  title: React.PropTypes.string,
};

export default DropdownButton;
