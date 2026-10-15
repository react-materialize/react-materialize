import React, { Fragment } from 'react';
import Navbar from '../src/Navbar';
import NavItem from '../src/NavItem';
import Icon from '../src/Icon';
import Tabs from '../src/Tabs';
import Tab from '../src/Tab';
import Dropdown from '../src/Dropdown';
import Button from '../src/Button';
import Divider from '../src/Divider';

const logo = (
  <a href="#" className="brand-logo">
    Logo
  </a>
);

export default {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component:
          'The navbar is fully contained by an HTML5 Nav tag. Inside a recommended container div, there are 2 main parts of the navbar. A logo or brand link, and the navigations links. You can align these links to the left or right.'
      }
    }
  },
  argTypes: {
    alignLinks: { control: 'select', options: ['left', 'right'] }
  },
  args: { brand: logo, alignLinks: 'right' }
};

export const RightAligned = {
  args: {
    children: [
      <NavItem key="1" href="">
        Getting started
      </NavItem>,
      <NavItem key="2" href="components.html">
        Components
      </NavItem>
    ]
  }
};

export const LeftAlignedLinks = {
  args: {
    brand: (
      <a href="#" className="brand-logo right">
        Logo
      </a>
    ),
    alignLinks: 'left',
    children: [
      <NavItem key="1" onClick={() => console.log('test click')}>
        Getting started
      </NavItem>,
      <NavItem key="2" href="components.html">
        Components
      </NavItem>
    ]
  }
};

export const CenterLogo = {
  args: {
    centerLogo: true,
    alignLinks: 'left',
    children: [
      <NavItem key="1" onClick={() => console.log('test click')}>
        Getting started
      </NavItem>,
      <NavItem key="2" href="components.html">
        Components
      </NavItem>
    ]
  }
};

export const CenterChildren = {
  args: {
    centerChildren: true,
    children: [
      <NavItem key="1" href="">
        Getting started
      </NavItem>,
      <NavItem key="2" href="components.html">
        Components
      </NavItem>
    ]
  }
};

export const ExtendedNavbarWithTabs = {
  name: 'Extended Navbar with Tabs',
  args: {
    extendWith: (
      <Tabs className="tabs-transparent">
        <Tab title="test 1" className="white-text">
          Test 1
        </Tab>
        <Tab title="test 2" className="white-text" active>
          Test 2
        </Tab>
        <Tab title="disabled tab" className="white-text" disabled>
          Disabled Tab
        </Tab>
        <Tab title="test 4" className="white-text">
          Test 4
        </Tab>
      </Tabs>
    ),
    children: [
      <NavItem key="1" onClick={() => console.log('test click')}>
        Getting started
      </NavItem>,
      <NavItem key="2" href="components.html">
        Components
      </NavItem>
    ]
  }
};

export const DropdownMenu = {
  args: {
    children: [
      <NavItem key="1" href="">
        Getting started
      </NavItem>,
      <NavItem key="2" href="components.html">
        Components
      </NavItem>,
      <Dropdown
        key="3"
        trigger={
          <a href="#!">
            Dropdown <Icon right>arrow_drop_down</Icon>
          </a>
        }
      >
        <a href="#">one</a>
        <a href="#">two</a>
        <Divider />
        <a href="#">three</a>
      </Dropdown>
    ]
  }
};

export const IconLinks = {
  render: args => (
    <Fragment>
      <div className="section">
        <Navbar
          brand={
            <a href="#" className="brand-logo">
              Logo
              <Icon>cloud</Icon>
            </a>
          }
          alignLinks={args.alignLinks}
        >
          <NavItem href="get-started.html">
            <Icon>search</Icon>
          </NavItem>
          <NavItem href="get-started.html">
            <Icon>view_module</Icon>
          </NavItem>
          <NavItem href="get-started.html">
            <Icon>refresh</Icon>
          </NavItem>
          <NavItem href="get-started.html">
            <Icon>more_vert</Icon>
          </NavItem>
        </Navbar>
      </div>

      <div className="section">
        <Navbar brand={args.brand} alignLinks={args.alignLinks}>
          <NavItem href="get-started.html">
            Link with left icon
            <Icon left>search</Icon>
          </NavItem>
          <NavItem href="get-started.html">
            Link with right icon
            <Icon right>view_module</Icon>
          </NavItem>
        </Navbar>
      </div>
    </Fragment>
  )
};

export const Buttons = {
  args: {
    children: [
      <Button key="1" node="a">
        button
      </Button>,
      <Button key="2" node="a">
        button <Icon right>cloud</Icon>
      </Button>,
      <Button key="3" node="a" large>
        large button
      </Button>
    ]
  }
};

export const SearchBar = {
  args: {
    search: true,
    children: [
      <NavItem key="1" href="">
        Getting started
      </NavItem>,
      <NavItem key="2" href="components.html">
        Components
      </NavItem>
    ]
  }
};

export const CustomSidenav = {
  args: {
    sidenav: <li>Custom node!</li>,
    children: [
      <NavItem key="1" href="">
        Getting started
      </NavItem>,
      <NavItem key="2" href="components.html">
        Components
      </NavItem>
    ]
  }
};
