import React from 'react';
import Row from './Row';
import Col from './Col';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <Row>
            <Col l={6} s={12}>
              {this.props.children}
            </Col>
            <Col l={4} s={12} offset={"l2"}>
              <h5 className="white-text">Connect</h5>
              {this.props.links}
            </Col>
          </Row>
        </div>
        <div className="footer-copyright">
          <div className="container">
            {this.props.copyrights}
            {this.props.moreLinks}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
