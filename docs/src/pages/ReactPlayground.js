import React from 'react';
import PropTypes from 'prop-types';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

import * as RM from '../../../src/';

const trimmer = (code) =>
  code.substring(code.indexOf('<') - 1).replace(/;/, '').trim();

const ReactPlayground = ({ code, trim = true, editable = true }) => {
  const sample = trim ? trimmer(code) : code;

  return (
    <div className='playground'>
      <LiveProvider code={sample} scope={RM}>
        {editable && <LivePreview />}
        <LiveEditor />
        {editable && <LiveError />}
      </LiveProvider>
    </div>
  );
};

ReactPlayground.propTypes = {
  code: PropTypes.string.isRequired,
  trim: PropTypes.bool,
  editable: PropTypes.bool
};

export default ReactPlayground;
