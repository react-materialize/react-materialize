import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';

const parseSample = (code) => {
  return code.substring(code.indexOf('<') - 1).replace(/;/, '').trim();
};

const ReactPlayground = ({ code, children }) => {
  const parsed = parseSample(code);
  const highlight = hljs.highlightAuto(parsed).value;
  const markup = {__html: highlight};

  return (
    <div className='playground'>
      {children}
      <pre>
        <code dangerouslySetInnerHTML={markup} />
      </pre>
    </div>
  );
};

ReactPlayground.propTypes = {
  code: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default ReactPlayground;
