import React from 'react';
import cx from 'classnames';
import idgen from './idgen';
import constants from './constants';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.defaultValue};
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    if (this.props.type === 'select' && !this.props.browserDefault) {
      $(this.refs.inputEl).material_select();
    }
  }

  _onChange(e) {
    if (this.props.type !== 'select' || !this.props.browserDefault) {
      this.setState({
        value: e.target.value
      });
    }
  }

  render() {
    let classes = {
      col: true,
      'input-field': this.props.type !== 'checkbox' && this.props.type !== 'radio'
    };
    let {defaultValue, placeholder, id, type, label, ...props} = this.props;
    constants.SIZES.forEach(size => {
      if (this.props[size]) {
        classes[size + this.props[size]] = true;
      }
    });
    if (id === null) {
      if (this.props.name === null) {
        id = `input_${idgen()}`;
      } else {
        id = this.props.name;
      }
    }
    let inputClasses = {
      validate: this.props.validate !== false
    };
    let C, inputType;
    switch (type) {
      case 'textarea':
        C = 'textarea';
        inputClasses['materialize-textarea'] = true;
        break;
      case 'select':
        C = 'select';
        inputClasses['browser-default'] = !!this.props.browserDefault;
        break;
      default:
        C = 'input';
        inputType = type || 'text';
    }

    let labelClasses = {
      active: this.state.value
    };

    let htmlLabel = <label className={cx(labelClasses)} htmlFor={id}>{label}</label>;
    return (
      <div className={cx(classes)}>
        {this.props.type === 'select' && this.props.browserDefault ? htmlLabel : null}
        <C
          id={id}
          className={cx(inputClasses)}
          onChange={this._onChange}
          placeholder={placeholder}
          ref="inputEl"
          type={inputType}
          value={this.state.value}
          {...props} 
        />
        {this.props.type !== 'select' ? htmlLabel : null}
      </div>
    );
  }
}

Input.propTypes = {
  s: React.PropTypes.number,
  m: React.PropTypes.number,
  l: React.PropTypes.number,
  label: React.PropTypes.node,
  type: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  validate: React.PropTypes.bool,
  browserDefault: React.PropTypes.bool
};

Input.defaultProps = {type: 'text'};

export default Input;
