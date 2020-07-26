import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import HtmlControlDrawer  from './html-controls-drawer';

function BuilderForm(props) {
    

    return (
        <>
            <HtmlControlDrawer open='true'/>
        </>
    );
}
export default BuilderForm
