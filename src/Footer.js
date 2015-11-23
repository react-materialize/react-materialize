import React from 'react';
import cx from 'classnames';
import Row from './Row';
import Col from './Col';

class Footer extends React.Component {
  render() {
    let { className, ...props } = this.props;
    let classes = {
      'page-footer': true
    };
    return (
      <footer className={cx(classes, className)}>
        <div className='container'>
          <Row>
            <Col l={6} s={12}>
              {this.props.children}
            </Col>
            <Col l={4} s={12} offset="l2">
              <h5 className='white-text'>Connect</h5>
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
  links: React.PropTypes.node,
  moreLinks: React.PropTypes.node,
  copyrights: React.PropTypes.string,
};

export default Footer;
