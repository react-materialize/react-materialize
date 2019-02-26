import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from '../src/Navbar';
import NavItem from '../src/NavItem';
import Icon from '../src/Icon';
import Dropdown from '../src/Dropdown';
import Button from '../src/Button';

const stories = storiesOf('components/Navbar', module);

stories.addParameters({
  info: {
    text: `The navbar is fully contained by an HTML5 Nav tag. Inside a recommended container div, there are 2 main parts of the navbar. A logo or brand link, and the navigations links. You can align these links to the left or right.`
  }
});

stories.add('Default', () => (
  <Navbar brand={<a href="#" className="brand-logo">Logo</a>} alignLinks="right">
    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
    <NavItem href='components.html'>Components</NavItem>
  </Navbar>
));

stories.add('Left Aligned Links', () => (
  <Navbar brand={<a href="#" className="brand-logo right">Logo</a>} alignLinks="left">
    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
    <NavItem href='components.html'>Components</NavItem>
  </Navbar>
));

stories.add('Icon Links', () => (
  <Navbar brand={<a href="#" className="brand-logo">Logo</a>} alignLinks="right">
    <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
    <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
  </Navbar>
));
