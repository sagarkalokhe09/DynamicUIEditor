import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import userReducer from '../reducers/user-reducer';
import { userEpics } from '../epics/user';
import { leadEpics } from '../epics/lead';

export const rootEpic = combineEpics(
    ...userEpics, ...leadEpics
);

export const rootReducer = combineReducers({
    userReducer
});