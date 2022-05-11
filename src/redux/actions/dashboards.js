import * as api from '../../API/API'
import {ADD_DASHBOARDS, GET_DASHBOARDS} from "../constants/constants";

export const getAllDashboards = () => async (dispatch) => {
    try {
        const {data} = await api.getDashboards();

        dispatch({type: GET_DASHBOARDS, data})
    } catch (e) {
        console.log(e)
    }
}

export const addNewDashboards = (formData) => async (dispatch) => {

    const {name, description, editPermissions, sharePermissions} = formData;

    try {
        const {data} = await api.addDashboards(name, description, editPermissions, sharePermissions);
        dispatch({type: ADD_DASHBOARDS, data})
    } catch (e) {
        console.log(e)
    }
}