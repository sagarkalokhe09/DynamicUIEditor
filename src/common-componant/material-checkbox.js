import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function MaterialCheckBox(props) {
    return (
        <Checkbox
            {...props}
            defaultChecked
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }} />
    );
}