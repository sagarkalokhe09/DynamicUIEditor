import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    
    inputStyleSagar: {
        boxSizing: 'inherit'
    }
}));
export default function MaterialTextField(props) {
    const cssclasses = useStyles();
    const inputProps = {
        style: { boxSizing: 'inherit'}
    };
    const style = {
        marginTop:'0px'
    }
    return (
        <TextField style={style}  {...props} inputProps={inputProps} />
    );
}