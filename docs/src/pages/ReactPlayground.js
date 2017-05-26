import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow.css';

const trimmer = (code) =>
  code.substring(code.indexOf('<') - 1).replace(/;/, '').trim();

const ReactPlayground = ({ code, children, trim = true }) => {
  const sample = trim ? trimmer(code) : code;
  const highlight = hljs.highlightAuto(sample).value;
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
  trim: PropTypes.bool,
  children: PropTypes.element
};

export default ReactPlayground;
