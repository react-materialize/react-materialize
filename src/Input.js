import React from 'react';
import cx from 'classnames';
import idgen from './idgen';
import constants from './constants';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.defaultValue};
    this._onChange = this._onChange.bind(this);
    this.isSelect = this.isSelect.bind(this);
  }

  componentDidMount() {
    if (this.isMaterialSelect()) {
      $(this.selectInput).material_select();
      $(this.selectInput).on('change', this._onChange);
    }
  }

  componentDidUpdate() {
    if (this.isMaterialSelect()) {
      $(this.selectInput).material_select();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.isMaterialSelect()) {
      this.setState({
        value: nextProps.defaultValue
      }, () => $(this.selectInput).material_select());
    }
  }

  componentWillUnmount() {
    if (this.isMaterialSelect()) {
      $(this.selectInput).off('change', this._onChange);
    }
  }

  _onChange(e) {
    this.setState({
      value: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    let { defaultValue, placeholder, id, type, label, children, validate, ...props} = this.props;
    let classes = {
      col: true,
      'input-field': type !== 'checkbox' && type !== 'radio'
    };
    constants.SIZES.forEach(size => {
      if (this.props[size]) {
        classes[size + this.props[size]] = true;
      }
    });
    if (!id) {
      id = `input_${idgen()}`;
    }
    let inputClasses = {
      validate,
      'browser-default' : !!this.props.browserDefault && this.isSelect()
    };
    let C, inputType;
    switch (type) {
    case 'textarea':
      C = 'textarea';
      inputClasses['materialize-textarea'] = true;
      break;
    case 'switch':
      C = 'input';
      inputType = 'checkbox';
      break;
    default:
      C = 'input';
      inputType = type || 'text';
    }
    let labelClasses = {
      active: this.state.value || this.isSelect()
    };

    let htmlLabel = label || inputType === 'radio' ? <label className={cx(labelClasses)} htmlFor={id}>{label}</label> : null;

    if (this.isSelect()) {
      let options = placeholder && !defaultValue ? [<option disabled key={idgen()}>{placeholder}</option>] : [];
      options = options.concat(React.Children.map(children, (child) => {
        return React.cloneElement(child, {'key': child.props.value});
      }));
      return (
        <div className={cx(classes)}>
          {htmlLabel}
          <select
            id={id}
            className={cx(inputClasses)}
            ref={(ref) => this.selectInput = ref}
            defaultValue={defaultValue}
            {...props}
          >
            { options }
          </select>
        </div>
      );
    } else if (type === 'switch') {
      return (
        <div className="switch">
          <label>
            Off
            <input
              name={this.props.name}
              onChange={this._onChange}
              type="checkbox"
              {...props}
            />
            <span className="lever"></span>
            On
          </label>
        </div>
      );
    }
    else {
      let icon = null;
      if (React.Children.count(children) == 1) {
        icon = React.Children.only(children);
      }

      switch(inputType) {
      case 'checkbox':
        break;
      case 'radio':
        break;
      default:
        props.defaultValue = this.state.value;
      }

      return (
        <div className={cx(classes)}>
            {icon === null ? null : React.cloneElement(icon, {className: 'prefix'})}
            <C
                id={id}
                className={cx(inputClasses)}
                onChange={this._onChange}
                placeholder={placeholder}
                type={inputType}
                {...props}
            />
            {htmlLabel}
        </div>
      );
    }
  }

  isSelect() {
    return this.props.type === 'select';
  }

  isMaterialSelect() {
    return this.props.type === 'select' && !this.props.browserDefault && typeof $ !== 'undefined';
  }
}

Input.propTypes = {
  s: React.PropTypes.number,
  m: React.PropTypes.number,
  l: React.PropTypes.number,
  label: React.PropTypes.node,
  /**
   * Input field type, e.g. select, checkbox, radio, text, tel, email
   * @default 'text'
   */
  type: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  validate: React.PropTypes.bool,
  browserDefault: React.PropTypes.bool,
  onChange: React.PropTypes.func
};

Input.defaultProps = {type: 'text'};

export default Input;
