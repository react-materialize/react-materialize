import React from 'react';
import SideNav from '../src/SideNav';
import SideNavItem from '../src/SideNavItem';
import Button from '../src/Button';
import Icon from '../src/Icon';

// Served from .storybook/public via staticDirs.
const reactMaterializeLogo = 'react-materialize-logo.svg';

export default {
  title: 'Javascript/SideNav',
  component: SideNav,
  parameters: {
    docs: { description: { component: 'This is a slide out menu.' } }
  }
};

export const Default = {
  render: () => (
    <div>
      <style>
        {`
        #root > div > div {
          z-index: 99999 !important;
        }
      `}
      </style>
      <SideNav
        trigger={<Button>SIDE NAV DEMO</Button>}
        options={{ draggable: true }}
      >
        <SideNavItem
          userView
          user={{
            background: 'https://picsum.photos/seed/rm-tech/640/480',
            image: reactMaterializeLogo,
            name: 'John Doe',
            email: 'jdandturk@gmail.com'
          }}
        />
        <SideNavItem href="#!icon" icon={<Icon>cloud</Icon>}>
          First Link With Icon
        </SideNavItem>
        <SideNavItem href="#!second">Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href="#!third">
          Third Link With Waves
        </SideNavItem>
      </SideNav>
    </div>
  )
};
