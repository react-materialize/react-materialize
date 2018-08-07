import React from 'react';
import Row from 'Row';
import Col from 'Col';
import Section from 'Section';

import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import InputCode from '!raw-loader!Input';
import AutocompleteCode from '!raw-loader!Autocomplete';

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
        <p className='caption'>
          If you want to style an input button with a path input we provide this structure.
        </p>
        <h4 className='col s12'>File Input</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/InputFile.js')} />
        <p>
          You can also use the <code className="language-markup">multiple</code> attribute to allow multiple file uploads.
        </p>
        <ReactPlayground code={require('!raw-loader!../../../examples/InputFiles.js')} />
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
        <h4 className='col s12'>Textarea</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/InputTextarea.js')} />
      </Section>

      <Section>
        <h4 className='col s12'>Autocomplete</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/Autocomplete.js')} />
      </Section>

      <Section>
        <PropTable header='Forms' component={InputCode} />
      </Section>

      <Section>
        <PropTable header='Autocomplete' component={AutocompleteCode} />
      </Section>
    </Col>
  </Row>
);

export default FormsPage;
