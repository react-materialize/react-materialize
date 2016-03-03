import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import constants from './constants';

class Select extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    s: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    label: PropTypes.node,
    defaultValue: PropTypes.string,
    browserDefault: PropTypes.bool
  }

  static defaultProps = {
    browserDefault: false
  }

  constructor(props) {
    super(props);
    this.state = { value: props.defaultValue };
  }

  componentDidMount() {
    $(this.refs.__SELECT__).material_select();
    $(this.refs.__SELECT__).on('change', this._onChange.bind(this));
  }

  componentDidUpdate() {
    $(this.refs.__SELECT__).material_select();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.defaultValue
    }, () => $(this.refs.__SELECT__).material_select());
  }

  componentWillUnmount() {
    $(this.refs.__SELECT__).off('change', this._onChange.bind(this));
  }

  _onChange(e) {
    this.setState({
      value: e.target.value
    }, () => this.props.onChange && this.props.onChange(e));
  }

  render() {
    const { children, label, browserDefault } = this.props;
    const classes = Object.assign(
      {},
      {
        'input-field': true,
        'col': true,
        'browser-default': browserDefault
      },
      constants.SIZES.reduce((result, size) => {
        return this.props[size]
                 ? Object.assign({}, result, { [size + this.props[size]]: true })
                 : result;
      }, {})
    );
    return (
      <div className={cx(classes)}>
        <select
            ref="__SELECT__"
            value={this.state.value}
            onChange={this._onChange.bind(this)} >
          {children}
        </select>
        <label>{label}</label>
      </div>
    );
  }
}

export default Select;
