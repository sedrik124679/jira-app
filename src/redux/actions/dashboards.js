import * as api from '../../API/API'
import {ADD_DASHBOARDS, DELETE_DASHBOARD, GET_DASHBOARDS} from "../constants/constants";

export const getAllDashboards = () => async (dispatch) => {
    try {
        const {data} = await api.getDashboards();
        const {dashboards} = data
        dispatch({type: GET_DASHBOARDS, dashboards})
    } catch (e) {
        console.log(e)
    }
}

export const addNewDashboards = (formData) => async (dispatch) => {
    try {
        const {data} = await api.addDashboards(formData);

        dispatch({type: ADD_DASHBOARDS, data})
    } catch (e) {
        console.log(e)
    }
}

export const deleteOneDashboard = (id) => async (dispatch) => {
    try {
        const {data} = await api.deleteDashboard(id);

        dispatch({type: DELETE_DASHBOARD, data})
    } catch (e) {
        console.log(e)
    }
}