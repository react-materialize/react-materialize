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
    if (this.props.type === 'select' && !this.props.browserDefault && typeof $ !== 'undefined') {
      $(this.refs.inputEl).material_select();
      $(this.refs.inputEl).on('change', this._onChange);
    }
  }

  _onChange(e) {
    this.setState({
      value: e.target.value
    });
    if (!!this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    let { defaultValue, placeholder, id, type, label, children, validate, onChange, ...props} = this.props;
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
      validate
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
      default:
        C = 'input';
        inputType = type || 'text';
    }
    let labelClasses = {
      active: this.state.value || this.isSelect()
    };

    let htmlLabel = label ? <label className={cx(labelClasses)} htmlFor={id}>{label}</label> : null;

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
            ref='inputEl'
            value={this.state.value}
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
            <input type="checkbox" name={this.props.name} {...props} />
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
      return (
        <div className={cx(classes)}>
            {icon === null ? null : React.cloneElement(icon, {className: 'prefix'})}
            <C
                id={id}
                className={cx(inputClasses)}
                onChange={this._onChange}
                placeholder={placeholder}
                ref='inputEl'
                type={inputType}
                value={this.state.value}
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
