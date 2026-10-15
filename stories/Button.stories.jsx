import React from 'react';
import Button from '../src/Button';
import Icon from '../src/Icon';

const wavesOptions = [
  'light',
  'red',
  'yellow',
  'orange',
  'purple',
  'green',
  'teal'
];

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.'
      }
    }
  }
};

export const Default = {
  render: () => (
    <div>
      <Button waves="light" style={{ marginRight: '5px' }}>
        button
      </Button>
      <Button waves="light" style={{ marginRight: '5px' }}>
        button<Icon left>cloud</Icon>
      </Button>
      <Button waves="light">
        button<Icon right>cloud</Icon>
      </Button>
    </div>
  )
};

export const Floating = {
  args: {
    floating: true,
    large: true,
    className: 'red',
    waves: 'light',
    icon: <Icon>add</Icon>
  }
};

export const Flat = {
  args: { flat: true, waves: 'light', children: 'Button' }
};

export const Submit = {
  args: {
    type: 'submit',
    waves: 'light',
    children: [
      'Submit',
      <Icon key="icon" right>
        send
      </Icon>
    ]
  }
};

export const Large = {
  render: () => (
    <div>
      <Button node="a" waves="light" large style={{ marginRight: '5px' }}>
        Button
      </Button>
      <Button node="a" waves="light" large style={{ marginRight: '5px' }}>
        Button<Icon left>cloud</Icon>
      </Button>
      <Button node="a" waves="light" large>
        Button<Icon right>cloud</Icon>
      </Button>
    </div>
  )
};

export const Small = {
  render: () => (
    <div>
      <Button node="a" waves="light" small style={{ marginRight: '5px' }}>
        Button
      </Button>
      <Button node="a" waves="light" small style={{ marginRight: '5px' }}>
        Button<Icon left>cloud</Icon>
      </Button>
      <Button node="a" waves="light" small>
        Button<Icon right>cloud</Icon>
      </Button>
    </div>
  )
};

export const Disabled = {
  render: () => (
    <div>
      <Button large disabled style={{ marginRight: '5px' }}>
        Button
      </Button>
      <Button disabled style={{ marginRight: '5px' }}>
        Button
      </Button>
      <Button flat disabled style={{ marginRight: '5px' }}>
        Button
      </Button>
      <Button floating disabled>
        <Icon>add</Icon>
      </Button>
    </div>
  )
};

export const Link = {
  args: {
    waves: 'light',
    node: 'a',
    href: 'http://react-materialize.github.io/',
    children: 'Open Me In New Tab'
  }
};

export const Waves = {
  args: { waves: 'light' },
  argTypes: { waves: { control: 'select', options: wavesOptions } },
  render: args => (
    <div>
      <Button flat waves={args.waves} style={{ marginRight: '5px' }}>
        button
      </Button>
      <Button floating large waves={args.waves} icon={<Icon>add</Icon>} />
    </div>
  )
};

export const Tooltip = {
  args: { tooltip: 'I am a tooltip' },
  render: args => (
    <div className="row" style={{ margin: '50px 0' }}>
      <Button
        className="col l2 offset-l1 offset-s4 s4"
        waves="light"
        tooltip={args.tooltip}
      >
        BOTTOM
      </Button>
      <Button
        className="col l2 offset-l1 offset-s4 s4"
        waves="light"
        tooltip={args.tooltip}
        tooltipOptions={{ position: 'top' }}
      >
        TOP
      </Button>
      <Button
        className="col l2 offset-l1 offset-s4 s4"
        waves="light"
        tooltip={args.tooltip}
        tooltipOptions={{ position: 'left' }}
      >
        LEFT
      </Button>
      <Button
        className="col l2 offset-l1 offset-s4 s4"
        waves="light"
        tooltip={args.tooltip}
        tooltipOptions={{ position: 'right' }}
      >
        RIGHT
      </Button>
    </div>
  )
};
