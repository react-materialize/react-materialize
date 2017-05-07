import recast from 'recast';
import { parse } from 'babylon';

const ERROR_MISSING_DEFINITION = 'No suitable component definition found.';
const EXPR = 'ExpressionStatement';

const options = {
  sourceType: 'module',
  plugins: [
    'objectRestSpread',
    'jsx'
  ]
};

const groupByPropertyName = (xs) => (
  xs.reduce((rv, x) => {
    var find = x.expression.left.property.name;
    (rv[find] = rv[find] || []).push(x);
    return rv;
  }, {})
);

const reduceDefaultProps = (defaults = []) => {
  return defaults.length && defaults[0].expression.right.properties.map(prop => {
    return (
      { name: prop.key.name, value: prop.value.value }
    );
  });
};

const generateType = (value) => {
  if (value.property !== undefined) {
    if (value.object.property) {
      return value.object.property.name;
    }
    return value.property.name;
  }

  if (value.arguments[0].properties && value.arguments[0].properties.length) {
    return 'object';
  }

  if (value.arguments[0].elements && value.arguments[0].elements.length) {
    return 'one of: ' + value.arguments[0].elements.map(el => ` ${el.value}`);
  }

  return value.arguments[0].property.name;
};

const reducePropTypes = (propTypes) => {
  return propTypes[0].expression.right.properties.map(prop => {
    const { key, value, leadingComments: comments = null } = prop;
    return ({
      name: key.name,
      type: generateType(value),
      comments: comments && comments[0].value.replace(/\*/g, '').trim()
    });
  });
};

const reduceProps = (props) => {
  return {
    defaultProps: reduceDefaultProps(props.defaultProps) || {},
    propTypes: reducePropTypes(props.propTypes)
  };
};

const combineProps = (props) => {
  const { defaultProps, propTypes } = props;
  if (!defaultProps) {
    return props;
  }

  let output = [];
  [...defaultProps, ...propTypes].forEach((el) => {
    output.forEach((v, i) => {
      if (v.name === el.name) {
        el['default'] = v.value;
        output.splice(i, 1);
      }
    });
    output.push(el);
  });

  return output;
};

const babylonParser = {
  parse: (src) => {
    var file = parse(src, options);
    file.program.comments = file.comments;
    return file.program;
  }
};

export default (src) => {
  const ast = recast.parse(src, { parser: babylonParser });
  const parsed = ast.program.body;
  if (!parsed.length) {
    throw new Error(ERROR_MISSING_DEFINITION);
  };

  // TODO fix this
  let ofType = parsed.filter(p => p.type === EXPR);
  ofType = groupByPropertyName(ofType);
  ofType = reduceProps(ofType);
  ofType = combineProps(ofType);

  return ofType;
};
