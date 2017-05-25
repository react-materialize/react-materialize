import React from 'react';
import Button from '../src/Button';
import Icon from '../src/Icon';

export default
<div>
    <Button node='a' waves='light' large>Button</Button>
    <Button node='a' waves='light' large>Button<Icon left>cloud</Icon></Button>
    <Button node='a' waves='light' large>Button<Icon right>cloud</Icon></Button>
</div>;
