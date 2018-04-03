import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Row from './Row';
import Col from './Col';

class Footer extends Component {
  render() {
    const {
      children,
      className,
      copyrights,
      links,
      moreLinks,
      ...props
    } = this.props;

    let classes = {
      'page-footer': true
    };

    return (
      <footer className={cx(classes, className)} {...props}>
        <div className="container">
          <Row>
            <Col l={6} s={12}>
              {children}
            </Col>
            <Col l={4} s={12} offset="l2">
              {links}
            </Col>
          </Row>
        </div>
        <div className="footer-copyright">
          <div className="container">
            {copyrights}
            {moreLinks}
          </div>
        </div>
      </footer>
    );
  }
}
Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  copyrights: PropTypes.string,
  links: PropTypes.node,
  moreLinks: PropTypes.node
};

export default Footer;
