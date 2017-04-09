import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import Root from './src/Root';
import routes from './src/Routes';

window.React = React;
Root.propData = window.PROP_DATA;

render(<Router history={browserHistory} children={routes} />, document);
