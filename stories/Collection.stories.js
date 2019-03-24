import React from 'react';
import { storiesOf } from '@storybook/react';
import Col from '../src/Col';
import Row from '../src/Row';
import Collection from '../src/Collection';
import CollectionItem from '../src/CollectionItem';

const stories = storiesOf('2. components/Collection', module);

stories.addParameters({
  info: {
    text: 'Collections allow you to group list objects together.'
  }
});

stories.addDecorator(story => <Row><Col m={6} s={12}>{story()}</Col></Row>)

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
    <CollectionItem href='#'>Alvin</CollectionItem>
    <CollectionItem href='#' active>Alvin</CollectionItem>
    <CollectionItem href='#'>Alvin</CollectionItem>
    <CollectionItem href='#'>Alvin</CollectionItem>
  </Collection>
));

stories.add('Header', () => (
  <Collection header='First Names'>
    <CollectionItem>Alvin</CollectionItem>
    <CollectionItem>Alvin</CollectionItem>
    <CollectionItem>Alvin</CollectionItem>
    <CollectionItem>Alvin</CollectionItem>
  </Collection>
));
