import React from 'react';
import Row from 'Row';
import Col from 'Col';
import Section from 'Section';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import NavbarCode from '!raw-loader!Navbar';
import NavItemCode from '!raw-loader!NavItem';

const header = 'Navbar';
const desc = `The navbar is fully contained by an HTML5 Nav tag.
  Inside a recommended container div, there are 2 main parts of the
  navbar. A logo or brand link, and the navigations links. You can
  align these links to the left or right.`;

const NavbarPage = () => (
  <Row>
    <Col s={12} l={10}>
      <Section>
        <Row>
          <p className='caption'>{desc}</p>
          <h4 className='col s12'>Right Aligned Links</h4>
        </Row>
        <ReactPlayground code={require('!raw-loader!../../../examples/RightAlignedNavbar.js')} />
      </Section>

      <Section>
        <Row>
          <h4 className='col s12'>Left Aligned Links</h4>
        </Row>
        <ReactPlayground code={require('!raw-loader!../../../examples/LeftAlignedNavbar.js')} />
      </Section>

      <Section>
        <Row>
          <h4 className='col s12'>Icon Links</h4>
        </Row>
        <ReactPlayground code={require('!raw-loader!../../../examples/IconLinksNavbar.js')} />
      </Section>

      <Section>
        <PropTable header={header} component={NavbarCode} />
        <PropTable header='NavItem' component={NavItemCode} />
      </Section>
    </Col>
  </Row>
);

export default NavbarPage;
