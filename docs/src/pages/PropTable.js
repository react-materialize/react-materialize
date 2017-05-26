// Shameless copied from react-bootstrap
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '../../../src/Table';

import parse from '../helper/doc-gen';

class PropTable extends Component {
  render () {
    const {
      component,
      header
    } = this.props;

    const docs = parse(component);

    return docs.length && (
      <div className='propTypeDescription section'>
        <h5>{`${header} PropTypes`}</h5>
        <Table bordered className='prop-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {docs.map(prop => (
              <tr key={prop.name} className='prop-table-row'>
                <td>{prop.name}</td>
                <td>{prop.type}</td>
                <td>{prop.default}</td>
                <td className='prop-desc' style={{width: '50%'}}>
                  <div dangerouslySetInnerHTML={{__html: prop.comments}} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

PropTable.propTypes = {
  header: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired
};

export default PropTable;
