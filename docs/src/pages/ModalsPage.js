import React from 'react';
import Row from 'Row';
import Section from 'Section';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Code from '!raw-loader!Modal';

const header = 'Modal';
const desc = `Use a modal for dialog boxes, confirmation messages,
  or other content that can be called up.`;

const ModalsPage = () => (
  <Row>
    <Col s={12}>
      <Section>
        <p className='caption'>{desc}</p>
        <h4>Basic</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/Modal.js')} />
      </Section>

      <Section>
        <h4>bottomSheet</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/ModalWithBottomSheet.js')} />
      </Section>

      <Section>
        <h4>fixedFooter</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/ModalWithFixedFooter.js')} />
      </Section>

      <Section>
        <h4>No trigger</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/ModalNoTrigger.js')} />
      </Section>

      <Section>
        <PropTable component={Code} header={header} />
      </Section>
    </Col>
  </Row>
);

export default ModalsPage;
