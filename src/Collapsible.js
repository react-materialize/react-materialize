import React from 'react/addons';
import cx from 'classnames';

class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = { activeKey: this.props.defaultActiveKey };
    }

    render() {
        var {accordion, className, children, ...props} = this.props;
        var classes = {
            collapsible: true,
            accordion: true
        };
        return (
                <ul className={cx(className, classes)} {...props}>
                {React.Children.map(children, this.renderItem)}
            </ul>
        );
    }

    renderItem(child, index) {
        var props = {
            key: child.key ? child.key : index,
            ref: child.ref
        };
        if (this.props.accordion) {
            props.expanded = child.props.eventKey === this.state.activeKey;
            props.onSelect = this.handleSelect;
        }

        return React.cloneElement(child, props);
    }

    handleSelect(key) {
        if (this.props.onSelect) {
            this.props.onSelect(key);
        }

        if (this.state.activeKey === key) {
            key = null;
        }
        this.setState({activeKey: key});
    }
}

Collapsible.propTypes = {accordion: React.PropTypes.bool.isRequired};

Collapsible.defaultProps = {accordion: false};

export default Collapsible;
