import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';

class Chip extends Component {
  componentDidMount() {
    const { options } = this.props;

    if (options && typeof M !== 'undefined') {
      this.instance = M.Chips.init(this._chips, options);
    }
  }

  componentWillUnmount() {
    this.instance && this.instance.destroy();
  }

  render() {
    const { children, close, className, options, ...other } = this.props;

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
        {close && <Icon>close</Icon>}
      </React.Fragment>
    );

    if (options) {
      chipContent = null;
    }

    delete other.close;

    return (
      <div
        className={classes}
        {...this.other}
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
  /**
   * Options object for the Chip Javascript Plugin
   */
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
    autocompleteOptions: PropTypes.shape({
      /**
       * Data object defining autocomplete options with optional icon strings.
       */
      data: PropTypes.objectOf(PropTypes.string),
      /**
       * Limit of results the autocomplete shows.
       */
      limit: PropTypes.number,
      /**
       * Minimum number of characters before autocomplete starts.
       */
      minLength: PropTypes.number
    }),
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
  close: false,
  options: null
};

export default Chip;
