import * as api from '../../API/API'
import {ADD_PROJECT, DELETE_PROJECT, GET_PROJECT, GET_PROJECTS} from "../constants/constants";

export const getAllProject = () => async (dispatch) => {
    try {
        const {data} = await api.getProjects();

        dispatch({type: GET_PROJECTS, data})
    } catch (e) {
        console.log(e)
    }
}

export const addNewProject = (formData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.createProject(formData);

        // dispatch({type: ADD_PROJECT, data})
        navigate(`/project/${data.id}`)
    } catch (e) {
        console.log(e);
    }
}

export const deleteOneProject = id => async (dispatch) => {
    try {
        const {data} = await api.deleteProject(id);

        dispatch({type: DELETE_PROJECT, data});
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