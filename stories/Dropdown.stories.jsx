import Button from '../src/Button';
import Divider from '../src/Divider';
import Dropdown from '../src/Dropdown';
import Icon from '../src/Icon';

export default {
  title: 'Javascript/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component:
          'Add a dropdown list to any button. You can add a divider with the `<Divider />` component. You can also add icons.'
      }
    }
  }
};

export const Default = {
  args: { trigger: <Button>Drop Me!</Button> },
  render: args => (
    <Dropdown {...args}>
      <a href="#">one</a>
      <a href="#">two</a>
      <Divider />
      <a href="#">three</a>
      <a href="#">
        <Icon>view_module</Icon>four
      </a>
      <a href="#">
        <Icon>cloud</Icon> five
      </a>
    </Dropdown>
  )
};
