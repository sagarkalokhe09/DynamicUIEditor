import axios from 'axios';
import debounce from 'lodash.debounce';
import {
    URL_POST_VALIDATE_USER,
    URL_GET_ROLEMENU,
    ROLE,
    CLIENTID,
    ACTION_VALIDATE_USER
} from '../constant';

export function validateUser(tblUserdata) {
    return function (dispatch) {
        _validateUser(dispatch, tblUserdata);
    }
}
function _validateUser(dispatch, tblUserdata) {
    
    
    axios.post(URL_POST_VALIDATE_USER, tblUserdata)
        .then(function (response) {
            console.log(response);
            dispatch({ type: ACTION_VALIDATE_USER, data: response.data });
        })
        .catch(function (error) {
            console.log(error);
        });

}

export function getRoleMenu(tblUserdata) {
    return function (dispatch) {
        _getRoleMenu(dispatch, tblUserdata);
    }
}
function _getRoleMenu(dispatch, tblUserdata) {

    axios.defaults.headers.common[CLIENTID] = tblUserdata.tblClientMasterID;
    axios.defaults.headers.common[ROLE] = tblUserdata.roles[0];
    axios.get(URL_GET_ROLEMENU + '/' + tblUserdata.roles[0])

        .then((response) => {
            console.log(response);
            dispatch({ type: 'USER_ROLE_MENU', data: response.data });
        })
        .catch((err) => {
            console.log(err)
        })
}


