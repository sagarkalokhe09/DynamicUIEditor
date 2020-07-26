import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useFormik } from 'formik';
import * as con from '../constant';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
           // width: '25ch',
        },
    },
}));

export default function EntryForm(props) {
    const classes = useStyles();
    const { schema } = props;
    const formik = useFormik({
        initialValues: props.initialValues, onSubmit: values => {
            props.onSubmit(values)
        }
    });

    
    console.log(formik.values)
    return (
        <React.Fragment>
            <CssBaseline />
            <Container component="main" maxWidth="md">
                <form onSubmit={formik.handleSubmit} className={classes.root} noValidate autoComplete="off">
                    {

                        schema.map((data) => {

                            return  <TextField
                                
                                required={data.required}
                                id={data.field}
                                name={data.field}
                                onChange={formik.handleChange}
                                //value={formik.values[data.field]}
                                label={data.placeholder}
                                variant="outlined"
                            />

                        })

                    }


                    <div>
                        <Button
                            fullWidth
                            type="submit"
                            size="large"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Save
                </Button>

                    </div>


                </form>
            </Container>

        </React.Fragment>
    );
}

