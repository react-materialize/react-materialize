import React from 'react';
import Row from 'Row';
import Col from 'Col';
import Section from 'Section';

import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import iconPrefixesInput from '../../../examples/IconPrefixesInput';
import inputRadio from '../../../examples/InputRadio';
import inputFields from '../../../examples/InputFields';
import inputCheckbox from '../../../examples/InputCheckbox';
import inputDatepicker from '../../../examples/InputDatePicker';
import inputSwitch from '../../../examples/InputSwitch';
import prefillingTextInput from '../../../examples/PrefillingTextInput';
import selectSimple from '../../../examples/SelectSimple';
import InputCode from '!raw-loader!Input';
import AutocompleteCode from '!raw-loader!Autocomplete';

const header = 'Forms';
const desc = `Forms are the standard way to receive user inputted data.
  The transitions and smoothness of these elements are very important
because of the inherent user interaction associated with forms.`;

const FormsPage = () => (
  <Row>
    <Col s={12} l={10}>
      <Section>
        <p className='caption'>{desc}</p>
        <h4 className='col s12'>Input Fields</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/InputFields.js')} />
      </Section>

      <Section>
        <h4 className='col s12'>Prefilling Text Inputs</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/PrefillingTextInput.js')} />
      </Section>

      <Section>
        <h4 className='col s12'>Icon Prefixes</h4>
        <p className='col s12'>You can add an Icon tag to the children of Input tag, it will be shown as icon prefix</p>
        <ReactPlayground code={require('!raw-loader!../../../examples/IconPrefixesInput.js')} />
      </Section>

      <Section>
        <h4 className='col s12'>Select</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/SelectSimple.js')} />

        <p className='col s12'>You can also add a prop icon with its name to the Input tag, it will be shown as icon prefix</p>

        <ReactPlayground code={require('!raw-loader!../../../examples/SelectWithIcon.js')} />
      </Section>

      <Section>
        <h4 className='col s12'>Radio</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/InputRadio.js')} />
      </Section>

      <Section>
        <h4 className='col s12'>Checkbox</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/InputCheckbox.js')} />
      </Section>

      <Section>
        <h4 className='col s12'>Date Picker</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/InputDatePicker.js')} />
      </Section>

      <Section>
        <h4 className='col s12'>Time Picker</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/InputTimePicker.js')} />
      </Section>

      <Section>
        <h4 className='col s12'>Switch</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/InputSwitch.js')} />
      </Section>

      <Section>
        <h4 className='col s12'>Autocomplete</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/Autocomplete.js')} />
      </Section>

      <Section>
        <PropTable header='Input' component={InputCode} />
      </Section>

      <Section>
        <PropTable header='Autocomplete' component={AutocompleteCode} />
      </Section>
    </Col>
  </Row>
);

export default FormsPage;
