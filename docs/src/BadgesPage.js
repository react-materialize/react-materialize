import React from 'react';
import Row from '../../src/Row';
import Col from '../../src/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';
import badgeCollections from '../../examples/BadgeCollections';
import badgeDropdowns from '../../examples/BadgeDropdowns';
import badgeNavbar from '../../examples/BadgeNavbar';

const component = 'Badge';

class BadgesPage extends React.Component {
  componentDidMount() {
    store.emit('component', component);
  }

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            Badges can notify you that there are new or unread messages or notifications. Add the new class to the badge to give it the background.
          </p>
          <h4 className='col s12'>
            Collection
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.badgeCollections }>
              {badgeCollections}
            </ReactPlayground>
          </Col>
          <h4 className='col s12'>
            Badges in Dropdown
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.badgeDropdowns }>
              {badgeDropdowns}
            </ReactPlayground>
          </Col>
          <h4 className='col s12'>
            Badges in Navbar
          </h4>
          <Col s={12}>
            <ReactPlayground code={ Samples.badgeNavbar }>
              {badgeNavbar}
            </ReactPlayground>
          </Col>
          <Col s={12}>
            <PropTable component={component}/>
          </Col>
        </Col>
      </Row>
    );
  }
}

export default BadgesPage;

