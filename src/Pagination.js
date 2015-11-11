import React from 'react';
import Icon from './Icon';
import PaginationButton from './PaginationButton';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activePage: 1};
  }

  render() {
    let {items, activePage, onSelect, ...props} = this.props;
    this.state.activePage = activePage;
    let buttons = [];
    buttons.push(
      <li className="waves-effect"><a href="#!"><Icon>chevron_left</Icon></a></li>
    );
    for (let i = 1; i <= items; i++) {
      buttons.push(<PaginationButton active={i == this.state.activePage}>{i}</PaginationButton>);
    }
    buttons.push(
      <li className="waves-effect"><a href="#!"><Icon>chevron_right</Icon></a></li>
    );
    return (
      <ul className="pagination"> {buttons} </ul>
    );
  }
}

Pagination.propTypes = {
  items: React.PropTypes.number.isRequired,
  activePage: React.PropTypes.number,
  onSelect: React.PropTypes.func,
};

export default Pagination;
