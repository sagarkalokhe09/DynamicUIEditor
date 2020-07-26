import { ofType } from 'redux-observable';
import Axios from 'axios-observable';
import { useDispatch } from 'react-redux'
import { catchError, mergeMap, pipe } from 'rxjs/operators';
import { withLatestFrom, map } from 'rxjs/operators';
import { userValidated, getMenu, userAdded} from '../actions/actions';
import {
    URL_POST_VALIDATE_USER,
    URL_GET_ROLEMENU,
    ROLE,
    CLIENTID,
    ACTION_USER_GET_ROLE_MENU,
    ACTION_DISPATCH_ADD_USER,
    ACTION_SIGN_IN,
    URL_POST_ADD_USER
} from '../constant';



export const validateUser = (action$, state$, { userService }) =>
    action$.pipe(
        ofType(ACTION_SIGN_IN), mergeMap(() => {
            const { loginData } = state$.value.userReducer;
            return Axios.post(URL_POST_VALIDATE_USER, loginData)
                .pipe(map(response => userValidated(response.data)))

        }
        )
    );

export const getRoleMenu = (action$, state$, { userService }) =>
    action$.pipe(
        ofType(ACTION_USER_GET_ROLE_MENU), mergeMap(() => {
            const { userValidated } = state$.value.userReducer;
            Axios.defaults.headers.common[CLIENTID] = userValidated.tblClientMasterID;
            Axios.defaults.headers.common[ROLE] = userValidated.roles[0];

            return Axios.get(URL_GET_ROLEMENU + '/' + userValidated.roles[0])
                .pipe(map(response => getMenu(response.data)))

        }
        )
    );

export const addUser = (action$, state$, { userService }) =>
    action$.pipe(
        
        ofType(ACTION_DISPATCH_ADD_USER),
        //withLatestFrom(action$),
        mergeMap((data) => {
            return Axios.post(URL_POST_ADD_USER, data.data)
                .pipe(map(response => userAdded(response.data)))

        }
        )
    );





export const userEpics = [validateUser, getRoleMenu, addUser];