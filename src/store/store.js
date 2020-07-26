import { applyMiddleware, createStore } from 'redux'

import {createLogger} from 'redux-logger';
import { rootReducer, rootEpic } from '../reducers/root';
import { createEpicMiddleware } from 'redux-observable';
import  * as userService  from '../services/user-service';
const dependancy = {
    userService
}
const epicMiddleware = createEpicMiddleware({
    dependencies: dependancy
});

var logger =createLogger({
	collapsed:true
})

var store =createStore(
rootReducer,
    applyMiddleware(epicMiddleware)
)

epicMiddleware.run(rootEpic);

export default store;