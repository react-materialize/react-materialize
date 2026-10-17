import Switch from '../src/Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          'Switches are special checkboxes used for binary states such as on / off'
      }
    }
  }
};

export const Switch_ = {
  name: 'Switch',
  args: { offLabel: 'Off', onLabel: 'On' }
};

export const Disabled = {
  args: { disabled: true, offLabel: 'Off', onLabel: 'On' }
};
