import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import constants from './constants';
import Icon from './Icon';
import Row from './Row';
import Col from './Col';

class Autocomplete extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: ''
    };

    this.renderIcon = this.renderIcon.bind(this);
    this.renderDropdown = this.renderDropdown.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  renderIcon (icon, iconClassName) {
    return <Icon className={iconClassName}>{icon}</Icon>;
  }

  renderDropdown (data, minLength) {
    const { value } = this.state;

    if (minLength && minLength > value.length || !value) {
      return null;
    }

    return (
      <ul className='autocomplete-content dropdown-content'>
        {Object.keys(data).map((key, idx) => {
          const index = key.toUpperCase().indexOf(value.toUpperCase());
          if (index !== -1 && value.length < key.length) {
            return (
              <li key={key + '_' + idx} onClick={(evt) => this.setState({ value: key })}>
                {data[key] ? <img src={data[key]} className='right circle' /> : null}
                <span>
                  {index !== 0 ? key.substring(0, index) : ''}
                  <span className='highlight'>{value}</span>
                  {key.length !== index + value.length ? key.substring(index + value.length) : ''}
                </span>
              </li>
            );
          }
        })}
      </ul>
    );
  }

  _onChange (evt) {
    this.setState({ value: evt.target.value });
  }

  render () {
    const {
      className,
      title,
      data,
      icon,
      iconClassName,
      s,
      m,
      l,
      offset,
      minLength,
      ...props
    } = this.props;

    const _id = 'autocomplete-input';
    const sizes = { s, m, l };
    let classes = {};
    constants.SIZES.forEach(size => {
      classes[size + sizes[size]] = sizes[size];
    });

    return (
      <Row>
        <Col offset={offset} className={cx('input-field', className, classes)} {...props}>
          {icon && this.renderIcon(icon, iconClassName)}
          <input
            className='autocomplete'
            id={_id}
            onChange={this._onChange}
            type='text'
            value={this.state.value}
          />
          <label htmlFor={_id}>{title}</label>
          {this.renderDropdown(data, minLength)}
        </Col>
      </Row>
    );
  }
}

Autocomplete.propTypes = {
  className: PropTypes.string,
  /*
   * The title of the autocomplete component.
   */
  title: PropTypes.string,
  /*
   * An object with the keys of the items to match in autocomplete
   * The values are either null or a location to an image
   */
  data: PropTypes.object.isRequired,
  /*
   * Optional materialize icon to add to the autocomplete bar
   */
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  s: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
  offset: PropTypes.string,
  /*
   * Determine input length before dropdown
   */
  minLength: PropTypes.number
};

export default Autocomplete;
