import recast from 'recast';
import { parse } from 'babylon';
var n = require("ast-types").namedTypes;
var b = require("ast-types").builders;

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

const reduceDefaultProps = (defaults) => {
  return defaults[0].expression.right.properties.map(prop => {
    return (
      { name: prop.key.name, value: prop.value.value }
    );
  });
};

const reducePropTypes = (propTypes) => {
  return propTypes[0].expression.right.properties.map(prop => {
    const { key, value, leadingComments: comments = null } = prop;
    console.log(key.name);
    return ({
      name: key.name,
      type: value.property.name,
      comments: comments && comments[0].value.replace(/\*/g, '').trim()
    });
  });
};

const reduceProps = (props) => {
  const ret = [];
  if (props.defaultProps) {
    ret.push(reduceDefaultProps(props.defaultProps));
  }

  if (props.propTypes) {
    ret.push(reducePropTypes(props.propTypes));
  }

  return ret;
};

const babylon = {
  parse: (src) => {
    var file = parse(src, options);
    file.program.comments = file.comments;
    return file.program;
  }
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

export default (src) => {
  const ast = recast.parse(src, { parser: babylon });
  console.log(recast.visit(ast))
  const parsed = ast.program.body;
  if (!parsed.length) {
    throw new Error(ERROR_MISSING_DEFINITION);
  };

  let ofType = parsed.filter(p => p.type === EXPR);
  ofType = groupByPropertyName(ofType);
  ofType = reduceProps(ofType);
  ofType = combineProps(ofType);

  return ofType[0] || ofType;
};
