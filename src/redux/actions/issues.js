import * as api from '../../API/API'
import {ADD_ISSUE, GET_ISSUES} from "../constants/constants";

export const getAllIssues = (projectName) => async (dispatch) => {
    try {
        const {data} = await api.getAllIssuesByProjectName(projectName);

        dispatch({type: GET_ISSUES, data})
    } catch (e) {
        console.log(e)
    }
}

export const addNewIssue = (formData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.addIssueToProject(formData)

        dispatch({type: ADD_ISSUE, data})
        navigate(`/issue/${data.id}`)
    } catch (e) {
        console.log(e)
    }
}