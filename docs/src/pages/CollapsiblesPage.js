import React from 'react';
import Row from 'Row';
import Section from 'Section';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import CollapsibleCode from '!raw-loader!Collapsible';

const header = 'Collapsible';
const desc = `Collapsibles are accordion elements that expand when clicked
  on. They allow you to hide content that is not immediately relevant to
  the user.`;

const CollapsiblesPage = () => (
  <Row>
    <Col s={12} l={10}>
      <Section>
        <p className='caption'>{desc}</p>
        <h4>Basic</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/CollapsibleBasic.js')} />
      </Section>

      <Section>
        <h4>Popout</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/CollapsiblePopout.js')} />
      </Section>

      <Section>
        <h4>Accordion</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/CollapsibleAccordion.js')} />
      </Section>

      <Section>
        <PropTable header={header} component={CollapsibleCode} />
      </Section>
    </Col>
  </Row>
);

export default CollapsiblesPage;
