//import { combineReducers } from 'redux';
import * as cns from '../constant';

export default function userReducer(state={},action){
	switch(action.type)
	{
		case 'ERROR':{
			return null;
		}
        case cns.ACTION_VALIDATE_USER:{
			return Object.assign({},state,{'userValidated':action.data})
        }
        case 'USER_ROLE_MENU': {
            return Object.assign({}, state, { 'UserMenu': action.data })
        }
        case cns.ACTION_SIGN_IN: {
            return Object.assign({}, state, { 'loginData': action.data })
        }
        case cns.ACTION_GET_LEAD: {
            return Object.assign({}, state, { 'Leads': action.data })
        }
        case cns.ACTION_DETAIL_SELECTED_LEAD: {
            return Object.assign({}, state, { 'selectedLead': action.data })
        }    
        case cns.ACTION_LEAD_ARTIFACT: {
            return Object.assign({}, state, { 'leadArtifact': action.data })
        }
        case cns.ACTION_DISPATCH_OPEN_TOOLBOX: {
            return Object.assign({}, state, { 'openToolbox': action.data })
        } 
            
            
		default:{
			return state;
		}
	}
}
//export default combineReducers({
//	reducerComponant
//})