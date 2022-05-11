import * as api from '../../API/API'
import {GET_ISSUES} from "../constants/constants";

export const getAllIssues = (projectName) => async (dispatch) => {
    try {
        const {data} = await api.getAllIssuesByProjectName(projectName);

        dispatch({type: GET_ISSUES, data})
    } catch (e) {
        console.log(e)
    }
}