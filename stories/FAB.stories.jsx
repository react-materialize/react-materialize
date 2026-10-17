import { cloneElement } from 'react';
import Button from '../src/Button';
import Icon from '../src/Icon';

const children = [
  <Button key="1" floating icon={<Icon>insert_chart</Icon>} className="red" />,
  <Button
    key="2"
    floating
    icon={<Icon>format_quote</Icon>}
    className="yellow darken-1"
  />,
  <Button key="3" floating icon={<Icon>publish</Icon>} className="green" />,
  <Button key="4" floating icon={<Icon>attach_file</Icon>} className="blue" />
];

export default {
  title: 'Components/FAB',
  component: Button,
  args: {
    floating: true,
    fab: true,
    className: 'red',
    large: true,
    children
  }
};

export const Top = {};

export const Left = { args: { fab: { direction: 'left' } } };

export const Right = {
  args: { fab: { direction: 'right' }, style: { left: '23px' } }
};

export const Bottom = {
  args: { fab: { direction: 'bottom' }, style: { top: '50px' } }
};

export const ClickOnly = {
  name: 'Click-only',
  args: { fab: { direction: 'left', hoverEnabled: false } }
};

export const ToToolbar = {
  name: 'To toolbar',
  args: {
    fab: { direction: 'top', toolbarEnabled: true },
    children: children.map(c => cloneElement(c, { className: 'btn-large red' }))
  }
};
