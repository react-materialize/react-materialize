import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import footer from '../../../examples/Footer';
import Code from '!raw-loader!Footer';

const stickyCss = `body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
`

const FooterPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Footers are a great way to organize a lot of site navigation and information at the end of a page. This is where the user will look once hes finished scrolling through the current page or is looking for additional information about your website.
      </p>
      <h4 className='col s12'>
        Introduction
      </h4>
      <p className='caption'>
        Note: We use flexbox to structure our html so that the footer is always on the bottom of the page. It is important to keep the structure of your page within the 3 HTML5 tags: <code className=" language-markup">{'<header>'}</code>, <code className=" language-markup">{'<main>'}</code>, <code className=" language-markup">{'<footer>'}</code>
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.footer}>
          {footer}
        </ReactPlayground>
      </Col>
      <h4 className='col s12'>
        Sticky Footer
      </h4>
      <p className='caption'>
        A sticky footer always stays on the bottom of the page regardless of how little content is on the page. However, this footer will be pushed down if there is a lot of content, so it is different from a fixed footer. Add the following code to your CSS file.
      </p>
      <p className='caption'>
        Note: This may cause issues in Internet Explorer which has weak support for flexbox.
      </p>
      <Col s={12}>
        <ReactPlayground code={stickyCss} trim={false} editable={false} />
      </Col>

      <Col s={12}>
        <PropTable header='Footer' component={Code} />
      </Col>
    </Col>
  </Row>
);

export default FooterPage;
