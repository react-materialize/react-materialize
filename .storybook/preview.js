import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './overrides.css';

// Components call Materialize through the global `M`, as in consumer apps.
window.M = M;

// `PropTypes.node` props get Storybook's JSON (object) control, which drops
// plain text. Stories pass strings to most of them (labels, children), so
// give string args a text control unless the story chose another control.
const textControlForStringArgs = ({ argTypes, initialArgs }) =>
  Object.fromEntries(
    Object.entries(argTypes).map(([name, argType]) => [
      name,
      typeof initialArgs[name] === 'string' &&
      (!argType.control || argType.control.type === 'object')
        ? { ...argType, control: { type: 'text' } }
        : argType
    ])
  );

/** @type {import('@storybook/react-vite').Preview} */
export default {
  tags: ['autodocs'],
  argTypesEnhancers: [textControlForStringArgs],
  parameters: {
    controls: { expanded: true },
    options: {
      storySort: { order: ['React Materialize', ['Welcome'], 'Components'] }
    }
  }
};
