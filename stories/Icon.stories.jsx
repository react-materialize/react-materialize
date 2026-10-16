import Icon from '../src/Icon';

export default {
  title: 'Components/Icons',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          'We have included 740 Material Design Icons courtesy of Google. You can download them directly from the Material Design specs.'
      }
    }
  }
};

export const Default = { args: { children: 'cloud' } };
export const Tiny = { args: { children: 'cloud', tiny: true } };
export const Small = { args: { children: 'cloud', small: true } };
export const Medium = { args: { children: 'cloud', medium: true } };
export const Large = { args: { children: 'cloud', large: true } };
