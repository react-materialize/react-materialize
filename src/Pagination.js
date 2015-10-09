import React from 'react';
import Icon from './Icon';
import PaginationButton from './PaginationButton';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activePage: 1};
    }

    render() {
        var {items, activePage, onSelect, ...props} = this.props;
        this.state.activePage = activePage;
        var buttons = [];
        buttons.push(
            <li class="waves-effect"><a href="#!"><Icon>chevron_left</Icon></a></li>
        );
        for (var i = 1; i <= items; i++) {
            buttons.push(<PaginationButton active={i == this.state.activePage}>{i}</PaginationButton>);
        }
        buttons.push(
            <li class="waves-effect"><a href="#!"><Icon>chevron_right</Icon></a></li>
        );
        return (
            <ul className="pagination"> {buttons} </ul>
        );
    }
}

Pagination.propTypes = {
    items: React.PropTypes.number.isRequired
};

export default Pagination;
