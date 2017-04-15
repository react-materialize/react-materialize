// shameless copied from react-bootstrap

import 'colors';
import express from 'express';
import httpProxy from 'http-proxy';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext, browserHistory } from 'react-router';

import Root from './src/Root';
import routes from './src/Routes';
import { resetID } from '../src/idgen';

import metadata from './generate-metadata';

const port = 4000;
const app = express();
const proxy = httpProxy.createProxyServer();
const target = `http://localhost:8080`;
Root.assetBaseUrl = target;

app.get('/assets/*', (req, res) => {
  resetID();
  proxy.web(req, res, { target });
});

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules/')));

proxy.on('error', e => {
  console.log('Could not connect to webpack proxy'.red);
  console.log(e.toString().red);
});

console.log('Prop data generation started:'.green);

metadata().then(props => {
  console.log('Prop data generation finished:'.green);
  Root.propData = props;

  app.use((req, res) => {
    res.header('Access-Control-Allow-Origin', target);
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const html = renderToString(<RouterContext history={browserHistory} {...renderProps} />);
        res.status(200).send('<!doctype html>' + html);
        // res.status(200).send(renderToString(<RouterContext history={browserHistory} {...renderProps} />));
      } else {
        return res.status(404).send('Not found');
      }
    });
  });
});
app.listen(port, () => {
  console.log(`Server started at:`);
  console.log(`- http://localhost:${port}`);
});
