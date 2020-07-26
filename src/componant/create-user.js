import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import EntryForm from '../common-componant/entry-form';
import { ACTION_DISPATCH_ADD_USER } from '../constant';
export default function CreateUser(props) {
    const dispatch = useDispatch()
    

    const schemaData = [
        {
            field: 'FirstName',
            placeholder: 'FirstName', 
        },
        {
            field: 'LastName',
            placeholder: 'LastName',
        },
        {
            field: 'UserName',
            placeholder: 'UserName',
        },
        {
            field: 'Password',
            placeholder: 'Password',
        },
        {
            field: 'Email',
            placeholder: 'Email',
        },
       
    ]

    const init = {
        FirstName: '',
        LastName: '',
        UserName: '',
        Password: '',
        Email:''
    }

    const onSubmit = (val) => {
        dispatch({ type: ACTION_DISPATCH_ADD_USER, data: val })
    }
  
    return (
        <EntryForm schema={schemaData} onSubmit={onSubmit} initialValues={init} />
    );
}


