import React from 'react';
import Row from 'Row';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import featurediscovery from '../../../examples/FeatureDiscovery';
import Code from '!raw-loader!FeatureDiscovery';

const FeatureDiscoveryPage = () => (
  <Row>
    <Col m={9} s={12} l={10}>
      <p className='caption'>
        Provide value and encourage return visits by introducing users to new features and functionality at contextually relevant moments.
        Feature discovery prompts have more impact when they are presented to the right users at contextually relevant moments. When presented to the wrong user at the wrong time, they can be intrusive and annoying.
      </p>
      <Col s={12}>
        <ReactPlayground code={Samples.featurediscovery}>
          {featurediscovery}
        </ReactPlayground>
      </Col>

      <Col s={12}>
        <PropTable header='FeatureDiscovery' component={Code} />
      </Col>
    </Col>
  </Row>
);

export default FeatureDiscoveryPage;
