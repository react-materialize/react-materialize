import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Row from './Row';
import Col from './Col';

class Footer extends Component {
  render() {
    let { className, ...props } = this.props;
    let classes = {
      'page-footer': true
    };
    return (
      <footer className={cx(classes, className)} {...props}>
        <div className='container'>
          <Row>
            <Col l={6} s={12}>
              {this.props.children}
            </Col>
            <Col l={4} s={12} offset="l2">
              {this.props.links}
            </Col>
          </Row>
        </div>
        <div className='footer-copyright'>
          <div className='container'>
            {this.props.copyrights}
            {this.props.moreLinks}
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
