import { ofType } from 'redux-observable';
import Axios from 'axios-observable';
import { dispatch } from 'redux';
import { catchError, mergeMap, pipe } from 'rxjs/operators';
import { WithLatestFrom, map } from 'rxjs/operators';
import { getLeadData } from '../actions/actions';
import {
    URL_POST_VALIDATE_USER,
    URL_GET_ROLEMENU,
    ROLE,
    CLIENTID,
    URL_GET_LEADS,
    ACTION_DISPATCH_GET_LEAD,
    ACTION_VALIDATE_USER,
    ACTION_SIGN_IN
} from '../constant';




export const getLeads = (action$, state$, { userService }) =>
    action$.pipe(
        ofType(ACTION_DISPATCH_GET_LEAD), mergeMap(() => {
            const { userValidated } = state$.value.userReducer;
            return Axios.get(URL_GET_LEADS + '/' + userValidated.id)
                .pipe(map(response => getLeadData(response.data)))

        }
        )
    );



export const leadEpics = [getLeads];