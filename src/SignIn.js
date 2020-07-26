import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import * as actioncreator from './actioncreator/actioncreator';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import { ACTION_SIGN_IN } from './constant';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignIn(props) {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: ''

        }, onSubmit: values => {
            props.dispatch({ type: ACTION_SIGN_IN, data : values })
        }
    });
    console.log(formik.values);
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
                    <TextField

                        onChange={formik.handleChange}
                        value={formik.values.UserName}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="UserName"
                        label="Email Address"
                        name="UserName"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField

                        onChange={formik.handleChange}
                        value={formik.values.Password}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Password"
                        label="Password"
                        type="password"
                        id="Password"
                        autoComplete="current-password"
                    />
                    <TextField

                        onChange={formik.handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="OTP"
                        label="OTP"
                        type="OTP"
                        id="Password"
                    />

                    
                    <Button

                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
              </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
}
const mapStateToProps = (state, ownProps) => {
    const { userValidated } = state
    return { userValidated: userValidated }
};
export default connect(
    mapStateToProps,
)(SignIn)