// Shameless copied from react-bootstrap
import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../../src/Table';
import {parse as parseDoctrine} from 'doctrine';
import { parse } from 'react-docgen';

let cleanDocletValue = str => str.trim().replace(/^\{/, '').replace(/\}$/, '');
let capitalize = str => str[0].toUpperCase() + str.substr(1);

const generatePropType = (type) => {
  switch (type.name) {
    case 'func':
      return 'function';

    case 'custom':
      const deprecatedInfo = getDeprecatedInfo(type);

      if (deprecatedInfo !== false) {
        return generatePropType({
          name: deprecatedInfo.propTypes,
        });
      }

      return type.raw;

    case 'enum':
    case 'union':
      const values = type.value.map((v) => v.value || v.name).join('<br>&nbsp;');
      return `${type.name}:<br>&nbsp;${values}<br>`;

    default:
      return type.name;
  }
}

function generateDescription(required, description, type) {
  let deprecated = '';

  if (type.name === 'custom') {
    const deprecatedInfo = getDeprecatedInfo(type);

    if (deprecatedInfo) {
      deprecated = `*Deprecated*. ${deprecatedInfo.explanation}<br><br>`;
    }
  }

  const parsed = parseDoctrine(description);
  // const pared = description;

  // two new lines result in a newline in the table. all other new lines
  // must be eliminated to prevent markdown mayhem.
  const jsDocText = parsed.description.replace(/\n\n/g, '<br>').replace(/\n/g, ' ');
  // const jsDocText = 'jsdoctext here';

  // if (parsed.tags.some((tag) => tag.title === 'ignore')) return null;
  let signature = '';

  if (type.name === 'func' && parsed.tags.length > 0) {
    // Remove new lines from tag descriptions to avoid markdown errors.
    parsed.tags.forEach((tag) => {
      if (tag.description) {
        tag.description = tag.description.replace(/\n/g, ' ');
      }
    });

    // Split up the parsed tags into 'arguments' and 'returns' parsed objects. If there's no
    // 'returns' parsed object (i.e., one with title being 'returns'), make one of type 'void'.
    const parsedLength = parsed.tags.length;
    let parsedArgs = [];
    let parsedReturns;

    if (parsed.tags[parsedLength - 1].title === 'returns') {
      parsedArgs = parsed.tags.slice(0, parsedLength - 1);
      parsedReturns = parsed.tags[parsedLength - 1];
    } else {
      parsedArgs = parsed.tags;
      parsedReturns = {type: {name: 'void'}};
    }

    signature += '<br><br>**Signature:**<br>`function(';
    signature += parsedArgs.map((tag) => `${tag.name}: ${tag.type.name}`).join(', ');
    signature += `) => ${parsedReturns.type.name}` + '`<br>';
    signature += parsedArgs.map((tag) => `*${tag.name}:* ${tag.description}`).join('<br>');
    if (parsedReturns.description) {
      signature += `<br> *returns* (${parsedReturns.type.name}): ${parsedReturns.description}`;
    }
  }

  return `${deprecated} ${jsDocText}${signature}`;
}

class PropTable extends React.Component {
  render () {
    const {
      component,
      header
    } = this.props;

    let requiredProps = 0;

    let text = `${header}
| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|\n`;

    const componentInfo = parse(component);

    for (let key in componentInfo.props) {
      const prop = componentInfo.props[key];

      const description = generateDescription(prop.required, prop.description, prop.type);

      if (description === null) continue;

      let defaultValue = '';

      // if (prop.defaultValue) {
        // defaultValue = prop.defaultValue.value.replace(/\n/g, '');
      // }

      // if (prop.required) {
        // key = `<span style="color: #31a148">${key} \*</span>`;
        // requiredProps += 1;
      // }

      // if (prop.type.name === 'custom') {
        // if (getDeprecatedInfo(prop.type)) {
          // key = `~~${key}~~`;
        // }
      // }

      text += `| ${key} | ${generatePropType(prop.type)} | ${defaultValue} | ${description} |\n`;
    }

    text += 'Other properties (not documented) are applied to the root element.';

    const requiredPropFootnote = (requiredProps === 1) ? '* required property' :
      (requiredProps > 1) ? '* required properties' :
        '';

    return (
      <div className='propTypeDescription'>
        <Table>
          <tbody>
            { this._renderRows(componentInfo.props) }
          </tbody>
        </Table>
        <div>
          {requiredPropFootnote}
        </div>
      </div>
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
            <td>{/*propData.defaultValue*/}</td>
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

PropTable.propTypes = {
  header: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired
};

export default PropTable;
