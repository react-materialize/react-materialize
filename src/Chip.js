import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Chip extends Component {
  componentDidMount() {
    const { options } = this.props;

    if (options && M) {
      this.instance = M.Chips.init(this._chips, options);
    }
  }

  componentWillUnmount() {
    this.instance && this.instance.destroy();
  }

  render() {
    const { children, close, className, options } = this.props;
    const classes = cx(
      {
        chip: !options,
        chips: options
      },
      className
    );
    let chipContent = (
      <React.Fragment>
        {children}
        {close ? <i className="close material-icons">close</i> : null}{' '}
      </React.Fragment>
    );

    if (options) {
      chipContent = null;
    }

    return (
      <div
        className={classes}
        {...this.props}
        ref={div => {
          this._chips = div;
        }}
      >
        {chipContent}
      </div>
    );
  }
}

Chip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * Shows a close icon
   */
  close: PropTypes.bool,
  options: PropTypes.shape({
    /**
     * Set the chip data
     */
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    /**
     * Set first placeholder when there are no tags.
     */
    placeholder: PropTypes.string,
    /**
     * Set second placeholder when adding additional tags.
     */
    secondaryPlaceholder: PropTypes.string,
    /**
     * Set autocomplete options.
     */
    autocompleteOptions: PropTypes.objectOf(PropTypes.object),
    /**
     * Set chips limit.
     */
    limit: PropTypes.number,
    /**
     * Callback for chip add.
     */
    onChipAdd: PropTypes.func,
    /**
     * Callback for chip select.
     */
    onChipSelect: PropTypes.func,
    /**
     * Callback for chip delete.
     */
    onChipDelete: PropTypes.func
  })
};

Chip.defaultProps = {
  close: false
};

export default Chip;
