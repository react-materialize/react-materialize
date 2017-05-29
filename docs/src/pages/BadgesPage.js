import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import badgeCollections from '../../../examples/BadgeCollections';
import badgeDropdowns from '../../../examples/BadgeDropdowns';
import badgeNavbar from '../../../examples/BadgeNavbar';
import BadgesCode from '!raw-loader!Badge';

const BadgesPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Badges can notify you that there are new or unread messages or notifications. Add the `newIcon` prop to the badge to give it the background.
      </p>
      <h4 className='col s12'>
        Collection
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.badgeCollections}>
          {badgeCollections}
        </ReactPlayground>
      </Col>
      <h4 className='col s12'>
        Badges in Dropdown
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.badgeDropdowns}>
          {badgeDropdowns}
        </ReactPlayground>
      </Col>
      <h4 className='col s12'>
        Badges in Navbar
      </h4>
      <Col s={12}>
        <ReactPlayground code={Samples.badgeNavbar}>
          {badgeNavbar}
        </ReactPlayground>
      </Col>
      <Col s={12}>
        <PropTable header='Badges' component={BadgesCode} />
      </Col>
    </Col>
  </Row>
);

export default BadgesPage;
