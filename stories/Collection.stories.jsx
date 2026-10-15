import React from 'react';
import Col from '../src/Col';
import Collection from '../src/Collection';
import CollectionItem from '../src/CollectionItem';
import Icon from '../src/Icon';
import Row from '../src/Row';

export default {
  title: 'Components/Collection',
  component: Collection,
  parameters: {
    docs: {
      description: {
        component: 'Collections allow you to group list objects together.'
      }
    }
  },
  decorators: [
    Story => (
      <Row>
        <Col m={6} s={12}>
          <Story />
        </Col>
      </Row>
    )
  ]
};

export const Basic = {
  render: args => (
    <Collection {...args}>
      <CollectionItem>Alvin</CollectionItem>
      <CollectionItem>Alvin</CollectionItem>
      <CollectionItem>Alvin</CollectionItem>
      <CollectionItem>Alvin</CollectionItem>
    </Collection>
  )
};

export const Links = {
  render: args => (
    <Collection {...args}>
      <CollectionItem href="#">Alvin</CollectionItem>
      <CollectionItem href="#" active>
        Alvin
      </CollectionItem>
      <CollectionItem href="#">Alvin</CollectionItem>
      <CollectionItem href="#">Alvin</CollectionItem>
    </Collection>
  )
};

export const Header = {
  args: { header: 'First Names' },
  render: Basic.render
};

const SecondaryItem = () => (
  <CollectionItem>
    Alvin
    <a href="javascript:void(0)" className="secondary-content">
      <Icon>send</Icon>
    </a>
  </CollectionItem>
);

export const SecondaryContent = {
  args: { header: 'First Names' },
  render: args => (
    <Collection {...args}>
      <SecondaryItem />
      <SecondaryItem />
      <SecondaryItem />
      <SecondaryItem />
    </Collection>
  )
};

const AvatarItem = ({ avatar }) => (
  <CollectionItem className="avatar">
    {avatar}
    <span className="title">Title</span>
    <p>
      First Line <br /> Second Line
    </p>
    <a href="javascript:void(0)" className="secondary-content">
      <Icon>grade</Icon>
    </a>
  </CollectionItem>
);

export const AvatarContent = {
  render: args => (
    <Collection {...args}>
      <AvatarItem
        avatar={
          <img
            src="https://materializecss.com/images/yuna.jpg"
            alt=""
            className="circle"
          />
        }
      />
      <AvatarItem avatar={<Icon className="circle">folder</Icon>} />
      <AvatarItem avatar={<Icon className="circle green">insert_chart</Icon>} />
      <AvatarItem avatar={<Icon className="circle red">play_arrow</Icon>} />
    </Collection>
  )
};
