import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from '../src/Tabs';
import Tab from '../src/Tab';

const stories = storiesOf('Javascript/Tabs', module);

stories.addParameters({
  info: {
    text: `The tabs structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible. You can add the const .disabled to make a tab inaccessible.`
  }
});

stories.add('Default', () => (
  <Tabs className="tab-demo z-depth-1">
    <Tab title="Test 1">Test 1</Tab>
    <Tab title="Test 2" active>
      Test 2
    </Tab>
    <Tab title="Test 3">Test 3</Tab>
    <Tab title="Test 4">Test 4</Tab>
  </Tabs>
));

stories.add('Swipeable Tabs', () => (
  <Tabs
    className="tab-demo z-depth-1"
    options={{
      swipeable: true
    }}
  >
    <Tab title="Test 1" className="blue">
      Test 1
    </Tab>
    <Tab title="Test 2" active className="red">
      Test 2
    </Tab>
    <Tab title="Test 3" className="green">
      Test 3
    </Tab>
  </Tabs>
));

stories.add('Fixed Width Tabs', () => (
  <Tabs className="tab-demo z-depth-1 tabs-fixed-width">
    <Tab title="Test 1">Test 1</Tab>
    <Tab title="Test 2" active>
      Test 2
    </Tab>
    <Tab title="Test 3" disabled>
      Test 3
    </Tab>
    <Tab title="Test 4">Test 4</Tab>
    <Tab title="Test 4">Test 5</Tab>
  </Tabs>
));
