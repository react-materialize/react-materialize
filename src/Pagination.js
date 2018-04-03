import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';
import PaginationButton from './PaginationButton';

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { activePage, items } = props;

    this.state = {
      activePage: activePage > 0 && activePage <= items ? activePage : 1
    };

    this.renderButtons = this.renderButtons.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activePage !== this.props.activePage) {
      this.setState({ activePage: nextProps.activePage });
    }
  }

  _onClick(i) {
    const { items, onSelect } = this.props;

    return () => {
      if (i > 0 && i <= items) {
        if (onSelect) {
          onSelect(i);
        }
        this.setState({ activePage: i });
      }
    };
  }

  renderButtons() {
    const { items, children, maxButtons = items } = this.props;
    const { activePage } = this.state;

    if (children) return children;

    const buttonsCount = Math.min(maxButtons, items);

    const maxPos = items - buttonsCount;
    const halfButtons = parseInt(buttonsCount / 2, 10);

    let hiddenPagesBefore = activePage - halfButtons;
    if (hiddenPagesBefore > maxPos) {
      hiddenPagesBefore = maxPos + 1;
    }

    let from = Math.max(hiddenPagesBefore, 1);
    let to = Math.min(items, from + maxButtons - 1);

    const buttons = [
      <PaginationButton
        disabled={activePage === 1}
        key={'pagination-0'}
        onSelect={this._onClick(activePage - 1)}
      >
        <Icon>chevron_left</Icon>
      </PaginationButton>
    ];

    for (let i = from; i <= to; i++) {
      buttons.push(
        <PaginationButton
          active={i === activePage}
          key={`pagination-${i}`}
          onSelect={this._onClick(i)}
        >
          {i}
        </PaginationButton>
      );
    }

    buttons.push(
      <PaginationButton
        key={`pagination-${items + 1}`}
        disabled={activePage === items}
        onSelect={this._onClick(activePage + 1)}
      >
        <Icon>chevron_right</Icon>
      </PaginationButton>
    );

    return buttons;
  }

  render() {
    return (
      <ul className={cx('pagination', this.props.className)}>
        {this.renderButtons()}
      </ul>
    );
  }
}

Pagination.propTypes = {
  /**
   * Number of items in the component
   */
  items: PropTypes.number.isRequired,
  /**
   * The initial activePage
   */
  activePage: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  maxButtons: PropTypes.number,
  onSelect: PropTypes.func
};

Pagination.defaultProps = {
  activePage: 1,
  items: 10
};

export default Pagination;
