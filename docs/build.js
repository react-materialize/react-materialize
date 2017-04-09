import fsp from 'fs-promise';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import Root from './src/Root';
import routes from './src/Routes';

import metadata from './generate-metadata';

const docsBuilt = path.join(__dirname, 'dist');

const generateHTML = (fileName) => {
  return new Promise(resolve => {
    const location = fileName === 'index.html' ? '/' : `/${fileName}`;
    match({routes, location}, (error, redirectLocation, renderProps) => {
      if (error) { console.error(error); }
      let html = renderToString(
        <RouterContext {...renderProps} />
      );
      html = '<!doctype html>' + html;
      let write = fsp.writeFile(path.join(docsBuilt, fileName), html);
      resolve(write);
    });
  });
};

const BuildDocs = () => {
  return metadata()
    .then(propData => {
      Root.assetBaseUrl = '';
      Root.propData = propData;

      const pagesGenerators = Root.getPages().map(generateHTML);

      return Promise.all(pagesGenerators);
    })
    .then(() => console.log('Built: '.cyan + 'docs'.green));
};

BuildDocs()
  .catch(err => {
    if (err.stack) {
      console.error(err.stack.red);
    } else {
      console.error(err.toString().red);
    }
  });
