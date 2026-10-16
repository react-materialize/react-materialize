import Tab from '../src/Tab';
import Tabs from '../src/Tabs';

export default {
  title: 'Javascript/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'The tabs structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible. You can add the class `.disabled` to make a tab inaccessible.'
      }
    }
  }
};

export const Default = {
  args: { className: 'tab-demo z-depth-1' },
  render: args => (
    <Tabs {...args}>
      <Tab title="Test 1">Test 1</Tab>
      <Tab title="Test 2" active>
        Test 2
      </Tab>
      <Tab title="Test 3">Test 3</Tab>
      <Tab title="Test 4">Test 4</Tab>
    </Tabs>
  )
};

export const SwipeableTabs = {
  args: { className: 'tab-demo z-depth-1', options: { swipeable: true } },
  render: args => (
    <Tabs {...args}>
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
  )
};

export const FixedWidthTabs = {
  args: { className: 'tab-demo z-depth-1 tabs-fixed-width' },
  render: args => (
    <Tabs {...args}>
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
  )
};

export const AssignedIdx = {
  name: 'Assigned idx',
  render: args => (
    <Tabs {...args}>
      <Tab title="Test 1" idx="one">
        Test 1
      </Tab>
      <Tab title="Test 2">Test 1</Tab>
    </Tabs>
  )
};
