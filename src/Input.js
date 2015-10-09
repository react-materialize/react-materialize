import React from 'react/addons';
import constants from './constants';
import cx from 'classnames';
import uuid from 'node-uuid';

class Input extends React.Component {
    render() {
        var classes = {
            col: true,
            'input-field': true
        };
        var {placeholder, id, type, label, ...props} = this.props;
        constants.SIZES.forEach(size => {
            if (this.props[size]) {
                classes[size + this.props[size]] = true;
            }
        });
        if (id == null) {
            if (this.props.name == null) {
                id = uuid.v1();
            } else {
                id = this.props.name;
            }
        }
        var C, inputType;
        switch(type) {
        case 'textarea':
            C = 'textarea';
            break;
        case 'select':
            C = 'select';
            break;
        default:
            C = 'input';
            inputType = type || "text";
        }
        return (
            <div className={cx(classes)}>
                <C {...props} type={inputType} placeholder={placeholder} id={id} className="validate"/>
                <label htmlFor={id}>{label}</label>
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
    defaultValue: React.PropTypes.string
};

Input.defaultProps = {type: 'text'};

export default Input;
