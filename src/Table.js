import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Table extends Component {
  render() {
    const {
      centered,
      children,
      className,
      hoverable,
      responsive,
      striped,
      ...props
    } = this.props;

    const classes = {
      centered: centered,
      highlight: hoverable,
      'responsive-table': responsive,
      striped: striped
    };

    return (
      <table className={cx(classes, className)} {...props}>
        {children}
      </table>
    );
  }
}

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * Center align all the text in the table
   * @default false
   */
  centered: PropTypes.bool,
  /**
   * Highlight the row that's hovered
   * @default false
   */
  hoverable: PropTypes.bool,
  /**
   * Enable response to make the table horizontally scrollable on smaller screens
   * @default false
   */
  responsive: PropTypes.bool,
  /**
   * striped style
   * @default false
   */
  striped: PropTypes.bool
};

export default Table;
