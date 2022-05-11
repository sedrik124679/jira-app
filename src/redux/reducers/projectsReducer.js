import {GET_PROJECT, GET_PROJECTS} from "../constants/constants";

const projectsReducer = (state = {projects: null, project: null}, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {...state, projects: action.data, loading: false, errors: null}
        case GET_PROJECT: {
            return {...state, project: action.data, loading: false, errors: null}
        }
        default:
            return state
    }
}

export default projectsReducer;