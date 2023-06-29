import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


import MaterialButton from '../common-componant/material-button';
import MaterialCheckBox from '../common-componant/material-checkbox';
import MaterialDatePicker from '../common-componant/material-datepicker';
import MaterialRadioButton from '../common-componant/material-radio-button';
import MaterialTextField from '../common-componant/material-textfield';
import MaterialSelect from '../common-componant/material-select';
import MuiVirtualizedTable from '../common-componant/material-table';
import SimplePopover from '../common-componant/material-popup';
import UiEditor from '../componant/ui-editor';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ACTION_DISPATCH_OPEN_TOOLBOX } from '../constant';
const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
    select: {
        marginLeft: '-8px',
    },
    drawerupperpane: {
        maxHeight: '40%',
        overflowY: 'scroll',

    },
    drawerlowerpane: {
        maxHeight: '59%',

    },
    editor: {
        backgroundColor: 'Red',
        width: '100%',
        height: '100%'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        padding: '15px',
        marginTop: theme.spacing(1),
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },


    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    shiftTextLeft: {
        marginRight: drawerWidth,
    }
}));


function HtmlControlDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    //const [open, setOpen] = React.useState(props.open);
    const [openPopup, setOpenPopup] = React.useState(false);

    const [property, setProperty] = React.useState(' ');
    const [label, setLabel] = React.useState(' ');
    const [dataSource, setdataSource] = React.useState();
    const [defaultCheck, setDefaultCheck] = React.useState();
    const [configData, setConfigData] = React.useState();
    const [controlType, setControl] = React.useState();
    const [newControl, setNewControl] = React.useState();
    const open = useSelector(state => state.userReducer.openToolbox)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: ''

        }, onSubmit: values => {
            setOpenPopup(false);
        }
    });

    const dropDownData = [{ value: 1, displayName: 'live' }, { value: 2, displayName: 'static' }]
    const handleDrawerOpen = () => {
        //setOpen(true);
    };

    const handleDrawerClose = () => {
        dispatch({ type: ACTION_DISPATCH_OPEN_TOOLBOX, data:false})
    };


    const callBack = (open) => {
        setOpenPopup(open);
    }

    const onDrag = (e) => {
    }

    const onDrop = (event) => {
        event.preventDefault();
        alert('Drop')
    }
    const onDragOver = (event) => {
        event.preventDefault();
        alert('drag over')

    }

    const handleSubmit = () => {

        setConfigData({
            controlType,
            property,
            label,
            dataSource
        });
        setOpenPopup(false)
        setNewControl(Math.random());
    }

    return (
        <>

            {/* <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}>

                    <MenuIcon />
                </IconButton>


            </Toolbar>*/}
            <div className={open ? classes.shiftTextLeft : ''}>
                <UiEditor newControl={newControl} drawerOpen={open} configData={configData} />
            </div>


            <SimplePopover callBack={callBack}   >
                <div className={classes.form}>
                    <MaterialTextField
                        onChange={(e) => { setProperty(e.target.value) }}
                        value={property}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="UserName"
                        label="Property"
                        name="UserName"
                        autoComplete="email"
                        autoFocus
                    />

                    <MaterialTextField
                        onChange={(e) => { setLabel(e.target.value) }}
                        value={label}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Label"
                        label="Label"
                        id="Label"
                        autoComplete="current-password" />

                    <MaterialSelect
                        onChange={(e) => { setdataSource(e.target.value) }}
                        value={dataSource}
                        data={dropDownData}
                        fullWidth
                        placeholder='DataSource' />

                    <MaterialCheckBox checked={defaultCheck} onChange={(e) => { setDefaultCheck(e.target.checked) }} />
                    <Button
                        onClick={handleSubmit}
                        type="input"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Save
          </Button>
                </div>

            </SimplePopover>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <div className={classes.drawerupperpane}>
                    <List>
                        {['Button', 'TextBox', 'CheckBox', 'Radio Button', 'DatePicker', 'DropDown', 'Table', 'TreeView', 'Fileupload'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText draggable onDragStart={onDrag} key={text} onClick={() => {
                                    setControl(text);
                                    setOpenPopup(!openPopup);
                                    setLabel('');
                                    setProperty('')
                                }} primary={text} />

                            </ListItem>
                        ))}
                    </List>
                </div>
                <Divider />
                <div className={classes.drawerlowerpane}>
                    <div className={classes.form}>
                        <MaterialTextField
                            onChange={(e) => { setProperty(e.target.value) }}
                            value={property}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="UserName"
                            label="Property"
                            name="UserName"
                        />

                        <MaterialTextField
                            onChange={(e) => { setLabel(e.target.value) }}
                            value={label}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="Label"
                            label="Label"
                            id="Label"
                        />

                        <MaterialSelect
                            className={classes.select}
                            onChange={(e) => { setdataSource(e.target.value) }}
                            value={dataSource}
                            data={dropDownData}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            placeholder='DataSource' />

                        <MaterialCheckBox checked={defaultCheck} onChange={(e) => { setDefaultCheck(e.target.checked) }} />
                        <Button
                            onClick={handleSubmit}
                            type="input"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Save
                        </Button>
                    </div>
                </div>

                <div>
                </div>

            </Drawer>
        </>
    );
}
export default HtmlControlDrawer
