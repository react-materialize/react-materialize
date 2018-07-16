import React from 'react';
import Button from '../src/Button';

export default
<div>
    <Button onClick={() => {
            window.Materialize.toast('I am a toast!', 10000);
        }
    }>
        Click to show
    </Button>
    <Button onClick={() => {
            const toast = document.querySelector('#toast-container>.toast');
            if (toast) {
                toast.remove();
            }
        }
    }>
        Click to hide
    </Button>
</div>
