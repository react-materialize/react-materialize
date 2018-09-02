import React from 'react';
import Button from '../src/Button';

export default 
  <div>
    <Button
      onClick={() => {
        window.Materialize.toast('I am a toast!', 10000);
      }}
    >
      Show Toast
    </Button>
    {'  '}
    <Button
      onClick={() => {
        const toast = document.querySelector('#toast-container>.toast');
        if (toast) {
          toast.remove();
        }
      }}
    >
      Hide Toast
    </Button>
  </div>
