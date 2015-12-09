import React from 'react';
import cx from 'classnames';
import Icon from './Icon';
import PaginationButton from './PaginationButton';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activePage: this.props.activePage};
    this.renderButtons = this.renderButtons.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  render() {
    return (
      <ul className={cx('pagination', this.props.className)}> {this.renderButtons()} </ul>
    );
  }

  _onClick(i) {
    return () => {
      this.setState({activePage: i});
      if (typeof this.props.onSelect === 'function')
        this.props.onSelect(i);
    }
  }

  renderButtons() {
    let {items, maxButtons, onSelect, children, ...props} = this.props;
    let activePage = this.state.activePage;
    if (typeof chidlren !== 'undefined') return children;
    if (typeof maxButtons === 'undefined') maxButtons = items;
    maxButtons = Math.min(maxButtons, items);
    let buttons = [];
    let hiddenPagesBefore = activePage - parseInt(maxButtons / 2, 10);
    let startPage = Math.max(hiddenPagesBefore, 1);
    let endPage = Math.min(items, startPage + maxButtons - 1);
    buttons.push(
      <PaginationButton key={0} disabled={startPage == 1} onSelect={this._onClick(activePage - 1)}>
        <Icon>chevron_left</Icon>
      </PaginationButton>
    );
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PaginationButton key={i} onSelect={this._onClick(i)} active={i == this.state.activePage}>
          {i}
        </PaginationButton>
      );
    }
    buttons.push(
      <PaginationButton key={items + 1} disabled={endPage == items} onSelect={this._onClick(activePage + 1)}>
        <Icon>chevron_right</Icon>
      </PaginationButton>
    );
    return buttons;
  }
}

Pagination.propTypes = {
  activePage: React.PropTypes.number,
  items: React.PropTypes.number.isRequired,
  maxButtons: React.PropTypes.number,
  onSelect: React.PropTypes.func,
};

Pagination.defaultProps = {
  activePage: 1,
  items: 10,
}

export default Pagination;
