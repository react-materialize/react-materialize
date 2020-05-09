import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../src/Table';

const stories = storiesOf('CSS/Table', module);

stories.addParameters({
  info: {
    text: `Tables are a nice way to organize a lot 
    of data. We provide a few utility classes to 
    help you style your table as easily as possible. 
    In addition, to improve mobile experience, all 
    tables on mobile-screen widths are centered automatically.`
  }
});

stories.add('Default', () => (
  <Table>
    <thead>
      <tr>
        <th data-field="id">Name</th>
        <th data-field="name">Item Name</th>
        <th data-field="price">Item Price</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Alvin</td>
        <td>Eclair</td>
        <td>$0.87</td>
      </tr>
      <tr>
        <td>Alan</td>
        <td>Jellybean</td>
        <td>$3.76</td>
      </tr>
      <tr>
        <td>Jonathan</td>
        <td>Lollipop</td>
        <td>$7.00</td>
      </tr>
    </tbody>
  </Table>
));
