import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from '../src/Navbar';
import NavItem from '../src/NavItem';
import Icon from '../src/Icon';
import Tabs from '../src/Tabs';
import Tab from '../src/Tab';
import Dropdown from '../src/Dropdown';
import Button from '../src/Button';
import Divider from '../src/Divider';
const stories = storiesOf('Components|Navbar', module);

stories.addParameters({
  info: {
    text: `The navbar is fully contained by an HTML5 Nav tag. Inside a recommended container div, there are 2 main parts of the navbar. A logo or brand link, and the navigations links. You can align these links to the left or right.`
  }
});

stories.add('Right Aligned', () => (
  <Navbar
    brand={
      <a href="#" className="brand-logo">
        Logo
      </a>
    }
    alignLinks="right"
  >
    <NavItem href="">Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem>
  </Navbar>
));

stories.add('Left Aligned Links', () => (
  <Navbar
    brand={
      <a href="#" className="brand-logo right">
        Logo
      </a>
    }
    alignLinks="left"
  >
    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem>
  </Navbar>
));

stories.add('Center Logo', () => (
  <Navbar
    brand={
      <a href="#" className="brand-logo">
        Logo
      </a>
    }
    centerLogo
    alignLinks="left"
  >
    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem>
  </Navbar>
));

stories.add('Center Children', () => (
  <Navbar
    brand={
      <a href="#" className="brand-logo">
        Logo
      </a>
    }
    centerChildren
    alignLinks="right"
  >
    <NavItem href="">Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem>
  </Navbar>
));

stories.add('Extended Navbar with Tabs', () => (
  <Navbar
    brand={
      <a href="#" className="brand-logo">
        Logo
      </a>
    }
    alignLinks="right"
    extendWith={
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
    }
  >
    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem>
  </Navbar>
));

stories.add('Dropdown Menu', () => (
  <Navbar
    brand={
      <a href="#" className="brand-logo">
        Logo
      </a>
    }
    alignLinks="right"
  >
    <NavItem href="">Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem>
    <Dropdown
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
  </Navbar>
));

stories.add('Icon Links', () => (
  <Fragment>
    <div className="section">
      <Navbar
        brand={
          <a href="#" className="brand-logo">
            Logo
            <Icon>cloud</Icon>
          </a>
        }
        alignLinks="right"
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
      <Navbar
        brand={
          <a href="#" className="brand-logo">
            Logo
          </a>
        }
        alignLinks="right"
      >
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
));

stories.add('Buttons', () => (
  <Navbar
    brand={
      <a href="#" className="brand-logo">
        Logo
      </a>
    }
    alignLinks="right"
  >
    <Button node="a">button</Button>
    <Button node="a">
      button <Icon right>cloud</Icon>
    </Button>
    <Button node="a" large>
      large button
    </Button>
  </Navbar>
));

stories.add('Search Bar', () => (
  <Navbar
    brand={
      <a href="#" className="brand-logo">
        Logo
      </a>
    }
    alignLinks="right"
    search
  >
    <NavItem href="">Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem>
  </Navbar>
));

stories.add('Custom Sidenav', () => (
  <Navbar
    brand={
      <a href="#" className="brand-logo">
        Logo
      </a>
    }
    alignLinks="right"
    sidenav={<li>Custom node!</li>}
  >
    <NavItem href="">Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem>
  </Navbar>
));
