import * as api from '../../API/API'
import {GET_PROJECT, GET_PROJECTS} from "../constants/constants";

export const getAllProject = () => async (dispatch) => {
    try {
        const {data} = await api.getProjects();

        dispatch({type: GET_PROJECTS, data})
    } catch (e) {
        console.log(e)
    }
}

export const getOneProject = (id) => async (dispatch) => {
    try {
        const {data} = await api.getProject(id)

        dispatch({type: GET_PROJECT, data})
    } catch (e) {
        console.log(e)
    }
}