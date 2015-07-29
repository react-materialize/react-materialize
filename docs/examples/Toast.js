import React from 'react';
import OverlayTrigger from '../../src/OverlayTrigger';
import Button from '../../src/Button';
import Toast from '../../src/Toast';

export default
<OverlayTrigger overlay={<Toast>Toast!</Toast>}>
  <Button>Toast!</Button>
</OverlayTrigger>;
