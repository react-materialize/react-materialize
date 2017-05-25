import React from 'react';

import Card from '../src/Card';
import CardTitle from '../src/CardTitle';
import Icon from '../src/Icon';

export default
<Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
    title="Card Title"
    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    <p><a href="#">This is a link</a></p>
</Card>;
