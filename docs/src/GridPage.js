import React from 'react';
import Row from '../../src/Row';
import Col from '../../src/Col';
import ReactPlayground from './ReactPlayground';

import grid from '../examples/Grid';

var path = require('path');
var fs = require('fs');

var GridPage = React.createClass({
    render() {
        return (
            <div className="container">
                <Row>
                    <h3 className="s12">12 columns</h3>
                </Row>
                <ReactPlayground code={fs.readFileSync(path.join(__dirname, '../examples/Grid.js'), 'utf8')}>
                    {grid}
                </ReactPlayground>
            </div>
        );
    }
});

export default GridPage;
