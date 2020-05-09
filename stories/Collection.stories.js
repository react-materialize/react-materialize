import React from 'react';
import { storiesOf } from '@storybook/react';
import Col from '../src/Col';
import Row from '../src/Row';
import Collection from '../src/Collection';
import CollectionItem from '../src/CollectionItem';
import Icon from '../src/Icon';

const stories = storiesOf('Components/Collection', module);

stories.addParameters({
  info: {
    text: 'Collections allow you to group list objects together.'
  }
});

stories.addDecorator(story => (
  <Row>
    <Col m={6} s={12}>
      {story()}
    </Col>
  </Row>
));

stories.add('Basic', () => (
  <Collection>
    <CollectionItem>Alvin</CollectionItem>
    <CollectionItem>Alvin</CollectionItem>
    <CollectionItem>Alvin</CollectionItem>
    <CollectionItem>Alvin</CollectionItem>
  </Collection>
));

stories.add('Links', () => (
  <Collection>
    <CollectionItem href="#">Alvin</CollectionItem>
    <CollectionItem href="#" active>
      Alvin
    </CollectionItem>
    <CollectionItem href="#">Alvin</CollectionItem>
    <CollectionItem href="#">Alvin</CollectionItem>
  </Collection>
));

stories.add('Header', () => (
  <Collection header="First Names">
    <CollectionItem>Alvin</CollectionItem>
    <CollectionItem>Alvin</CollectionItem>
    <CollectionItem>Alvin</CollectionItem>
    <CollectionItem>Alvin</CollectionItem>
  </Collection>
));

stories.add('Secondary Content', () => (
  <Collection header="First Names">
    <CollectionItem>
      Alvin
      <a href="javascript:void(0)" className="secondary-content">
        <Icon>send</Icon>
      </a>
    </CollectionItem>
    <CollectionItem>
      Alvin
      <a href="javascript:void(0)" className="secondary-content">
        <Icon>send</Icon>
      </a>
    </CollectionItem>
    <CollectionItem>
      Alvin
      <a href="javascript:void(0)" className="secondary-content">
        <Icon>send</Icon>
      </a>
    </CollectionItem>
    <CollectionItem>
      Alvin
      <a href="javascript:void(0)" className="secondary-content">
        <Icon>send</Icon>
      </a>
    </CollectionItem>
  </Collection>
));

stories.add('Avatar Content', () => (
  <Collection>
    <CollectionItem className="avatar">
      <img
        src="https://materializecss.com/images/yuna.jpg"
        alt=""
        className="circle"
      />
      <span className="title">Title</span>
      <p>
        First Line <br /> Second Line
      </p>
      <a href="javascript:void(0)" className="secondary-content">
        <Icon>grade</Icon>
      </a>
    </CollectionItem>
    <CollectionItem className="avatar">
      <Icon className="circle">folder</Icon>
      <span className="title">Title</span>
      <p>
        First Line <br /> Second Line
      </p>
      <a href="javascript:void(0)" className="secondary-content">
        <Icon>grade</Icon>
      </a>
    </CollectionItem>
    <CollectionItem className="avatar">
      <Icon className="circle green">insert_chart</Icon>
      <span className="title">Title</span>
      <p>
        First Line <br /> Second Line
      </p>
      <a href="javascript:void(0)" className="secondary-content">
        <Icon>grade</Icon>
      </a>
    </CollectionItem>
    <CollectionItem className="avatar">
      <Icon className="circle red">play_arrow</Icon>
      <span className="title">Title</span>
      <p>
        First Line <br /> Second Line
      </p>
      <a href="javascript:void(0)" className="secondary-content">
        <Icon>grade</Icon>
      </a>
    </CollectionItem>
  </Collection>
));
