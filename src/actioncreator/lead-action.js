import axios from 'axios';
import {
    URL_POST_VALIDATE_USER,
    URL_GET_LEADS,
    ACTION_GET_LEAD,
    ACTION_LEAD_ARTIFACT,
    URL_GET_LEAD_ARTIFACT
} from '../constant';

export function saveLead(tblLeads) {
    return function (dispatch) {
        _saveLead(dispatch, tblLeads);
    }
}
function _saveLead(dispatch, tblLeads) {


    axios.post(URL_GET_LEADS, tblLeads)
        .then(function (response) {
            console.log(response);
            //dispatch({ type: 'VALIDATE_USER', data: response.data });
        })
        .catch(function (error) {
            console.log(error);
        });

}

export function updateLead(tblLeads) {
    return function (dispatch) {
        _updateLead(dispatch, tblLeads);
    }
}
function _updateLead(dispatch, tblLeads) {


    axios.put(URL_GET_LEADS + `/${tblLeads.id}`, tblLeads)
        .then(function (response) {
            console.log(response);
            //dispatch({ type: 'VALIDATE_USER', data: response.data });
        })
        .catch(function (error) {
            console.log(error);
        });

}


export function getLeads(tblUserdata) {
    return function (dispatch) {
        _getLeads(dispatch, tblUserdata);
    }
}
function _getLeads(dispatch, tblUserdata) {

    
    axios.get(URL_GET_LEADS + '/' + tblUserdata.id)

        .then((response) => {
            
            dispatch({ type: ACTION_GET_LEAD, data: response.data });
        })
        .catch((err) => {
            console.log(err)
        })
}

export function getLeadArtifact(selectedLead) {
    return function (dispatch) {
        _getLeadArtifact(dispatch, selectedLead);
    }
}
function _getLeadArtifact(dispatch, selectedLead) {


    axios.get(URL_GET_LEAD_ARTIFACT + '/' + selectedLead.id)

        .then((response) => {

            dispatch({ type: ACTION_LEAD_ARTIFACT, data: response.data });
        })
        .catch((err) => {
            console.log(err)
        })
}


