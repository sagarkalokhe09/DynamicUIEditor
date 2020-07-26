import React from 'react';
import Button from '@material-ui/core/Button';
export default function MaterialButton(props) {
    return (
        <Button {...props} variant="contained" color="primary">{props.text}</Button>
    );
}