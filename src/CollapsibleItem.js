import React from 'react';
import cx from 'classnames';
import Icon from './Icon';

class CollapsibleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {expanded: this.props.expanded};
        this.handleClick = this.handleClick.bind(this);
        this.renderBody = this.renderBody.bind(this);
        this.renderIcon = this.renderIcon.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.expanded !== newProps.expanded) {
            this.setState({expanded: newProps.expanded});
        }
    }

    render() {
        var {header, icon, children, ...props} = this.props;

        return (
            <li {...props}>
                <div className='collapsible-header' onClick={this.handleClick}>
                    {icon ? this.renderIcon(icon) : null}
                {header}
                </div>
                {this.state.expanded ? this.renderBody() : null}
            </li>
        );
    }

    handleClick() {
        if (this.props.onSelect) {
            this.props.onSelect(this.props.eventKey);
        } else {
            this.setState({expanded: !this.state.expanded});
        }
    }

    renderBody() {
        var style = {display: 'block'};
        return (
            <div className='collapsible-body' style={style}>
                <p>{this.props.children}</p>
            </div>
        );
    }

    renderIcon(icon) {
        return <Icon>{icon}</Icon>;
    }
}

CollapsibleItem.propTypes = {
    header: React.PropTypes.string.isRequired,
    eventKey: React.PropTypes.any,
    icon: React.PropTypes.string,
    popout: React.PropTypes.bool,
    onSelect: React.PropTypes.func
}

export default CollapsibleItem;
