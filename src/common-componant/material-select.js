import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
   
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
   
}));

export default function MaterialSelect(props) {

    const classes = useStyles();
    const { fullWidth } = props;
    return (
        <FormControl  draggable={props.draggable} fullWidth={fullWidth} className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">{props.placeholder}</InputLabel>
            <Select
                {...props}
            inputProps={{ 'draggable': true }}
                native={true}
                id="demo-simple-select">
                {
                    props.data && props.data.map((row) => {
                        return <MenuItem  value={row.value}>{row.displayName}</MenuItem>
                    })

                }
                
                
            </Select>
        </FormControl>
    );
}