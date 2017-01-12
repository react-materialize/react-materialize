import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import constants from './constants';
import Icon from './Icon';
import Row from './Row';
import Col from './Col';

class Autocomplete extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: '',
      minLength: this.props.minLength
    };

    delete this.props.minLength;

    this.renderIcon = this.renderIcon.bind(this);
    this.renderDropdown = this.renderDropdown.bind(this);
    this.renderUl = this.renderUl.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  renderIcon (icon, iconClassName) {
    return <Icon className={iconClassName}>{icon}</Icon>;
  }

  renderDropdown (data) {
    const { value, minLength } = this.state;

    if (minLength && minLength > value.length) {
      return null;
    }

    return value && Object.keys(data).map((key, idx) => {
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
    });
  }

  renderUl (data) {
    const drop = this.renderDropdown(data);
    return drop
      ? <ul className='autocomplete-content dropdown-content'>{drop}</ul>
      : null;
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
          <input type='text' id={_id} className='autocomplete' onChange={this._onChange} />
          <label htmlFor={_id}>{title}</label>
          {this.renderUl(data)}
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
