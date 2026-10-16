import Toast from '../src/Toast';

export default {
  title: 'Javascript/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component:
          'Materialize provides an easy way for you to send unobtrusive alerts to your users through toasts. These toasts are also placed and sized responsively, try it out by clicking the button below on different device sizes.'
      }
    }
  }
};

export const Default = {
  args: { options: { html: 'Here you go!' }, children: 'Toast' }
};
