// Shameless copied from react-bootstrap
import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../src/Table';

let cleanDocletValue = str => str.trim().replace(/^\{/, '').replace(/\}$/, '');
let capitalize = str => str[0].toUpperCase() + str.substr(1);

class PropTable extends React.Component {
  constructor () {
    super();
    this._renderRows = this._renderRows.bind(this);
  }

  componentWillMount () {
    this.propsData = this.context.metadata[this.props.component];
  }

  render () {
    return (
      <Table bordered striped className='prop-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          { this._renderRows(this.propsData.props) }
        </tbody>
      </Table>
    );
  }

  _renderRows (propsData) {
    return Object.keys(propsData)
      .sort()
      .filter(propName => propsData[propName].type)
      .map(propName => {
        let propData = propsData[propName];

        return (
          <tr key={propName} className='prop-table-row'>
            <td>
              {propName}
            </td>
            <td>
              <div>{this.getType(propData)}</div>
            </td>
            <td>{propData.defaultValue}</td>
            <td>
              <div className='prop-desc' dangerouslySetInnerHTML={{__html: propData.descHtml }} />
            </td>
          </tr>
        );
      });
  }

  getType (prop) {
    let type = prop.type || {};
    let name = this.getDisplayTypeName(type.name);
    let doclets = prop.doclets || {};

    switch (name) {
      case 'object':
        return name;
      case 'union':
        return type.value.reduce((current, val, i, list) => {
          let item = this.getType({ type: val });
          if (React.isValidElement(item)) {
            item = React.cloneElement(item, {key: i});
          }
          current = current.concat(item);

          return i === (list.length - 1) ? current : current.concat(' | ');
        }, []);
      case 'array':
        let child = this.getType({ type: type.value });

        return <span>{'array<'}{ child }{'>'}</span>;
      case 'enum':
        return this.renderEnum(type);
      case 'custom':
        return cleanDocletValue(doclets.type || name);
      default:
        return name;
    }
  }

  getDisplayTypeName (typeName) {
    if (typeName === 'func') {
      return 'function';
    } else if (typeName === 'bool') {
      return 'boolean';
    }

    return typeName;
  }

  renderEnum (enumType) {
    const enumValues = enumType.value || [];

    const renderedEnumValues = [];
    enumValues.forEach(function renderEnumValue (enumValue, i) {
      if (i > 0) {
        renderedEnumValues.push(
          <span key={`${i}c`}>, </span>
        );
      }

      renderedEnumValues.push(
        <code key={i}>{enumValue}</code>
      );
    });

    return (
      <span>one of: {renderedEnumValues}</span>
    );
  }
}

PropTable.contextTypes = {
  metadata: PropTypes.object
};

export default PropTable;
