import React from 'react';
import Tab from '../src/Tab';
import Tabs from '../src/Tabs';

export default (
  <Tabs className="tab-demo z-depth-1">
    <Tab title="Test 1">Test 1</Tab>
    <Tab title="Test 2" active>
      Test 2
    </Tab>
    <Tab title="Test 3">Test 3</Tab>
    <Tab title="Test 4">Test 4</Tab>
  </Tabs>
);
