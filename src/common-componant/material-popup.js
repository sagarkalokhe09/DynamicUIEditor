import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover(props) {
    const classes = useStyles();
    const [isOpen, setOpen] = React.useState(props.isOpen);
  //const [anchorEl, setAnchorEl] = React.useState(null);


    const id = isOpen ? 'simple-popover' : undefined;
    useEffect(() => {
        setOpen(props.isOpen)
    }, [props.isOpen])

    const handleClose = () => {
        props.callBack(false); setOpen(false)
    }
    

  return (
    <div>
      
      <Popover
        id={id}
              open={isOpen}
              //anchorEl={anchorEl}
              onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
          >
              {props.children}
      </Popover>
    </div>
  );
}
