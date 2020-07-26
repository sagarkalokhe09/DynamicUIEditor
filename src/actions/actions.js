import {
    ACTION_VALIDATE_USER,
    ACTION_USER_ROLE_MENU,
    ACTION_DISPATCH_ADD_USER_SUCESSFULLY,
    ACTION_GET_LEAD
} from '../constant';


export const userValidated = (data) => ({ type: ACTION_VALIDATE_USER, data })

export const getMenu = (data) => ({ type: ACTION_USER_ROLE_MENU, data })

export const getLeadData = (data) => ({ type: ACTION_GET_LEAD, data })

export const userAdded = (data) => ({ type: ACTION_DISPATCH_ADD_USER_SUCESSFULLY, data })

