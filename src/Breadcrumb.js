import React from 'react';
import Col from './Col';

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
    this.renderLinks = this.renderLinks.bind(this);
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Col s={12}>
            {this.renderLinks()}
          </Col>
        </div>
      </nav>
    );
  }

  renderLinks() {
    return React.Children.map(this.props.children, item => {
      return React.cloneElement(item, {breadcrumbItem: true});
    });
  }
}

Breadcrumb.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element),
};

export default Breadcrumb;
