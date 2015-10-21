import React from 'react';
import Button from '../src/Button';
import Icon from '../src/Icon';

export default
<div>
    <Button node='a' waves='light'>button</Button>
    <Button node='a' waves='light'>button<Icon left>cloud</Icon></Button>
    <Button node='a' waves='light'>button<Icon right>cloud</Icon></Button>
</div>;
