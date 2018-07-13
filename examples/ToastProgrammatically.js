import React from 'react';
import Button from '../src/Button'

function() {
    window.Materialize.toast('I am a toast!', 4000);
}
function hideToast() {
    const toast = document.querySelector('#toast-container>.toast.panning');
    if (toast) {
        toast.remove();
    }
}

export default
<div>
    <Button onClick={() => {
            window.Materialize.toast('I am a toast!', 50000);
        }
    }>
        Click to show
    </Button>
    <Button onClick={() => {
            const toast = document.querySelector('#toast-container>.toast');
            console.log(toast)
            if (toast) {
                toast.remove();
            }
        }
    }>
        Click to hide
    </Button>
</div>